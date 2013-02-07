/*!
 * jQuery TrEVo Page Loader v1.0
 * https://github.com/djtrevo/PageLoader
 *
 * Copyright 2012, Marco Trevisani
 * * * * * * * * * * * * * * * * * * * * * *
 *
 * Official Website: http://www.marcotrevisani.com
 * Music Website: http://www.djtrevo.com
 *
 * * * * * * * * * * * * * * * * * * * * * *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */ (function ($) {

    var defaults = {
        cssID: "loading",
        fadeOut: 1000,
        fadeIn: 500,
        onLoad: true
    };

    var methods = {
        init: function (options) {

            var options = $.extend(defaults, options);

            return this.each(function () {

                $("body").append("<div id=\"" + options.cssID + "\"></div>");

                if (options.onLoad) {
                    $(this).load(function () {
                        jQuery("#" + options.cssID + "").fadeOut(options.fadeOut);
                    });
                }
            });

        },
        show: function () {
            var options = $.extend(defaults, options);
            jQuery("#" + options.cssID + "").fadeIn(options.fadeIn);

        },
        hide: function () {
            var options = $.extend(defaults, options);
            jQuery("#" + options.cssID + "").fadeOut(options.fadeOut);
        },
    };

    $.fn.pageLoader = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.pageLoader');
        }
    };
})(jQuery);