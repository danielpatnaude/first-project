document.addEventListener("DOMContentLoaded", function(event) { 
	var myButton = document.getElementById('foobar');

	console.log('element is: ', myButton)

	myButton.addEventListener("click", function() { 
		alert("Hello World!"); 
	});  
});


