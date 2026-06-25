
comlabel=document.getElementById('comlabel');
var rubbishbincount=0;
var rubbishbintresure=Math.floor(Math.random()*8)+2;

function comevent01(){
	comboxisopen=1;
	rubbishbincount++;
	comboxdisableyes();
	if (rubbishbincount==1){
		musicse.src="music/secommunication2.wav";
		comlabel.innerHTML="<b style='color:white'></br>喵!</b>";
		musicse.play();}
	else if (rubbishbincount==rubbishbintresure){
		comlabel.innerHTML="<b style='color:white'>ok</b>";
		event1dbl();
		comlabel.innerHTML="<b style='color:white'>得到不物體的鬍鬚!</b>";

		musicse.src="music/se_2040.wav";
		musicse.play();
		}
	else{
		musicse.src="music/secommunication2.wav";
		comlabel.innerHTML="<b style='color:white'>垃圾筒維修中!!!</b>";
		musicse.play();}

		comstatus=1;
		communboxopen();

	}



	function comevent01Next(){

		if ((comstatus==1)&&(rubbishbincount!=1)&&(rubbishbincount!=rubbishbintresure)){
			comstatus=2;
			comlabel.innerHTML="<b style='color:white'>不要再丟東西入來</b>";
			musicse.play();
			}
		else if(comstatus==2){
			communboxclose();
			musicse.play();
			comboxdisableno();

			}
		else{
			communboxclose();
			musicse.play();
			comboxdisableno();

			}

		}//EndNext
