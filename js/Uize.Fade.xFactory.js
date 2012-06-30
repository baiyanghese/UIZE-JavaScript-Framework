/*
	UIZE JAVASCRIPT FRAMEWORK 2012-06-30

	http://www.uize.com/reference/Uize.Fade.xFactory.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Fade.xFactory',builder:function(b_a_a){var b_a_b=true,b_a_c=false,b_a_d,b_a_e=Uize.totalKeys,b_a_f=Uize.isObject;var b_a_g=[];b_a_a.fade=function(b_a_h,b_a_i,b_a_j,b_a_k,b_a_l,b_a_m){if(!b_a_k)b_a_k=750;if(Uize.isInstance(b_a_h))return b_a_a.fadeProperty(b_a_h,'value',b_a_i,b_a_j,b_a_k,b_a_l);if(Uize.isFunction(b_a_h))b_a_h={handler:b_a_h};function b_a_n(b_a_o){return(Uize.isArray(b_a_o)&&b_a_o.length<2&& !Uize.isArray(b_a_o[0])?b_a_o[0]:b_a_o);}b_a_i=b_a_n(b_a_i);b_a_j=b_a_n(b_a_j);function b_a_p(b_a_q,b_a_r){return Uize.isInstance(b_a_q)&&b_a_r=='set';}var b_a_s=b_a_h.context,b_a_t=b_a_h.handler,b_a_u=b_a_p(b_a_s,b_a_t),b_a_v;if(b_a_u){function b_a_w(b_a_x,b_a_y){if(b_a_x){for(var b_a_z in b_a_x){if(b_a_x[b_a_z]==b_a_d)b_a_x[b_a_z]=b_a_s.get(b_a_z);}}else{b_a_x=b_a_s.get(b_a_i||b_a_j);}return b_a_x;}b_a_i=b_a_w(b_a_i);b_a_j=b_a_w(b_a_j);}var b_a_A;for(var b_a_B= -1,b_a_C,b_a_D=b_a_g.length;++b_a_B<b_a_D;){var b_a_E=(b_a_C=b_a_g[b_a_B]).b_a_h,b_a_F=b_a_E.context,b_a_G=b_a_E.handler,
b_a_H=b_a_F==b_a_s&&b_a_G==b_a_t;if(b_a_H){var b_a_I=b_a_C.get('startValue'),b_a_J=b_a_C.get('endValue');if(b_a_u){if(b_a_p(b_a_F,b_a_G)){var b_a_K=b_a_c;for(var b_a_z in b_a_I)b_a_z in b_a_i?(b_a_K=b_a_b):(b_a_H=b_a_c);if(b_a_K&& !b_a_H){var b_a_L={},b_a_M={};for(var b_a_z in b_a_I){if(!(b_a_z in b_a_i)){b_a_L[b_a_z]=b_a_I[b_a_z];b_a_M[b_a_z]=b_a_J[b_a_z];}}b_a_C.set({startValue:b_a_L,endValue:b_a_M});}}}else{function b_a_N(b_a_i,b_a_j,b_a_O,b_a_P){var b_a_Q;if(b_a_i==b_a_j){b_a_Q=b_a_O==b_a_i&&b_a_P==b_a_i;}else if(b_a_Q=b_a_f(b_a_i)&&b_a_f(b_a_O)?((typeof b_a_i.length=='number'?b_a_i.length===b_a_O.length:b_a_b)&&b_a_e(b_a_i)==b_a_e(b_a_O)):b_a_b){for(var b_a_z in b_a_i){if(!(b_a_z in b_a_O)|| !b_a_N(b_a_i[b_a_z],b_a_j[b_a_z],b_a_O[b_a_z],b_a_P[b_a_z])){b_a_Q=b_a_c;break;}}}return b_a_Q;}b_a_H=b_a_N(b_a_I,b_a_J,b_a_i,b_a_j);}b_a_H&&(b_a_A||(b_a_A=[])).push(b_a_C);}}b_a_A&&Uize.callOn(b_a_A,'stop');var b_a_R=[];(b_a_R[0]=new b_a_a(Uize.copyInto({duration:b_a_k,startValue:b_a_i,endValue:b_a_j,b_a_h:b_a_h},
b_a_l))).wire({'Changed.inProgress':function(b_a_S){var b_a_T=b_a_S.source;b_a_T.get('inProgress')?b_a_g.push(b_a_T):b_a_g.splice(Uize.indexIn(b_a_g,b_a_T),1);},'Changed.value':function(b_a_S){var b_a_T=b_a_S.source,b_a_h=b_a_T.b_a_h,b_a_q=b_a_h.context,b_a_r=b_a_h.handler,b_a_o=b_a_T.valueOf();(typeof b_a_r=='string'?b_a_q[b_a_r]:b_a_r)[Uize.isArray(b_a_o)?'apply':'call'](b_a_q,b_a_o);}});b_a_m!==b_a_c&&b_a_R[0].start();return b_a_R.pop();};b_a_a.fadeMethod=function(b_a_q,b_a_U,b_a_i,b_a_j,b_a_k,b_a_l,b_a_m){return(b_a_a.fade({context:b_a_q,handler:b_a_U},b_a_i,b_a_j,b_a_k,b_a_l,b_a_m));};b_a_a.fadeProperties=function(b_a_h,b_a_V,b_a_W,b_a_k,b_a_l,b_a_m){return b_a_a.fadeMethod(b_a_h,'set',b_a_V,b_a_W,b_a_k,b_a_l,b_a_m);};b_a_a.fadeProperty=function(b_a_h,b_a_z,b_a_i,b_a_j,b_a_k,b_a_l,b_a_m){var b_a_X={},b_a_Y={};b_a_X[b_a_z]=b_a_i;b_a_Y[b_a_z]=b_a_j;return b_a_a.fadeProperties(b_a_h,b_a_X,b_a_Y,b_a_k,b_a_l,b_a_m);};}});