/*
 * jQuery Form Helper
 *
 * Copyright (c) 2009 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://github.com/caphun/jQuery-Form-Helper
 *
 * Shorthands for coding form elements in javascript
 *
 */
 
(function($){
	
	$.f =  {
		text_field: function(options) {
			options = $.extend({
				type: 'text'
			}, options);
			
			var output = '<input id="'+options.name+'"';
			
			// loop through the options array to find attributes
			for (var i in options) { output += ' '+ i +'="'+ options[i] +'"'; }
			
			output += ' />';
			
			return $(output);
		},
		hidden_field: function(options) {
			return this.text_field($.extend({ type: 'hidden' }, options));
		},
		password_field: function(options) {
			return this.text_field($.extend({ type: 'password' }, options));
		},
		check_box: function(options) {
			return this.text_field($.extend({ type: 'checkbox' }, options));
		},
		radio_button: function(options) {
			return this.text_field($.extend({ type: 'radio' }, options));
		},
		label: function(options) {
			return $('<label>'+ options.name +'</label>');
		},
		button: function(options) {
			return $('<button>Button</button>').attr(options);
		},
		text_area: function(options) {
			return $('<textarea></textarea>').attr(options);
		}
	}
	
})(jQuery);