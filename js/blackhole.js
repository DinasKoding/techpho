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
		  	document.getElementById("sejarah").style.top = "0";
		  	document.getElementById("linimasa").style.top = "0";
		  	document.getElementById("image7").style.top = "130%";
		  	document.getElementById("image8").style.top = "130%";
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
		  	document.getElementById("footerleft").style.left = "44%";
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
		  	document.getElementById("linimasa").style.transform = "scale(0)";
		  	document.getElementById("berita").style.transform = "scale(0)";
		  	document.getElementById("sejarah").style.transform = "scale(0)";
			document.getElementById("kompetisi").style.transform = "scale(0)";
			document.getElementById("linimasa").style.transitionDuration = "3s";
			document.getElementById("berita").style.transitionDuration = "3s";
			document.getElementById("sejarah").style.transitionDuration = "3s";
			document.getElementById("kompetisi").style.transitionDuration = "3s";
		  	document.getElementById("footer").style.transform = "scale(0)";
		  	document.getElementById("footerleft").style.transform = "scale(0)";
		  	document.getElementById("twitter").style.maxHeight = "0";
		  	document.getElementById("instagram").style.maxHeight = "0";
		  	document.getElementById("facebook").style.maxHeight = "0";
		  	document.getElementById("line").style.maxHeight = "0";
		  	document.getElementById("twitter").style.width = "0";
		  	document.getElementById("instagram").style.width = "0";
		  	document.getElementById("facebook").style.width = "0";
		  	document.getElementById("line").style.width = "0";
		  	document.getElementById("shinratensei").play();
		  	setTimeout(function() { document.getElementById("sharingan").style.opacity = "0.55"; }, 500);
		  	setTimeout(function() { document.getElementById("sharingan").style.zIndex = "1000"; }, 500);
		  	setTimeout(function() { document.getElementById("boom").play(); }, 5000);
		  	document.body.style.backgroundColor = "black";

		  	setTimeout(function() {
		  		document.getElementById("logo").innerHTML = '<img id="booom" style="width:40vw; transform: translate(-45%, 1%);" src="images/bang.webp" alt="ledakan kosmik">'; 
		  	}, 3999);
		  	setTimeout(function() { document.getElementById("booom").src = "images/bang.gif" ; }, 4000);

		  	setTimeout(function() { document.getElementById("logo").innerHTML = '';  }, 8110);
		  	setTimeout(function() { location.reload(); }, 8111);
		}
function blackHoleLandscape(){
	document.getElementById("blackHole").style.top = "50%";
		  	document.getElementById("blackHole2").style.top = "50%";
		  	document.getElementById("image1").style.top = "50%";
		  	document.getElementById("awan").style.top = "45%";
		  	document.getElementById("roket").style.top = "50%";
		  	document.getElementById("burung").style.top = "50%";
		  	document.getElementById("judul").style.top = "50%";
		  	document.getElementById("ampera").style.bottom = "55%";
		  	document.getElementById("kapal").style.bottom = "60%";
		  	document.getElementById("footer").style.bottom = "50%";
		  	document.getElementById("footerleft").style.bottom = "50%";
}
function blackHolePortrait(){
	document.getElementById("blackHole").style.top = "13%";
		  	document.getElementById("blackHole2").style.top = "13%";
		  	document.getElementById("image1").style.top = "13%";
		  	document.getElementById("awan").style.top = "13%";
		  	document.getElementById("roket").style.top = "13%";
		  	document.getElementById("burung").style.top = "13%";
		  	document.getElementById("judul").style.top = "13%";
		  	document.getElementById("ampera").style.bottom = "87%";
		  	document.getElementById("kapal").style.bottom = "87%";
		  	document.getElementById("footer").style.bottom = "87%";
		  	document.getElementById("footerleft").style.bottom = "87%";
}

function shinraTensei() {
	document.getElementById("voiceshinratensei").play();
	setTimeout(function() {
		if(isLandscape()){
			blackHoleLandscape();
		}else{
			blackHolePortrait();
		}
		blackHole();
	}, 2100);
}

function prepareEasterEgg() {
	setTimeout(function() { document.getElementById("tombol").style.zIndex = "999"; }, 8500);
}

function isLandscape(){
	var x = document.documentElement.clientWidth;
	var y = document.documentElement.clientHeight;
    if(x>y){
    	return true;
    }else{
    	return false
    }
}

function startAwan(){
	document.getElementById("berita").className += " formenu";
	document.getElementById("sejarah").className += " formenu";
	document.getElementById("kompetisi").className += " formenu";
	document.getElementById("linimasa").className += " formenu";
}

function loadFunction(){
	prepareEasterEgg();
	startAwan();
}