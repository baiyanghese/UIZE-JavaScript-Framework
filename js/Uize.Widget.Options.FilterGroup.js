/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-06

	http://www.uize.com/reference/Uize.Widget.Options.FilterGroup.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Options.FilterGroup',required:['Uize.Widget.Button.Filter','Uize.Node.Classes'],builder:function(d_a){var d_b=true,d_c=false,d_d=Uize.Node.Classes;var d_e=d_a.subclass(),d_f=d_e.prototype;d_f.d_g=function(){var d_h=this;d_h.isWired&&d_d.setState(d_h.getNode('options'),['',d_h.d_i],d_h.d_j);};d_f.d_k=function(){var d_h=this,d_l=d_b;d_h.isWired&&d_h.forAll(function(d_m){var d_n=d_m.get('count'),d_o= !d_h.d_p||d_n;d_m.displayNode('',d_o);d_m.set({enabled:!d_n?d_c:'inherit'});if(d_o)d_l=d_c;});d_h.displayNode('',!d_l&&d_h.get('values').length>1);};d_f.d_q=function(){this.isWired&&this.setNodeInnerHtml('title',this.d_r)};d_f.updateCounts=function(d_s){var d_h=this,d_t=d_s.length;if(d_h.isWired){d_s&&d_t&&d_h.forAll(function(d_m,d_u){d_u<d_t&&d_m.set({count:d_s[d_u]})});d_h.d_k();}};d_f.updateUi=function(){var d_h=this;if(d_h.isWired){d_h.d_q();d_h.d_g();d_h.d_k();d_a.prototype.updateUi.call(d_h);}};d_e.registerProperties({d_j:{name:'expanded',onChange:d_f.d_g,value:d_c},d_i:{
name:'expandedCssClass',onChange:d_f.d_g,value:''},d_p:{name:'hideWhenZero',onChange:d_f.d_k,value:d_b},d_r:{name:'title',onChange:d_f.d_q,value:''}});d_e.set({optionWidgetClass:Uize.Widget.Button.Filter,ensureValueInValues:d_b});return d_e;}});