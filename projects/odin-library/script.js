const myLibrary = [];

function Book(t, a, p, r) {
    this.title = t;
    this.author = a;
    this.pages = p;
    this.read = r;
    this.info = function() {
        let hold = this.read ? ' have read.' : ' not read yet.';
        return  t + " by " + a + ", " + p + " pages," + hold;
    }
}

myLibrary.push(new Book("Sense and Sensibility", "Jane Austen", "222", false));
myLibrary.push(new Book("Wuthering Heights", "Emily Bronte", "416", true));
myLibrary.push(new Book("Brave New World", "Aldous Huxley", "288", true));
myLibrary.push(new Book("The Catcher in the Rye", "J. D. Salinger", "234", true));
myLibrary.push(new Book("The Hobbit", "J. R. R. Tolkien", "310", true));
myLibrary.push(new Book("Moby Dick", "Herman Melville", "635", true));
myLibrary.push(new Book("Lord of the Flies", "William Golding", "315", false));

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

    myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
    alert("New Book Added!");
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    populate();
}

function sortAlphabetically() {
    myLibrary.sort((a, b) => a.title.localeCompare(b.title));
    populate();
}

function populate() {
    const scrollpane = document.querySelector("#scroll");
    scrollpane.innerHTML = "";

    myLibrary.forEach((book, i) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3 class="title" >${book.title}</h3>
            <p class="author" >Author: ${book.author}</p>
            <p class="pages" >Pages: ${book.pages}</p>
            <p class="read" >${book.read ? 'Have Read' : 'Not Read Yet'}</p>
            <p class="info" >${book.info()}</p>
            <div class="card-buttons"> 
                <button onclick="removeBook(${i})">Remove</button> 
                <button onclick="changeReadStatus(${i})">Change Read Status</button> 
            </div>
        `;
        scrollpane.appendChild(card);
    });
}

function changeReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    populate();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    populate();
}

populate();     // First population of the current library
show();         // Activate show function so it works correctly on first btn click