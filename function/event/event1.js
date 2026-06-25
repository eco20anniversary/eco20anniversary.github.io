function event1dbl(){
	if (itembag[1]==""){
	imgbagitem1.src="image/item/catso.png"
	itembag[1]="catso";
	}
	else if (itembag[2]==""){
	imgbagitem2.src="image/item/catso.png"
	itembag[2]="catso";
	}
	else if (itembag[3]==""){
	imgbagitem3.src="image/item/catso.png"
	itembag[3]="catso";
	}
	else if (itembag[4]==""){
	imgbagitem4.src="image/item/catso.png"
	itembag[4]="catso";
	}
	else if (itembag[5]==""){
	imgbagitem5.src="image/item/catso.png"
	itembag[5]="catso";
	}


	}
var pendingClick;
var clicked=0;
var time_dbclick=500;
var existevent="";

function event1(){
	if (comboxisopen==0){
	event1oc('imgnpc1select');
	existevent="rubbishbin";
	comevent01();}

	}











function doubleclickeventexample(){
	event1oc('imgnpc1select');
clicked++;
clearTimeout(pendingClick)
if(clicked>=2){
	event1dbl();
	clicked=0;

	}else{
		pendingClick=setTimeout(()=>{
			clicked=0;
		},time_dbclick);

		}


	}

var existselectstatus="";


	function event1oc(id){
		if(existselectstatus!="")
			document.getElementById(existselectstatus).hidden=true;
		if(id!="")
		document.getElementById(id).hidden=false;


		existselectstatus=id;

		}