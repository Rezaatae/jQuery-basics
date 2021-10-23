$("h1").click(function(){
    $(this).text("I was changed!")
})


$("li").click(function(){
    console.log("Any li was clicked")
})



$("input").eq(0).keypress(function(event){
    if(event.which === 13){
        $("h3").toggleClass("turnRed")
    }else{
        $("h3").toggleClass("turnBlue")

    }
    
})


$("h1").on("mouseover", function(){
    $("h1").toggleClass("turnRed")
})

$("input").eq(1).on("click", function(){
    $(".container").fadeOut(3000)
})
