/*
	UIZE JAVASCRIPT FRAMEWORK 2012-06-30

	http://www.uize.com/reference/Uize.Curve.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Curve',builder:function(){var _a=function(){};var _b;var _c=_a.blendFloats=function(_d,_e,_f){return _d+(_e-_d)*_f},_g=_a.linear=Uize.returnX,_h=_a.makeEaseOut=function(_i){return function(_j){return 1-_i(1-_j)}},_k=_a.makeEaseInOut=function(_i){return function(_j){return((_j*=2)<1?_i(_j):2-_i(2-_j))/2;}},_l=_a.makeEaseMiddle=function(_i){return function(_j){return((_j*=2)<1?1-_i(1-_j):1+_i(_j-1))/2;}},_m=_a.makeEasingCurveGenerators=function(_n,_o,_p){var _q={};if(!_p)_p=_a;_n=Uize.capFirstChar(_n);function _r(_s,_t){_p['ease'+_s+_n]=function(){return(arguments.length?_t(_o.apply(0,arguments)):_q[_s]||(_q[_s]=_t(_q.In||(_q.In=_o()))))};}_r('In',_g);_r('Out',_h);_r('InOut',_k);_r('Middle',_l);};_a.makeBlender=function(_i){_i=_a.resolve(_i);return function(_d,_e,_f){return _c(_d,_e,_i(_f))};};_a.resolve=function(_i,_u,_v,_w){if(_i==_b)_i=_u;return(Uize.isFunction(_i)||Uize.isArray(_i)?_i: !_i||_i*_i==1?_g:_a[(_i*(_w||1)<0?'easeIn':'easeOut')+(_v?'Sweet':'')+'Pow'](Math.abs(_i)))};
var _x={.5:Math.sqrt,1:_g,2:function(_j){return _j*_j*(_j>0|| -1)},3:function(_j){return _j*_j*_j},4:function(_j){return _j*_j*_j*_j*(_j>0|| -1)},5:function(_j){return _j*_j*_j*_j*_j}};_m('pow',function(_y){return(_x[_y||(_y=2)]||function(_j){return Math.pow(_j*(_j>0|| -1),_y)*(_j>0|| -1)});},_a);_m('sweetPow',function(_y){return function(_j){var _z=_a.easeInPow(_y),_A=_a.easeInPow(1/_y);return(_z(_j)+1-_A(1-_j))/2;}},_a);_m('expo',function(){return function(_j){return _j&&Math.pow(2,10*(_j-1))}},_a);_m('circular',function(_y){return(_y==1?_g:_y==_b||_y==2?function(_j){return 1-Math.sqrt(Math.abs(_j=1-_j*_j))*(_j>0|| -1)}:function(_j){return 1-Math.pow(Math.abs(_j=1-Math.pow(_j,_y)),1/_y)*(_j>0|| -1);});},_a);_m('sine',function(){var _B=Math.PI/2;return function(_j){return 1-Math.cos(_j*_B)};},_a);_a.line=function(_C,_D){if(_D==_b){if(_C==_b){_C=0;_D=1;}else{_D=_C;}}var _E=_D-_C;return(!_C&&_D==1?_g:_E?function(_j){return _C+_E*_j}:function(){return _C});};_a.saw=function(_F,_G){return(
_F==1|| !(_G=Uize.toNumber(_G,1))?_g:function(_j){return _c(_j,_j&&((_j*_F)%1||1),_G)});};return _a;}});