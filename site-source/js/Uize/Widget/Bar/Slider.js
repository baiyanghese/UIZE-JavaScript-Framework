/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.Bar.Slider Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2005-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 5
	codeCompleteness: 100
	docCompleteness: 60
*/

/*?
	Introduction
		The =Uize.Widget.Bar.Slider= class implements a slider widget that lets the user select a value by clicking-and-dragging the slider knob along a track.

		*DEVELOPERS:* `Chris van Rensburg`

		With the =Uize.Widget.Bar= superclass, the =knob= implied node acts purely as a value indicator, but with the =Uize.Widget.Bar.Slider= class, the knob is draggable by the user.

		###
			- explain anatomy of a slider in Uize.Widget.Bar.Slider documentation
*/

Uize.module ({
	name:'Uize.Widget.Bar.Slider',
	required:[
		'Uize.Dom.Pos',
		'Uize.Widget.Drag'
	],
	builder:function (_superclass) {
		'use strict';

		var
			/*** Variables for Scruncher Optimization ***/
				_Uize_Dom_Pos = Uize.Dom.Pos,
				_Uize_Widget_Drag = Uize.Widget.Drag
		;

		/*** Private Instance Methods ***/
			function _fireValueChangeAfterRestEvent () {
				this._valueChangeRestTimeout = null;
				this.fire ('Value Change After Rest');
				/*?
					Instance Events
						Value Change After Rest
							The =Value Change After Rest= event is similar to the =Changed.value= event, except that it is only fired during drag if the slider's knob has rested on the same value for the amount of time specified by the =restTime= state property.

							When a slider is not in drag mode, then the =Value Change After Rest= event fires every time the =Changed.value= event fires. The =Value Change After Rest= event also fires immediately upon releasing the slider's knob if the value has changed since the previous firing of the event (a user may in some cases release a knob after resting it for long enough to have this event fire, in which case this event will not fire again upon release).

							This event is useful when wiring up sliders to drive updates that might be costly, such as complex changes to the DOM or updates that require requests to a server. In these cases, wiring into the =Value Change After Rest= event lets you conveniently tune how rapid-fire the costly updates are.
				*/
			}

			function _setValueInDrag (_value) {
				var
					m = this,
					_oldValue = +m
				;
				m.set ({value:_value});
				if (+m != _oldValue) {
					if (m.isWired && m.children.drag.get ('inDrag')) {
						if (m._valueChangeRestTimeout) clearTimeout (m._valueChangeRestTimeout);
						m._valueChangeRestTimeout = setTimeout (
							function () {_fireValueChangeAfterRestEvent.call (m)},
							m._restTime
						);
					} else {
						_fireValueChangeAfterRestEvent.call (m);
					}
				}
			}

		return _superclass.subclass ({
			instanceMethods:{
				wireUi:function () {
					var m = this;
					if (!m.isWired) {
						var
							_track = m.getNode ('track'),
							_knob = m.getNode ('knob'),
							_orientationNo, _trackDimsObj, _trackDims, _knobDimsObj, _knobDims,
							_scaleFunc = m.get ('scaleFunc'),
							_valueFunc = m.get ('valueFunc'),
							_calculateCommonCoords = function () {
								_orientationNo = m.get ('orientation') == 'vertical' ? 1 : 0;
								_trackDimsObj = _Uize_Dom_Pos.getDimensions (_track);
								_trackDims = [_trackDimsObj.width,_trackDimsObj.height];
								_knobDimsObj = _Uize_Dom_Pos.getDimensions (_knob);
								_knobDims = [_knobDimsObj.width,_knobDimsObj.height];
							},
							_pixelsToScale = function (_pixels) {
								var
									_scaleMax = _scaleFunc (m.get ('maxValue')),
									_scaleMin = _scaleFunc (m.get ('minValue'))
								;
								return (
									_pixels * (1 - _orientationNo * 2) * (_scaleMax - _scaleMin)
									/ (_trackDims [_orientationNo] - _knobDims [_orientationNo])
								);
							}
						;
						/*** wire up the knob's drag object ***/
							var
								_drag = m.addChild ('drag',_Uize_Widget_Drag,{node:_knob}),
								_dragStartValue
							;
							_drag.wire ({
								'Drag Start':
									function () {
										m.set ({_inDrag:true});
										_calculateCommonCoords ();
										_dragStartValue = +m;
									},
								'Drag Update':
									function () {
										_setValueInDrag.call (
											m,
											_valueFunc (
												_scaleFunc (_dragStartValue) +
												_pixelsToScale ([_drag.eventDeltaPos [0],_drag.eventDeltaPos [1]] [_orientationNo])
											)
										);
									},
								'Drag Done':
									function () {
										m.set ({_inDrag:false});
										clearTimeout (m._valueChangeRestTimeout);
										m._valueChangeRestTimeout = null;
										_fireValueChangeAfterRestEvent.call (m);
									}
							});

						/*** wire up the slider's track ***/
							var _initiateDrag = function (_event) {
								if (m.get ('enabledInherited')) {
									_calculateCommonCoords ();
									var
										_trackCoords = _Uize_Dom_Pos.getCoords (_track),
										_eventAbsPos = _Uize_Dom_Pos.getEventAbsPos (_event)
									;
									_setValueInDrag.call (
										m,
										_valueFunc (
											_scaleFunc (m.get ('minValue')) +
											_pixelsToScale (
												(_orientationNo ? _eventAbsPos.top : _eventAbsPos.left)
												- _knobDims [_orientationNo] / 2 * (1 - _orientationNo * 2)
												- (_orientationNo ? _trackCoords.bottom : _trackCoords.x)
											)
										)
									);
									return _drag.initiate (_event);
								}
							};
							m.wireNode ([_track,'full','empty'],{mousedown:_initiateDrag,touchstart:_initiateDrag});

						_superclass.doMy (m,'wireUi');
					}
				}
			},

			staticProperties:{
				presets:{}
			},

			stateProperties:{
				_inDrag:{
					name:'inDrag',
					value:false
					/*?
						State Properties
							inDrag
								A boolean value, indicating whether or not the slider's knob is being dragged by the user.

								To monitor when a slider is being dragged, one can register an event handler on the =Changed.inDrag= instance event.

								NOTES
								- the initial value is =false=
								- this property is read-only
					*/
				},
				_restTime:{
					name:'restTime',
					value:250
					/*?
						State Properties
							restTime
								An integer, representing the time (in milliseconds) that the user must rest the mouse - during dragging the slider's knob - before the =Value Change After Rest= instance event will be fired.

								Using this property in conjunction with the =Value Change After Rest= instance event is useful in triggering updates that would be too expensive to trigger continuously during a drag operation.

								NOTES
								- the initial value is =250=
					*/
				},
				_valueFunc:{
					name:'valueFunc',
					value:function (_y) {return _y}
					/*?
						State Properties
							valueFunc
								An optional function that can be provided to achieve a non-linear transformation of the slider's knob position to a value for the instance's =value= state property.

								This property should be used in conjunction with the =scaleFunc= state property. In order for the slider to operate sensibly, any function specified for this property should be the inverse of a function specified for the =scaleFunc= property. For example, if the function =function (unscaled) {return Math.pow (unscaled)}= was specified for the =scaleFunc= property, then the function =function (scaled) {return Math.sqrt (scaled)}= should be specified for the =valueFunc= property.

								NOTES
								- the initial value is a function that has no effect
					*/
				}
			}
		});
	}
});

