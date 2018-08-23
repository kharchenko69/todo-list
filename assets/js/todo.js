// Check off Specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText +"</li>");

	}
});


$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})