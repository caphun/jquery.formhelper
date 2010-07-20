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

$.formhelper = function( options ) {
    this.options = $.extend( true, {}, $.formhelper.defaults, options );
    this.init();
}

$.extend( $.formhelper, {

    defaults: {
        wrap: '',
        before_elem: '',
        after_elem: ''
    },

    prototype: {

        init: function( ) {},

        // field types
        text: function( options ) {
            options = $.extend( { type: 'text' }, this.process_options( options ) );
            return this.controls['input']( options );
        },

        hidden: function( options ) {
            options = $.extend( { type: 'hidden' }, this.process_options( options ) );
            return this.controls['input']( options );
        },

        password: function( options ) {
            options = $.extend( { type: 'password' }, this.process_options( options ) );
            return this.controls['input']( options );
        },

        checkbox: function( options ) {
            options = $.extend( { type: 'checkbox' }, this.process_options( options ) );
            return this.controls['input']( options );
        },

        radio: function( options ) {
            options = $.extend( { type: 'radio' }, this.process_options( options ) );
            return this.controls['input']( options );
        },
        
        textarea: function( options ) {
            options = this.process_options( options );
            return this.controls['textarea']( options );
        },

        label: function( options ) {
            options = this.process_options( options );
            return this.controls['label']( options );
        },
        
        button: function( options ) {
            return this.controls['button']( options, 'Button' );
        },

        process_options: function( options ) {
            if ( $.isArray( options ) && options.length == 2 ) {
                options = { 'name': regex1.exec(options[0])[1] + '['+ options[1] +']' }
            }
            return $.extend({
                id: this.machine_id( options['name'] || 'input_field' )
            }, options);
        },

        machine_id: function( string ) {
            return string.replace(/\[|\]/g, function( match ) {
                return {'[': '_', ']': ''}[match];
            });
        },

        controls: {
            label: function( attrs, html ) {
                return $('<label></label>').attr( attrs ).html( html || attrs['name'] );
            },

            button: function( attrs, html ) {
                return $('<button></button>').attr( attrs ).html( html || attrs['value'] );
            },

            textarea: function( attrs, html ) {
                return $('<textarea></textarea>').attr( attrs ).text( html || attrs['value'] );
            },

            input: function( attrs ) {
                return $('<input />').attr( attrs );
            },
            
            select: function( attrs, list ) {
                return $('<select></select>').attr( attrs ).append( list );
            }
        }

    }
});

})(jQuery);