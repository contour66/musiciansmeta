function onSignIn(googleUser){
	var profile= googleUser.getBasicProfile();
	$(".g-signin2").css("display","none");
	$(".user-data").css("display","block");
	$("#user-pic").attr('src',profile.getImageUrl());
	$("#email").text(profile.getEmail());
}