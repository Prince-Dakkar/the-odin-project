class Library {
    constructor() { this.collection = []; }

    addBook(book) {
        this.collection.push(book);
    }

    removeBook(index) {
        this.collection.splice(index, 1);
        this.populate();
    }

    changeReadStatus(index) {
        this.collection[index].read = !this.collection[index].read;
        this.populate();
    }

    addBookFromForm() {
        const title = document.querySelector("#title");
        const author = document.querySelector("#author");
        const pages = document.querySelector("#pages");
        const read = document.querySelector("#read");
        this.collection.push(new Book(title.value, author.value, pages.value, read.checked));
        alert("New Book Added!");
        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false;
        this.populate();
    }

    sortAlphabetically() {
        this.collection.sort((a, b) => a.title.localeCompare(b.title));
        this.populate();
    }

    populate() {
        const scrollpane = document.querySelector("#scroll");
        scrollpane.innerHTML = "";
        library.collection.forEach((book, i) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3 class="title" >${book.title}</h3>
                <p class="author" >Author: ${book.author}</p>
                <p class="pages" >Pages: ${book.pages}</p>
                <p class="read" >${book.read ? 'Have Read' : 'Not Read Yet'}</p>
                <p class="info" >${book.info()}</p>
                <div class="card-buttons"> 
                    <button onclick="library.removeBook(${i})">Remove</button> 
                    <button onclick="library.changeReadStatus(${i})">Change Read Status</button> 
                </div>
            `;
            scrollpane.appendChild(card);
        });
    }
}

class Book {
    constructor(t, a, p, r) {
        this.title = t;
        this.author = a;
        this.pages = p;
        this.read = r;
    }
    info() {
        let hold = this.read ? ' have read.' : ' not read yet.';
        return  this.t + " by " + this.a + ", " + this.p + " pages," + hold;
    }
}

const library = new Library();
library.addBook(new Book("Sense and Sensibility", "Jane Austen", "222", false));
library.addBook(new Book("Wuthering Heights", "Emily Bronte", "416", true));
library.addBook(new Book("Brave New World", "Aldous Huxley", "288", true));
library.addBook(new Book("The Catcher in the Rye", "J. D. Salinger", "234", true));
library.addBook(new Book("The Hobbit", "J. R. R. Tolkien", "310", true));
library.addBook(new Book("Moby Dick", "Herman Melville", "635", true));
library.addBook(new Book("Lord of the Flies", "William Golding", "315", false));
library.populate();     // First population of the current library    

// Activate show function so it works correctly on first btn click
function show() {
    let x = document.querySelector("#form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

show();

