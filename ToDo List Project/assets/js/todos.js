/*Check off todo by clicking
$("li").click(function(){
    if ($(this).css("color") == "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
}
});
*/


$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});


//click x to delete to do item
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


//create new to do
$("input[type='text']").keypress(function(event) {
    if(event.which == 13) {
        var newTodoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newTodoText+"</li>");
        $(this).val('');
    }

});


$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
})