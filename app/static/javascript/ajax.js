// onSucess is a callback that should expect one argument, the string containing the contents of the file retrieved with the ajax call
function ajaxGet(url, onSuccess) {
    var xhttp = new XMLHttpRequest();

    if(!xhttp) {
	alert("Canot create XMLHTTP instance");
    }

    xhttp.onreadystatechange = print_response;
    xhttp.open('GET', url, true);
    xhttp.send();

    function print_response() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
	    onSuccess(xhttp.responseText);
	}
    }
}

document.addEventListener("DOMContentLoaded", function() {

    var submit_button = document.getElementById("submit_button")
    addEventListener('click', function() {
	ajaxGet('/create_entry', onSuccess)
    });

    /* var MoreStatusesLink = document.getElementById("MoreStatuses");

    MoreStatusesLink.addEventListener('click', function() {
	setTimeout(function () {
	    ajaxGet('/statuses-1.html', onSuccess);
	}, 2000);
	document.body.style.cursor = "wait";
	MoreStatusesLink.disabled = true;
	MoreStatusesLink.style.backgroundColor = "lightgray"
    }); */


    function onSuccess(response) {

	console.log("test")
	console.log(response);

	/* document.getElementById("extra_statuses").innerHTML = response;
	MoreStatusesLink.disabled = false;
	MoreStatusesLink.style.backgroundColor = "#a4d79a";
	document.body.style.cursor = "default";

	var additional_replies = document.querySelectorAll(".additional_replyLink");
	var additional_replyForms = document.querySelectorAll(".additional_replyForm")

	function showAdditionalReplyForm() {
	    var additional_postnumber = this.getAttribute("data-additionalpostlink");
	    additional_replyform = document.getElementById(additional_postnumber);
	    additional_replyform.toggle();
	}

	for (var i = 0; i < additional_replies.length; i++) {
	    additional_replies[i].addEventListener("click", showAdditionalReplyForm);
	} */
    }

})
