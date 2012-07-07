/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-06

	http://www.uize.com/reference/Uize.String.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.String',builder:function(){var _a=function(){},_b;var _c=[],_d=new RegExp('[^ \\n\\r\\t\\f\\x0b\\xa0\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u200b\\u2028\\u2029\\u3000]'),_e={9:1,10:1,11:1,12:1,13:1,32:1,160:1,8192:1,8193:1,8194:1,8195:1,8196:1,8197:1,8198:1,8199:1,8200:1,8201:1,8202:1,8203:1,8232:1,8233:1,12288:1},_f='a,,b'.split(/,/)!=3||'1-2'.split(/(-)/).join('|')!='1|-|2';var _g,_h;function _i(_j){if(!_h)_h=(_g='          '.replace(/ /g,'          ')).length;if(_j>_h)_h=(_g=_k(_g,Math.floor(_j/_h))+_g.substr(0,_j%_h)).length;return _g.substr(0,_j);}function _l(_m,_n,_o){if(!_n)return true;var _p=_m.length,_q=_n.length,_r=_o?_p-_q:0,_s=_r+_q-1;return(_q<=_p&&_m.charCodeAt(_r)==_n.charCodeAt(0)&&(_q==1||(_m.charCodeAt(_s)==_n.charCodeAt(_q-1)&&(_q==2||(_q==_p?_n==_m:_o?_m.indexOf(_n,_r)==_r:_m.lastIndexOf(_n,_s)==0)))));}_a.contains=function(_m,_n){return(_n.length<=_m.length&&(_a.startsWith(_m,_n)||_a.endsWith(_m,_n)||_m.indexOf(_n)> -1));};
_a.endsWith=function(_m,_n){return _l(_m,_n,true);};var _t=_a.hasPadding=function(_m){var _p=_m.length;return!!(_p&&(_e[_m.charCodeAt(0)]||_e[_m.charCodeAt(_p-1)]));};_a.hugJoin=function(_u,_v,_w,_x){return(_u.length?(''+_v+_u.join(''+_w+(_x!=_b?_x:'')+_v)+_w):'');};_a.joinUsingSuffixPriority=function(_v,_w,_y){var _z=_w.length;return(_y<_z?_w.substr(0,_y):_y==_z?_w:_A(_v,_y-_z)+_w);};var _A=_a.limitLength=function(_m,_y){var _B='...',_C=_B.length;return(_y<1?'':_y<=_C?_m.slice(0,_y):_m.length>_y?(_m.substr(0,_y-_C)+_B):_m);};var _D=[],_k=_a.repeat=function(_m,_E){if(_E<1|| !_m)return'';if(_E==1)return _m;if(_m==' ')return _i(_E);_D.length=_E+1;return _D.join(_m);};_a.split=function(_m,_F,_G){if(_f&&_F instanceof RegExp){if(_G==_b)_G=Infinity;if(!_G)return[];_m+='';_F=new RegExp(_F.source,'g'+(_F.multiline?'m':'')+(_F.ignoreCase?'i':''));var _p=_m.length;if(_p){var _H=[],_I=1,_J,_K=0;while(_I&&_K<_p&&_H.length<_G){if((_I=_F.exec(_m))&& !(_J=_I[0]))_I.index=_K+1;_H.push(_m.slice(_K,_I?_I.index:_p));if(_I){
_I.length>1&&_I.index<_p&&_H.push.apply(_H,_I.slice(1));_K=_F.lastIndex=_I.index+_J.length;_J&&_K==_p&&_H.push('');}}return _H;}else{return _F.test('')?[]:[''];}}else{var _L=[_F+'',_G];_L.length=arguments.length-1;return _m.split.apply(_m,_L);}};_a.splitInTwo=function(_m,_F){if(_F instanceof RegExp)_F=(_m.match(_F)||_c)[0];var _M=_F!=_b?_m.indexOf(_F): -1;return(_M> -1?[_m.substr(0,_M),_m.substr(_M+_F.length)]:[_m,'']);};_a.startsWith=_l;_a.toCamel=function(_N,_O){return((Uize.isArray(_N)?_N.join(' '):_N).toLowerCase().replace(/^\W+/,'').replace(/\W+$/,'').replace(_O?/(^|\W+)./g:/\W+./g,function(_I){return _I.slice(-1).toUpperCase()}));};_a.trim=function(_m,_P){if(!_t(_m))return _m;var _Q=_P==1?0:_m.search(_d),_R=_m.length-1;if(_Q== -1)return'';if(_P!= -1)while(_e[_m.charCodeAt(_R)])_R--;return _m.slice(_Q,_R+1);};_a.trimLeft=function(_m){return _a.trim(_m,-1);};_a.trimRight=function(_m){return _a.trim(_m,1);};return _a;}});