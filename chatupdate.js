function rr(){return"undefined"==typeof XMLHttpRequest&&(XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null}),new XMLHttpRequest}function ee(e){void 0!==e.message&&null!==e.message?alert(e.message):alert(e)}var r=null,o="0";function h(){if(4==r.readyState){try{var e=r.responseText;if(null!=e&&e.length>1){var t=e.indexOf("||");if(-1!=t&&(longpoll?o=e.substring(0,t):msg=e.substring(0,t),(e=e.substring(t+2)).length>0)){var n=document.getElementById("msgs"),s=document.createElement("div");s.innerHTML=e;for(var l=s.childNodes.length-1;l>=0;l--)reverse?n.appendChild(s.childNodes[l]):n.insertBefore(s.childNodes[l],n.firstChild);for(;n.childNodes.length>msglimit;)n.removeChild(reverse?n.firstChild:n.lastChild)}autoscroll&&reverse&&setTimeout("autoScroll(false,false)",500)}}catch(e){ee(e)}setTimeout("a();",updint)}}var c=0;function a(){if(!(++c>70))try{if(null==(r=rr()))return;r.onreadystatechange=h,r.open("GET",url+"&m="+msg+"&o="+o),r.send(null)}catch(e){ee(e)}}try{setTimeout("a()",updint)}catch(e){ee(e)}