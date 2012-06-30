/*
	UIZE JAVASCRIPT FRAMEWORK 2012-06-30

	http://www.uize.com/reference/Uize.Url.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Url',builder:function(){var _a=function(){},_b,_c=Uize.isArray;var _d=[],_e={},_f=0,_g={favorQuery:false};function _h(_i){return _i!=_b?decodeURIComponent(_i):'';}function _j(_k){return encodeURIComponent(_k+'');}function _l(_m,_n){var _o=(_m+='').indexOf('?');if(_o<0&& !_n)_o=_m.length;return{_p:_m.slice(0,_o),_q:_m.slice(_o+1)};}_a.from=function(_r){var _s=_r&&_r.match(/^(([^:\\\/]+:)\/\/(([^:\\\/]*)(:(\d+))?)?)?(([^\?#]*[\\\/])?(([^\\\/\?#]*?)(\.([^\.\?#]+))?))(\?([^#]*))?(#(.*))?$/);function _t(_u){return _s?(_s[_u]||''):'';}return{href:_r,fullDomain:_t(1),protocol:_t(2),host:_t(3),hostname:_t(4),port:_t(6),pathname:_t(7),folderPath:_t(8),file:_t(9),fileName:_t(10),extension:_t(11),fileType:_t(12),search:_t(13),query:_t(14),hash:_t(15),anchor:_t(16)};};_a.fromParams=function(_v,_w){var _x={};if(_v=_l(_v,(_w||_e).favorQuery!==false)._q){for(var _y= -1,_z=_v.split('&'),_A=_z.length,_B,_C;++_y<_A;){if(_C=(_B=_z[_y].split('='))[0])_x[_h(_C)]=_h(_B[1]);}}return _x;};_a.fromPiece=_h;
_a.getCacheDefeatStr=function(){return Uize.now()+''+Math.round(Math.random()*1000)+_f++;};_a.toAbsolute=function(_D,_E){var _F=_E?_a.from(_E):_e;_F.fullDomain?(_E=''):(_F=_a.from(_D));var _G,_H=_F.folderPath+_E;while(_H!=_G){_G=_H;_H=_H.replace(/([\/\\])[^\/\\]*[\/\\]\.\.(?:[\/\\]|$)/,'$1');}return _F.fullDomain+_H.replace(/\.\.([\/\\]|$)/g,'');};_a.toParams=function(_x){var _z=[],_I;if(_c(_x))_x=_x.length<2?_x[0]:Uize.copyInto.apply(Uize,[{}].concat(_x));for(var _J in _x)_J&&(_I=_x[_J])!=_b&&_z.push(_j(_J)+'='+_j(_I));return _z.join('&');};_a.toPiece=_j;_a.resolve=function(_m,_x){if(_c(_m)){_x=_m.slice(1).concat(_x||_d);_m=_m[0];}var _v=_a.toParams([_a.fromParams(_m,_g)].concat(_c(_x)?_x:[_x]));return _l(_m)._p+(_v?'?':'')+_v;};return _a;}});