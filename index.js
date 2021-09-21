const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const database = require("./database");

const booky = express();

booky.use(bodyParser.urlencoded({extended: true}));
booky.use(bodyParser.json());

mongoose.connect("mongodb+srv://Aravinth:hello@shapeai.pfixh.mongodb.net/Booky?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => console.log("Connection Established!"));
  
/* 
ROUTE: is
DESCRIPTION: Get all books
ACCESS: public
PARAMETER: none
METHODS: get
*/

booky.get("/", (req,res) => {
    return res.json({books: database.books});
});

/* 
ROUTE: is
DESCRIPTION: Get specific book with isbn
ACCESS: public
PARAMETER: isbn
METHODS: get
*/

booky.get("/is/:isbn", (req, res) => {
    const specificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if(specificBook.length === 0) {
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
    }

    return res.json({book: specificBook});
});

/* 
ROUTE: t
DESCRIPTION: Get specific book with title
ACCESS: public
PARAMETER: title
METHODS: get
*/

booky.get("/t/:title", (req,res) => {
    const specificBook = database.books.filter(
        (book) => book.title === req.params.title
    );

    if(specificBook.length === 0){
        return res.json({error: `No book found in the title of ${res.params.title}`});
    } 

    return res.json({book: specificBook});
});

/* 
ROUTE: p
DESCRIPTION: Get specific book with publish Date
ACCESS: public
PARAMETER: pubDate
METHODS: get
*/

booky.get("/p/:pubDate", (req, res) => {
    const specificBook = database.books.filter(
        (book) => book.pubDate === req.params.pubDate
    )

    if(specificBook === 0){
        return res.json({error: `No Books found under the publishing date of ${req.params.pubDate}`});
    }

    return res.json({book: specificBook});
});

/* 
ROUTE: n
DESCRIPTION: Get specific book with Number of pages
ACCESS: public
PARAMETER: numPage
METHODS: get
*/

booky.get("/n/:numPage", (req, res) => {
    const specificBook = database.books.filter(
        (book) => book.numPage === parseInt(req.params.numPage)
    )

    if(specificBook === 0){
        return res.json({error: `No Books found with ${req.params.numPage} pages `});
    }

    return res.json({book: specificBook});
});

/* 
ROUTE: a
DESCRIPTION: Get specific book with author id
ACCESS: public
PARAMETER: author
METHODS: get
*/

booky.get("/a/:author", (req, res) => {
    const specificBook = database.books.filter(
        (book) => book.author.includes(parseInt(req.params.author))
    )

    if(specificBook === 0){
        return res.json({error: `No books found under the author id of ${req.params.author}`});
    }

    return res.json({book: specificBook});
});

/* 
ROUTE: c
DESCRIPTION: Get specific book with catagory
ACCESS: public
PARAMETER: category
METHODS: get
*/

booky.get("/c/:category", (req, res) => {
    const specificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )

    if(specificBook.length === 0){
        return res.json({error: `No book found in the category of ${req.params.category}`});
    }

    return res.json({book: specificBook});
});

/* 
ROUTE: l
DESCRIPTION: Get specific book with language
ACCESS: public
PARAMETER: language
METHODS: get
*/

booky.get("/l/:language", (req, res) => {
    const specificBook = database.books.filter(
        (book) => book.language === req.params.language
    )

    if(specificBook.length === 0){
        return res.json({error: `No books found in the language of ${req.params.language}`});
    }

    return res.json({book: specificBook});
});

/* 
ROUTE: auth
DESCRIPTION: Get all authors
ACCESS: public
PARAMETER: none
METHODS: get
*/

booky.get("/auth", (req, res) => {
    return res.json({authors: database.author})
});

/* 
ROUTE: ai
DESCRIPTION: Get author based on id
ACCESS: public
PARAMETER: id
METHODS: get
*/

booky.get("/ai/:id", (req, res) => {
    const specificAuthor = database.author.filter(
        (author) => author.id === parseInt(req.params.id) 
    )

    if(specificAuthor.length === 0){
        return res.json({error: `No authors found in the id of ${req.params.id}`});
    }

    return res.json({author: specificAuthor});
});

/* 
ROUTE: an
DESCRIPTION: Get author based on name
ACCESS: public
PARAMETER: name
METHODS: get
*/

booky.get("/an/:name", (req, res) => {
    const specificAuthor = database.author.filter(
        (author) => author.name === req.params.name
    )

    if(specificAuthor.length === 0){
        return res.json({error: `No authors found in the name ${req.params.name}`});
    }

    return res.json({author: specificAuthor});
});

/* 
ROUTE: ab
DESCRIPTION: Get author based on name
ACCESS: public
PARAMETER: books
METHODS: get
*/

booky.get("/ab/:books", (req, res) => {
    const specificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.books)
    )

    if(specificAuthor.length === 0){
        return res.json({error: `No authors found for the book of ${req.params.books}`});
    }

    return res.json({author: specificAuthor});
});

/* 
ROUTE: publications
DESCRIPTION: Get all publications
ACCESS: public
PARAMETER: none
METHODS: get
*/

booky.get("/publications", (req, res) => {
    return res.json({publication: database.publication})
});

/* 
ROUTE: pi
DESCRIPTION: Get publication based on id
ACCESS: public
PARAMETER: id
METHODS: get
*/

booky.get("/pi/:id", (req, res) => {
    const specificPublication = database.publication.filter(
        (publication) => publication.id === parseInt(req.params.id)
    )

    if(specificPublication.length === 0){
        return res.json({error: `No publications found in the id ${req.params.id}`});
    }

    return res.json({publication: specificPublication});
});

/* 
ROUTE: pn
DESCRIPTION: Get publication based on name
ACCESS: public
PARAMETER: name
METHODS: get
*/

booky.get("/pn/:name", (req, res) => {
    const specificPublication = database.publication.filter(
        (publication) => publication.name === req.params.name
    )

    if(specificPublication.length === 0){
        return res.json({error: `No publications found under the name of ${req.params.name}`});
    }

    return res.json({publication: specificPublication});
});

/* 
ROUTE: pb
DESCRIPTION: Get publication based on books
ACCESS: public
PARAMETER: books
METHODS: get
*/

booky.get("/pb/:books", (req, res) => {
    const specificPublication = database.publication.filter(
        (publication) => publication.books.includes(req.params.books)
    )

    if(specificPublication.length === 0){
        return res.json({error: `No publications found for the book of ${req.params.books}`});
    }

    return res.json({publication: specificPublication});
});

/* 
ROUTE: /book/new
DESCRIPTION: Add new book
ACCESS: public
PARAMETER: none
METHODS: post
*/

booky.post("/book/new",(req,res) => {
    const newBook = req.body;
    database.books.push(newBook);
    return res.json({updatedBooks: database.books});
});

/* 
ROUTE: /auth/new
DESCRIPTION: Add new author
ACCESS: public
PARAMETER: none
METHODS: post
*/

booky.post("/auth/new", (req, res) => {
    const newAuthor = req.body;
    database.author.push(newAuthor);
    return res.json({updatedAauthors: database.author});
});

/* 
ROUTE: /publications/new
DESCRIPTION: Add new publication
ACCESS: public
PARAMETER: none
METHODS: post
*/

booky.post("/publications/new", (req, res) => {
    const newPublication = req.body;
    database.publication.push(newPublication);
    return res.json({updatedPublications: database.publication});
});


booky.listen(3000, () => {
    console.log("Server up and running!");
});
