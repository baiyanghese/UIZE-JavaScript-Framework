/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-06

	http://www.uize.com/reference/Uize.Curve.Mod.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Curve.Mod',builder:function(_a){var _b=function(){},_c,_d=_a.blendFloats,_e=_a.resolve,_f=_a.linear;_b.band=function(_g,_h,_i,_j,_k){_g=_e(_g);if(_j==_c)_j=1;var _l=(1-_h)*(_i||0),_m=_l+_h,_n=(1-_j)*(_k||0),_o=_n+_j;return(_h==1&&_j==1?_g: !_j?function(){return _n}: !_h?function(_p){return _p<_l?_n:_o}:function(_p){return _n+_j*(_p<_l?0:_p>_m?1:_g((_p-_l)/_h))});};_b.bend=function(_g,_q,_r){_g=_e(_g);var _s=(_q=_e(_q,0,false,-1))==_f,_t=(_r=_e(_r,0))==_f;return(_s&&_t?_g: !_s&& !_t?function(_p){return _r(_g(_q(_p)))}:_s?function(_p){return _r(_g(_p))}:function(_p){return _g(_q(_p))});};_b.blend=function(_u,_v,_w){if(_w==_c)_w=.5;return((_u=_e(_u))==(_v=_e(_v))?_u:_w==.5?function(_p){return(_u(_p)+_v(_p))/2}:Uize.isFunction(_w)?function(_p){return _d(_u(_p),_v(_p),_w(_p));}:function(_p){return _d(_u(_p),_v(_p),_w);});};_b.multiply=function(_u,_v){_u=_e(_u);_v=_e(_v);return function(_p){return _u(_p)*_v(_p)}};_b.quantize=function(_g,_x,_y){_g=_e(_g);if(!_x||_x==Infinity)return _g;
if(typeof _y=='number')_y=_b.band(1,0,_y);var _z=1/_x;return function(_p){var _A=Math.floor((_p=_g(_p))/_z)*_z;return(_y?_A+_y((_p-_A)/_z)*_z:_A);};};_b.redraw=function(_g,_B,_C,_D){_g=_e(_g);if(!_B||_B==Infinity)return _g;_C=_e(_C);var _E=1/_B;return(_E?function(_p){var _F=_p/_E,_G=Math.floor(_F);return _d(_g(_G*_E),_g(Math.ceil(_F)*_E),_D&&_G%2?1-_C(1-_F+_G):_C(_F-_G));}:_g);};_b.repeat=function(_g,_H,_I,_J,_K){var _L=Uize.isArray(_g=_e(_g))?_g.length:0,_M=_d(1,1/_H,_I||(_I=0));return function(_p){var _N=_p&&Math.ceil(_p*_H)-1,_O=_N/_H,_P=Uize.constrain((_p-_O)*_H,0,1),_Q=_N%2;_P=(_L?_g[_N%_L]:_g)(_Q&&_J?1-_P:_P);if(_Q&&_K)_P=1-_P;return(_N==_H-1&&_P==1?1:_O*_I+_P*_M);};};_b.rotate=function(_g,_R){_g=_e(_g);return(_R==_c||_R==1?_a.makeEaseOut(_g):_R?function(_p){return _d(_g(_p),1-_g(1-_p),_R)}:_g)};return _b;}});