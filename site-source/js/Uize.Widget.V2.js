/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.V2 Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widget.V2= class implements the next generation widget base class and is currently under development.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.V2',
	required:[
		'Uize.Json',
		'Uize.Node'
	],
	builder:function (_superclass) {
		'use strict';

		/*** Variables for Scruncher Optimization ***/
			var _undefined = undefined;

		/*** General Variables ***/
			var
				_trueFlag = {},
				_cssAddedLookup = {}
			;

		/*** Utility Functions ***/
			function _cssClassPrefixFromModuleName (_moduleName) {
				return _moduleName.replace (/\./g,'_');
			}

			function _cssClassPrefixFromModule (_module) {
				return _module._classPrefix || (_module._classPrefix = _cssClassPrefixFromModuleName (_module.moduleName));
			}

			function _cssClassNameGeneratorFromModules (_modules) {
				var _classNameGeneratorStr = '';
				for (var _moduleNo = -1, _modulesLength = _modules.length, _cssModule; ++_moduleNo < _modulesLength;) {
					_cssModule = _modules [_moduleNo].cssModule;
					if (_cssModule)
						_classNameGeneratorStr +=
							(_classNameGeneratorStr && ' + \' \' + ') +
							'\'' + _cssClassPrefixFromModule (_cssModule) + '\' + classSuffix'
					;
				}
				return new Function (
					'nodeName',
					'var classSuffix = (nodeName || \'\') && \'-\' + nodeName;' +
					'return ' + _classNameGeneratorStr + ';'
				);
			}

			function _resolvePropertyUpdater (_propertyName,_updater) {
				if (typeof _updater == 'string')
					_updater = function (_propertyValue) {
						this.setNodeInnerHtml (_propertyName,_propertyValue);
					}
				;
				return _updater;
			}

		var _class = _superclass.subclass ({
			alphastructor:function () {
				this.Class._needCss ();
			},

			instanceMethods:{
				addChildren:function (_children,_commonProperties) {
					for (var _childName in _children) {
						var
							_childProperties = Uize.copy (_children [_childName],_commonProperties),
							_widgetClass = _childProperties.widgetClass
						;
						delete _childProperties.widgetClass;
						this.addChild (_childName,_widgetClass,_childProperties);
					}
				},

				childHtml:function (_properties) {
					var
						_this = this,
						_childName = _properties.name,
						_widgetClass = Uize.getModuleByName (_properties.widgetClass) || _class,
						_widgetClassName = _widgetClass.moduleName,
						_children = _this.children
					;

					delete _properties.name;
					delete _properties.widgetClass;

					var _suppliedState = Uize.copy (_properties);

					/*** if child name not specified, generate one using widget class module name ***/
						if (!_childName) {
							_this._generatedChildNames || (_this._generatedChildNames = 0);
							_childName = 'generatedChildName' + _this._generatedChildNames++;
						}

					var
						_html = '',
						_child = _children [_childName],
						_childExisted = !!_child
					;
					_child
						? _child.set (_properties)
						: (_child = _this.addChild (_childName,_widgetClass,_properties))
					;
					_html = _child.get ('built')
						? _child.getHtml ()
						: '<div id="' + _child.nodeId ('shell') + '"></div>'
					;
					_childExisted ||
						Uize.copyInto (_suppliedState,{widgetClass:_widgetClassName})
					;
					if (!Uize.isEmpty (_suppliedState))
						_html +=
							'<script type="text/javascript">\n' +
								'$' + _child.get ('idPrefix') + ' = ' +
									Uize.Json.to (_suppliedState)
										.replace (/<script/g,'<s\\cript')
										.replace (/<\/script/g,'</s\\cript') +
								';\n' +
							'</script>'
					;

					return _html;
				},

				nodeId:function (_nodeId) {
					return Uize.Node.joinIdPrefixAndNodeId (this.get ('idPrefix'),_nodeId || '');
				},

				rootNodeCssClasses:function () {
					var
						_this = this,
						_extraClasses = _this._extraClasses,
						_stateToCssBindings = _this.Class._stateToCssBindings,
						_cssClasses = [_this.cssClass ()],
						_cssClassSuffix
					;
					for (var _property in _stateToCssBindings)
						if (_cssClassSuffix = _stateToCssBindings [_property] (_this.get (_property)))
							_cssClasses.push (_this.cssClass (_cssClassSuffix))
					;
					return _cssClasses.join (' ') + (_extraClasses && ' ' + _extraClasses);
				},

				cssClass:function (_className) {
					var
						_thisClass = this.Class,
						_thisClassName = _thisClass.moduleName,
						_cssClassNameGenerators =
							_thisClass._cssClassNameGenerators || (_thisClass._cssClassNameGenerators = {})
					;
					if (!_cssClassNameGenerators [_thisClassName]) {
						var
							_inheritanceChain = [],
							_module = _thisClass
						;
						while (_module) {
							_inheritanceChain.unshift (_module);
							if (_module == _class) break;
							_module = _module.superclass;
						}
						_cssClassNameGenerators [_thisClassName] = _cssClassNameGeneratorFromModules (_inheritanceChain);
					}
					return _cssClassNameGenerators [_thisClassName] (_className);
				},

				_updateRootNodeClasses:function () {
					this.Class.enableRootNodeCssClasses && this.set ({_rootNodeCssClasses:this.rootNodeCssClasses ()});
				},

				wireUi:function () {
					var _this = this;
					if (!_this.isWired) {
						_superclass.doMy (_this,'wireUi');

						_this._updateRootNodeClasses ();

						/*** wire up handlers for state properties that have CSS bindings ***/
							var
								_stateToCssBindings = _this.Class._stateToCssBindings,
								_updateRootNodeClasses = function () {_this._updateRootNodeClasses ()},
								_wiringsForStateToCssBindings = {}
							;
							for (var _property in _stateToCssBindings)
								_wiringsForStateToCssBindings ['Changed.' + _property] = _updateRootNodeClasses
							;
							_this.wire (_wiringsForStateToCssBindings);

						/*** wire up handlers for state properties that have HTML bindings ***/
							var
								_getHtmlUpdaterForProperty = function (_property) {
									var
										_updaters = _stateToHtmlBindings [_property],
										_updatersLength = _updaters.length
									;
									return function () {
										var _propertyValue = _this.get (_property);
										for (var _updaterNo = -1; ++_updaterNo < _updatersLength;)
											_updaters [_updaterNo].call (_this,_propertyValue)
										;
									};
								},
								_stateToHtmlBindings = _this.Class._stateToHtmlBindings,
								_wiringsForStateToHtmlBindings = {}
							;
							for (var _property in _stateToHtmlBindings)
								_wiringsForStateToHtmlBindings ['Changed.' + _property] = _getHtmlUpdaterForProperty (_property)
							;
							_this.wire (_wiringsForStateToHtmlBindings);
					}
				},

				superHtml:function (_input,_extraInput) {
					return this.Class.superclass.get ('html').process.call (this,Uize.copy (_input,_extraInput));
				}
			},

			staticMethods:{
				_needCss:function () {
					var
						_this = this,
						_moduleName = _this.moduleName
					;
					if (_cssAddedLookup [_moduleName] != _trueFlag) {
						_cssAddedLookup [_moduleName] = _trueFlag;
						_this.superclass._needCss && _this.superclass._needCss ();
						_this.cssModule && _this.cssModule.add ();
					}
				},

				stateToCssBindings:function (_bindings) {
					Uize.copyInto (this._stateToCssBindings,Uize.map (_bindings,Uize.resolveTransformer));
				},

				stateToHtmlBindings:function (_bindings) {
					var _stateToHtmlBindings = this._stateToHtmlBindings;
					Uize.forEach (
						_bindings,
						function (_updater,_property) {
							(_stateToHtmlBindings [_property] || (_stateToHtmlBindings [_property] = [])).push (
								_resolvePropertyUpdater (_property,_updater)
							);
						}
					);
				}
			},

			staticProperties:{
				_stateToCssBindings:{},
				_stateToHtmlBindings:{},
				enableRootNodeCssClasses:true
			},

			stateProperties:{
				_rootNodeCssClasses:{
					onChange:function () {
						var
							_this = this,
							_rootNodeCssClasses = _this._rootNodeCssClasses
						;
						_this.isWired && _rootNodeCssClasses != _undefined &&
							_this.setNodeProperties ('',{className:_rootNodeCssClasses})
						;
					}
				},
				_extraClasses:{
					name:'extraClasses',
					value:''
				}
			},

			set:{
				html:{
					process:function () {
						var
							_this = this,
							_children = _this.children,
							_htmlChunks = ['<div id="' + _this.nodeId () + '">'],
							_htmlChunksLength = 1
						;
						for (var _childName in _children)
							_htmlChunks [_htmlChunksLength++] = _children [_childName].getHtml ()
						;
						_htmlChunks [_htmlChunksLength] = '</div>';
						return _htmlChunks.join ('');
					}
				}
			}
		});

		Uize.copyInto (
			_class.nonInheritableStatics,
			{
				_cssClassNameGenerators:1,
				cssModule:1
			}
		);

		return _class;
	}
});

