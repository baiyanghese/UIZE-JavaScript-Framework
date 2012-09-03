/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Comm.Ajax.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Comm.Ajax',required:'Uize.Url',builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype;var c_d=Uize.nop;c_c.performRequest=function(c_e,c_f){var c_g=this,c_h=c_e.returnType,c_i=c_h=='object',c_j=Uize.Url.fromParams(c_e.url),c_k=Uize.Url.resolve(c_e.url,Uize.copyInto({rnd:c_e.cache=='never'?Uize.Url.getCacheDefeatStr():null},c_j.comm_mode?null:{comm_mode:'ajax'},c_j.output?null:{output:'js'})),c_l=c_e.data||'',c_m=c_e.requestMethod,c_n=c_m=='POST';if(!c_g.c_o)c_g.c_o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject('Microsoft.XMLHTTP');c_g.c_o.onreadystatechange=function(){if(c_g.c_o.readyState==4){c_g.c_o.onreadystatechange=c_d;if(c_g.c_o.status==200){var c_p=c_g.c_o.responseText;if(c_i||c_h=='xml')c_e.responseXml=c_g.c_o.responseXML;if(c_i||c_h=='text')c_e.responseText=c_p;if(c_i||c_h=='json')c_e.responseJson=c_p?(new Function('var a=['+c_p+'];return a.pop()'))():null;c_g.c_o.abort();c_f();}else{c_g.c_o.abort();}}};if(c_n&& !c_l){var c_q=c_k.indexOf('?');
c_l=c_k.substr(c_q+1);c_k=c_k.slice(0,c_q);}c_g.c_o.open(c_m,c_k,true);if(c_n){c_g.c_o.setRequestHeader('Content-type','application/x-www-form-urlencoded');c_g.c_o.setRequestHeader('Content-length',c_l.length);}c_g.c_o.send(c_l);};return c_b;}});