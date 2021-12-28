var count=0, counting;

function animateFan()
{
     if(document.getElementById('fan2').style.visibility=="hidden")
         document.getElementById('fan2').style.visibility="visible";
     else
         document.getElementById('fan2').style.visibility="hidden";
}

function initStart()
{
	document.getElementById("mainOn").style.visibility="visible";
	document.getElementById("mainOff").style.visibility="hidden";
	start();
}

function start()
{
	document.getElementById("mon").style.backgroundColor="#FFFF00";
	document.getElementById("fon").style.backgroundColor="#FFFF00";
	document.getElementById("moff").style.backgroundColor="#996600";
	document.getElementById("foff").style.backgroundColor="#996600";
	document.getElementById("arrow").style.visibility="visible";
	document.getElementById("arrow").style.animation="rotate 0.5s linear infinite";
	myInt = setInterval(function(){ animateFan(); }, 100);
	for(i=1;i<=7;i++)
	{
		if(i==1 || i==3 || i==4 || i==6)
		{
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		}
		else
		{	
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
		if(i==1 || i==3 || i==4 || i==5 || i==7)
		{
			document.getElementById("on"+i).style.visibility="visible";
		}
		else
		{
			document.getElementById("on"+i).style.visibility="hidden";
		}
	}
	document.getElementById("on8").style.visibility="hidden";
}

function stopMotor()
{
	document.getElementById("pointer").style.animation="";
	document.getElementById("pointer").style.visibility="hidden";
	clearInterval(counting);
	count=0;
	document.getElementById("accum").innerHTML=count;
	document.getElementById("mainOn").style.visibility="hidden";
	document.getElementById("mainOff").style.visibility="visible";
	counting=setInterval(function()
	{
		count++;
		document.getElementById("accum").innerHTML=count;
		doneCounting(count);
	},500);
	document.getElementById("mainOn").style.visibility="hidden";
	document.getElementById("mainOff").style.visibility="visible";
	document.getElementById("mon").style.backgroundColor="#996600";
	document.getElementById("fon").style.backgroundColor="#FFFF00";
	document.getElementById("moff").style.backgroundColor="#FFFF00";
	document.getElementById("foff").style.backgroundColor="#996600";
	document.getElementById("arrow").style.visibility="visible";
	document.getElementById("arrow").style.animation="rotate 0.5s linear infinite";
	// myInt = setInterval(function(){ animateFan(); }, 100);
	for(i=1;i<=7;i++)
	{
		if(i==2 || i==5 || i==6)
		{
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		}
		else 
		{
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
		
		if(i==2 || i==4 || i==6 || i==7)
		{
			document.getElementById("on"+i).style.visibility="visible";
		}
		else
		{
			document.getElementById("on"+i).style.visibility="hidden";
		}
	}
}

function doneCounting(count)
{
	if(count==21)
	{
		clearInterval(myInt);
		clearInterval(counting);
		count=0;
		document.getElementById("accum").innerHTML=count;
		document.getElementById('fan2').style.visibility="hidden";
		document.getElementById("fon").style.backgroundColor="#996600";
		document.getElementById("foff").style.backgroundColor="#FFFF00";
		document.getElementById("arrow").style.visibility="hidden";
		document.getElementById("arrow").style.animation="";
		for(i=1;i<=7;i++)
		{
			if(i==2 || i==7 )
			{
				document.getElementById("bit"+i).style.backgroundColor="#009900";
			}
			else 
			{
				document.getElementById("bit"+i).style.backgroundColor="#FF0000";
			}
			
			if(i==2)
			{
				document.getElementById("on"+i).style.visibility="visible";
			}
			else
			{
				document.getElementById("on"+i).style.visibility="hidden";
			}
		}
		document.getElementById("on8").style.visibility="visible";
		document.getElementById("mainOff").onclick=function(){initStart()};
	}
	else 
	{
		document.getElementById("mainOff").onclick="";
	}
}

function dispPointer()
{
	setTimeout(function()
	{
		document.getElementById("pointer").style.visibility="visible";
		document.getElementById("pointer").style.animation="point 1s linear infinite";
	},750);
}