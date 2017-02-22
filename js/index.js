"use strict";
// JavaScript Document

var section_one_setheight=function(){

var section_one=document.getElementsByClassName("section-one");
var window_height=document.documentElement.clientHeight ;
section_one[0].style.height=window_height+'px';
};

var section_one_title_settop=function(){
	var window_height=document.documentElement.clientHeight;
	var top=(window_height-131)/2;
	
	document.getElementsByClassName("section-one-title")[0].style.top=top+"px";
	};
	
//图片翻转代码
	var a=function()
		{document.getElementsByClassName("section-two-pic-img1")[0].setAttribute("class","section-two-pic-img1 img-front");document.getElementsByClassName("section-two-pic-img2")[0].setAttribute("class","section-two-pic-img2 img-back");
		
		
		};
		var b=function(){
			document.getElementsByClassName("section-two-pic-img1")[0].setAttribute("class","section-two-pic-img1 img-back");document.getElementsByClassName("section-two-pic-img2")[0].setAttribute("class","section-two-pic-img2 img-front");
			
			};
	var c=function(){
		setTimeout(a(),2000);
		
		
		};
 var d=function()
 {setTimeout(b(),4000);
	 };
//图片翻转代码结束
 //intro列表显示代码
var set_intro_show=function(){
	var a=document.getElementsByClassName("section-two-intro-left");
	var b=a[0].getElementsByTagName("li");
	setTimeout(function(){b[0].style.right=0;b[0].style.opacity=1;  },500);
	setTimeout(function(){b[1].style.right=0;b[1].style.opacity=1;  },1000);
	setTimeout(function(){b[2].style.right=0;b[2].style.opacity=1;  },1500);
	setTimeout(function(){b[3].style.right=0;b[3].style.opacity=1;  },2000);
	setTimeout(function(){b[4].style.right=0;b[4].style.opacity=1;  },2500);
	setTimeout(function(){b[5].style.right=0;b[5].style.opacity=1;  },3000);
		
	};
	//代码结束
	
	//section one button 点击事件
var section_one_button_click=function(){
	document.getElementsByClassName("section-one-button")[0].onclick=function(){document.body.scrollTop=document.documentElement.clientHeight;return false;};
	};
	//代码结束
	//nav 事件方法
var show_nav=function(){
	var nav=document.getElementById("nav");
	nav.style.display="block";
	nav.style.top=0;
	
	};
var hidden_nav=function(){
	var nav=document.getElementById("nav");
	nav.style.display="none";
	};	
var nav_click=function(){
	
	
	};
//代码结束

window.onload=function(){
section_one_setheight();
section_one_title_settop();
setInterval(function(){setTimeout(c,1000);setTimeout(d,4000);},6000);
section_one_button_click();
nav_click();
};
window.onscroll=function(){
	var scroll_top=document.body.scrollTop;
	var g=document.documentElement.clientHeight;
	
	if(scroll_top>=g)
	{/*setTimeout(function(){set_intro_show();},1000);*/
	set_intro_show();
	show_nav();
	}
	if(scroll_top<g){hidden_nav();}
	};
	
window.onresize=function(){section_one_setheight();section_one_title_settop();};