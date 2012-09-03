/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Service.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Service',superclass:'Uize.Class',builder:function(b_a){var b_b,b_c=false,b_d=true,b_e=Uize,b_f=5000;var b_g=b_a.subclass(function(){this.b_h=[]}),b_i=b_g.prototype;function b_j(b_k){typeof console!='undefined'&&typeof console.log=='function'&&console.log(b_k);}function b_l(b_m,b_n){return function(){return b_m[b_n].apply(b_m,arguments)};}b_g.b_h=[];b_i.b_o=function(b_k){b_j('SERVICE WARNING: '+b_k);};b_g.declareServiceMethods=function(b_h){if(arguments.length!=1||typeof b_h!='object')b_h=[].slice.call(arguments);var b_p={};function b_q(b_n,b_r){var b_s=b_n=='init';function b_t(b_k){return'<< '+b_n+' >> '+b_k}if(b_i[b_n])throw new Error(b_t('You may not override a non-service public method with a service method'));b_h[b_n]=b_r||(b_r={});b_r.async=b_r.async!==b_c;b_p[b_n]=function(b_u,b_v){var b_m=this,b_w=b_m.get('adapter'),b_x=b_r.async;if(!b_x){if(!b_w)throw new Error(b_t('To call a synchronous service method, a service adapter must be set and the service must be initialized'));
if(!b_s&& !b_m.get('initialized'))throw new Error(b_t('In order to call a synchronous service method, the service must already be initialized'));}if(b_u==b_b){b_u={};}else if(typeof b_u!='object'){throw new Error(b_t('First argument (params) must be an object, null, or undefined'));}var b_y=b_c,b_z,b_A,b_B,b_C,b_D,b_E=function(){b_B&&clearTimeout(b_B);function b_F(){var b_G,b_H;if(b_v){var b_I=typeof b_v;if(b_I=='function'){b_G=b_v;}else if(b_I=='object'){b_G=b_v.onSuccess;b_H=b_v.onError;}}if(b_D){if(b_H){b_H(b_D);}else{typeof b_D=='string'?(b_D=new Error(b_t(b_D))):(b_D.message=b_t(b_D.message));throw b_D;}}else{b_s&&b_m.set('initialized',b_d);b_G&&b_G(b_C);}}if(b_A!==b_b){throw new Error(b_t('Service adapter method should only return once'));}else{b_A=Uize.now();var b_J=b_A-b_z;b_J>b_f&&b_m.b_o(b_t('Service adapter method took too long to return ('+b_J+'ms)'));if(b_r.async){b_y?b_F():setTimeout(b_F,0);}else{if(b_y){throw new Error(b_t(
'Service method is declared as synchronous, but implementation in adapter is asynchronous'));}else{b_F();}}}},b_K=function(){if(b_w[b_n](b_u,function(b_L){b_C=b_L;b_E();},function(b_M){b_D=b_M||{};b_E();})!==b_b)throw new Error(b_t('Service adapter method should always provide its result through a callback, not a return statement'));b_y=b_d;};b_z=Uize.now();if(b_x)b_B=setTimeout(function(){var b_N=b_m.get('initialized');b_m.b_o(b_t(b_w&&b_N?'Service adapter method taking too long to return':('Taking too long to be ready to call service adapter method ('+'adapter '+(b_w?'':'not ')+'set, '+(b_N?'':'not ')+'initialized'+')')));},b_f);if(b_s){b_u.serviceInterface={fire:b_l(b_m,'fire'),wire:b_l(b_m,'wire'),set:b_l(b_m,'set'),get:b_l(b_m,'get')};b_u.service=b_m;b_m.once('adapter',b_K);}else{if(!b_w){b_m.b_o(b_t('Adapter is not yet set when service method is called'));}else if(!b_m.get('initialized')){b_m.b_o(b_t('Service adapter is set but not yet initialized when service method is called'));}b_m.once('adapter',
function(){b_w=b_m.get('adapter');b_m.once('initialized',b_K);});}return b_C;};}Uize.forEach(b_h,Uize.isArray(b_h)?function(b_n){b_q(b_n)}:function(b_r,b_n){b_q(b_n,b_r)});Uize.copyInto(b_i,b_p);};b_g.registerProperties({b_w:{name:'adapter',conformer:function(b_w){if(typeof b_w=='string'){var b_O=eval(b_w);if(b_O){b_w=new b_O;}else{throw new Error(b_t('The adapter module '+b_w+' must be required and loaded first if you wish to set an adapter by module name'));}}if(b_w!=b_b){var b_P=[];Uize.forEach(this.constructor.b_h,function(b_Q){if(!b_w.hasOwnProperty(b_Q)||typeof b_w[b_Q]!='function'){b_P.push(b_Q);}});if(b_P.length){b_w=b_b;throw new Error(b_t('Service module adapter is missing implementations for service methods: '+b_P.sort().join(', ')));}}return b_w;},onChange:function(){this.set({initialized:b_c})}},b_N:{name:'initialized',value:b_c}});return b_g;}});