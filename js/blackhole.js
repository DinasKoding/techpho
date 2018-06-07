function blackHole() {
		  	document.getElementById("logo").style.width = "5%";
		  	document.getElementById("blackHole").style.width = "0";
		  	document.getElementById("blackHole2").style.width = "0";
		  	document.getElementById("image1").style.width = "0";
		  	document.getElementById("awan").style.width = "0";
		  	document.getElementById("roket").style.width = "0";
		  	document.getElementById("burung").style.width = "0";
		  	document.getElementById("ampera").style.width = "0";
		  	document.getElementById("kapal").style.width = "0";
		  	document.getElementById("image7").style.width = "0";
		  	document.getElementById("image8").style.width = "0";
		  	document.getElementById("judul").style.width = "0";
		  	document.getElementById("footer").style.width = "0";
		  	// document.getElementById("footerleft").style.width = "0";
		  	document.getElementById("idcloudhost").style.width = "0";
		  	document.getElementById("blackHole").style.top = "50%";
		  	document.getElementById("blackHole2").style.top = "50%";
		  	document.getElementById("image1").style.top = "50%";
		  	document.getElementById("awan").style.top = "50%";
		  	document.getElementById("roket").style.top = "50%";
		  	document.getElementById("burung").style.top = "50%";
		  	document.getElementById("ampera").style.top = "50%";
		  	document.getElementById("kapal").style.top = "50%";
		  	document.getElementById("image7").style.top = "130%";
		  	document.getElementById("image8").style.top = "130%";
		  	document.getElementById("judul").style.top = "50%";
		  	document.getElementById("duo").style.top = "0";
		  	document.getElementById("duos").style.top = "0";
		  	document.getElementById("footer").style.bottom = "50%";
		  	document.getElementById("footerleft").style.bottom = "50%";
		  	document.getElementById("blackHole").style.left = "50%";
		  	document.getElementById("blackHole2").style.left = "50%";
		  	document.getElementById("image1").style.left = "50%";
		  	document.getElementById("awan").style.left = "50%";
		  	document.getElementById("roket").style.right = "50%";
		  	document.getElementById("burung").style.left = "50%";
		  	document.getElementById("ampera").style.left = "50%";
		  	document.getElementById("kapal").style.left = "50%";
		  	document.getElementById("judul").style.left = "50%";
		  	document.getElementById("footer").style.right = "50%";
		  	document.getElementById("footerleft").style.left = "50%";
		  	// document.getElementById("image7").style.left = "50%";
		  	// document.getElementById("image8").style.left = "50%";
		  	document.getElementById("blackHole").style.maxHeight = "0";
		  	document.getElementById("blackHole2").style.maxHeight = "0";
		  	document.getElementById("image1").style.maxHeight = "0";
		  	document.getElementById("awan").style.maxHeight = "0";
		  	document.getElementById("roket").style.maxHeight = "0";
		  	document.getElementById("burung").style.maxHeight = "0";
		  	document.getElementById("ampera").style.maxHeight = "0";
		  	document.getElementById("kapal").style.maxHeight = "0";
		  	document.getElementById("image7").style.maxHeight = "0";
		  	document.getElementById("image8").style.maxHeight = "0";
		  	document.getElementById("judul").style.maxHeight = "0";
		  	document.getElementById("idcloudhost").style.maxHeight = "0";
		  	document.getElementById("blackHole").style.fontSize = "0";
		  	document.getElementById("blackHole2").style.fontSize = "0";
		  	document.getElementById("footer").style.fontSize = "0";
		  	document.getElementById("footerleft").style.fontSize = "0";
		  	document.getElementById("twitter").style.maxHeight = "0";
		  	document.getElementById("instagram").style.maxHeight = "0";
		  	document.getElementById("facebook").style.maxHeight = "0";
		  	document.getElementById("line").style.maxHeight = "0";
		  	document.getElementById("twitter").style.width = "0";
		  	document.getElementById("instagram").style.width = "0";
		  	document.getElementById("facebook").style.width = "0";
		  	document.getElementById("line").style.width = "0";
		  	// document.getElementById("judul").src = '';
		  	// document.getElementById("kapal").src = '';
		  	document.getElementById("shinratensei").play();
		  	setTimeout(function() { document.getElementById("sharingan").style.opacity = "0.55"; }, 500);
		  	setTimeout(function() { document.getElementById("sharingan").style.zIndex = "1000"; }, 500);
		  	setTimeout(function() { document.getElementById("boom").play(); }, 5000);
		  	document.body.style.backgroundColor = "black";

		  	setTimeout(function() {
		  		document.getElementById("logo").innerHTML = '<img id="booom" style="width:40vw; transform: translate(-45%, 1%);" src="images/bang.webp" alt="ledakan kosmik">'; 
		  	}, 3999);
		  	setTimeout(function() { document.getElementById("booom").src = "images/bang.webp" ; }, 4000);

		  	setTimeout(function() { document.getElementById("logo").innerHTML = '';  }, 8110);
		  	setTimeout(function() { location.reload(); }, 8111);
		}

function shinraTensei() {
	document.getElementById("voiceshinratensei").play();
	setTimeout(function() { blackHole(); }, 2100);
}

setTimeout(function holdEasterEgg() { document.getElementById("tombol").style.zIndex = "999"; }, 10000);