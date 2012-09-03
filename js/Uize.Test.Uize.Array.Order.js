/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Test.Uize.Array.Order.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Array.Order',required:'Uize.Test.Uize.Data',builder:function(){function c_a(c_b,c_c,c_d){return Uize.Test.Uize.Data.arrayMethodTargetTest('Uize.Array.Order',c_b,c_c,c_d);}return Uize.Test.declare({title:'Uize.Array.Order Module Test',test:[Uize.Test.requiredModulesTest('Uize.Array.Order'),Uize.Test.staticMethodsTest([['Uize.Array.Order.jumble',[['Test that jumbling an empty array produces an empty array',[[]],[]],['Test that jumbling an array with only one element returns that same array',[[1]],[1]],{title:'Test that jumbling an array with multiple unique values produces an array of the same length containing all those unique values',test:function(){var c_e=[1,2,3,4,5,6,7,8,9],c_f=c_e.length,c_g=Uize.Array.Order.jumble(c_e),c_h=c_g.length==c_f,c_i=Uize.lookup(c_g);for(var c_j= -1;c_h&& ++c_j<c_f;)c_h=c_i[c_e[c_j]];return c_h;}},c_a('jumble',[],[])]],['Uize.Array.Order.reverse',[['Test that reversing an empty array produces an empty array',[[]],[]],
['Test that reversing an array with only one element returns that same array',[[1]],[1]],['Test that reversing an array with an even number of elements is handled correctly',[[1,2,3,4]],[4,3,2,1]],['Test that reversing an array with an odd number of elements is handled correctly',[[1,2,3,4,5]],[5,4,3,2,1]],c_a('reverse',[1,2,3,4,5],[5,4,3,2,1])]],['Uize.Array.Order.insideOut',[['Test that reordering an empty array from inside to out produces an empty array',[[]],[]],['Test that reordering an array with only one element from inside to out returns that same array',[[1]],[1]],['Test that reordering an array with an even number of elements from inside to out is handled correctly',[[1,2,3,4,5,6]],[3,4,2,5,1,6]],['Test that reordering an array with an odd number of elements from inside to out is handled correctly',[[1,2,3,4,5,6,7]],[4,3,5,2,6,1,7]],c_a('insideOut',[1,2,3,4,5,6,7],[4,3,5,2,6,1,7])]],['Uize.Array.Order.outsideIn',[['Test that reordering an empty array from outside to in produces an empty array',[[]],
[]],['Test that reordering an array with only one element from outside to in returns that same array',[[1]],[1]],['Test that reordering an array with an even number of elements from outside to in is handled correctly',[[1,2,3,4,5,6]],[1,6,2,5,3,4]],['Test that reordering an array with an odd number of elements from outside to in is handled correctly',[[1,2,3,4,5,6,7]],[1,7,2,6,3,5,4]],c_a('outsideIn',[1,2,3,4,5,6,7],[1,7,2,6,3,5,4])]],['Uize.Array.Order.reorder',[['Test that \'jumbled\' option with empty array returns empty array',[[],'jumbled'],[]],['Test that \'jumbled\' option with one element array returns that same array',[[1],'jumbled'],[1]],['Test that \'reverse\' option with empty array returns empty array',[[],'reverse'],[]],['Test that \'reverse\' option with one element array returns that same array',[[1],'reverse'],[1]],['Test that \'reverse\' option with even elements array works correctly',[[1,2,3,4],'reverse'],[4,3,2,1]],['Test that \'reverse\' option with odd elements array works correctly',
[[1,2,3,4,5],'reverse'],[5,4,3,2,1]],['Test that \'inside out\' option with empty array returns empty array',[[],'inside out'],[]],['Test that \'inside out\' option with one element array returns that same array',[[1],'inside out'],[1]],['Test that \'inside out\' option with even elements array works correctly',[[1,2,3,4,5,6],'inside out'],[3,4,2,5,1,6]],['Test that \'inside out\' option with odd elements array works correctly',[[1,2,3,4,5,6,7],'inside out'],[4,3,5,2,6,1,7]],['Test that \'outside in\' option with empty array returns empty array',[[],'outside in'],[]],['Test that \'outside in\' option with one element array returns that same array',[[1],'outside in'],[1]],['Test that \'normal\' option with empty array returns empty array',[[],'normal'],[]],['Test that \'normal\' option with one element array returns that same array',[[1],'normal'],[1]]]]])]});}});