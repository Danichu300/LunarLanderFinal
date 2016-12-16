var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer;
var fueltimer;
var fuel=100;
var alturaMaxima=70;

window.onload = function(){
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//Empezar a mover nave
	start();

	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	document.onclick = function(){
		if (a==g){
			motorOn();
		}else{
			motorOff();
		}
	}
}


function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	//if(a = -g && fuel = 0){ a = g;}
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v;
	y +=v*dt;
	document.getElementById("altura").innerHTML=alturaMaxima-y;
	document.getElementById("fuel").innerHTML=fuel;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<=alturaMaxima){ 
		document.getElementById("nave").style.top = y+"%"; 
	}/*else { 
			if(fuel<0 || v>=3 || y<=0 ){
		 
		document.getElementById('nave').src = "..\img\explosion.gif";
			alert("Has Perdido");}
		
	} */else { 
		stop();
		
	}
}

function motorOn(){
	if(fueltimer==null)
		fueltimer=setInterval(function(){ restarFuel(); }, 100);
	a=-g;
	//document.getElementById('nave').src = "../img/rocket1.png"";
}

function motorOff(){
	clearInterval(fueltimer);
	fueltimer=null;
	a=g;
}
function restarFuel(){
	fuel -=1;
}
function detectarFuel(){
	if(fuel<1){
	x=true;
	}
}
