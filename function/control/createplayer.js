function createplayer(){


	musicse.play();
	document.getElementById('divcreateplayer').hidden="true";
	musicbg.pause;
	musicbg.src="music/bgm_1080.mp3";
	musicbg.play;
		}

var sex="f";
var race="1";

function SelectLeft(){



if ((document.getElementById('txtcreateplayerrace').value)==="埃米爾"){
	document.getElementById('txtcreateplayerrace').value="道米尼";
	race="3";
	}
else if ((document.getElementById('txtcreateplayerrace').value)==="塔尼亞"){
	document.getElementById('txtcreateplayerrace').value="埃米爾";
	race="1";
	}
else if ((document.getElementById('txtcreateplayerrace').value)==="道米尼"){
	document.getElementById('txtcreateplayerrace').value="塔尼亞";
	race="2";
	}

	document.getElementById('imgcharstay').src="image/player/"+race+sex+".gif";
	}



	function SelectRight(){

	if ((document.getElementById('txtcreateplayerrace').value)==="埃米爾"){
		document.getElementById('txtcreateplayerrace').value="塔尼亞";
		race="2";
		}
	else if ((document.getElementById('txtcreateplayerrace').value)==="塔尼亞"){
		document.getElementById('txtcreateplayerrace').value="道米尼";
		race="3";
		}
	else if ((document.getElementById('txtcreateplayerrace').value)==="道米尼"){
		document.getElementById('txtcreateplayerrace').value="埃米爾";
		race="1";
		}
	document.getElementById('imgcharstay').src="image/player/"+race+sex+".gif";

	}

	function SelectLeftSex(){
		if ((document.getElementById('txtcreateplayersex').value)==="女"){
			document.getElementById('txtcreateplayersex').value="男";
			sex="m";
			}
		else{
			document.getElementById('txtcreateplayersex').value="女";
			sex="f";
			}
			document.getElementById('imgcharstay').src="image/player/"+race+sex+".gif";

		}
	function SelectRightSex(){
			if ((document.getElementById('txtcreateplayersex').value)==="女"){
					document.getElementById('txtcreateplayersex').value="男";
					sex="m";
					}
				else{
					document.getElementById('txtcreateplayersex').value="女";
					sex="f";
					}
					document.getElementById('imgcharstay').src="image/player/"+race+sex+".gif";



		}