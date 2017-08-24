$(document).ready(function(){
	$(".control").height($(window).height() - $(".controlstate").height());
	$("#stopbtn").attr("disabled","disabled");

	$("#startbtn").click(function(){
		$("#startbtn").attr("disabled","disabled");
		$("#stopbtn").removeAttr("disabled");
	});
	$("#stopbtn").click(function(){
		$("#stopbtn").attr("disabled","disabled");
		$("#startbtn").removeAttr("disabled");
	});
})