/*
 * jQuery FormHelper
 *
 * Copyright (c) 2009 Ca-Phun Ung <caphun at yelotofu dot com>
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 *
 * http://github.com/caphun/jquery.formhelper
 *
 * Shorthands for coding form elements in javascript
 *
 */
 
(function($){
	var regex1 = /function\s([^\()]+)/i;
	
	$.f =  {
		text_field: function(options) {
			if ($.isArray(options) && options.length == 2) {
				options = {'name': regex1.exec(options[0])[1] + '['+ options[1] +']' }
			}
			
			options = $.extend({
				id: this._sanitizeId(options['name']),
				type: 'text'
			}, options);
			
			return  $('<input>').attr(options);
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
			return $('<label></label>').html(options.name);
		},
		button: function(options) {
			return $('<button></button>').attr(options).html('Button');
		},
		text_area: function(options) {
			return $('<textarea></textarea>').attr(options);
		},
		_sanitizeId: function(string) {
			return string.replace(/\[|\]/g, function(match) {
				return {'[': '_', ']': ''}[match];
			});
		}
	}
	
})(jQuery);