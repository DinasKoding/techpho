function setDefault(a){
			document.getElementById(a).style.boxShadow = "inset 0 0 0 2px #424446";
			document.getElementById(a).style.color = "#3a3a3a";
		}
		window.onload = setTimeout(function () {
			setDefault("twitter");
			setDefault("instagram");
			setDefault("facebook");
			setDefault("line");
		}, 4000);
		function setHover(id, warna){
			document.getElementById(id).style.boxShadow = "inset 0 0 0 30px #424446";
			document.getElementById(id).style.color = warna;
		}