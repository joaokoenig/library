let myLibrary = [];

function Book (author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

}

function displayLibrary (){

}

let addNewBook = document.querySelector("#addNewBook");

addNewBook.addEventListener("click", function(){
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";  
})