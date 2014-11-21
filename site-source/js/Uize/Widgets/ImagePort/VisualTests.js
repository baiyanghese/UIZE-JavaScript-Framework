/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.ImagePort.VisualTests Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.ImagePort.VisualTests= class implements a set of visual tests for the =Uize.Widgets.ImagePort.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.ImagePort.VisualTests',
	superclass:'Uize.Widgets.VisualTests.Widget',
	required:[
		'Uize.Widgets.ImagePort.Widget',
		'Uize.Widgets.StateValues'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateCombinationTestCases ({
					size:Uize.Widgets.StateValues.size
				});
			},

			staticProperties:{
				widgetClass:Uize.Widgets.ImagePort.Widget
			}
		});
	}
});
