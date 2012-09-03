/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget',superclass:'Uize.Class',required:'Uize.Node',builder:function(b_a){var b_b=null,b_c=true,b_d=false,b_e='string',b_f=Uize,b_g=b_f.isFunction,b_h='concatenated',b_i,b_j=b_f.Node,b_k=b_j.doForAll,b_l=b_j.isNode,b_m=b_j.getById;var b_n=b_a.subclass(function(b_o){var b_p=this;if(b_o){var b_q=b_p.b_r(b_o.idPrefix,b_o.parent);b_q&&b_f.copyInto(b_o,b_q);delete b_o.widgetClass;}b_p.b_s={};b_p.children=b_p.b_t={};}),b_u=b_n.prototype;b_u.b_r=function(b_v,b_w){var b_o,b_x;(b_v&&(b_o=window[b_x='$'+b_v])&&typeof b_o=='object'&&(!b_w||b_v!=b_w.b_v))?(window[b_x]=b_i):(b_o=b_i);return b_o;};b_u.b_y=function(){var b_p=this,b_q=b_p.b_r(b_p.b_v,b_p.parent);b_q&&b_p.set(b_q);};b_u.b_z=function(b_A,b_B,b_C,b_D){return((!b_D||b_D==b_h)&&b_A!=b_i?(b_A+(b_C!==''?'_':'')+b_C):(b_D=='same as parent'?b_A:b_B));};function b_E(b_F,b_G){var b_H=b_f.keys(b_F),b_I=b_f.values(b_F),b_J=b_H[0],b_K=b_H[1];function b_L(){var b_M=this[b_J];if(b_M=='inherit')b_M=this.parent?this.parent[b_K]:b_G;if(b_M!=this[b_K])
this.set(b_K,b_M);}b_n.registerProperties(b_f.pairUp(b_J,{name:b_I[0],onChange:b_L,value:'inherit'},b_K,{name:b_I[1],onChange:function(){b_f.callOn(this.b_t,b_L)},value:b_G}));}b_u.b_N=function(b_O,b_P,b_Q){var b_R='show'+b_f.capFirstChar(b_O);this.getProvider(b_R)?this.callInherited(b_R)(b_P):setTimeout(function(){var b_S=b_Q();(b_P.callback||(b_S?b_P.yesHandler:b_P.noHandler)||b_f.nop)(b_S)},0);};b_u.confirm=function(b_P){this.b_N('confirm',b_P,function(){return confirm(b_P.message)});};b_u.showInform=b_u.showConfirm=b_i;b_u.inform=function(b_P){this.b_N('inform',b_P,function(){alert(b_P.message);return b_c})};b_u.ajax=function(b_T,b_U){this.callInherited('performAjax')(b_T,b_f.isFunction(b_U)?{callback:b_U}:b_U||{})};b_u.localize=function(b_V,b_W,b_X){var b_Y,b_Z=this;while(!(b_Y=b_Z.b_0?b_Z.b_0[b_V]:b_i)&&(b_Z=b_Z.parent));return(b_g(b_Y)?b_Y.call(this,b_W):b_f.substituteInto(b_Y,b_W,b_X||'{KEY}'));};b_u.buildHtml=function(b_1){var b_p=this,b_2=b_p.b_2;if(b_2!=b_i){
var b_3=b_p.b_4||b_p.getNode('shell')||b_p.getNode();if(b_2===b_c){b_2=b_p.b_2=b_f.Template&&b_3?{process:b_f.Template.compile((b_j.find({root:b_3,tagName:'SCRIPT',type:'text/jst'})[0]||b_3).innerHTML,{openerToken:'[%',closerToken:'%]'})}:b_i;if(!b_2)return;}b_p.b_v||b_p.set({b_v:b_p.instanceId});var b_5=b_f.copyInto({pathToResources:b_f.pathToResources,blankGif:b_n.getBlankImageUrl()},b_1||b_p.get()),b_6;b_j.injectHtml(b_3||document.body,typeof b_2!=b_e&&b_g(b_2.process)?b_2.process.call(b_p,b_5):b_g(b_2)?typeof(b_6=b_2(b_5))==='string'?b_f.substituteInto(b_6,b_5):b_6:b_f.substituteInto(b_2,b_5),b_p.b_7||(b_3?'inner replace':'inner bottom'));b_p.b_8=b_b;b_p.set({b_9:b_c});}};function b_ba(b_bb,b_bc){b_u[b_bb+'Node'+b_bc]=new Function('arguments.length'+'?(arguments[0]=this.getNode(arguments[0]))'+':(arguments[arguments.length++]=this.getNode());'+'return Uize.Node.'+b_bb+b_bc+'.apply(0,arguments)');}b_u.getNode=function(b_bd){if(b_bd==b_b){if(b_bd===b_b)return b_b;b_bd='';}var b_p=this;
if(b_p.b_be&&typeof b_bd==b_e){var b_bf=b_p.b_be[b_bd];if(b_bf!==b_i)b_bd=b_bf;}if(typeof b_bd==b_e){return b_m(b_bd,b_p.b_v,b_p.b_8||(b_p.b_8={}));}else if(b_l(b_bd)){return b_bd;}else{var b_bg=b_b;b_k(b_bd,function(b_bh){(b_bg||(b_bg=[])).push(b_bh)},b_p.b_v,b_p.b_8||(b_p.b_8={}));return b_bg;}};b_ba('get','Style');b_ba('get','Value');b_u.flushNodeCache=function(b_bi){if(this.b_8)b_bi==b_i?(this.b_8=b_b):delete this.b_8[b_bi];};b_u.globalizeNode=function(b_bj){var b_p=this,b_bk=document.body;b_k(b_p.getNode(b_bj),function(b_bh){if(b_bh.parentNode!=b_bk){(b_p.b_bl||(b_p.b_bl=[])).push(b_bh);b_j.setStyle(b_bh,{position:'absolute',left:-10000,top:-10000});b_bk.appendChild(b_bh);}});};b_ba('display','');b_ba('inject','Html');b_u.removeNode=function(b_bj){b_j.remove(this.getNode(b_bj));this.flushNodeCache(b_bj);};b_ba('set','Properties');b_ba('set','Opacity');b_ba('set','Style');b_ba('set','ClipRect');b_ba('set','InnerHtml');b_ba('set','Value');b_ba('show','');b_u.wireNode=function(b_bj,b_bm,b_bn){
arguments.length==3?b_j.wire(this.getNode(b_bj),b_bm,b_bn,this.instanceId):b_j.wire(this.getNode(b_bj),b_bm,this.instanceId);};b_u.unwireNode=function(b_bj,b_bm,b_bn){if(b_bj!==b_i)b_bj=this.getNode(b_bj);arguments.length==2&&typeof b_bm=='object'&&b_bm&& !b_bm.virtualDomEvent?b_j.unwire(b_bj,b_bm,this.instanceId):b_j.unwire(b_bj,b_bm,b_bn,this.instanceId);};b_u.unwireNodeEventsByMatch=function(b_bj,b_bo){this.unwireNode(b_bj,(b_bo||(b_bo={})).eventName,b_bo.handler);};b_u.addChild=function(b_C,b_bp,b_o){if(!b_o)b_o={};var b_p=this,b_v=b_p.b_v,b_bq=b_f.isInstance(b_bp)?b_bp:b_b,b_B='idPrefix'in b_o?b_o.idPrefix:b_o.node,b_br=b_o.idPrefixConstruction;b_o.parent=b_p;if(b_C==b_i)b_C=b_o.name;if(b_bq){if(b_C==b_i)b_C=b_bq.b_bs;if(b_B==b_i)b_B=b_bq.b_v;if(!b_br)b_br=b_bq.b_D;}b_o.idPrefix=b_p.b_z(b_v,b_B,b_o.name=b_C,b_o.idPrefixConstruction=b_br||(b_B==b_i?b_h:'explicit'));var b_s=b_p.b_s,b_bt=b_s[b_C];if(b_bt){b_f.copyInto(b_o,b_bt);delete b_s[b_C];}b_bq&&b_bq.set(b_o);return b_p.b_t[b_C]=b_bq||new b_bp(b_o);};
b_u.removeChild=function(b_bu){var b_t=this.b_t,b_C=typeof b_bu==b_e||b_f.isNumber(b_bu)?b_bu:b_bu.b_bs,b_bq=b_t[b_C];if(b_bq){b_bq.unwireUi();delete b_bq.parent;delete b_t[b_C];}};b_u.getProvider=function(b_bv){var b_bw=this,b_M;while(((b_M=b_bw.get(b_bv))==='inherit'||b_M===b_i)&&(b_bw=b_bw.parent));return b_bw;};b_u.getInherited=function(b_bv){var b_bx=this.getProvider(b_bv);return b_bx?b_bx.get(b_bv):b_i;};b_u.setInherited=function(b_o){var b_bx;for(var b_by in b_o){if(b_bx=this.getProvider(b_by))b_bx.set(b_by,b_o[b_by]);}};b_u.callInherited=function(b_bv){var b_p=this;return(function(){var b_bx=b_p.getProvider(b_bv),b_bg;if(b_bx){var b_bz=b_bx.get(b_bv);if(b_g(b_bz))b_bg=b_bz.apply(b_bx,arguments);}return b_bg;});};b_u.kill=function(){b_f.callOn(this.b_t,'kill');b_a.prototype.kill.call(this);};b_u.insertOrWireUi=function(){this.b_9?this.wireUi():this.insertUi();};b_u.insertUi=function(){this.buildHtml();this.wireUi();};b_u.removeUi=function(){this.unwireUi();this.removeNode();b_j.remove(this.b_bl);
this.b_bl=b_i;b_f.callOn(this.b_t,'removeUi');this.set({b_9:b_d});};b_u.updateUi=function(){};b_u.wireUi=function(){if(!this.isWired){this.b_y();this.set({wired:b_c});b_f.callOn(this.b_t,'insertOrWireUi');this.updateUi();}};b_u.unwireUi=function(){if(this.isWired){this.b_8=b_b;this.unwireNode();b_f.callOn(this.b_t,'unwireUi');this.set({wired:b_d});}};b_n.getBlankImageUrl=function(){return b_f.pathToResources+'Uize/blank.gif';};b_n.spawn=function(b_o,b_w){var b_p=this,b_bA=[],b_bw,b_bB=b_w&&b_w.b_v?b_w.b_v+'_':'',b_bC=b_bB.length;b_k(b_f.Node.find(b_o.idPrefix),function(b_bh){b_o.idPrefix=b_bh;b_w?(b_bw=b_w.addChild(b_bh.id.slice(0,b_bC)==b_bB?b_bh.id.slice(b_bC):'generatedChildName'+b_f.getGuid(),b_p,b_o)):(b_bw=new b_p(b_o)).insertOrWireUi();b_bA.push(b_bw);});return b_bA;};b_n.registerProperties({b_9:{name:'built',value:b_c},b_t:{name:'children',conformer:function(b_M){if(b_M){var b_t=this.b_t,b_s=this.b_s;for(var b_C in b_M){var b_bD=b_M[b_C];b_t[b_C]?b_t[b_C].set(b_bD):b_s[b_C]=b_bD;}}return this.b_t;}},
b_4:'container',b_2:'html',b_v:{name:'idPrefix|node',conformer:function(b_v){return(b_l(b_v)?(b_v.id||(b_v.id=b_f.getGuid())):b_v);},onChange:function(){var b_p=this,b_v=b_p.b_v;b_p.b_8=b_b;if(b_v!=b_i){b_p.b_y();var b_t=b_p.b_t,b_bq;for(var b_C in b_t)(b_bq=b_t[b_C]).set({b_v:b_p.b_z(b_v,b_bq.b_v,b_C,b_bq.b_D)});if(b_p.isWired){b_p.set({wired:b_d});b_p.wireUi();}}}},b_D:'idPrefixConstruction',b_7:'insertionMode',b_0:'localized',b_bs:'name',b_be:'nodeMap',isWired:{name:'wired',value:b_d}});b_E({b_bE:'busy',b_bF:'busyInherited'},b_d);b_E({b_bG:'enabled',b_bH:'enabledInherited'},b_c);return b_n;}});