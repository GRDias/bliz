$(document).ready(function() {
	//hoverMainMenü
	function hoverMenu(a){
		//mainmenu
		$("."+a+"a").hover(function(){
			$(this).children().eq(1).fadeIn("fast");
		},function(){
			$(this).children().eq(1).fadeOut("fast");
		});		
	}
	hoverMenu("studium");
	hoverMenu("projekte");
	hoverMenu("fachbereich");
	hoverMenu("international");
	
	//makeMenuFixed
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("#wrapper-nav").css({"position":"fixed"});
			$("submenu").css({"position":"fixed","top":"51px"});
		}else{
			$("#wrapper-nav").css({"position":"relative","top":"0"});
			$(".submenu").css({"position":"absolute","top":"51px"});
		}
	});
	
	//addAktive to Navi
	function addActive(s){
		if($("#mininavi a").hasClass(""+s)){
			$("."+s+"a").addClass("active");
		}	
	}
	addActive("studium");
	addActive("projekte");
	addActive("fachbereich");
	addActive("international");
});