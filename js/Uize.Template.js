/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Template.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Template',required:'Uize.String',builder:function(){var _a=function(){},_b=true,_c=false,_d='string',_e=Uize.String,_f=_e.splitInTwo,_g=_e.trim;var _h={},_i=/^\s*=/,_j=/^\s*@/,_k=/^\s*\./,_l=/^!\s*/,_m=/(\r|\n|\r\n)[ \t]*$/,_n=/^[ \t]*(\r|\n|\r\n)[ \t]*/,_o='->',_p={};function _q(_r,_s,_t,_u){if(_s){_s=_s.split(_o);for(var _v= -1,_w=_s.length,_x,_y,_z,_A;++_v<_w;){if(_y=_g((_x=_f(_s[_t?_w-_v-1:_v],'{'))[0])){if(_z=_l.test(_y))_y=_y.replace(_l,'');if(_A=_a.encodings[_y]){if(_t)_z= !_z;var _B=_g(_x[1]),_C=_z?'from':'to',_D=_A[_C];_u&&_u(_y+':'+_C,_D.required);_r=_D.expansion(_r,_B?('{'+_B):'');}}}}return _r;}_a.compile=function(_E,_F){_F=_F||_h;var _G=[],_H={},_I={},_J={},_K=_F.openerToken||'<%',_L=_F.closerToken||'%>',_M=_F.gobbleWhitespace!==_c,_N=_E.length,_O='var output = [];',_P='return output.join (\'\');',_Q=[_O],_R=[],_S=0,_T,_U=_b,_V,_W,_X,_Y,_Z;function _0(_W){if(_R.length){_Q.push('output.push ('+_R.join(',')+');');_R=[];}_Q.push(_W);}function required(_1){Uize.forEach(
typeof _1==_d?_1.split(','):_1,function(_2){if(!_H[_2]){_G.push(_2);_H[_2]=1;}});}function input(_3){Uize.copyInto(_J,_3);}function startBlock(_4,_5){_0('function '+_4+' ('+(_5||'')+') {'+_O);}function endBlock(){_0(_P+'}');}while(_U){_T=_E.indexOf(_K,_S);if(_T<0)_T=_N;_V=_E.slice(_S,_T);if(_U=_T<_N){_S=_E.indexOf(_L,_T+=2);_Y=_i.test(_W=_E.slice(_T,_S));_Z=_Y||_k.test(_W);_X= !_Z&&_j.test(_W);_S+=2;}if(_V){if(_M&&_U&& !_Z&&_m.test(_V)&&_n.test(_E.substr(_S)))_V=_V.replace(_m,'');_V&&_R.push('\''+_V.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/\'/g,'\\\'')+'\'');;}if(_U){if(_Z){var _6=_f(_Y?_W.replace(_i,''):'input'+_W,_o);_R.push(_q(_g(_6[0]),_6[1],_c,function(_7,_8){if(!_I[_7]){required(_8);_I[_7]=1;}}));}else if(_X){eval(_W.replace(_j,''));}else{_0(_W);}}}_0(_P);var _9=_Q.join('\n'),_ba=new Function('input',_9);return(_F.result=='full'?{input:_J,required:_G,code:_9,templateFunction:_ba}:_ba);};_a.encode=function(_bb,_s,_t){var _bc=(_t?'! ':'')+_s;return((_p[_bc]||(
_p[_bc]=new Function('e','return '+_q('e',_s,_t))))(_bb));};_a.decode=function(_bd,_A){return _a.encode(_bd,_A,_b)};var _be=_a.defineStandardEncoding=function(_y,_bf,_bg,_bh){var _bi=_bf+'.'+_bh+' (',_bj=_bf+'.'+_bg+' (';_a.encodings[_y]={to:{required:_bf,expansion:function(_bk,_bl){return _bj+_bk+(_bl&&',')+_bl+')'}},from:{required:_bf,expansion:function(_bk,_bl){return _bi+_bk+(_bl&&',')+_bl+')'}}};};_a.encodings={};_be('iso8601','Uize.Date','toIso8601','fromIso8601');_be('json','Uize.Json','to','from');_be('miniJson','Uize.Json','to','from');_a.encodings.miniJson.to.expansion=function(_bk){return'Uize.Json.to ('+_bk+',\'mini\')'};_be('tagAttributes','Uize.Xml','toAttributes','fromAttributes');_be('tagAttributeValue','Uize.Xml','toAttributeValue','fromAttributeValue');_be('url','Uize.Url','resolve','from');_be('urlParams','Uize.Url','toParams','fromParams');_be('urlPiece','Uize.Url','toPiece','fromPiece');return _a;}});