(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var me = {
         firstName: "Sergio",
         lastName: "Davila",
        sayHello: function () {
             console.log("Hello from " + this.firstName + " " + this.lastName + "!")
        }
    }
    console.log(me.firstName);
    console.log(me.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(me.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person , the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log(shoppers);

    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            console.log("Hello " + shopper.name + ", " + "this is what you paid originally: $" + shopper.amount + ", and now this is your total after the discount (if you met the requirements) $" + (shopper.amount - (shopper.amount * .12)));
        } else {
            console.log("Hello " + shopper.name + ", " + "this is what you paid: $" + shopper.amount + ", it unfortunately did not meet the requirement to qualify for the discount. sucks2suck.");
    }
});
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "The Giver", author: {firstName: "Lois", lastName: "Lowry"}},
        {title: "Harry Potter", author: {firstName: "J.K.", lastName: "Rowling"}},
        {title: "Hunger Games", author: {firstName: "Suzanne", lastName: "Collins"}},
        {title: "Hitchhiker's Guide to the Galaxy", author: {firstName: "Douglas", lastName: "Adams"}},
        {title: "The Giving Tree", author: {firstName: "Shel", lastName: "Silverstein"}}
    ]
    console.log(books);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book, index) {
        console.log("Book # " + (books.indexOf(book) + 1) + "\n Title: " + book.title + "\n Author: " + book.author.firstName + " " + book.author.lastName + "\n ---")
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // initial attempt before walk through below vvvvv

    // function createBook(title, author) {
    //     var bookObjects = {title: title, author: author}
    //     for (var i = 0; i < books.length; i++) {
    //         return
    //     }
    // }

        function createBook(title, authorFirst, authorLast) {
            var newBook = {
                title: title,
                author: {
                    authorFirst,
                    authorLast
                }
            }
            return newBook;
    }
    console.log(createBook("unga bunga", "Alex", "Davila"))

    var books2 = [
        createBook("The Giver", "Lois", "Lowry"),
        createBook("The oooop", "Joe", "Deer"),
        createBook("Hello there bro", "Jane", "Deerey")
    ]

    function showBookInfo(object, bookNumber) {
        console.log("Book # " + (bookNumber + 1) + "\n Title: " + object.title + "\n Author: " + object.author.firstName + " " + object.author.lastName + "\n ---")
    }

    books2.forEach(function(book, index){
        showBookInfo(book, index);
    })
}());