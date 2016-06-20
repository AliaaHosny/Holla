$(window).load(function(){
	
	$(".loading-overlay .sk-cube-grid").fadeOut(2500,
		function(){
			$(this).parent().fadeOut(2500,
				function(){
					$("body").css("overflow","auto");
					$(this).remove();
				})
		});
});
//scroll
$(window).scroll(function(){
console.log($(this).scrollTop());
if ($(this).scrollTop() >=679) {
	$(".jumbotron .navbar-default").css("background","#f84242");
}
else{
	$(".jumbotron .navbar-default").css("background","transparent");
}
});
//up scroll
var scrollButton=$("#scroll-top");
$(window).scroll(function(){
if ($(this).scrollTop() >= 1560) {
	scrollButton.show();
}
else
{
	scrollButton.hide();
}
scrollButton.click(function(){
	$("html,body").animate({scrollTop:0},600);
})
});