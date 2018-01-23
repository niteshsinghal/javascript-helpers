// JavaScript Helpers Library 
// Alias Name : util
// Design Pattern : Revealing Module Pattern

(function(window) {
    // We can enable the strict mode commenting the following line  
    // 'use strict';

    // This function will contain all our code
    function util() {

        //Private function to convert string to camel case
        var _convertToCamelCase = function(text) {
            var retVal = text.trim()
                .replace(/[^A-Za-z]/g, ' ') /* clean up non-letter characters */
                .replace(/(.)/g, function(a, l) { return l.toLowerCase(); })
                .replace(/(\s.)/g, function(a, l) { return l.toUpperCase(); })
                .replace(/[^A-Za-z\u00C0-\u00ff]/g, '');

            return retVal
        }

        //Private function to convert string to pascal case
        var _convertToPascalCase = function(str) {
            var retVal = text.trim()
                .replace(/[^A-Za-z]/g, ' ') /* clean up non-letter characters */
                .replace(/(.)/g, function(a, l) { return l.toLowerCase(); })
                .replace(/(^.|\s.)/g, function(a, l) { return l.toUpperCase(); })
                .replace(/[^A-Za-z\u00C0-\u00ff]/g, '');

            return retVal
        }

        //Private function to convert string to slug (replace space with dash(-) and convert to lower case)
        var _generateSlug = function(text) {
            return text.replace(/([A-Z])/g, function(a, b) {
                return '-' + b.toLowerCase();
            });
        }

        //Private function to remove html tags from string
        var _stripHtmlTags = function(text) {
            return text.replace(/<.*?>/g, "");
        }



        //#region "Register DOM Functins"

        var domFunctions = function() {

            String.prototype.convertToCamelCase = function() {
                return _convertToCamelCase(this);
            }
            String.prototype.convertToPascalCase = function() {
                return _convertToPascalCase(this);
            }
            String.prototype.stripHtmlTags = function() {
                return _stripHtmlTags(this);
            }
            String.prototype.generateSlug = function() {
                return _generateSlug(this);
            }
            String.prototype.ltrim = function() {
                return this.replace(/^\s*/, "");
            }
            String.prototype.rtrim = function() {
                return this.replace(/\s*$/, "");
            }
            String.prototype.trim = function() {
                return this.replace(/^\s*|\s*$/g, "");
            };
            Array.prototype.inArray = function(value) {
                var i;
                for (i = 0; i < this.length; i++) {
                    // Matches identical (===), not just similar (==).
                    if (this[i] === value) {
                        return true;
                    }
                }
                return false;
            };
            Number.prototype.isNumber = String.prototype.isString = function(value) {
                return !isNaN(parseFloat(value)) && isFinite(value);
            }
            String.prototype.isString = function(value) {
                return Object.prototype.toString.call(value) === '[object String]';
            }
            String.prototype.isEmpty = Element.prototype.isEmpty = function() {
                if (this instanceof String) {
                    if ((this.length == 0) || (this == null)) {
                        return true;
                    }
                    return false;
                } else if (this instanceof Element) {
                    if ((this.value.length == 0) || (this.value == null)) {
                        return true;
                    }
                    return false;
                }
                return null;
            };
            // Removes the last element from an array and returns that element.
            if (!Array.prototype.pop) {
                Array.prototype.pop = function() {
                    var last;
                    if (this.length) {
                        last = this[this.length - 1];
                        this.length -= 1;
                    }
                    return last || null;
                };
            }
            // Adds one or more elements to the end of an array and returns the new length of the array.
            if (!Array.prototype.push) {
                Array.prototype.push = function() {
                    for (var i = 0; i < arguments.length; ++i) {
                        this[this.length] = arguments[i];
                    }
                    return this.length;
                };
            }

        }
        domFunctions();
        //#endregion

        // This variable will be accessible to the end user.
        var _utilObject = {
            convertToCamelCase: _convertToCamelCase,
            convertToPascalCase: _convertToPascalCase,
            generateSlug: _generateSlug,
            stripHtmlTags: _stripHtmlTags,
            version: '1.0',
        };
        return _utilObject;
    }

    // We need that our library is globally accesible, so we save in the window with name 'util'
    if (typeof(window.util) === 'undefined') {
        window.util = util();
    }
})(window); // We send the window variable withing our function()