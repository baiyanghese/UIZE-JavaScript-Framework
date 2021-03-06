/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.SimpleStatsTable.Sortable.VisualTests Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 20
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.SimpleStatsTable.Sortable.VisualTests= class implements a set of visual tests for the =Uize.Widgets.SimpleStatsTable.Sortable.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.SimpleStatsTable.Sortable.VisualTests',
	superclass:'Uize.Widgets.VisualTests.Widget',
	required:[
		'Uize.Widgets.SimpleStatsTable.Sortable.Widget',
		'Uize.Widgets.SimpleStatsTable.TestsData'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateTestCase (Uize.Widgets.SimpleStatsTable.TestsData);
			},

			staticProperties:{
				widgetClass:Uize.Widgets.SimpleStatsTable.Sortable.Widget
			}
		});
	}
});

