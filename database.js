const books = [
    {
        ISBN: "12345Book",
        title: "Tesla",
        pubDate: "2021-08-05",
        language: "en",
        numPage: 250,
        author: [1,2],
        category: ["tech","space","education"]
    },

    {
        ISBN: "6789Book",
        title: "SecretBook",
        pubDate: "2021-08-06",
        language: "en",
        numPage: 300,
        author: [1],
        category: ["Development","Fun"]
    }    
]

const author = [
    {
        id: 1,
        name: "Aradhana",
        books: ["12345Book", "SecretBook"]
    },

    {
        id: 2,
        name: "Elon Musk",
        books: ["12345Book"]
    }
]

const publication = [
    {
        id: 1,
        name: "writex",
        books: ["12345Book"]
    },

    {
        id: 2,
        name: "Secret book Publications",
        books: ["SecretBook"]
    }
]

module.exports = {books, author, publication};