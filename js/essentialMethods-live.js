// attributes and css things to cover:

//introductory vocab: getters && setters, method chaining
//.html() - GET the HTML contents or SET the HTML contents

//TODO: Let's get the HTML from the element with the ID of "best-seller-cont"

console.log($('#best-seller-cont').html());

//TODO together: Let's set up a string with HTML to replace this old list with our updated best sellers - FEDORAS have moved into the number one spot!

var html = '';

html = '<h4 class="best-seller-header">Our Top Sellers</h4>' +
    '<ol><li class="hat-sold">Fedora Hats</li>' +
    '<li class="hat-sold">Baseball Hats</li>' +
    '<li class="hat-sold">Cowboy Hats</li></ol>';

//TODO: Now, let's get back into that "best-seller-cont" and replace that HTML!

$('#best-seller-cont').html(html); // SETTING some html

//TODO Together: Can we make a click event that changes "Howell's" to "Marco's" when we click on it? Help me out!

$('.navbar-brand').click(function () {
    $(this).html("Marco's <i class=\"bi-shop mx-1\"></i>");
});

// Using 'e' as a parameter as well as using it in e.target below
// $('.navbar-brand').click(function (e) {
//     $(e.target).html("Marco's <i class=\"bi-shop mx-1\"></i>");
// });

//.css() - get info about a property or change a property

//TODO: Let's see what the width of our "main-content" class is with .css()

console.log($('.main-content').css('width'));

//TODO Together: Can you help me? I'd like to set my modal's text to have a cool color :)

$('.modal-body').css('backgroundColor', 'lavender'); // setting some CSS (note: two arguments - a. our property and b. our value.

//TODO: Let's make an object for us to use with .css(). .

var warningRed = {'backgroundColor':'cornflowerblue', 'font-size':'72px'};

//TODO Together: Nice - now, let's test this out by targeting our h1 with this warning background! Next, let's chain a font color after it

$('h1').css(warningRed).css('color', 'lavender');

//.addClass() ~ .removeClass() ~ .toggleClass()

//TODO: We've used a lot of bootstrap on the page - let's see what we can use .addClass to do in combination with bootstrap. Let's UPPERCASE that h1 with the shiny red background!

$('h1').addClass('text-uppercase');

//TODO Together: Can you assist me in removing the "bg-dark" background from our FOOTER?

$('footer').removeClass('bg-dark');

//TODO: I have a custom css class known as hi-lite - .toggleClass() with a .click() would be a neat way to use it

$('*').click(function (e) {
    e.preventDefault();
    var ele = $(e.target);
    ele.toggleClass('hi-lite');
});

//Bonus activity:

//TODO: Create a variable to store HTML - use jQuery to get the entire nav element's inner HTML. Console.log your variable to confirm the contents.

var newHtml = '';

newHtml = $('nav').html();

//console.log(newHtml);

//TODO: Remove the class of bg-dark and navbar-dark from the <nav> with jQuery.

//$('nav').removeClass('bg-dark navbar-dark');

//TODO: Add the class of navbar-light and bg-info from the <nav> with jQuery.

//$('nav').addClass('navbar-light bg-info');

//TODO: Finally, create the following - add your own button somewhere on the navbar. Add an event that will toggle the navbar between bg-dark/navbar-dark and bg-info/navbar-light respectively

$('#colorschemeBtn').click(function (e) {
    $('nav').toggleClass('bg-dark navbar-dark navbar-light bg-info');
});

//TODO: Create your own object with multiple CSS properties you'd like to change. Change whatever element(s) you had in mind with your CSS object and .css()!

var objectCss = {'color':'lavender', 'font-size':'40px', 'backgroundColor':'limegreen'};

$('#special-offers').dblclick(function (e) {
    $(this).css(objectCss);
});

//traversing

//.each() - iterate over each matched element to do some stuff
//TODO: Let's change the last two lis of the class .hat-sold to "Baseball hats" as well

$('.hat-sold').each(function (index, ele) { //iterate over matched elements
   if (index !== 0) {
       $(ele).html('Fedora hats'); // set html to value
   }
});

//.first()
//TODO: Let's change the first list item in the class of .hat-sold from "Baseball hats" to "Porkpie hats"

$('.hat-sold').first().html('Porkpie hats');

//.last()
//TODO Together: Let's change the last li in the class of .hat-sold to be Fancy hats - italicized! ! !

$('.hat-sold').last().html('<em>Fancy Cat Hats, meow!</em>'); // OOPS - deid we just method chain???? WE DID!

//Different way of doing same thing on line 121
//$('.hat-sold').last().css('font-style', 'italic');

//.parent()
//TODO: Let's pop up the tree to the parent (<ol>) and use .css to change the list-style-type

$('.hat-sold').parent().css('list-style-type', 'upper-roman');

//.children()
//TODO Together: What ID would I need to target to see all of the HTML, as children, that we've been manipulating so far?

console.log($('#best-seller-cont').children());

//.next()
//TODO: Let's slide across branches (sibling to sibling) on our tree and change the HTML within the ordered list we find there to only show Top Hats! !

$('.best-seller-header').next().html('<li>Top Hats</li>' +
    '<li>Top Hats</li>' +
    '<li>Top Hats</li>');


console.log($('.best-seller-header'));