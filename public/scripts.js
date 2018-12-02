function onSignIn(googleUser){
	var profile= googleUser.getBasicProfile();
	$(".g-signin2").css("display","none");
	$(".signInMenu").css("display","block");
	$("#user-pic").attr('src',profile.getImageUrl());
	$("#user-email").text(profile.getEmail());
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function(){
		alert("You have been successfully signed out.");
		$(".g-signin2").css("display","block");
		$(".data").css("display","none");
	});
}