const email = document.querySelector("#email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementsByClassName("form-control")[2];

// email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//Form validation process
const checkEmail = () => {
	let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value == "") {
		email.style.border = "2px solid red";
		alert("Email cannot be empty");
	}
	if (email.value.match(emailExp)) {
		firstName.focus();
	} else {
		email.style.border = "2px solid red";
		email.focus();
	}
};
