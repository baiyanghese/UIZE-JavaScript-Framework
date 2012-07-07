/*
	UIZE Web Site 2012-07-06

	http://www.uize.com/reference/UizeDotCom.Page.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Page',superclass:'Uize.Widget.Page',required:['Uize.Node.VirtualEvent','UizeDotCom.SiteMap','Uize.Widget.Tree.Menu','Uize.Url','Uize.Fx','Uize.Curve','Uize.Curve.Rubber','UizeDotCom.Templates.ShareThisPanel','UizeDotCom.Templates.Footer'],builder:function(d_a){var d_b=d_a.subclass(),d_c=d_b.prototype;d_c.getPathToRoot=function(){var d_d=this.getNode('homeLink').getAttribute('href');return d_d.slice(0,d_d.search(/[\w\-]+.html/));};d_c.performSearch=function(d_e,d_f){location.href=Uize.Url.resolve('http://www.google.com/search',{hl:'en',safe:'off',domains:d_f='uize.com'+(d_f||''),sitesearch:d_f,q:d_e});};d_c.viewSource=function(d_g,d_h){var d_i=this.launchPopup({name:'viewSource',width:1000,height:740});Uize.module({required:'Uize.Comm.Ajax',builder:function(){Uize.Comm.Ajax().request({url:d_g,requestMethod:'GET',returnType:'text',callback:function(d_j){var d_k=d_i.document;d_k.open('text/html');
d_k.writeln('<html><head><title>'+d_h+'</title></head><body style="padding:0; margin:0;"><div style="font-family:Arial; color:#fff; font-weight:bold; background:#000; border-bottom:5px solid #ccc; text-align:center;">'+d_h+'</div><pre style="padding:8px;">'+d_j.replace(/</g,'&lt;').replace(/\t/g,'   ')+'</pre></body></html>');d_k.close();}});}});};d_c.wireUi=function(){var d_l=this;if(!d_l.isWired){function d_m(){d_l.unwireNode('homeLink','mouseover',d_m);var d_n=[{title:'',link:'index.html',items:UizeDotCom.SiteMap()}],d_o=page.addChild('siteMenu',Uize.Widget.Tree.Menu,{items:d_n,menuCssClass:'siteMenuShell',menuDividerClass:'divider',menuItemActiveCssClass:'siteMenuItemActive',menuItemChildrenIndicatorCssClass:'siteMenuItemWithChildren',menuItemCssClass:'siteMenuItem',subMenuCssClass:'subMenuShell',subMenuDividerClass:'divider',subMenuItemActiveCssClass:'subMenuItemActive',subMenuItemChildrenIndicatorCssClass:'subMenuItemWithChildren',subMenuItemCssClass:'subMenuItem',built:false});
var d_p=d_l.getPathToRoot();d_o.traverseTree({itemHandler:function(d_q){if(d_q.link!=null)d_q.link=d_p+d_q.link;}});var d_r=d_n[0].items;var d_s=d_l.d_t&&d_l.d_t[0];d_s&&d_r.unshift({title:'ON THIS PAGE...',link:'',items:d_s.items},{title:'-'});d_r.push({title:'-'},{title:'WINDOW SIZE',items:[{title:'1024 x 768',link:'javascript:moveTo ((screen.width - 1024) >> 1,0); resizeTo (1024,768)'},{title:'1024 x MAX HEIGHT',link:'javascript:moveTo ((screen.width - 1024) >> 1,0); resizeTo (1024,screen.height)'}]});d_l.injectNodeHtml(d_l.getNode('homeLink').parentNode,'<div id="page_siteMenu-shell" class="siteMenuIcon"></div>');d_o.insertOrWireUi();d_o.setExpandedDepth(1);}d_l.wireNode('homeLink','mouseover',d_m);if(d_l.d_u){function d_v(d_w){var d_x=Uize.Node.find({tagName:'meta',self:function(){return this.name==d_w}})[0];return d_x?d_x.content:'';}Uize.Node.injectHtml(document.body,UizeDotCom.Templates.ShareThisPanel.process({title:document.title.match(/^\s*(.*?)\s*(\||$)/)[1],url:location.href,
keywords:d_v('keywords'),description:d_v('description')}));d_l.wireNode('shareThisPanel',{mouseover:function(){Uize.Fx.fadeStyle(this,null,{opacity:1},300)},'mouserest(250)':function(){Uize.Fx.fadeStyle(this,null,{left:1},600,{curve:Uize.Curve.easeInOutPow(5)})},mouseout:function(){Uize.Fx.fadeStyle(this,null,{opacity:.2},300).wire('Done',function(){Uize.Fx.fadeStyle(d_l.getNode('shareThisPanel'),null,{left:-112},1200,{curve:Uize.Curve.Rubber.easeOutBounce(4,1.5)})});}});Uize.Fx.fadeStyle(d_l.getNode('shareThisPanel'),null,{opacity:.2},1000);}d_l.d_y&&Uize.Node.injectHtml(document.body,UizeDotCom.Templates.Footer.process());d_a.prototype.wireUi.call(d_l);}};d_b.registerProperties({d_t:'contentsTreeItems',d_y:{name:'showFooter',value:true},d_u:{name:'showShareThisPanel',value:true}});d_b.set({confirmDialog:{widgetClassName:'UizeDotCom.DialogConfirm'}});return d_b;}});