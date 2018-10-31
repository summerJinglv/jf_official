//滚回顶部按钮
$(window).scroll(function(){
	if ($(window).scrollTop() > 50 ){
	  $("#gotop").fadeIn(300);
	} else {
	  $("#gotop").fadeOut(300);
	};
});
$("#gotop a").click(function(){
	//$(window).scrollTop(0);
	$('html,body').animate({ scrollTop: 0 }, 300); 
});
