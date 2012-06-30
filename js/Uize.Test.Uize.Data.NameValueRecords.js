/*
	UIZE JAVASCRIPT FRAMEWORK 2012-06-30

	http://www.uize.com/reference/Uize.Test.Uize.Data.NameValueRecords.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Data.NameValueRecords',builder:function(){return Uize.Test.declare({title:'Uize.Data.NameValueRecords Module Test',test:[Uize.Test.requiredModulesTest('Uize.Data.NameValueRecords'),Uize.Test.staticMethodsTest([['Uize.Data.NameValueRecords.fromHash',[['Test that, when string type name property and value property parameters are specified, an array of objects is returned',[{foo:'bar',hello:'world'},'KEY','VALUE'],[{KEY:'foo',VALUE:'bar'},{KEY:'hello',VALUE:'world'}]],['Test that, when a string type name property parameter and a number type value property parameter is specified, an array of objects is returned',[{foo:'bar',hello:'world'},'KEY',1],[{KEY:'foo',1:'bar'},{KEY:'hello',1:'world'}]],['Test that, when a number type name property parameter and a string type value property parameter is specified, an array of objects is returned',[{foo:'bar',hello:'world'},0,'VALUE'],[{0:'foo',VALUE:'bar'},{0:'hello',VALUE:'world'}]],
['Test that, when number type name property and value property parameters are specified, an array of arrays is returned',[{foo:'bar',hello:'world'},0,1],[['foo','bar'],['hello','world']]],['Test that, when number type name property and value property parameters are specified, the indexes for the name property and the value property can deviate from the conventional 0 and 1',[{foo:'bar',hello:'world'},3,1],[[undefined,'bar',undefined,'foo'],[undefined,'world',undefined,'hello']]],['Test that, when the value null is specified for the name property parameter, it is defaulted to  "name"',[{foo:'bar',hello:'world'},null,'VALUE'],[{name:'foo',VALUE:'bar'},{name:'hello',VALUE:'world'}]],['Test that, when the value undefined is specified for the name property parameter, it is defaulted to  "name"',[{foo:'bar',hello:'world'},undefined,'VALUE'],[{name:'foo',VALUE:'bar'},{name:'hello',VALUE:'world'}]],['Test that, when the value null is specified for the value property parameter, it is defaulted to  "value"',
[{foo:'bar',hello:'world'},'KEY',null],[{KEY:'foo',value:'bar'},{KEY:'hello',value:'world'}]],['Test that, when the value undefined is specified for the value property parameter, it is defaulted to  "value"',[{foo:'bar',hello:'world'},'KEY',undefined],[{KEY:'foo',value:'bar'},{KEY:'hello',value:'world'}]],['Test that, when not specifying the name property and value property paremeters, they are defaulted to "name" and "value", respectively',[{foo:'bar',hello:'world'}],[{name:'foo',value:'bar'},{name:'hello',value:'world'}]],['Test that, when the value null is specified for the source hash object, an empty array is returned',[null,'KEY','VALUE'],[]],['Test that, when the value undefined is specified for the source hash object, an empty array is returned',[undefined,'KEY','VALUE'],[]],['Test that, when a primite type value is specified for the source hash object, an empty array is returned',[42,'KEY','VALUE'],[]],['Test that, when no parameters are specified, an empty array is returned',[],[]]]],
['Uize.Data.NameValueRecords.toHash',[['Test that string type name property and value property parameters are supported correctly',[[{KEY:'foo',VALUE:'bar'},{KEY:'hello',VALUE:'world'}],'KEY','VALUE'],{foo:'bar',hello:'world'}],['Test that, when the name/value records are objects, number type name property and value property parameters are supported correctly',[[{0:'foo',1:'bar'},{0:'hello',1:'world'}],0,1],{foo:'bar',hello:'world'}],['Test that, when the name/value records are arrays, number type name property and value property parameters are supported correctly',[[['foo','bar'],['hello','world']],0,1],{foo:'bar',hello:'world'}],['Test that, when the name/value records are arrays, the indexes for the name property and the value property can deviate from the conventional 0 and 1',[[[undefined,'bar',undefined,'foo'],[undefined,'world',undefined,'hello']],3,1],{foo:'bar',hello:'world'}],
['Test that, when the value null is specified for both the name property and value property parameters, these parameters are defaulted to 0 and 1 when the first name/value record is an array',[[['foo','bar'],['hello','world']],null,null],{foo:'bar',hello:'world'}],['Test that, when the value undefined is specified for both the name property and value property parameters, these parameters are defaulted to 0 and 1 when the first name/value record is an array',[[['foo','bar'],['hello','world']],undefined,undefined],{foo:'bar',hello:'world'}],['Test that, when the name property and value property parameters are not specified, these parameters are defaulted to 0 and 1 when the first name/value record is an array',[[['foo','bar'],['hello','world']]],{foo:'bar',hello:'world'}],['Test that, when the value null is specified for both the name property and value property parameters, these parameters are defaulted to "name" and "value" when the first name/value record is an array',
[[{name:'foo',value:'bar'},{name:'hello',value:'world'}],null,null],{foo:'bar',hello:'world'}],['Test that, when the value undefined is specified for both the name property and value property parameters, these parameters are defaulted to "name" and "value" when the first name/value record is an array',[[{name:'foo',value:'bar'},{name:'hello',value:'world'}],undefined,undefined],{foo:'bar',hello:'world'}],['Test that, when the name property and value property parameters are not specified, these parameters are defaulted to "name" and "value" when the first name/value record is an array',[[{name:'foo',value:'bar'},{name:'hello',value:'world'}]],{foo:'bar',hello:'world'}],['Test that, when the value null is specified for the name/value records array, an empty object is returned',[null,'KEY','VALUE'],{}],['Test that, when the value undefined is specified for the name/value records array, an empty object is returned',[undefined,'KEY','VALUE'],{}],
['Test that, when an object is specified for the name/value records array, an empty object is returned',[{blah:'blah'},'KEY','VALUE'],{}],['Test that, when a primite type value is specified for the name/value records array, an empty object is returned',[42,'KEY','VALUE'],{}],['Test that, when an empty name/value records array is specified, an empty object is returned',[[],'KEY','VALUE'],{}],['Test that, when no parameters are specified, an empty object is returned',[],{}],['Test that, if multiple name/value records specify the same name, then the last record will take precedence',[[{KEY:'foo',VALUE:'bar'},{KEY:'foo',VALUE:'Bar'},{KEY:'foo',VALUE:'BAR'}],'KEY','VALUE'],{foo:'BAR'}],['Test that all name/value records that specify null or undefined for the name, or that do not specify a name, are ignored and are omitted from the returned hash',[[{KEY:'foo',VALUE:'bar'},{KEY:null,VALUE:'Bar'},{KEY:undefined,VALUE:'BAR'},{VALUE:'BAR'}],'KEY','VALUE'],{foo:'bar'}]]]])]});}});