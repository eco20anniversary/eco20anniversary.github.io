var comopentime=0;
var comstatus=0;
var comboxisopen=0; //disable combobox



function communboxclose(){
	comboxisopen=0;
	divcombox.hidden=true;
	}


function communboxopen(){
	comboxisopen=1;
comopentime++;


if(comopentime==1){


compic=document.getElementById('compic');
comclick=document.getElementById('comnext');
divcombox=document.getElementById('commun');

compic.src="image/communication/com.jpg";
comclick.src="image/communication/combutton.jpg";

}
divcombox.hidden=false;




}






function comboxnext(){

	musicse.src="music/secommunication2.wav";

	if (existevent=="rubbishbin")
		comevent01Next();
	else
		divcombox.hidden=true;

	}


function comboxdisableyes(){
	document.getElementById('btnleft').disabled=true;
document.getElementById('btnright').disabled=true;
document.getElementById('imgnpc1').disabled=true;
		}

function comboxdisableno(){
	document.getElementById('btnleft').disabled=false;
document.getElementById('btnright').disabled=false;
document.getElementById('imgnpc1').disabled=false;

	}