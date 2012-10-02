/*
	This is an automatically generated module, compiled from the JavaScript template file:
		Uize.Templates.Log.js.jst
*/

Uize.module ({
	name:'Uize.Templates.Log',
	builder:function () {
		var _package = function () {};

		/*** Public Static Methods ***/
			_package.process = function (input) {
				var output = [];
				/* Module Meta Data
					type: Template
					importance: 1
					codeCompleteness: 100
					testCompleteness: 0
					docCompleteness: 100
				*/
				/*?
					Introduction
						The =Uize.Templates.Log= module generates HTML that can be used for instances of the =Uize.Widget.Log= class.

						*DEVELOPERS:* `Chris van Rensburg`

						The =Uize.Templates.Log= module is a JavaScript Template Module that is automatically generated by a build script from a companion =Uize.Templates.Log.js.jst= JavaScript Template (.jst) file.

					Public Static Methods
						Uize.Templates.Log.process
							Returns a string, being the generated HTML that is to be used by an instance of the =Uize.Widget.Log= class (or subclass).

							SYNTAX
							......................................................
							widgetHtmlSTR = Uize.Templates.Log.process (inputOBJ);
							......................................................

							The value of the =inputOBJ= parameter should be an object of the form...

							.........................
							{
								idPrefix: idPrefixSTR,
								title: titleHtmlSTR
							}
							.........................

							idPrefix
								A string, specifying the value of the =idPrefix= state property of the widget instance that uses this module to generate its HTML.

					Public Static Properties
						Uize.Templates.Log.input
							An object, describing the allowed properties of the =inputOBJ= parameter of the =Uize.Templates.Log.process= static method.
				*/
				output.push ('<div id="',input .idPrefix,'" class="log">\r\n	<div class="logHeading">\r\n		<span>',input. title,'</span>\r\n		<a id="',input .idPrefix,'_clear" href="javascript://" class="logClearButton button">clear</a>\r\n	</div>\r\n	<div id="',input .idPrefix,'-messages" class="logMessages"></div>\r\n</div>\r\n\r\n');
				return output.join ('');
			};

		/*** Public Static Properties ***/
			_package.input = {
				idPrefix:'string',
				title:'string'
			};

		return _package;
	}
});
