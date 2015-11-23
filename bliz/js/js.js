$(document).ready(function() {
	//hoverMainMenü
	function hoverMenu(a){
		//mainmenu
		$("."+a+"a").hover(function(){
			$(this).children().eq(1).fadeIn("fast");
		},function(){
			$(this).children().eq(1).fadeOut("fast");
		});
		//MadeWithTabulator ;)
		$("."+a+"a").focusin(function(){
			$(this).children().eq(1).fadeIn(10);
		});
		$("."+a+"a").focusout(function(){
			$(this).children().eq(1).fadeOut(10);
		});
	}
	hoverMenu("studium");
	hoverMenu("projekte");
	hoverMenu("fachbereich");
	hoverMenu("international");
	
	$("#skiplinks li").focusin(function(){
		$(this).css({"top":"0px"});
		alert("hallo");
		//alert("this");
	});
	$("#skiplinks li").focusout(function(){
		$(this).anminate({top:"-43px"});
		//alert("this");
	});

	//make Menu Fixed show iconLogo
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("#wrapper-nav").css({"position":"fixed"});
			$(".submenu").css({"position":"fixed","top":"51px"});
			$("#iconLogo").show();
		}else{
			$("#wrapper-nav").css({"position":"relative","top":"0"});
			$(".submenu").css({"position":"absolute","top":"51px"});
			$("#iconLogo").hide();
		}
	});
	
	//add "Aktive" to Navi (backgroundcolor=green)
	function addActive(s){
		if($("#mininavi a").hasClass(""+s)){
			$("."+s+"a").addClass("active");
		}	
	}
	addActive("studium");
	addActive("projekte");
	addActive("fachbereich");
	addActive("international");
	
	//ScrollTo Top
	$("#scroll_top").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 1000);
});

});