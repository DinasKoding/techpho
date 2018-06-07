function menujulangittakterbatas(a) {
			document.getElementById("html").className = "animated bounceOutDown";
			document.getElementById("body").style.WebkitTransition = 'background-color 0.4s ease-in';
			document.getElementById("body").style.MozTransition = 'background-color 0.4s ease-in';
			document.getElementById("body").style.Transition = 'background-color 0.4s ease-in';
			setTimeout(function() { document.body.style.backgroundColor = "#90B5C6"; }, 2100);
			setTimeout(function() {
				document.getElementById("body").style.WebkitTransition = 'background-color 0.2s ease-in';
				document.getElementById("body").style.MozTransition = 'background-color 0.2s ease-in';
				document.getElementById("body").style.Transition = 'background-color 0.2s ease-in';
			}, 2500);
			setTimeout(function() { document.body.style.backgroundColor = "#111"; }, 2500);
			setTimeout(function() { window.location.href = a; }, 2800);
		}