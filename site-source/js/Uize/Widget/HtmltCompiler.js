/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.HtmltCompiler Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 3
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widget.HtmltCompiler= package module provides methods for compiling widget template JavaScript code from template source.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.HtmltCompiler',
	required:[
		'Uize.Parse.Xml.NodeList',
		'Uize.Parse.Xml.TagAttribute',
		'Uize.Parse.Xml.Text',
		'Uize.Json',
		'Uize.Str.Split',
		'Uize.Str.Trim'
	],
	builder:function () {
		var
			/*** Variables for Scruncher Optimization ***/
				_undefined,
				_split = Uize.Str.Split.split,

			/*** Variables for Performance Optimization ***/
				_trim = Uize.Str.Trim.trim,

			/*** General Variables ***/
				_sacredEmptyObject = {},
				_replacementTokenOpener = '{{[[',
				_replacementTokenCloser = ']]}}',
				_replacementTokenRegExp = new RegExp (
					Uize.escapeRegExpLiteral (_replacementTokenOpener) +
					'(.+?)' +
					Uize.escapeRegExpLiteral (_replacementTokenCloser),
					'g'
				),
				_extraClassesToken = _replacementTokenOpener + 'extraClasses' + _replacementTokenCloser,
				_trueFlag = {},
				_tagsThatSupportValueLookup = {
					option:_trueFlag,
					input:_trueFlag
				}
		;

		return Uize.package ({
			compile:function (_source,_templateOptions) {
				_templateOptions = _templateOptions || _sacredEmptyObject;
				var
					_nodeListParser = new Uize.Parse.Xml.NodeList (_source),
					_replacements = {},
					_replacementNamesByValue = {},
					_totalGeneratedReplacementNames = 0,
					_required = [],
					_alreadyRequired = {},
					_widgetClass = _templateOptions.widgetClass,
					_helperFunctions = {
						'_cssClass':{
							_source:'function _cssClass (_class) {return m.cssClass (_class)}'
						},
						'_childHtml':{
							_source:'function _childHtml (_properties) {return m.childHtml (_properties)}'
						},
						'_encodeAttributeValue':{
							_source:'function _encodeAttributeValue (_value) {return Uize.Util.Html.Encode.encode (_value)}',
							_required:['Uize.Util.Html.Encode']
						}
					}
				;

				function _addRequired (_moduleOrModules) {
					if (_moduleOrModules) {
						function _addSingleRequired (_module) {
							if (_alreadyRequired [_module] != _trueFlag) {
								_alreadyRequired [_module] = _trueFlag;
								_required.push (_module);
							}
						}
						typeof _moduleOrModules == 'string'
							? _addSingleRequired (_moduleOrModules)
							: Uize.forEach (_moduleOrModules,_addSingleRequired)
						;
					}
				}

				function _ensureNodeAttribute (_node,_attributeName,_attributeValue) {
					var _attribute = _findAttribute (_node,_attributeName);
					_attribute ||
						_node.tagAttributes.attributes.push (
							_attribute = new Uize.Parse.Xml.TagAttribute (_attributeName + '=""')
						)
					;
					if (_attributeValue != _undefined)
						_attribute.value.value = _attributeValue
					;
					return _attribute;
				}

				/*** find root tag node and give it special treatment for id and class attributes ***/
					function _findAttribute (_node,_attributeName) {
						return Uize.findRecord (
							_node.tagAttributes.attributes,
							function (_attribute) {return _attribute.name.name == _attributeName}
						);
					}

					function _getAttributeValue (_node,_attributeName) {
						var _attribute = _findAttribute (_node,_attributeName);
						return _attribute && _attribute.value.value;
					}

					var _rootNode = Uize.findRecord (
						_nodeListParser.nodes,
						function (_node) {return !!_node.tagName && !_getAttributeValue (_node,'id')}
					);
					_rootNode && _ensureNodeAttribute (_rootNode,'id','');

				/*** build a lookup of HTML bindings by node ID ***/
					var _bindingsById = {};
					_widgetClass && Uize.forEach (
						_widgetClass.mHtmlBindings_bindings,
						function (_bindings) {
							Uize.forEach (
								_bindings,
								function (_binding) {
									if (_binding.bindingType) {
										var _id = _binding.nodeName;
										(_bindingsById [_id] || (_bindingsById [_id] = [])).push (_binding);
									}
								}
							);
						}
					);

				/*** recurse parser object tree, process tag nodes and build replacements lookup ***/
					function _processNode (_node) {
						function _helperFunctionCall (_helperFunctionName,_serializedArguments) {
							var _helperFunction = _helperFunctions [_helperFunctionName];
							_helperFunction._totalCalls = (_helperFunction._totalCalls || 0) + 1;
							return _helperFunctionName + ' (' + _serializedArguments + ')';
						}

						function _splitCssClasses (_classes) {
							return _split (_trim (_classes),/\s+/);
						}

						function _classNamespacerExpression (_class) {
							return _helperFunctionCall ('_cssClass','\'' + _class + '\'');
						}

						function _propertyReference (_propertyName) {
							return 'i[' + Uize.Json.to (_propertyName) + ']';
						}

						function _getReplacementTokenByValue (_replacementValue) {
							var _replacementName = _replacementNamesByValue [_replacementValue];
							if (!_replacementName)
								_replacements [
									_replacementName = _replacementNamesByValue [_replacementValue] =
										'r' + _totalGeneratedReplacementNames++
								] = _replacementValue
							;
							return _replacementTokenOpener + _replacementName + _replacementTokenCloser;
						}

						function _addAttributeValueReplacement (_attribute,_replacementValue) {
							_attribute.value.value = _getReplacementTokenByValue (_replacementValue);
						}

						function _addWholeAttributeReplacement (_node,_attributeName,_replacementValue) {
							_ensureNodeAttribute (_node,_attributeName).serialize = function () {
								return _getReplacementTokenByValue (_replacementValue);
							};
						}

						function _addInnerHtmlReplacement (_node,_replacementValue) {
							(_node.childNodes || (_node.childNodes = new Uize.Parse.Xml.NodeList)).parse (
								_getReplacementTokenByValue (_replacementValue)
							);
						}

						var _tagName = (_node.tagName || _sacredEmptyObject).name;
						if (_tagName) {
							var
								_idAttribute = _findAttribute (_node,'id'),
								_nodeId = _idAttribute && _idAttribute.value.value
							;
							if (_idAttribute) {
								_addAttributeValueReplacement (
									_idAttribute,
									'_idPrefix' + (_nodeId && ' + \'-' + _nodeId + '\'')
								);

								var _bindings = _bindingsById [_nodeId];
								if (_bindings) {
									var _styleExpressionParts = [];
									Uize.forEach (
										_bindings,
										function (_binding) {
											function _addStylePropertyReplacement (_stylePropertyName,_replacementValue) {
												_styleExpressionParts.push (
													Uize.Json.to (
														_stylePropertyName.replace (
															/* TODO: put this into a separate Uize.Str.* module */
															/([a-z])([A-Z])/g,
															function (_match,_lowerCaseLetter,_upperCaseLetter) {
																return _lowerCaseLetter + '-' + _upperCaseLetter.toLowerCase ();
															}
														) +
														':'
													) + ' + ' + _replacementValue + ' + \';\''
												);
											}

											var
												_bindingType = _binding.bindingType,
												_bindingProperty = _binding.propertyName,
												_bindingPropertyReference = _propertyReference (_bindingProperty)
											;
											/*** remap binding types ***/
												if (_bindingType == 'className') {
													_bindingType = '@class';
												}

											if (_bindingType == 'value') {
												if (_tagsThatSupportValueLookup [_tagName]) {
													if (_tagName == 'input') {
														var _inputType = _getAttributeValue (_node,'type');
														if (_inputType == 'text') {
															_addAttributeValueReplacement (
																_ensureNodeAttribute (_node,'value'),
																_helperFunctionCall ('_encodeAttributeValue',_bindingPropertyReference)
															);
														} else if (_inputType == 'checkbox') {
															_addWholeAttributeReplacement (
																_node,
																'checked',
																'(' + _bindingPropertyReference + ' ? \'checked="checked"\' : \'\')'
															);
														}
													} else if (_tagName == 'select') {
														/*
															- must iterate over child nodes to find option nodes and add replacement expression for selected attribute
														*/
													}
												} else {
													_addInnerHtmlReplacement (
														_node,
														_helperFunctionCall ('_encodeAttributeValue',_bindingPropertyReference)
													);
												}
											} else if (_bindingType == 'html' || _bindingType == 'innerHTML') {
												_addInnerHtmlReplacement (_node,_bindingPropertyReference);
											} else if (_bindingType == '?' || _bindingType == 'show') {
												_addStylePropertyReplacement (
													'display',
													'(' + _bindingPropertyReference + ' ? \'\' : \'none\')'
												);
											} else if (_bindingType == 'hide') {
												_addStylePropertyReplacement (
													'display',
													'(' + _bindingPropertyReference + ' ? \'none\' : \'\')'
												);
											} else if (_bindingType.charCodeAt (0) == 64) {
												var _attributeName = _bindingType.slice (1);
												_addAttributeValueReplacement (
													_ensureNodeAttribute (_node,_attributeName),
													_attributeName == 'class'
														? _bindingPropertyReference
														: _helperFunctionCall ('_encodeAttributeValue',_bindingPropertyReference)
												);
											} else if (_bindingType.slice (0,6) == 'style.') {
												_addStylePropertyReplacement (_bindingType.slice (6),_bindingPropertyReference);
											}
										}
									);
									if (_styleExpressionParts.length) {
										var
											_styleAttribute = _ensureNodeAttribute (_node,'style'),
											_styleAttributeValue = _styleAttribute.value.value
										;
										_addAttributeValueReplacement (
											_styleAttribute,
											(_styleAttributeValue ? Uize.Json.to (_styleAttributeValue) + ' + ' : '') +
											_styleExpressionParts.join (' + ')
										);
									}
								}
							}
							if (_nodeId !== '') {
								var _classAttribute = _findAttribute (_node,'class');
								if (_classAttribute) {
									var _classTokens = [];
									Uize.forEach (
										_splitCssClasses (_classAttribute.value.value),
										function (_cssClass) {
											_classTokens.push (
												_getReplacementTokenByValue (_classNamespacerExpression (_cssClass))
											);
										}
									);
									_classAttribute.value.value = _classTokens.join (' ');
								}
							}
						}
						var _childNodes = _node.childNodes;
						if (_childNodes) {
							var _nodes = _childNodes.nodes;
							Uize.forEach (
								_nodes,
								function (_node,_nodeNo) {
									var _tagName = _node.tagName;
									if (_tagName) {
										if (_tagName.name == 'child') {
											/*** build lookup of attributes, to be used for child widget properties ***/
												var _attributesLookup = {};
												Uize.forEach (
													_node.tagAttributes.attributes,
													function (_attribute) {
														_attributesLookup [_attribute.name.name] = _attribute.value.value;
													}
												);
												var _childName = _attributesLookup.name;

											/*** special handling for the extraClasses property ***/
												var _extraClasses = _attributesLookup.extraClasses;
												if (_extraClasses) {
													_extraClasses = Uize.map (
														_splitCssClasses (_extraClasses),
														_classNamespacerExpression
													).join (' + \' \' + ');
													_attributesLookup.extraClasses = _extraClassesToken;
												}

											_widgetClass && _addRequired (_widgetClass);

											/*** add replacement and replace child tag node with text node ***/
												var _serializedProperties = Uize.Json.to (_attributesLookup,'mini');
												_nodes [_nodeNo] = new Uize.Parse.Xml.Text (
													_getReplacementTokenByValue (
														_helperFunctionCall (
															'_childHtml',
															_extraClasses
																? _serializedProperties.replace (
																	'\'' + _extraClassesToken + '\'',
																	_extraClasses
																)
																: _serializedProperties
														)
													)
												);
										} else {
											_processNode (_node);
										}
									}
								}
							);
						}
					}
					_processNode ({childNodes:_nodeListParser});

				/*** split re-serialized HTML by replacement tokens and resolve all fragments to expressions ***/
					var
						_fragmentOccurrences = {},
						_fragmentsToVarize = {},
						_fragments = Uize.map (
							Uize.Str.Split.split (_nodeListParser.serialize (),_replacementTokenRegExp),
							function (_segment,_segmentNo) {
								var _fragment = _segmentNo % 2 ? _replacements [_segment] : Uize.Json.to (_segment);
								if (!_fragmentsToVarize [_fragment]) {
									var
										_fragmentLength = _fragment.length,
										_occurrences =
											_fragmentOccurrences [_fragment] = (_fragmentOccurrences [_fragment] || 0) + 1
									;
									if (_occurrences * _fragmentLength > 3 + _fragmentLength + _occurrences * 2)
										_fragmentsToVarize [_fragment] = true
									;
								}
								return _fragment;
							}
						)
					;

				var
					_fragmentNo = 0,
					_varChunks = [
						'm = this',
						'i = arguments [0]',
						'_idPrefix = i.idPrefix'
					]
				;

				Uize.forEach (
					_fragmentsToVarize,
					function (_true,_fragmentToCapture) {
						var _fragmentVar = '_fragment' + _fragmentNo++;
						_varChunks.push (_fragmentVar + ' = ' + _fragmentToCapture);
						_fragmentsToVarize [_fragmentToCapture] = _fragmentVar;
					}
				);

				var
					_templateFunctionCode =
						Uize.map (
							Uize.keys (_helperFunctions),
							function (_helperFunctionName) {
								var _helperFunction = _helperFunctions [_helperFunctionName];
								if (_helperFunction._totalCalls) {
									_addRequired (_helperFunction._required);
									return _helperFunction._source + '\n';
								} else {
									return '';
								}
							}
						).join ('') +
						'var\n' +
							'\t' + _varChunks.join (',\n\t') + '\n' +
						';\n' +
						'return (\n' +
							'\t' +
							Uize.map (
								_fragments,
								function (_fragment) {return _fragmentsToVarize [_fragment] || _fragment}
							).join (' + ') +
						'\n);\n',
					_templateFunction = Function (_templateFunctionCode)
				;

				return (
					_templateOptions.result == 'full'
					? {
						required:_required,
						code:_templateFunctionCode,
						templateFunction:_templateFunction
					}
					: _templateFunction
				);
			}
		});
	}
});

