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
	
	
	// Zeige skiplinks an
	$("#skiplinks li").focusin(function(){
		$(this).css({"top":"0px"});
	});
	$("#skiplinks li").focusout(function(){
		$(this).css({"top":"-43px"});
	});


	//make Menu Fixed show iconLogo
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("#wrapper-nav").css({"position":"fixed"});
			$(".submenu").css({"position":"fixed","top":"59px"});
			$("#iconLogo").show();
		}else{
			$("#wrapper-nav").css({"position":"relative","top":"0"});
			$(".submenu").css({"position":"absolute","top":"59px"});
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


	//Pfeiltastennutzung in Navigation(ErsterOrdnung) Links/Rechts 
	$("#mainnav .firstlink").focus(function() {
		$("#mainnav .firstlink").keyup(function(e) {
	        if (e.keyCode == 37) 
	        {  
	            $(this).parent().prev().children(".firstlink").focus();
	        }
	        if(e.keyCode==39)
	        {	            
	            $(this).parent().next().children(".firstlink").focus();
	        }
	  	});      
	});
	
	//Infobox
	$("#info img").click(function() {
		$("#infobox").show();
		$("#infobox h1").focus();
	});
	$("#infoclose").click(function() {
		$("#infobox").hide();
		$("#info img").focus();
	});
	
	//Markiert sidebar aktive Seite(Link)
	/*
	var currPage =$("#mininavi span").last().attr('class');
	$(".sidebox li a ."+currPage).attr("id",currPage);
	*/
	
	
});