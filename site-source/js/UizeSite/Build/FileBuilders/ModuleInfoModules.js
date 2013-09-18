/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Build.FileBuilders.ModuleInfoModules Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =UizeSite.Build.FileBuilders.ModuleInfoModules= module defines a file builder for the generated module info modules under the =UizeSite.ModuleInfo= namespace.

		*DEVELOPERS:* `Chris van Rensburg`

		Functions defined in the file builder are called as instance methods on an instance of a subclass of the =Uize.Services.FileBuilderAdapter= class, so the functions can access instance methods implemented in this class.
*/

Uize.module ({
	name:'UizeSite.Build.FileBuilders.ModuleInfoModules',
	required:[
		'Uize.Build.Util',
		'Uize.String'
	],
	builder:function () {
		var
			_moduleInfoModulesNamespace = 'UizeSite.ModuleInfo' + '.',
			_moduleInfoModulesNamespaceLength = _moduleInfoModulesNamespace.length,
			_jsModuleExtensionRegExp = Uize.Build.Util.jsModuleExtensionRegExp
		;

		function _moduleNameFromBuiltPath (m,_path) {
			return m.moduleNameFromPath (_path,'built');
		}

		return Uize.package ({
			description:'Generated module info modules under temp',
			urlMatcher:function (_urlParts) {
				var _pathname = _urlParts.pathname;
				return (
					this.isBuiltUrl (_pathname) &&
					_jsModuleExtensionRegExp.test (_pathname) &&
					Uize.String.startsWith (_moduleNameFromBuiltPath (this,_pathname),_moduleInfoModulesNamespace)
				);
			},
			builderInputs:function (_urlParts) {
				var
					m = this,
					_moduleUrl = m.getModuleUrl (
						_moduleNameFromBuiltPath (m,_urlParts.pathname).slice (_moduleInfoModulesNamespaceLength)
					)
				;
				return {
					metaData:m.memoryUrl (_moduleUrl + '.metadata'),
					builtSize:m.memoryUrl (_moduleUrl + '.builtsize')
				};
			},
			builder:function (_inputs,_urlParts) {
				return Uize.Build.Util.dataAsModule (
					_moduleNameFromBuiltPath (this,_urlParts.pathname),
					{
						metaData:this.readFile ({path:_inputs.metaData}),
						builtSize:this.readFile ({path:_inputs.builtSize})
					}
				);
			}
		});
	}
});

