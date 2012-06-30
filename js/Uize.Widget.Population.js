/*
	UIZE JAVASCRIPT FRAMEWORK 2012-06-30

	http://www.uize.com/reference/Uize.Widget.Population.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Population',required:'Uize.Node',builder:function(c_a){var c_b=true,c_c=false,c_d;var c_e=c_a.subclass(function(){this.c_f={c_g:c_b,c_h:c_b};}),c_i=c_e.prototype;function c_j(c_k,c_l){return(c_l+c_k.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(new RegExp(c_l,'g'),'\\'+c_l)+c_l);}function c_m(c_g,c_n,c_h,c_o,c_p,c_q,c_r,c_s){var c_t=[],c_u=0,c_v=c_g.length;while(c_u<c_v){var c_w='',c_x='',c_y=c_v;function c_z(c_A,c_B){var c_C;for(var c_D in c_A){var c_E=c_A[c_D],c_F=typeof c_E=='object',c_G='('+c_B+' || {}) ['+c_j(c_D,'\'')+']';if(c_F&&typeof c_E.length!='number'){c_z(c_E,c_G);}else{if(c_F){var c_H=c_E[0];c_C=c_g.indexOf(c_H.OPENER_TOKEN,c_u);if(c_C> -1){var c_I=c_g.indexOf(c_H.CLOSER_TOKEN,c_C+c_H.OPENER_TOKEN.length);if(c_I> -1){c_E=c_g.slice(c_C,c_I+c_H.CLOSER_TOKEN.length);}else{c_C= -1;}}}else{c_C=c_g.indexOf(c_E,c_u);}if(c_C> -1&&c_C<c_y){c_w=c_G;c_x=c_E;c_y=c_C;}}}}c_z(c_n,'obj');c_t.push({c_J:c_g.slice(c_u,c_y),c_G:c_w,
c_K:c_w?new Function('obj','return '+c_w):0,c_E:c_x});c_u=c_y;if(c_w)c_u+=c_x.length;}var c_L=[c_r];for(var c_M= -1,c_N=c_h.length;++c_M<c_N;){var c_O=c_h[c_M];c_L.push(c_p);for(var c_P= -1,c_Q=c_t.length;++c_P<c_Q;){var c_R=c_t[c_P],c_S=c_R.c_G;c_L.push(c_R.c_J);if(c_S){if(c_S=='(obj || {}) [\'GENERATED_itemNo\']'){c_L.push(c_M);}else{var c_T=c_R.c_K,c_E=c_T(c_O);if(c_E===c_d)c_E=c_T(c_o);if(c_E!==c_d){if(Uize.isFunction(c_E)){c_E=c_E.call(c_O);}else if(Uize.isArray(c_E)){var c_H=c_T(c_n)[0];c_E=c_m(c_R.c_E.slice(c_H.OPENER_TOKEN.length,c_R.c_E.length-c_H.CLOSER_TOKEN.length),c_H,c_E,'','','','');}c_L.push(c_E!=null?c_E:c_R.c_E);}}}}c_L.push(c_q);}c_L.push(c_s);return c_L.join('');}c_i.getOutput=function(){var c_U=this;return(c_m(c_U.c_g,c_U.c_n,c_U.c_h,c_U.c_o,c_U.c_p,c_U.c_q,c_U.c_r,c_U.c_s));};c_i.getHtml=function(){return this.getOutput().replace(/[\t\n\r ]+/g,' ').replace('> <','><');};c_i.updateUi=function(){var c_U=this,c_f=c_U.c_f;if(c_U.isWired&&(c_f.c_g||c_f.c_h)&&c_U.get('enabledInherited')){
var c_V=Uize.Node.getById(c_U.get('container'))||c_U.getNode('shell')||c_U.getNode();if(c_V){if(!c_U.c_g)c_U.c_g=c_V.innerHTML;var c_W=c_U.getHtml();if(c_W!==c_U.c_X)c_V.innerHTML=c_U.c_X=c_W;c_f.c_g=c_f.c_h=c_c;}}};c_e.makeTemplateItem=function(c_O,c_Y){var c_Z=function(c_0){return c_0};if(typeof c_Y=='string'&&c_Y){c_Z=function(c_0){return c_Y.replace('KEY',c_0)};}else if(Uize.isFunction(c_Y)){c_Z=c_Y;}function c_1(c_2,c_3,c_4){for(var c_0 in c_2){var c_5=c_2[c_0];typeof c_5=='object'?c_1(c_5,c_3[c_0]={},c_0+'.'):c_3[c_0]=c_Z(c_4+c_0);}return c_3;}return c_1(c_O,{},'');};c_e.replaceByTemplateItem=function(c_6,c_O,c_n){return c_m(c_6,c_n,[c_O],c_d,'','','','');};c_e.replaceByToken=function(c_6,c_O,c_Y){return c_e.replaceByTemplateItem(c_6,c_O,c_e.makeTemplateItem(c_O,c_Y||'{KEY}'));};c_e.registerProperties({c_r:{name:'outputPrefix',value:''},c_s:{name:'outputSuffix',value:''},c_p:{name:'itemPrefix',value:''},c_q:{name:'itemSuffix',value:''},c_h:{name:'items',onChange:function(){this.c_f.c_h=c_b;
this.updateUi();},value:[]},c_o:'itemPhantomProperties',c_n:'templateItem',c_g:{name:'templateStr',onChange:function(){this.c_f.c_g=c_b;this.updateUi();}}});return c_e;}});