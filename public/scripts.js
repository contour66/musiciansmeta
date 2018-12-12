function onSignIn(googleUser){
	var profile= googleUser.getBasicProfile();
	$(".g-signin2").css("display","none");
	$(".signInMenu").css("display","block");
	$("#user-pic").attr('src',profile.getImageUrl());
	$("#user-email").text(profile.getEmail());
	getUserAuth();
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function(){
		alert("You have been successfully signed out.");
		$(".g-signin2").css("display","block");
		$(".data").css("display","none");
	});
}

function getUserAuth(){
	const {google} = require('googleapis');
	const oauth2Client = new google.auth.OAuth2(
		"927443961030-419spn209eqtat7nem86p5fkcoqbftfb.apps.googleusercontent.com",
		"-qK8Xl8DL3RA6JWxnR4bUCTG",
		"http://localhost:3000/index.html"
	);

	// generate a url that asks permissions for Google+ and Google Calendar scopes
	const scopes = [
		'https://www.googleapis.com/auth/spreadsheets'
	];

	const url = oauth2Client.generateAuthUrl({
	//'online' (default) or 'offline' (gets refresh_token)
		access_type: 'offline',

	// If you only need one scope you can pass it as a string
	scope: scopes
    });
}
