
const myLibrary = [];

function Book(t, a, p, r) {
    this.title = t;
    this.author = a;
    this.pages = p;
    this.read = r;

    this.info = function() {
        let hold;
        if (this.read) {
            hold = " have read."
        } else {
            hold = " not read yet."
        }
        return  t + " by " + a + ", " + p + " pages," + hold;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
t = new Book("Sense and Sensibility", "Jane Austen", "222", false);
addBookToLibrary(t);
u = new Book("Wuthering Heights", "Emily Bronte", "416", true);
addBookToLibrary(u);
v = new Book("Brave New World", "Aldous Huxley", "288", true);
addBookToLibrary(v);

w = new Book("The Catcher in the Rye", "J. D. Salinger", "234", true);
addBookToLibrary(w);
x = new Book("The Hobbit", "J. R. R. Tolkien", "310", true);
addBookToLibrary(x);
y = new Book("Moby Dick", "Herman Melville", "635", true);
addBookToLibrary(y);
z = new Book("Lord of the Flies", "William Golding", "315", false);
addBookToLibrary(z);
console.log(myLibrary.length);


function show() {
    let x = document.querySelector("#form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function formAddBookToLibrary() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    x = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(x);
    alert("New Book Added!");
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    populate();
}

function populate() {
    const page = document.querySelector("#page");
    let scrollpane = document.querySelector("#scroll");
    page.removeChild(scrollpane);
    scrollpane = document.createElement("div");
    scrollpane.id = "scroll";
    page.appendChild(scrollpane);
    
    for (let i = 0; i < myLibrary.length; i++) {

        // Create the card
        const card = document.createElement("div");
        // card.style.width = "300px";
        // card.style.height = "300px";
        card.style.margin = "10px";
        card.style.padding = "20px";
        card.style.border = "1px solid black";
        card.style.borderRadius = "10px";
        card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.7)";
        card.style.overflow = "hidden";
    
        // Get the values from the database data
        const bN = myLibrary[i].title;
        const auth = myLibrary[i].author;
        const pgs = myLibrary[i].pages;
        const r = myLibrary[i].read;
        const msg = myLibrary[i].info() ;
    
        // Create the card contents
        const bookName = document.createElement("h3");
        bookName.textContent = bN;
        bookName.style.marginTop = "0px";
    
        const author = document.createElement("p");
        author.textContent = "Author: " + auth;
        
        const pages = document.createElement("p");
        pages.textContent = "Pages: " + pgs;
        
        const read = document.createElement("p");
        read.textContent = "Read? " + r;

        const bookInfo = document.createElement("p");
        bookInfo.textContent = "Info: " + msg;
    
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.style.marginLeft = "10px";

        const change_read = document.createElement("button");
        change_read.textContent = "Change Read Status";
        change_read.style.marginLeft = "10px";
    
    
        remove.addEventListener('click', async _ => {
            console.log("I want to remove this book.")
            myLibrary.splice(i, 1);
            scrollpane.removeChild(card);
        });

        // Add the contents to the card
        card.appendChild(bookName);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(bookInfo);
        card.appendChild(remove);
        card.appendChild(change_read);

        change_read.addEventListener('click', async _ => {
            console.log("I want to change this book's read status")
            console.log(myLibrary[i].read);
            myLibrary[i].read = !myLibrary[i].read;
            read.textContent = "Read? " + myLibrary[i].read;
            bookInfo.textContent = "Info: " + myLibrary[i].info();
            console.log(myLibrary[i].read);

        });
    
        // Add the card to the scroll pane
        scrollpane.appendChild(card);
    }

}

populate();