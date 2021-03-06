$(document).ready(function () {
    console.log("fully loaded and ready to go!")

    //example with outside function
    function h1Click() {
        // console.log(e);
        $(this).css('background', 'limegreen');
    }

    $('h1').click(h1Click);

    //example with inside function
    $('p').dblclick(function(e) {
        console.log(e);
        $(e.target).css('font-size', '18px');
    });

    //example with multiple functions using BOTH outside and inside
    function hovering(e) {
        console.log('enter');
        $(e.target).css('color', 'red');
    }

    $('li').hover(hovering, function() {
        console.log('leave');
        $(this).css('color', 'black');
    });

    //SELECTOR EXERCISE BELOW THIS POINT
    // ID selectors below

    // alert($('#text-top').html());
    // alert($('#uno').html());

    // Class selectors below
    //$('.codeup').css({'border':'1px solid red'});

    // Element selectors(exercise) below
    //$('li').css({'font-size':'20px', 'color':'green'});

    //$('h1').css({'color':'red'});

    //alert($('h1').html());

    //$('p').css({'color':'blue'});

    // Multiple Selectors below

    //$('h1, p, li').css({'backgroundColor':'yellow'})


    // Element selectors examples presentation below vvv
    // $('p').css({'font-size':'30px', 'backgroundColor':'purple', 'color' : 'fuchsia'});
    // $('li').css({'font-size':'70px', 'color':'rebeccapurple'});
    // $('h1').css('color', 'blue');
    // $('div').css({'background-color':'lavender', 'font-size':'50px', 'color':'red'});
    // $('body').css('background-color', 'lightgrey');
    // $('div').html('New text inside of my div tag, courtesy of jquery!');
    // $('p').html('This is brand new text in my p tag, cus jquery replaced it!');

    // all selector example below
    // $('*').css({'font-style':'italic', 'font-family':'sans-serif'});

    // this ones neat, courtesy of Victor
    // $("*").keyup(function(){
    //     $('*').hide()
    // })
    // $('*').click(function(){
    //     $('*').show()
    // })
});





console.log("hello jQuery!");