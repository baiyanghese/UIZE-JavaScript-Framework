/*
	UIZE Web Site 2012-07-06

	http://www.uize.com/reference/UizeDotCom.TestWidget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.TestWidget',superclass:'Uize.Widget',required:'Uize.Widget.Button',builder:function(c_a){var c_b=c_a.subclass(function(){var c_c=this;c_c.c_d('button1',function(){alert(c_c.get('idPrefix')+' --- click button 1');});c_c.c_d('button2',function(){alert(c_c.get('idPrefix')+' --- click button 2');});var c_e=function(){c_c.updateUi()};c_c.wire({'Changed.enabled':c_e,'Changed.busy':c_e});}),c_f=c_b.prototype;c_f.c_d=Uize.Widget.Button.addChildButton;c_f.updateUi=function(){var c_c=this;if(c_c.isWired){c_c.setNodeValue('enabledSelector',c_c.get('enabled'));c_c.setNodeValue('busySelector',c_c.get('busy'));}};c_f.wireUi=function(){var c_c=this;if(!c_c.isWired){var c_g={'false':false,'true':true,inherit:'inherit'};c_c.wireNode('enabledSelector','change',function(){c_c.set({enabled:c_g[c_c.getNodeValue('enabledSelector')]})});c_c.wireNode('busySelector','change',function(){c_c.set({busy:c_g[c_c.getNodeValue('busySelector')]})});c_a.prototype.wireUi.call(c_c);}};
c_f.resetEnabledAndBusy=function(){this.set({enabled:'inherit',busy:'inherit'});Uize.callOn(this.children,'resetEnabledAndBusy');};c_b.set({html:'<div class="widgetShell">'+'<div class="heading">[#idPrefix]</div>'+'<div class="body">'+'ENABLED: '+'<select id="[#idPrefix]-enabledSelector">'+'<option value="inherit" selected>inherit</option>'+'<option value="true">true</option>'+'<option value="false">false</option>'+'</select>'+'&nbsp;&nbsp;|&nbsp;&nbsp;'+'BUSY: '+'<select id="[#idPrefix]-busySelector">'+'<option value="inherit" selected>inherit</option>'+'<option value="true">true</option>'+'<option value="false">false</option>'+'</select>'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'<span id="[#idPrefix]_button1" class="button">BUTTON 1</span>'+'<span id="[#idPrefix]_button2" class="button">BUTTON 2</span>'+'<br clear="left"/>'+'<div id="[#idPrefix]_childTestWidget0"></div>'+'<div id="[#idPrefix]_childTestWidget1"></div>'+'</div>'+'</div>'});return c_b;}});