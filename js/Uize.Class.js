/*
	UIZE JAVASCRIPT FRAMEWORK 2012-06-30

	http://www.uize.com/reference/Uize.Class.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Class',builder:function(_a){var _b,_c='string',_d='object',_e=Uize,_f=_e.clone,_g=_e.copyInto,_h=_e.forEach,_i=_e.getClass,_j=_e.getGuid,_k=_e.globalEval,_l=_e.isArray,_m=_e.isFunction,_n=_e.isInstance,_o=_e.isObject,_p=_e.noNew,_q=_e.pairUp;var _r=[],_s={};var _t=_u(function(){},function(){this.instanceId=_j();},function(_v){_v||(_v=_s);var _w={},_x=this.Class._x,_y,_z;for(_y in _x){if(_y in _v)_w[_y]=_v[_y];else if((_z=_x[_y])!==_b)_w[_y]=_z;}for(_y in _v)_y in _w||(_w[_y]=_v[_y]);this.set(_w);}),_A=_t.prototype,_B=_t.nonInheritableStatics;function _C(_D,_E){var _t=_i(_D);return(_t._F[_E]||_t._G[_E]);}function _H(_D,_E){var _I=_C(_D,_E);return _I?_I._J:_E;}_t._K=_A._K=function(_L,_M){if(_L.charCodeAt(0)==67&& !_L.indexOf('Changed.')){var _D=this,_N=_L.slice(8),_I=_C(_D,_N);if(_I&&_N!=_I._O)_L='Changed.'+(_N=_I._O);_M(_L);(_D._P||(_D._P={}))[_N]=_D._Q&&_D._Q[_L];}else{_M(_L);}};_t.wire=_A.wire=function(_R,_S){var _D=this;if(arguments.length==2){_D._K(_R,function(_L){
var _Q=_D._Q||(_D._Q=_D.eventHandlers={});(_Q[_L]||(_Q[_L]=[])).push({_L:_L,_S:_m(_S)?_S:typeof _S==_c?new Function(_S):function(_T){_S.fire(_T)},_U:_S});});}else if(_o(_R)){for(var _L in _R)this.wire(_L,_R[_L]);}};_t.fire=_A.fire=function(_T){if(typeof _T!=_d)_T={name:_T};var _D=this,_Q=_D._Q;if(_Q){var _V=_Q[_T.name],_W=_Q['*'];if(_V||_W){_T.source||(_T.source=_D);var _X=_W&&_V?_W.concat(_V):_W||_V,_Y=_X.length;if(_Y==1){_X[0]._S(_T);}else if(_Y==2){var _Z=_X[0]._S,_0=_X[1]._S;_Z(_T);_0(_T);}else{if(!_W|| !_V)_X=_X.concat();for(var _1= -1;++_1<_Y;)_X[_1]._S(_T);}}}if(_T.bubble&&_D.parent&&_n(_D)){_T.source||(_T.source=_D);_D.parent.fire(_T);}return _T;};_t.unwire=_A.unwire=function(_R,_S){var _D=this,_Q=_D._Q;if(_Q){if(_o(_R)){for(var _L in _R)_D.unwire(_L,_R[_L]);}else{_D._K(_R,function(_L){var _2=_Q[_L];if(_2){if(_S){for(var _1=_2.length;--_1>=0;)_2[_1]._U==_S&&_2.splice(_1,1);}(_S&&_2.length)||delete _Q[_L];}});}}};_t.get=_A.get=function(_y){if(typeof _y==_c){return this[_H(this,_y)];}else{var _D=this,
_3={};if(!_y){var _t=_i(_D),_G=_t._G;for(var _4 in _G)_3[_G[_4]._O]=_D[_4];}else if(_l(_y)){for(var _5= -1,_6=_y.length;++_5<_6;){var _7=_y[_5];_3[_7]=_D[_H(_D,_7)];}}else{for(var _7 in _y)_3[_7]=_D[_H(_D,_7)];}return _3;}};_t.registerProperties=function(_8){var _D=this,_G=_D._G,_F=_D._F;for(var _4 in _8){var _9=_8[_4],_ba=_o(_9),_N=(_ba?_9.name:_9)||_4,_bb=_N,_I=_G[_4]={_J:_4};if(_N.indexOf('|')> -1){var _bc=_N.split('|');_bb=_bc[0];_e.lookup(_bc,_I,_F);}else{_F[_N]=_I;}_I._O=_bb;if(_ba){if(_9.onChange)_I._bd=_9.onChange;if(_9.conformer)_I._be=_9.conformer;_D[_4]=_9.value;}}_D._x=this.get();};_t.set=_A.set=function(_v){if(arguments.length>1)_v=_q.apply(0,arguments);var _D=this,_bf=_n(_D),_t=_bf?_D.Class:_D,_F=_t._F,_G=_t._G,_I,_bg,_bh,_bi,_P=_bf&&_D._P,_bj=_P&&_P['*'],_bk,_bl,_4,_N,_bm,_bn,_bo;for(var _E in _v){_bn=_v[_E];if(_I=_F[_E]||_G[_E]){_4=_I._J;_N=_I._O;}else{(_bm||(_bm={}))[_4=_N=_E]=_I=_bf?{}:{value:_bn};}if(_bf)(_bo||(_bo={}))[_N]=_I._be?(_bn=_I._be.call(_D,_bn,_D[_4])):_bn;if(_bn!==_D[_4]){
if(_bf){_bj&&((_bk||(_bk={}))[_N]=_bn);_P&&_P[_N]&&(_bl||(_bl=[])).push(_N);function _bp(_bi){if(_m(_bi)){if(!_bg){_bg=[];_bh=_D.instanceId+'_handlerAlreadyAdded';}if(!_bi[_bh]){_bi[_bh]=1;_bg.push(_bi);}}else if(typeof _bi==_c){_bp(_D[_bi]);}else if(_l(_bi)){_h(_bi,_bp);}}_I._bd&&_bp(_I._bd);}_D[_4]=_bn;}}_bm&&_t.registerProperties(_bm);if(_bf){if(_bg){for(var _1= -1,_bq=_bg.length;++_1<_bq;){delete(_bi=_bg[_1])[_bh];_bi.call(_D,_bo);}}_bk&&_D.fire({name:'Changed.*',properties:_bk});if(_bl){for(var _br= -1,_bs=_bl.length;++_br<_bs;)_D.fire('Changed.'+_bl[_br]);}}else{_t._x=this.get();}};_t.toggle=_A.toggle=function(_bt){var _bu= !this.get(_bt);this.set(_bt,_bu);return _bu;};_A.kill=function(){var _bv=this.instanceId;_k('if(typeof '+_bv+'!=\'undefined\')'+_bv+'=null');};function _u(_t,_bw,_bx){function _by(){var _bz=[],_bA=_e.toString;_h(this.get(),function(_bn,_bt){_bz.push(_bt+' : '+(_bn&&(_n(_bn)||_m(_bn))?_bA.call(_bn):_bn));});return _bA.call(this)+'\n\n'+_bz.sort().join('\n');}function _bB(){
return this[_H(this,'value')];}var _A=_t.prototype,_bC=_p(function(){for(var _bD= -1,_bE=_bF.length,_bw;++_bD<_bE;)if(_bw=_bF[_bD])_bw.apply(this,arguments);for(var _bG= -1,_bH=_bI.length,_bx;++_bG<_bH;)if(_bx=_bI[_bG])_bx.apply(this,arguments);}),_bJ=_bC.prototype;var _bn,_bK=_t.nonInheritableStatics||_s;for(var _y in _t)if(!_bK[_y]&&(_bn=_t[_y])!=_A&& !(_m(_bn)&&_bn.moduleName&&/[A-Z]/.test(_y.charAt(0))))_bC[_y]=_f(_bn);_g(_bJ,_A);_bJ.toString=_by;_bJ.valueOf=_bB;_bJ.Class=_bC;_bC.nonInheritableStatics={_bL:1,nonInheritableStatics:1,toString:0,valueOf:0};_bC.superclass=_t;_bC.toString=_by;_bC.valueOf=_bB;var _bF=_bC._bF=(_t._bF||_r).concat(_bw),_bI=_bC._bI=(_t._bI||_r).concat(_bx);_bC._G||(_bC._G={});_bC._F||(_bC._F={});return _bC;};_t.subclass=function(_bw,_bx){return _u(this,_bw,_bx);};_t.singleton=function(_bM,_v){var _bL=this._bL||(this._bL={}),_bN=_bL[_bM||(_bM='')];_bN?_v&&_bN.set(_v):(_bN=_bL[_bM]=this(_v));return _bN;};return _t;}});