"use strict";

// Component Definition
var KTApp = function() {
    /** @type {object} colors State colors **/
    var settings = {};

    var initTooltip = function(el) {
        var theme = el.data('theme') ? 'tooltip-' + el.data('theme') : '';
        var width = el.data('width') == 'auto' ? 'tooltop-auto-width' : '';
        var trigger = el.data('trigger') ? el.data('trigger') : 'hover';

        $(el).tooltip({
            trigger: trigger,
            template: '<div class="tooltip ' + theme + ' ' + width + '" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
        });
    }

    var initTooltips = function() {
        // init bootstrap tooltips
        $('[data-toggle="tooltip"]').each(function() {
            initTooltip($(this));
        });
    }

    var initPopover = function(el) {
        var skin = el.data('skin') ? 'popover-' + el.data('skin') : '';
        var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';

        el.popover({
            trigger: triggerValue,
            template: '\
            <div class="popover ' + skin + '" role="tooltip">\
                <div class="arrow"></div>\
                <h3 class="popover-header"></h3>\
                <div class="popover-body"></div>\
            </div>'
        });
    }

    var initPopovers = function() {
        // init bootstrap popover
        $('[data-toggle="popover"]').each(function() {
            initPopover($(this));
        });
    }

    var initFileInput = function() {
        // init bootstrap popover
        $('.custom-file-input').on('change', function() {
            var fileName = $(this).val();
            $(this).next('.custom-file-label').addClass("selected").html(fileName);
        });
    }

    var initScroll = function() {
        $('[data-scroll="true"]').each(function() {
            var el = $(this);

            KTUtil.scrollInit(this, {
                mobileNativeScroll: true,
                handleWindowResize: true,
                rememberPosition: (el.data('remember-position') == 'true' ? true : false)
            });
        });
    }

    var initAlerts = function() {
        // init bootstrap popover
        $('body').on('click', '[data-close=alert]', function() {
            $(this).closest('.alert').hide();
        });
    }

    var initCard = function(el, options) {
        // init card tools
        var el = $(el);
        var card = new KTCard(el[0], options);
    }

    var initCards = function() {
        // init card tools
        $('[data-card="true"]').each(function() {
            var el = $(this);
            var options = {};

            if (el.data('data-card-initialized') !== true) {
                initCard(el, options);
                el.data('data-card-initialized', true);
            }
        });
    }

    var initStickyCard = function() {
        if (typeof Sticky === 'undefined') {
            return;
        }

        var sticky = new Sticky('[data-sticky="true"]');
    }

    var initAbsoluteDropdown = function(context) {
        var dropdownMenu;

        if (!context) {
            return;
        }

        $('body').on('show.bs.dropdown', context, function(e) {
        	dropdownMenu = $(e.target).find('.dropdown-menu');
        	$('body').append(dropdownMenu.detach());
        	dropdownMenu.css('display', 'block');
        	dropdownMenu.position({
        		'my': 'right top',
        		'at': 'right bottom',
        		'of': $(e.relatedTarget),
        	});
        }).on('hide.bs.dropdown', context, function(e) {
        	$(e.target).append(dropdownMenu.detach());
        	dropdownMenu.hide();
        });
    }

    var initAbsoluteDropdowns = function() {
        $('body').on('show.bs.dropdown', function(e) {
            // e.target is always parent (contains toggler and menu)
            var $toggler = $(e.target).find("[data-attach='body']");
            if ($toggler.length === 0) {
                return;
            }
            var $dropdownMenu = $(e.target).find('.dropdown-menu');
            // save detached menu
            var $detachedDropdownMenu = $dropdownMenu.detach();
            // save reference to detached menu inside data of toggler
            $toggler.data('dropdown-menu', $detachedDropdownMenu);

            $('body').append($detachedDropdownMenu);
            $detachedDropdownMenu.css('display', 'block');
            $detachedDropdownMenu.position({
                my: 'right top',
                at: 'right bottom',
                of: $(e.relatedTarget),
            });
        });

        $('body').on('hide.bs.dropdown', function(e) {
            var $toggler = $(e.target).find("[data-attach='body']");
            if ($toggler.length === 0) {
                return;
            }
            // access to reference of detached menu from data of toggler
            var $detachedDropdownMenu = $toggler.data('dropdown-menu');
            // re-append detached menu inside parent
            $(e.target).append($detachedDropdownMenu.detach());
            // hide dropdown
            $detachedDropdownMenu.hide();
        });
    };

    return {
        init: function(settingsArray) {
            if (settingsArray) {
                settings = settingsArray;
            }

            KTApp.initComponents();
        },

        initComponents: function() {
            initScroll();
            initTooltips();
            initPopovers();
            initAlerts();
            initFileInput();
            initCards();
            initStickyCard();
            initAbsoluteDropdowns();
        },

        initTooltips: function() {
            initTooltips();
        },

        initTooltip: function(el) {
            initTooltip(el);
        },

        initPopovers: function() {
            initPopovers();
        },

        initPopover: function(el) {
            initPopover(el);
        },

        initCard: function(el, options) {
            initCard(el, options);
        },

        initCards: function() {
            initCards();
        },

        initSticky: function() {
            initSticky();
        },

        initAbsoluteDropdown: function(context) {
            initAbsoluteDropdown(context);
        },

        block: function(target, options) {
            var el = $(target);

            options = $.extend(true, {
                opacity: 0.05,
                overlayColor: '#000000',
                type: '',
                size: '',
                state: 'primary',
                centerX: true,
                centerY: true,
                message: '',
                shadow: true,
                width: 'auto'
            }, options);

            var html;
            var version = options.type ? 'spinner-' + options.type : '';
            var state = options.state ? 'spinner-' + options.state : '';
            var size = options.size ? 'spinner-' + options.size : '';
            var spinner = '<span class="spinner ' + version + ' ' + state + ' ' + size + '"></span';

            if (options.message && options.message.length > 0) {
                var classes = 'blockui ' + (options.shadow === false ? 'blockui' : '');

                html = '<div class="' + classes + '"><span>' + options.message + '</span>' + spinner + '</div>';

                var el = document.createElement('div');

                $('body').prepend(el);
                KTUtil.addClass(el, classes);
                el.innerHTML = html;
                options.width = KTUtil.actualWidth(el) + 10;
                KTUtil.remove(el);

                if (target == 'body') {
                    html = '<div class="' + classes + '" style="margin-left:-' + (options.width / 2) + 'px;"><span>' + options.message + '</span><span>' + spinner + '</span></div>';
                }
            } else {
                html = spinner;
            }

            var params = {
                message: html,
                centerY: options.centerY,
                centerX: options.centerX,
                css: {
                    top: '30%',
                    left: '50%',
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none',
                    width: options.width
                },
                overlayCSS: {
                    backgroundColor: options.overlayColor,
                    opacity: options.opacity,
                    cursor: 'wait',
                    zIndex: (target == 'body' ? 1100 : 10)
                },
                onUnblock: function() {
                    if (el && el[0]) {
                        KTUtil.css(el[0], 'position', '');
                        KTUtil.css(el[0], 'zoom', '');
                    }
                }
            };

            if (target == 'body') {
                params.css.top = '50%';
                $.blockUI(params);
            } else {
                var el = $(target);
                el.block(params);
            }
        },

        unblock: function(target) {
            if (target && target != 'body') {
                $(target).unblock();
            } else {
                $.unblockUI();
            }
        },

        blockPage: function(options) {
            return KTApp.block('body', options);
        },

        unblockPage: function() {
            return KTApp.unblock('body');
        },

        getSettings: function() {
            return settings;
        }
    };
}();

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTApp;
}

// Initialize KTApp class on document ready
$(document).ready(function() {
    KTApp.init(KTAppSettings);
});

// CSS3 Transitions only after page load(.page-loading class added to body tag and remove with JS on page load)
window.onload = function() {
    var result = KTUtil.getByTagName('body');
    if (result && result[0]) {
        KTUtil.removeClass(result[0], 'page-loading');
    }
}
"use strict";

// Component Definition
var KTCard = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        toggleSpeed: 400,
        sticky: {
            releseOnReverse: false,
            offset: 300,
            zIndex: 101
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (KTUtil.data(element).has('card')) {
                the = KTUtil.data(element).get('card');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                KTUtil.data(element).set('card', the);
            }

            return the;
        },

        /**
         * Init card
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);
            the.header = KTUtil.child(element, '.card-header');
            the.footer = KTUtil.child(element, '.card-footer');

            if (KTUtil.child(element, '.card-body')) {
                the.body = KTUtil.child(element, '.card-body');
            } else if (KTUtil.child(element, '.form')) {
                the.body = KTUtil.child(element, '.form');
            }
        },

        /**
         * Build Form Wizard
         */
        build: function() {
            // Remove
            var remove = KTUtil.find(the.header, '[data-card-tool=remove]');
            if (remove) {
                KTUtil.addEvent(remove, 'click', function(e) {
                    e.preventDefault();
                    Plugin.remove();
                });
            }

            // Reload
            var reload = KTUtil.find(the.header, '[data-card-tool=reload]');
            if (reload) {
                KTUtil.addEvent(reload, 'click', function(e) {
                    e.preventDefault();
                    Plugin.reload();
                });
            }

            // Toggle
            var toggle = KTUtil.find(the.header, '[data-card-tool=toggle]');
            if (toggle) {
                KTUtil.addEvent(toggle, 'click', function(e) {
                    e.preventDefault();
                    Plugin.toggle();
                });
            }
        },

        /**
         * Enable stickt mode
         */
        initSticky: function() {
            var lastScrollTop = 0;
            var offset = the.options.sticky.offset;

            if (!the.header) {
                return;
            }

	        window.addEventListener('scroll', Plugin.onScrollSticky);
        },

	    /**
	     * Window scroll handle event for sticky card
	     */
	    onScrollSticky: function(e) {
		    var offset = the.options.sticky.offset;

		    if(isNaN(offset)) return;

		    var st = KTUtil.getScrollTop();

		    if (st >= offset && KTUtil.hasClass(body, 'card-sticky-on') === false) {
			    Plugin.eventTrigger('stickyOn');

			    KTUtil.addClass(body, 'card-sticky-on');

			    Plugin.updateSticky();

		    } else if ((st*1.5) <= offset && KTUtil.hasClass(body, 'card-sticky-on')) {
			    // Back scroll mode
			    Plugin.eventTrigger('stickyOff');

			    KTUtil.removeClass(body, 'card-sticky-on');

			    Plugin.resetSticky();
		    }
	    },

        updateSticky: function() {
            if (!the.header) {
                return;
            }

            var top;

            if (KTUtil.hasClass(body, 'card-sticky-on')) {
                if (the.options.sticky.position.top instanceof Function) {
                    top = parseInt(the.options.sticky.position.top.call(this, the));
                } else {
                    top = parseInt(the.options.sticky.position.top);
                }

                var left;
                if (the.options.sticky.position.left instanceof Function) {
                    left = parseInt(the.options.sticky.position.left.call(this, the));
                } else {
                    left = parseInt(the.options.sticky.position.left);
                }

                var right;
                if (the.options.sticky.position.right instanceof Function) {
                    right = parseInt(the.options.sticky.position.right.call(this, the));
                } else {
                    right = parseInt(the.options.sticky.position.right);
                }

                KTUtil.css(the.header, 'z-index', the.options.sticky.zIndex);
                KTUtil.css(the.header, 'top', top + 'px');
                KTUtil.css(the.header, 'left', left + 'px');
                KTUtil.css(the.header, 'right', right + 'px');
            }
        },

        resetSticky: function() {
            if (!the.header) {
                return;
            }

            if (KTUtil.hasClass(body, 'card-sticky-on') === false) {
                KTUtil.css(the.header, 'z-index', '');
                KTUtil.css(the.header, 'top', '');
                KTUtil.css(the.header, 'left', '');
                KTUtil.css(the.header, 'right', '');
            }
        },

        /**
         * Remove card
         */
        remove: function() {
            if (Plugin.eventTrigger('beforeRemove') === false) {
                return;
            }

            // Remove tooltips
            var tooltips;
            if ( tooltips = document.querySelectorAll('.tooltip.show') ) {
                $(tooltips).tooltip('dispose');
            }

            KTUtil.remove(element);

            Plugin.eventTrigger('afterRemove');
        },

        /**
         * Set content
         */
        setContent: function(html) {
            if (html) {
                the.body.innerHTML = html;
            }
        },

        /**
         * Get body
         */
        getBody: function() {
            return the.body;
        },

        /**
         * Get self
         */
        getSelf: function() {
            return element;
        },

        /**
         * Reload
         */
        reload: function() {
            Plugin.eventTrigger('reload');
        },

        /**
         * Toggle
         */
        toggle: function() {
            if (KTUtil.hasClass(element, 'card-collapse') || KTUtil.hasClass(element, 'card-collapsed')) {
                Plugin.expand();
            } else {
                Plugin.collapse();
            }
        },

        /**
         * Collapse
         */
        collapse: function() {
            if (Plugin.eventTrigger('beforeCollapse') === false) {
                return;
            }

            KTUtil.slideUp(the.body, the.options.toggleSpeed, function() {
                Plugin.eventTrigger('afterCollapse');
            });

            KTUtil.addClass(element, 'card-collapse');
        },

        /**
         * Expand
         */
        expand: function() {
            if (Plugin.eventTrigger('beforeExpand') === false) {
                return;
            }

            KTUtil.slideDown(the.body, the.options.toggleSpeed, function() {
                Plugin.eventTrigger('afterExpand');
            });

            KTUtil.removeClass(element, 'card-collapse');
            KTUtil.removeClass(element, 'card-collapsed');
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            //KTUtil.triggerCustomEvent(name);
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Remove card
     */
    the.remove = function() {
        return Plugin.remove(html);
    };

    /**
     * Init sticky card
     */
    the.initSticky = function() {
        return Plugin.initSticky();
    };

    /**
     * Rerender sticky layout
     */
    the.updateSticky = function() {
        return Plugin.updateSticky();
    };

    /**
     * Reset the sticky
     */
    the.resetSticky = function() {
        return Plugin.resetSticky();
    };

	/**
	 * Destroy sticky card
	 */
	the.destroySticky = function() {
		Plugin.resetSticky();
		window.removeEventListener('scroll', Plugin.onScrollSticky);
	};

    /**
     * Reload card
     */
    the.reload = function() {
        return Plugin.reload();
    };

    /**
     * Set card content
     */
    the.setContent = function(html) {
        return Plugin.setContent(html);
    };

    /**
     * Toggle card
     */
    the.toggle = function() {
        return Plugin.toggle();
    };

    /**
     * Collapse card
     */
    the.collapse = function() {
        return Plugin.collapse();
    };

    /**
     * Expand card
     */
    the.expand = function() {
        return Plugin.expand();
    };

    /**
     * Get cardbody
     * @returns {jQuery}
     */
    the.getBody = function() {
        return Plugin.getBody();
    };

    /**
     * Get cardbody
     * @returns {jQuery}
     */
    the.getSelf = function() {
        return Plugin.getSelf();
    };

    /**
     * Attach event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTCard;
}

"use strict";
// DOCS: https://javascript.info/cookie

// Component Definition
var KTCookie = function() {
  return {
    // returns the cookie with the given name,
    // or undefined if not found
    getCookie: function(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    // Please note that a cookie value is encoded,
    // so getCookie uses a built-in decodeURIComponent function to decode it.
    setCookie: function(name, value, options) {
      if (!options) {
          options = {};
      }

      options = Object.assign({}, {path: '/'}, options);

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (var optionKey in options) {
        if (!options.hasOwnProperty(optionKey)) {
          continue;
        }
        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
    // To delete a cookie, we can call it with a negative expiration date:
    deleteCookie: function(name) {
      setCookie(name, "", {
        'max-age': -1
      })
    }
  }
}();

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = KTCookie;
}

"use strict";

// Component Definition 
var KTDialog = function(options) {
    // Main object
    var the = this;

    // Get element object
    var element;
    var body = KTUtil.getBody();

    // Default options
    var defaultOptions = {
        'placement' : 'top center',
        'type'  : 'loader',
        'width' : 100,
        'state' : 'default',
        'message' : 'Loading...'
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            Plugin.init(options);

            return the;
        },

        /**
         * Handles subtoggle click toggle
         */
        init: function(options) {
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            the.state = false;
        },

        /**
         * Show dialog
         */
        show: function() {
            Plugin.eventTrigger('show');

            element = document.createElement("DIV");
            KTUtil.setHTML(element, the.options.message);

            KTUtil.addClass(element, 'dialog dialog-shown');
            KTUtil.addClass(element, 'dialog-' + the.options.state);
            KTUtil.addClass(element, 'dialog-' + the.options.type);

            if (the.options.placement == 'top center') {
                KTUtil.addClass(element, 'dialog-top-center');
            }

            body.appendChild(element);

            the.state = 'shown';

            Plugin.eventTrigger('shown');

            return the;
        },

        /**
         * Hide dialog
         */
        hide: function() {
            if (element) {
                Plugin.eventTrigger('hide');

                element.remove();
                the.state = 'hidden';

                Plugin.eventTrigger('hidden');
            }

            return the;
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];

                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Check shown state
     */
    the.shown = function() {
        return the.state == 'shown';
    };

    /**
     * Check hidden state
     */
    the.hidden = function() {
        return the.state == 'hidden';
    };

    /**
     * Show dialog
     */
    the.show = function() {
        return Plugin.show();
    };

    /**
     * Hide dialog
     */
    the.hide = function() {
        return Plugin.hide();
    };

    /**
     * Attach event
     * @returns {KTToggle}
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     * @returns {KTToggle}
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTDialog;
}

"use strict";

// Component Definition
var KTHeader = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (element === undefined) {
        return;
    }

    // Default options
    var defaultOptions = {
        offset: {
            desktop: true,
            tabletAndMobile: true
        },
        releseOnReverse: {
            desktop: false,
            tabletAndMobile: false
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Run plugin
         * @returns {KTHeader}
         */
        construct: function(options) {
            if (KTUtil.data(element).has('header')) {
                the = KTUtil.data(element).get('header');
            } else {
                // reset header
                Plugin.init(options);

                // build header
                Plugin.build();

                KTUtil.data(element).set('header', the);
            }

            return the;
        },

        /**
         * Handles subheader click toggle
         * @returns {KTHeader}
         */
        init: function(options) {
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);
        },

        /**
         * Reset header
         * @returns {KTHeader}
         */
        build: function() {
            var eventTriggerState = true;
            var lastScrollTop = 0;

            window.addEventListener('scroll', function() {
                var offset = 0, st, attrName;

                if (KTUtil.isBreakpointDown('lg') && the.options.offset.tabletAndMobile === false) {
                    return;
                }

                if (KTUtil.isBreakpointUp('lg') && the.options.offset.desktop === false) {
                    return;
                }

                if (KTUtil.isBreakpointUp('lg')) {
                    offset = the.options.offset.desktop;
                } else if (KTUtil.isBreakpointDown('lg')) {
                    offset = the.options.offset.tabletAndMobile;
                }

                st = KTUtil.getScrollTop();

                if (
                    (KTUtil.isBreakpointDown('lg') && the.options.releseOnReverse.tabletAndMobile) ||
                    (KTUtil.isBreakpointUp('lg') && the.options.releseOnReverse.desktop)
                ) {
                    if (st > offset && lastScrollTop < st) { // down scroll mode
                        if (body.hasAttribute('data-header-scroll') === false) {
                            body.setAttribute('data-header-scroll', 'on');
                        }

                        if (eventTriggerState) {
                            Plugin.eventTrigger('scrollOn', the);
                            eventTriggerState = false;
                        }
                    } else { // back scroll mode
                        if (body.hasAttribute('data-header-scroll') === true) {
                            body.removeAttribute('data-header-scroll');
                        }

                        if (eventTriggerState == false) {
                            Plugin.eventTrigger('scrollOff', the);
                            eventTriggerState = true;
                        }
                    }

                    lastScrollTop = st;
                } else {
                    if (st > offset) { // down scroll mode
                        if (body.hasAttribute('data-header-scroll') === false) {
                            body.setAttribute('data-header-scroll', 'on');
                        }

                        if (eventTriggerState) {
                            Plugin.eventTrigger('scrollOn', the);
                            eventTriggerState = false;
                        }
                    } else { // back scroll mode
                        if (body.hasAttribute('data-header-scroll') === true) {
                            body.removeAttribute('data-header-scroll');
                        }

                        if (eventTriggerState == false) {
                            Plugin.eventTrigger('scrollOff', the);
                            eventTriggerState = true;
                        }
                    }
                }
            });
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    } else {
                        return event.handler.call(this, the, args);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Register event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTHeader;
}

"use strict";

// Component Definition 
var KTImageInput = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        editMode: false
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (KTUtil.data(element).has('imageinput')) {
                the = KTUtil.data(element).get('imageinput');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                KTUtil.data(element).set('imageinput', the);
            }

            return the;
        },

        /**
         * Init avatar
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            the.input = KTUtil.find(element, 'input[type="file"]');
            the.wrapper = KTUtil.find(element, '.image-input-wrapper');
            the.cancel = KTUtil.find(element, '[data-action="cancel"]');
            the.remove = KTUtil.find(element, '[data-action="remove"]');
            the.src = KTUtil.css(the.wrapper, 'backgroundImage');
            the.hidden = KTUtil.find(element, 'input[type="hidden"]');

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);
        },

        /**
         * Build
         */
        build: function() {
            // Handle change
            KTUtil.addEvent(the.input, 'change', function(e) {
                e.preventDefault();

	            if (the.input && the.input.files && the.input.files[0]) {
	                var reader = new FileReader();
	                reader.onload = function(e) {
	                    KTUtil.css(the.wrapper, 'background-image', 'url('+e.target.result +')');
	                }
	                reader.readAsDataURL(the.input.files[0]);

	                KTUtil.addClass(the.element, 'image-input-changed');
                    KTUtil.removeClass(the.element, 'image-input-empty');

                    // Fire change event
                    Plugin.eventTrigger('change');
	            }
            });

            // Handle cancel
            KTUtil.addEvent(the.cancel, 'click', function(e) {
                e.preventDefault();

                // Fire cancel event
                Plugin.eventTrigger('cancel');

	            KTUtil.removeClass(the.element, 'image-input-changed');
                KTUtil.removeClass(the.element, 'image-input-empty');
	            KTUtil.css(the.wrapper, 'background-image', the.src);
	            the.input.value = "";

                if (the.hidden) {
                    the.hidden.value = "0";
                }
            });

            // Handle remove
            KTUtil.addEvent(the.remove, 'click', function(e) {
                e.preventDefault();

                // Fire cancel event
                Plugin.eventTrigger('remove');

	            KTUtil.removeClass(the.element, 'image-input-changed');
                KTUtil.addClass(the.element, 'image-input-empty');
	            KTUtil.css(the.wrapper, 'background-image', "none");
	            the.input.value = "";

                if (the.hidden) {
                    the.hidden.value = "1";
                }
            });
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            //KTUtil.triggerCustomEvent(name);
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Attach event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTImageInput;
}

"use strict";

// Component Definition
var KTMenu = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        // scrollable area with Perfect Scroll
        scroll: {
            rememberPosition: false
        },

        // accordion submenu mode
        accordion: {
            slideSpeed: 200, // accordion toggle slide speed in milliseconds
            autoScroll: false, // enable auto scrolling(focus) to the clicked menu item
            autoScrollSpeed: 1200,
            expandAll: true // allow having multiple expanded accordions in the menu
        },

        // dropdown submenu mode
        dropdown: {
            timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Run plugin
         * @returns {KTMenu}
         */
        construct: function(options) {
            if (KTUtil.data(element).has('menu')) {
                the = KTUtil.data(element).get('menu');
            } else {
                // reset menu
                Plugin.init(options);

                // reset menu
                Plugin.reset();

                // build menu
                Plugin.build();

                KTUtil.data(element).set('menu', the);
            }

            return the;
        },

        /**
         * Handles submenu click toggle
         * @returns {KTMenu}
         */
        init: function(options) {
            the.events = [];

            the.eventHandlers = {};

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            // pause menu
            the.pauseDropdownHoverTime = 0;

            the.uid = KTUtil.getUniqueID();
        },

        update: function(options) {
            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            // pause menu
            the.pauseDropdownHoverTime = 0;

             // reset menu
            Plugin.reset();

            the.eventHandlers = {};

            // build menu
            Plugin.build();

            KTUtil.data(element).set('menu', the);
        },

        reload: function() {
             // reset menu
            Plugin.reset();

            // build menu
            Plugin.build();

            // reset submenu props
            Plugin.resetSubmenuProps();
        },

        /**
         * Reset menu
         * @returns {KTMenu}
         */
        build: function() {
            // General accordion submenu toggle
            the.eventHandlers['event_1'] = KTUtil.on( element, '.menu-toggle', 'click', Plugin.handleSubmenuAccordion);

            // Dropdown mode(hoverable)
            if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
                // dropdown submenu - hover toggle
                the.eventHandlers['event_2'] = KTUtil.on( element, '[data-menu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
                the.eventHandlers['event_3'] = KTUtil.on( element, '[data-menu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit);

                // dropdown submenu - click toggle
                the.eventHandlers['event_4'] = KTUtil.on( element, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownClick);
                the.eventHandlers['event_5'] = KTUtil.on( element, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
            }

            // Handle general link click
            the.eventHandlers['event_6'] = KTUtil.on(element, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', Plugin.handleLinkClick);

            // Init scrollable menu
            if (the.options.scroll && the.options.scroll.height) {
                Plugin.scrollInit();
            }
        },

        /**
         * Reset menu
         * @returns {KTMenu}
         */
        reset: function() {
            KTUtil.off( element, 'click', the.eventHandlers['event_1']);

            // dropdown submenu - hover toggle
            KTUtil.off( element, 'mouseover', the.eventHandlers['event_2']);
            KTUtil.off( element, 'mouseout', the.eventHandlers['event_3']);

            // dropdown submenu - click toggle
            KTUtil.off( element, 'click', the.eventHandlers['event_4']);
            KTUtil.off( element, 'click', the.eventHandlers['event_5']);

            // handle link click
            KTUtil.off(element, 'click', the.eventHandlers['event_6']);
        },

        /**
         * Init scroll menu
         *
        */
        scrollInit: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                KTUtil.scrollDestroy(element, true);
                KTUtil.scrollInit(element, {mobileNativeScroll: true, windowScroll: false, resetHeightOnDestroy: true, handleWindowResize: true, height: the.options.scroll.height, rememberPosition: the.options.scroll.rememberPosition});
            } else {
                KTUtil.scrollDestroy(element, true);
            }
        },

        /**
         * Update scroll menu
        */
        scrollUpdate: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                KTUtil.scrollUpdate(element);
            }
        },

        /**
         * Scroll top
        */
        scrollTop: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                KTUtil.scrollTop(element);
            }
        },

        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {KTMenu}
         */
        getSubmenuMode: function(el) {
            if ( KTUtil.isBreakpointUp('lg') ) {
                if (el && KTUtil.hasAttr(el, 'data-menu-toggle') && KTUtil.attr(el, 'data-menu-toggle') == 'hover') {
                    return 'dropdown';
                }

                if ( KTUtil.isset(the.options.submenu, 'desktop.state.body') ) {
                    if ( KTUtil.hasClasses(body, the.options.submenu.desktop.state.body) ) {
                        return the.options.submenu.desktop.state.mode;
                    } else {
                        return the.options.submenu.desktop.default;
                    }
                } else if ( KTUtil.isset(the.options.submenu, 'desktop') ) {
                    return the.options.submenu.desktop;
                }
            } else if ( KTUtil.isBreakpointUp('md') && KTUtil.isBreakpointDown('lg') && KTUtil.isset(the.options.submenu, 'tablet') ) {
                return the.options.submenu.tablet;
            } else if ( KTUtil.isBreakpointDown('md') && KTUtil.isset(the.options.submenu, 'mobile') ) {
                return the.options.submenu.mobile;
            } else {
                return false;
            }
        },

        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {KTMenu}
         */
        isConditionalSubmenuDropdown: function() {
            if ( KTUtil.isBreakpointUp('lg') && KTUtil.isset(the.options.submenu, 'desktop.state.body') ) {
                return true;
            } else {
                return false;
            }
        },


        /**
         * Reset submenu attributes
         * @returns {KTMenu}
         */
        resetSubmenuProps: function(e) {
            var submenus = KTUtil.findAll(element, '.menu-submenu');
            if ( submenus ) {
                for (var i = 0, len = submenus.length; i < len; i++) {
                    var submenu = submenus[0];

                    KTUtil.css(submenu, 'display', '');
                    KTUtil.css(submenu, 'overflow', '');

                    if (submenu.hasAttribute('data-hor-direction')) {
                        KTUtil.removeClass(submenu, 'menu-submenu-left');
                        KTUtil.removeClass(submenu, 'menu-submenu-right');
                        KTUtil.addClass(submenu, submenu.getAttribute('data-hor-direction'));
                    }
                }
            }
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        handleSubmenuDrodownHoverEnter: function(e) {
            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            if ( the.resumeDropdownHover() === false ) {
                return;
            }

            var item = this;

            if ( item.getAttribute('data-hover') == '1' ) {
                item.removeAttribute('data-hover');
                clearTimeout( item.getAttribute('data-timeout') );
                item.removeAttribute('data-timeout');
            }

            Plugin.showSubmenuDropdown(item);
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        handleSubmenuDrodownHoverExit: function(e) {
            if ( the.resumeDropdownHover() === false ) {
                return;
            }

            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            var item = this;
            var time = the.options.dropdown.timeout;

            var timeout = setTimeout(function() {
                if ( item.getAttribute('data-hover') == '1' ) {
                    Plugin.hideSubmenuDropdown(item, true);
                }
            }, time);

            item.setAttribute('data-hover', '1');
            item.setAttribute('data-timeout', timeout);
        },

        /**
         * Handles submenu click toggle
         * @returns {KTMenu}
         */
        handleSubmenuDropdownClick: function(e) {
            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            var item = this.closest('.menu-item');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if ( item.getAttribute('data-menu-submenu-mode') == 'accordion' ) {
                return;
            }

            if ( KTUtil.hasClass(item, 'menu-item-hover') === false ) {
                KTUtil.addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            } else {
                KTUtil.removeClass(item, 'menu-item-open-dropdown' );
                Plugin.hideSubmenuDropdown(item, true);
            }

            e.preventDefault();
        },

        /**
         * Handles tab click toggle
         * @returns {KTMenu}
         */
        handleSubmenuDropdownTabClick: function(e) {
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            var item = this.closest('.menu-item');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
                return;
            }

            if (KTUtil.hasClass(item, 'menu-item-hover') == false) {
                KTUtil.addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            }

            e.preventDefault();
        },

        /**
         * Handles link click
         * @returns {KTMenu}
         */
        handleLinkClick: function(e) {
            var submenu = this.closest('.menu-item.menu-item-submenu');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('linkClick', this, e);
            if (result === false) {
                return;
            }

            if ( submenu && Plugin.getSubmenuMode(submenu) === 'dropdown' ) {
                Plugin.hideSubmenuDropdowns();
            }
        },

        /**
         * Handles submenu dropdown close on link click
         * @returns {KTMenu}
         */
        handleSubmenuDropdownClose: function(e, el) {
            // exit if its not submenu dropdown mode
            if (Plugin.getSubmenuMode(el) === 'accordion') {
                return;
            }

            var shown = element.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)');

            // check if currently clicked link's parent item ha
            if (shown.length > 0 && KTUtil.hasClass(el, 'menu-toggle') === false && el.querySelectorAll('.menu-toggle').length === 0) {
                // close opened dropdown menus
                for (var i = 0, len = shown.length; i < len; i++) {
                    Plugin.hideSubmenuDropdown(shown[0], true);
                }
            }
        },

        /**
         * helper functions
         * @returns {KTMenu}
         */
        handleSubmenuAccordion: function(e, el) {
            var query;
            var item = el ? el : this;

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if ( Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.menu-item') ) ) {
                if (query.getAttribute('data-menu-submenu-mode') != 'accordion' ) {
                    e.preventDefault();
                    return;
                }
            }

            var li = item.closest('.menu-item');
            var submenu = KTUtil.child(li, '.menu-submenu, .menu-inner');

            if (KTUtil.hasClass(item.closest('.menu-item'), 'menu-item-open-always')) {
                return;
            }

            if ( li && submenu ) {
                e.preventDefault();
                var speed = the.options.accordion.slideSpeed;
                var hasClosables = false;

                if ( KTUtil.hasClass(li, 'menu-item-open') === false ) {
                    // hide other accordions
                    if ( the.options.accordion.expandAll === false ) {
                        var subnav = item.closest('.menu-nav, .menu-subnav');
                        var closables = KTUtil.children(subnav, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');

                        if ( subnav && closables ) {
                            for (var i = 0, len = closables.length; i < len; i++) {
                                var el_ = closables[0];
                                var submenu_ = KTUtil.child(el_, '.menu-submenu');
                                if ( submenu_ ) {
                                    KTUtil.slideUp(submenu_, speed, function() {
                                        Plugin.scrollUpdate();
                                        KTUtil.removeClass(el_, 'menu-item-open');
                                    });
                                }
                            }
                        }
                    }

                    KTUtil.slideDown(submenu, speed, function() {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();

                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });

                    KTUtil.addClass(li, 'menu-item-open');

                } else {
                    KTUtil.slideUp(submenu, speed, function() {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();
                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });

                    KTUtil.removeClass(li, 'menu-item-open');
                }
            }
        },

        /**
         * scroll to item function
         * @returns {KTMenu}
         */
        scrollToItem: function(item) {
            // handle auto scroll for accordion submenus
            if ( KTUtil.isBreakpointUp('lg')  && the.options.accordion.autoScroll && element.getAttribute('data-menu-scroll') !== '1' ) {
                KTUtil.scrollTo(item, the.options.accordion.autoScrollSpeed);
            }
        },

        /**
         * Hide submenu dropdown
         * @returns {KTMenu}
         */
        hideSubmenuDropdown: function(item, classAlso) {
            // remove submenu activation class
            if ( classAlso ) {
                KTUtil.removeClass(item, 'menu-item-hover');
                KTUtil.removeClass(item, 'menu-item-active-tab');
            }

            // clear timeout
            item.removeAttribute('data-hover');

            if ( item.getAttribute('data-menu-toggle-class') ) {
                KTUtil.removeClass(body, item.getAttribute('data-menu-toggle-class'));
            }

            var timeout = item.getAttribute('data-timeout');
            item.removeAttribute('data-timeout');
            clearTimeout(timeout);
        },

        /**
         * Hide submenu dropdowns
         * @returns {KTMenu}
         */
        hideSubmenuDropdowns: function() {
            var items;
            if ( items = element.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])') ) {
                for (var j = 0, cnt = items.length; j < cnt; j++) {
                    Plugin.hideSubmenuDropdown(items[j], true);
                }
            }
        },

        /**
         * helper functions
         * @returns {KTMenu}
         */
        showSubmenuDropdown: function(item) {
            // close active submenus
            var list = element.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');

            if ( list ) {
                for (var i = 0, len = list.length; i < len; i++) {
                    var el = list[i];
                    if ( item !== el && el.contains(item) === false && item.contains(el) === false ) {
                        Plugin.hideSubmenuDropdown(el, true);
                    }
                }
            }

            // add submenu activation class
            KTUtil.addClass(item, 'menu-item-hover');

            // Change the alignment of submenu is offscreen.
            var submenu = KTUtil.find(item, '.menu-submenu');

            if (submenu && submenu.hasAttribute('data-hor-direction') === false) {
                if (KTUtil.hasClass(submenu, 'menu-submenu-left')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-left');
                } else if (KTUtil.hasClass(submenu, 'menu-submenu-right')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-right');
                }
            }

            if ( submenu && KTUtil.isOffscreen(submenu, 'left', 15) === true ) {
                KTUtil.removeClass(submenu, 'menu-submenu-left');
                KTUtil.addClass(submenu, 'menu-submenu-right');
            } else if ( submenu && KTUtil.isOffscreen(submenu, 'right', 15) === true ) {
                KTUtil.removeClass(submenu, 'menu-submenu-right');
                KTUtil.addClass(submenu, 'menu-submenu-left');
            }

            if ( item.getAttribute('data-menu-toggle-class') ) {
                KTUtil.addClass(body, item.getAttribute('data-menu-toggle-class'));
            }
        },

        /**
         * Handles submenu slide toggle
         * @returns {KTMenu}
         */
        createSubmenuDropdownClickDropoff: function(el) {
            var query;
            var zIndex = (query = KTUtil.child(el, '.menu-submenu') ? KTUtil.css(query, 'z-index') : 0) - 1;

            var dropoff = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');

            body.appendChild(dropoff);

            KTUtil.addEvent(dropoff, 'click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                KTUtil.remove(this);
                Plugin.hideSubmenuDropdown(el, true);
            });
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        pauseDropdownHover: function(time) {
            var date = new Date();

            the.pauseDropdownHoverTime = date.getTime() + time;
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        resumeDropdownHover: function() {
            var date = new Date();

            return (date.getTime() > the.pauseDropdownHoverTime ? true : false);
        },

        /**
         * Reset menu's current active item
         * @returns {KTMenu}
         */
        resetActiveItem: function(item) {
            var list;
            var parents;

            list = element.querySelectorAll('.menu-item-active');

            for (var i = 0, len = list.length; i < len; i++) {
                var el = list[0];
                KTUtil.removeClass(el, 'menu-item-active');
                KTUtil.hide( KTUtil.child(el, '.menu-submenu') );
                parents = KTUtil.parents(el, '.menu-item-submenu') || [];

                for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
                    var el_ = parents[i];
                    KTUtil.removeClass(el_, 'menu-item-open');
                    KTUtil.hide( KTUtil.child(el_, '.menu-submenu') );
                }
            }

            // close open submenus
            if ( the.options.accordion.expandAll === false ) {
                if ( list = element.querySelectorAll('.menu-item-open') ) {
                    for (var i = 0, len = list.length; i < len; i++) {
                        KTUtil.removeClass(parents[0], 'menu-item-open');
                    }
                }
            }
        },

        /**
         * Sets menu's active item
         * @returns {KTMenu}
         */
        setActiveItem: function(item) {
            // reset current active item
            Plugin.resetActiveItem();

            var parents = KTUtil.parents(item, '.menu-item-submenu') || [];
            for (var i = 0, len = parents.length; i < len; i++) {
                KTUtil.addClass(parents[i], 'menu-item-open');
            }

            KTUtil.addClass(item, 'menu-item-active');
        },

        /**
         * Returns page breadcrumbs for the menu's active item
         * @returns {KTMenu}
         */
        getBreadcrumbs: function(item) {
            var query;
            var breadcrumbs = [];
            var link = KTUtil.child(item, '.menu-link');

            breadcrumbs.push({
                text: (query = KTUtil.child(link, '.menu-text') ? query.innerHTML : ''),
                title: link.getAttribute('title'),
                href: link.getAttribute('href')
            });

            var parents = KTUtil.parents(item, '.menu-item-submenu');
            for (var i = 0, len = parents.length; i < len; i++) {
                var submenuLink = KTUtil.child(parents[i], '.menu-link');

                breadcrumbs.push({
                    text: (query = KTUtil.child(submenuLink, '.menu-text') ? query.innerHTML : ''),
                    title: submenuLink.getAttribute('title'),
                    href: submenuLink.getAttribute('href')
                });
            }

            return  breadcrumbs.reverse();
        },

        /**
         * Returns page title for the menu's active item
         * @returns {KTMenu}
         */
        getPageTitle: function(item) {
            var query;

            return (query = KTUtil.child(item, '.menu-text') ? query.innerHTML : '');
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name, target, e) {
            for (var i = 0; i < the.events.length; i++ ) {
                var event = the.events[i];
                if ( event.name == name ) {
                    if ( event.one == true ) {
                        if ( event.fired == false ) {
                            the.events[i].fired = true;
                            return event.handler.call(this, target, e);
                        }
                    } else {
                        return event.handler.call(this, target, e);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        },

        removeEvent: function(name) {
            if (the.events[name]) {
                delete the.events[name];
            }
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Update scroll
     */
    the.scrollUpdate = function() {
        return Plugin.scrollUpdate();
    };

    /**
     * Re-init scroll
     */
    the.scrollReInit = function() {
        return Plugin.scrollInit();
    };

    /**
     * Scroll top
     */
    the.scrollTop = function() {
        return Plugin.scrollTop();
    };

    /**
     * Set active menu item
     */
    the.setActiveItem = function(item) {
        return Plugin.setActiveItem(item);
    };

    the.reload = function() {
        return Plugin.reload();
    };

    the.update = function(options) {
        return Plugin.update(options);
    };

    /**
     * Set breadcrumb for menu item
     */
    the.getBreadcrumbs = function(item) {
        return Plugin.getBreadcrumbs(item);
    };

    /**
     * Set page title for menu item
     */
    the.getPageTitle = function(item) {
        return Plugin.getPageTitle(item);
    };

    /**
     * Get submenu mode
     */
    the.getSubmenuMode = function(el) {
        return Plugin.getSubmenuMode(el);
    };

    /**
     * Hide dropdown
     * @returns {Object}
     */
    the.hideDropdown = function(item) {
        Plugin.hideSubmenuDropdown(item, true);
    };

    /**
     * Hide dropdowns
     * @returns {Object}
     */
    the.hideDropdowns = function() {
        Plugin.hideSubmenuDropdowns();
    };

    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.pauseDropdownHover = function(time) {
        Plugin.pauseDropdownHover(time);
    };

    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.resumeDropdownHover = function() {
        return Plugin.resumeDropdownHover();
    };

    /**
     * Register event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    the.off = function(name) {
        return Plugin.removeEvent(name);
    };

    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Handle plugin on window resize
    KTUtil.addResizeHandler(function() {
        if (init) {
            the.reload();
        }
    });

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTMenu;
}

// Plugin global lazy initialization
document.addEventListener("click", function (e) {
    var body = KTUtil.getByTagName('body')[0];
    var query;
    if ( query = body.querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]') ) {
        for (var i = 0, len = query.length; i < len; i++) {
            var element = query[i].closest('.menu-nav').parentNode;

            if ( element ) {
                var the = KTUtil.data(element).get('menu');

                if ( !the ) {
                    break;
                }

                if ( !the || the.getSubmenuMode() !== 'dropdown' ) {
                    break;
                }

                if ( e.target !== element && element.contains(e.target) === false ) {
                    the.hideDropdowns();
                }
            }
        }
    }
});

"use strict";

// Component Definition
var KTOffcanvas = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        attrCustom: ''
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        construct: function(options) {
            if (KTUtil.data(element).has('offcanvas')) {
                the = KTUtil.data(element).get('offcanvas');
            } else {
                // Reset offcanvas
                Plugin.init(options);

                // Build offcanvas
                Plugin.build();

                KTUtil.data(element).set('offcanvas', the);
            }

            return the;
        },

        init: function(options) {
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            the.classBase = the.options.baseClass;
            the.attrCustom = the.options.attrCustom;
            the.classShown = the.classBase + '-on';
            the.classOverlay = the.classBase + '-overlay';
            the.target;

            the.state = KTUtil.hasClass(element, the.classShown) ? 'shown' : 'hidden';
        },

        build: function() {
            // offcanvas toggle
            if (the.options.toggleBy) {
                if (typeof the.options.toggleBy === 'string') {
                    KTUtil.addEvent(KTUtil.getById(the.options.toggleBy), 'click', function(e) {
                        e.preventDefault();
                        the.target = this;
                        Plugin.toggle();
                    });
                } else if (the.options.toggleBy && the.options.toggleBy[0]) {
                    if (the.options.toggleBy[0].target) {
                        for (var i in the.options.toggleBy) {
                            KTUtil.addEvent(KTUtil.getById(the.options.toggleBy[i].target), 'click', function(e) {
                                e.preventDefault();
                                the.target = this;
                                Plugin.toggle();
                            });
                        }
                    } else {
                        for (var i in the.options.toggleBy) {
                            KTUtil.addEvent(KTUtil.getById(the.options.toggleBy[i]), 'click', function(e) {
                                e.preventDefault();
                                the.target = this;
                                Plugin.toggle();
                            });
                        }
                    }

                } else if (the.options.toggleBy && the.options.toggleBy.target) {
                    KTUtil.addEvent( KTUtil.getById(the.options.toggleBy.target), 'click', function(e) {
                        e.preventDefault();
                        the.target = this;
                        Plugin.toggle();
                    });
                }
            }

            // offcanvas close
            var closeBy = KTUtil.getById(the.options.closeBy);
            if (closeBy) {
                KTUtil.addEvent(closeBy, 'click', function(e) {
                    e.preventDefault();
                    the.target = this;
                    Plugin.hide();
                });
            }
        },

        isShown: function() {
            return (the.state == 'shown' ? true : false);
        },

        toggle: function() {
            Plugin.eventTrigger('toggle');

            if (the.state == 'shown') {
                Plugin.hide();
            } else {
                Plugin.show();
            }
        },

        show: function() {
            if (the.state == 'shown') {
                return;
            }

            Plugin.eventTrigger('beforeShow');

            Plugin.toggleClass('show');

            // Offcanvas panel
            KTUtil.attr(body, 'data-offcanvas-' + the.classBase, 'on');
            KTUtil.addClass(element, the.classShown);

            if (the.attrCustom.length > 0) {
                KTUtil.attr(body, 'data-offcanvas-' + the.classCustom, 'on');
                //KTUtil.addClass(body, the.classCustom);
            }

            the.state = 'shown';

            if (the.options.overlay) {
                the.overlay = KTUtil.insertAfter(document.createElement('DIV') , element );
                KTUtil.addClass(the.overlay, the.classOverlay);

                KTUtil.addEvent(the.overlay, 'click', function(e) {
                    //e.stopPropagation();
                    e.preventDefault();
                    Plugin.hide(the.target);
                });
            }

            Plugin.eventTrigger('afterShow');
        },

        hide: function() {
            if (the.state == 'hidden') {
                return;
            }

            Plugin.eventTrigger('beforeHide');

            Plugin.toggleClass('hide');

            KTUtil.removeAttr(body, 'data-offcanvas-' + the.classBase);
            KTUtil.removeClass(element, the.classShown);

            if (the.attrCustom.length > 0) {
                KTUtil.removeAttr(body, 'data-offcanvas-' + the.attrCustom);
            }

            the.state = 'hidden';

            if (the.options.overlay && the.overlay) {
                KTUtil.remove(the.overlay);
            }

            Plugin.eventTrigger('afterHide');
        },

        toggleClass: function(mode) {
            var id = KTUtil.attr(the.target, 'id');
            var toggleBy;

            if (the.options.toggleBy && the.options.toggleBy[0] && the.options.toggleBy[0].target) {
                for (var i in the.options.toggleBy) {
                    if (the.options.toggleBy[i].target === id) {
                        toggleBy = the.options.toggleBy[i];
                    }
                }
            } else if (the.options.toggleBy && the.options.toggleBy.target) {
                toggleBy = the.options.toggleBy;
            }

            if (toggleBy) {
                var el = KTUtil.getById(toggleBy.target);

                if (mode === 'show') {
                    KTUtil.addClass(el, toggleBy.state);
                }

                if (mode === 'hide') {
                    KTUtil.removeClass(el, toggleBy.state);
                }
            }
        },

        eventTrigger: function(name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    } else {
                        return event.handler.call(this, the, args);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     * @param options
     */
    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Check if canvas is shown
     * @returns {boolean}
     */
    the.isShown = function() {
        return Plugin.isShown();
    };

    /**
     * Set to hide the canvas
     */
    the.hide = function() {
        return Plugin.hide();
    };

    /**
     * Set to show the canvas
     */
    the.show = function() {
        return Plugin.show();
    };

    /**
     * Attach event
     * @param name
     * @param handler
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     * @param name
     * @param handler
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTOffcanvas;
}

"use strict";

// Component Definition
var KTScrolltop = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        offset: 300,
        speed: 6000
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Run plugin
         * @returns {mscrolltop}
         */
        construct: function(options) {
            if (KTUtil.data(element).has('scrolltop')) {
                the = KTUtil.data(element).get('scrolltop');
            } else {
                // reset scrolltop
                Plugin.init(options);

                // build scrolltop
                Plugin.build();

                KTUtil.data(element).set('scrolltop', the);
            }

            return the;
        },

        /**
         * Handles subscrolltop click toggle
         * @returns {mscrolltop}
         */
        init: function(options) {
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);
        },

        build: function() {
            var timer;

            window.addEventListener('scroll', function() {
                KTUtil.throttle(timer, function() {
                    Plugin.handle();
                }, 200);
            });

            // handle button click
            KTUtil.addEvent(element, 'click', Plugin.scroll);
        },

        /**
         * Handles scrolltop click scrollTop
         */
        handle: function() {
            var pos = KTUtil.getScrollTop(); // current vertical position

            if (pos > the.options.offset) {
                if (body.hasAttribute('data-scrolltop') === false) {
                    body.setAttribute('data-scrolltop', 'on');
                }
            } else {
                if (body.hasAttribute('data-scrolltop') === true) {
                    body.removeAttribute('data-scrolltop');
                }
            }
        },

        /**
         * Handles scrolltop click scrollTop
         */
        scroll: function(e) {
            e.preventDefault();

            KTUtil.scrollTop(0, the.options.speed);
        },


        /**
         * Trigger events
         */
        eventTrigger: function(name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    } else {
                       return event.handler.call(this, the, args);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Get subscrolltop mode
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Set scrolltop content
     * @returns {mscrolltop}
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTScrolltop;
}

"use strict";

// Component Definition
var KTToggle = function(toggleElement, targetElement, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = toggleElement;
    var target = targetElement;

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        targetToggleMode: 'class' // class|attribute
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (KTUtil.data(element).has('toggle')) {
                the = KTUtil.data(element).get('toggle');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                KTUtil.data(element).set('toggle', the);
            }

            return the;
        },

        /**
         * Handles subtoggle click toggle
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // Merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            //alert(the.options.target.tagName);
            the.target = target;

            the.targetState = the.options.targetState;
            the.toggleState = the.options.toggleState;

            if (the.options.targetToggleMode == 'class') {
                the.state = KTUtil.hasClasses(the.target, the.targetState) ? 'on' : 'off';
            } else {
                the.state = KTUtil.hasAttr(the.target, 'data-' + the.targetState) ? KTUtil.attr(the.target, 'data-' + the.targetState) : 'off';
            }
        },

        /**
         * Setup toggle
         */
        build: function() {
            KTUtil.addEvent(element, 'mouseup', Plugin.toggle);
        },

        /**
         * Handles offcanvas click toggle
         */
        toggle: function(e) {
            Plugin.eventTrigger('beforeToggle');

            if (the.state == 'off') {
                Plugin.toggleOn();
            } else {
                Plugin.toggleOff();
            }

            Plugin.eventTrigger('afterToggle');

            e.preventDefault();

            return the;
        },

        /**
         * Handles toggle click toggle
         */
        toggleOn: function() {
            Plugin.eventTrigger('beforeOn');

            if (the.options.targetToggleMode == 'class') {
                KTUtil.addClass(the.target, the.targetState);
            } else {
                KTUtil.attr(the.target, 'data-' + the.targetState, 'on');
            }

            if (the.toggleState) {
                KTUtil.addClass(element, the.toggleState);
            }

            the.state = 'on';

            Plugin.eventTrigger('afterOn');

            Plugin.eventTrigger('toggle');

            return the;
        },

        /**
         * Handles toggle click toggle
         */
        toggleOff: function() {
            Plugin.eventTrigger('beforeOff');

            if (the.options.targetToggleMode == 'class') {
                KTUtil.removeClass(the.target, the.targetState);
            } else {
                KTUtil.removeAttr(the.target, 'data-' + the.targetState);
            }

            if (the.toggleState) {
                KTUtil.removeClass(element, the.toggleState);
            }

            the.state = 'off';

            Plugin.eventTrigger('afterOff');

            Plugin.eventTrigger('toggle');

            return the;
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];

                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Get toggle state
     */
    the.getState = function() {
        return the.state;
    };

    /**
     * Toggle
     */
    the.toggle = function() {
        return Plugin.toggle();
    };

    /**
     * Toggle on
     */
    the.toggleOn = function() {
        return Plugin.toggleOn();
    };

    /**
     * Toggle off
     */
    the.toggleOff = function() {
        return Plugin.toggleOff();
    };

    /**
     * Attach event
     * @returns {KTToggle}
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     * @returns {KTToggle}
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTToggle;
}

"use strict";

/**
 * @class KTUtil  base utilize class that privides helper functions
 */

// Polyfills
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */
(function (elem) {
	for (var i = 0; i < elem.length; i++) {
		if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;
		window[elem[i]].prototype.remove = function () {
			this.parentNode.removeChild(this);
		};
	}
})(['Element', 'CharacterData', 'DocumentType']);


//
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function(argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// getAttributeNames
if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}

// Global variables
window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function() {
    var resizeHandlers = [];

    /** @type {object} breakpoints The device width breakpoints **/
    var breakpoints = {
        sm: 544, // Small screen / phone
        md: 768, // Medium screen / tablet
        lg: 992, // Large screen / desktop
        xl: 1200 // Extra large screen / wide desktop
    };

    /**
     * Handle window resize event with some
     * delay to attach event handlers upon resize complete
     */
    var _windowResizeHandler = function() {
        var _runResizeHandlers = function() {
            // reinitialize other subscribed elements
            for (var i = 0; i < resizeHandlers.length; i++) {
                var each = resizeHandlers[i];
                each.call();
            }
        };

        var timer;

        window.addEventListener('resize', function() {
            KTUtil.throttle(timer, function() {
                _runResizeHandlers();
            }, 200);
        });
    };

    return {
        /**
         * Class main initializer.
         * @param {object} settings.
         * @returns null
         */
        //main function to initiate the theme
        init: function(settings) {
            if (settings && settings.breakpoints) {
                breakpoints = settings.breakpoints;
            }

            _windowResizeHandler();
        },

        /**
         * Adds window resize event handler.
         * @param {function} callback function.
         */
        addResizeHandler: function(callback) {
            resizeHandlers.push(callback);
        },

        /**
         * Removes window resize event handler.
         * @param {function} callback function.
         */
        removeResizeHandler: function(callback) {
            for (var i = 0; i < resizeHandlers.length; i++) {
                if (callback === resizeHandlers[i]) {
                    delete resizeHandlers[i];
                }
            }
        },

        /**
         * Trigger window resize handlers.
         */
        runResizeHandlers: function() {
            _runResizeHandlers();
        },

        resize: function() {
            if (typeof(Event) === 'function') {
                // modern browsers
                window.dispatchEvent(new Event('resize'));
            } else {
                // for IE and other old browsers
                // causes deprecation warning on modern browsers
                var evt = window.document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
            }
        },

        /**
         * Get GET parameter value from URL.
         * @param {string} paramName Parameter name.
         * @returns {string}
         */
        getURLParam: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }

            return null;
        },

        /**
         * Checks whether current device is mobile touch.
         * @returns {boolean}
         */
        isMobileDevice: function() {
            var test = (this.getViewPort().width < this.getBreakpoint('lg') ? true : false);

            if (test === false) {
                // For use within normal web clients
                test = navigator.userAgent.match(/iPad/i) != null;
            }

            return test;
        },

        /**
         * Checks whether current device is desktop.
         * @returns {boolean}
         */
        isDesktopDevice: function() {
            return KTUtil.isMobileDevice() ? false : true;
        },

        /**
         * Gets browser window viewport size. Ref:
         * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
         * @returns {object}
         */
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        /**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isInResponsiveRange: function(mode) {
            var breakpoint = this.getViewPort().width;

            if (mode == 'general') {
                return true;
            } else if (mode == 'desktop' && breakpoint >= (this.getBreakpoint('lg') + 1)) {
                return true;
            } else if (mode == 'tablet' && (breakpoint >= (this.getBreakpoint('md') + 1) && breakpoint < this.getBreakpoint('lg'))) {
                return true;
            } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
                return true;
            } else if (mode == 'desktop-and-tablet' && breakpoint >= (this.getBreakpoint('md') + 1)) {
                return true;
            } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
                return true;
            } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
                return true;
            }

            return false;
        },

		/**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isBreakpointUp: function(mode) {
            var width = this.getViewPort().width;
			var breakpoint = this.getBreakpoint(mode);

			return (width >= breakpoint);
        },

		isBreakpointDown: function(mode) {
            var width = this.getViewPort().width;
			var breakpoint = this.getBreakpoint(mode);

			return (width < breakpoint);
        },

        /**
         * Generates unique ID for give prefix.
         * @param {string} prefix Prefix for generated ID
         * @returns {boolean}
         */
        getUniqueID: function(prefix) {
            return prefix + Math.floor(Math.random() * (new Date()).getTime());
        },

        /**
         * Gets window width for give breakpoint mode.
         * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
         * @returns {number}
         */
        getBreakpoint: function(mode) {
            return breakpoints[mode];
        },

        /**
         * Checks whether object has property matchs given key path.
         * @param {object} obj Object contains values paired with given key path
         * @param {string} keys Keys path seperated with dots
         * @returns {object}
         */
        isset: function(obj, keys) {
            var stone;

            keys = keys || '';

            if (keys.indexOf('[') !== -1) {
                throw new Error('Unsupported object path notation.');
            }

            keys = keys.split('.');

            do {
                if (obj === undefined) {
                    return false;
                }

                stone = keys.shift();

                if (!obj.hasOwnProperty(stone)) {
                    return false;
                }

                obj = obj[stone];

            } while (keys.length);

            return true;
        },

        /**
         * Gets highest z-index of the given element parents
         * @param {object} el jQuery element object
         * @returns {number}
         */
        getHighestZindex: function(el) {
            var position, value;

            while (el && el !== document) {
                // Ignore z-index if position is set to a value where z-index is ignored by the browser
                // This makes behavior of this function consistent across browsers
                // WebKit always returns auto if the element is positioned
                position = KTUtil.css(el, 'position');

                if (position === "absolute" || position === "relative" || position === "fixed") {
                    // IE returns 0 when zIndex is not specified
                    // other browsers return a string
                    // we ignore the case of nested elements with an explicit value of 0
                    // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                    value = parseInt(KTUtil.css(el, 'z-index'));

                    if (!isNaN(value) && value !== 0) {
                        return value;
                    }
                }

                el = el.parentNode;
            }

            return null;
        },

        /**
         * Checks whether the element has any parent with fixed positionfreg
         * @param {object} el jQuery element object
         * @returns {boolean}
         */
        hasFixedPositionedParent: function(el) {
            var position;

            while (el && el !== document) {
                position = KTUtil.css(el, 'position');

                if (position === "fixed") {
                    return true;
                }

                el = el.parentNode;
            }

            return false;
        },

        /**
         * Simulates delay
         */
        sleep: function(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        },

        /**
         * Gets randomly generated integer value within given min and max range
         * @param {number} min Range start value
         * @param {number} max Range end value
         * @returns {number}
         */
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        /**
         * Checks whether Angular library is included
         * @returns {boolean}
         */
        isAngularVersion: function() {
            return window.Zone !== undefined ? true : false;
        },

        // Deep extend:  $.extend(true, {}, objA, objB);
        deepExtend: function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                var obj = arguments[i];
                if (!obj) continue;

                for (var key in obj) {
                    if (!obj.hasOwnProperty(key)) {
                        continue;
                    }

                    // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
                    if ( Object.prototype.toString.call(obj[key]) === '[object Object]' ) {
                        out[key] = KTUtil.deepExtend(out[key], obj[key]);
                        continue;
                    }

                    out[key] = obj[key];
                }
            }

            return out;
        },

        // extend:  $.extend({}, objA, objB);
        extend: function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                if (!arguments[i])
                    continue;

                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key))
                        out[key] = arguments[i][key];
                }
            }

            return out;
        },

        getById: function(el) {
            if (typeof el === 'string') {
                return document.getElementById(el);
            } else {
                return el;
            }
        },

        getByTag: function(query) {
            return document.getElementsByTagName(query);
        },

        getByTagName: function(query) {
            return document.getElementsByTagName(query);
        },

        getByClass: function(query) {
            return document.getElementsByClassName(query);
        },

        getBody: function() {
            return document.getElementsByTagName('body')[0];
        },

        /**
         * Checks whether the element has given classes
         * @param {object} el jQuery element object
         * @param {string} Classes string
         * @returns {boolean}
         */
        hasClasses: function(el, classes) {
            if (!el) {
                return;
            }

            var classesArr = classes.split(" ");

            for (var i = 0; i < classesArr.length; i++) {
                if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
                    return false;
                }
            }

            return true;
        },

        hasClass: function(el, className) {
            if (!el) {
                return;
            }

            return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
        },

        addClass: function(el, className) {
            if (!el || typeof className === 'undefined') {
                return;
            }

            var classNames = className.split(' ');

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i] && classNames[i].length > 0) {
                        el.classList.add(KTUtil.trim(classNames[i]));
                    }
                }
            } else if (!KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className += ' ' + KTUtil.trim(classNames[x]);
                }
            }
        },

        removeClass: function(el, className) {
          if (!el || typeof className === 'undefined') {
                return;
            }

            var classNames = className.split(' ');

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    el.classList.remove(KTUtil.trim(classNames[i]));
                }
            } else if (KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
                }
            }
        },

        triggerCustomEvent: function(el, eventName, data) {
            var event;
            if (window.CustomEvent) {
                event = new CustomEvent(eventName, {
                    detail: data
                });
            } else {
                event = document.createEvent('CustomEvent');
                event.initCustomEvent(eventName, true, true, data);
            }

            el.dispatchEvent(event);
        },

        triggerEvent: function(node, eventName) {
            // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
            var doc;
            if (node.ownerDocument) {
                doc = node.ownerDocument;
            } else if (node.nodeType == 9) {
                // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
                doc = node;
            } else {
                throw new Error("Invalid node passed to fireEvent: " + node.id);
            }

            if (node.dispatchEvent) {
                // Gecko-style approach (now the standard) takes more work
                var eventClass = "";

                // Different events have different event classes.
                // If this switch statement can't map an eventName to an eventClass,
                // the event firing is going to fail.
                switch (eventName) {
                case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
                case "mouseenter":
                case "mouseleave":
                case "mousedown":
                case "mouseup":
                    eventClass = "MouseEvents";
                    break;

                case "focus":
                case "change":
                case "blur":
                case "select":
                    eventClass = "HTMLEvents";
                    break;

                default:
                    throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
                    break;
                }
                var event = doc.createEvent(eventClass);

                var bubbles = eventName == "change" ? false : true;
                event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

                event.synthetic = true; // allow detection of synthetic events
                // The second parameter says go ahead with the default action
                node.dispatchEvent(event, true);
            } else if (node.fireEvent) {
                // IE-old school style
                var event = doc.createEventObject();
                event.synthetic = true; // allow detection of synthetic events
                node.fireEvent("on" + eventName, event);
            }
        },

        index: function( el ){
            var c = el.parentNode.children, i = 0;
            for(; i < c.length; i++ )
                if( c[i] == el ) return i;
        },

        trim: function(string) {
            return string.trim();
        },

        eventTriggered: function(e) {
            if (e.currentTarget.dataset.triggered) {
                return true;
            } else {
                e.currentTarget.dataset.triggered = true;

                return false;
            }
        },

        remove: function(el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },

        find: function(parent, query) {
            parent = KTUtil.getById(parent);
            if (parent) {
                return parent.querySelector(query);
            }
        },

        findAll: function(parent, query) {
            parent = KTUtil.getById(parent);
            if (parent) {
                return parent.querySelectorAll(query);
            }
        },

        insertAfter: function(el, referenceNode) {
            return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        },

        parents: function(elem, selector) {
            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function(s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) {}
                        return i > -1;
                    };
            }

            // Set up a parent array
            var parents = [];

            // Push each parent element to the array
            for ( ; elem && elem !== document; elem = elem.parentNode ) {
                if (selector) {
                    if (elem.matches(selector)) {
                        parents.push(elem);
                    }
                    continue;
                }
                parents.push(elem);
            }

            // Return our parent array
            return parents;
        },

        children: function(el, selector, log) {
            if (!el || !el.childNodes) {
                return;
            }

            var result = [],
                i = 0,
                l = el.childNodes.length;

            for (var i; i < l; ++i) {
                if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
                    result.push(el.childNodes[i]);
                }
            }

            return result;
        },

        child: function(el, selector, log) {
            var children = KTUtil.children(el, selector, log);

            return children ? children[0] : null;
        },

        matches: function(el, selector, log) {
            var p = Element.prototype;
            var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };

            if (el && el.tagName) {
                return f.call(el, selector);
            } else {
                return false;
            }
        },

        data: function(el) {
            return {
                set: function(name, data) {
                    if (!el) {
                        return;
                    }

                    if (el.customDataTag === undefined) {
                        window.KTUtilElementDataStoreID++;
                        el.customDataTag = window.KTUtilElementDataStoreID;
                    }

                    if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
                        window.KTUtilElementDataStore[el.customDataTag] = {};
                    }

                    window.KTUtilElementDataStore[el.customDataTag][name] = data;
                },

                get: function(name) {
                    if (!el) {
                        return;
                    }

                    if (el.customDataTag === undefined) {
                        return null;
                    }

                    return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
                },

                has: function(name) {
                    if (!el) {
                        return false;
                    }

                    if (el.customDataTag === undefined) {
                        return false;
                    }

                    return (window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name]) ? true : false;
                },

                remove: function(name) {
                    if (el && this.has(name)) {
                        delete window.KTUtilElementDataStore[el.customDataTag][name];
                    }
                }
            };
        },

        outerWidth: function(el, margin) {
            var width;

            if (margin === true) {
                width = parseFloat(el.offsetWidth);
                width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));

                return parseFloat(width);
            } else {
                width = parseFloat(el.offsetWidth);

                return width;
            }
        },

        offset: function(el) {
            var rect, win;

            if ( !el ) {
                return;
            }

            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error

            if ( !el.getClientRects().length ) {
                return { top: 0, left: 0 };
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = el.getBoundingClientRect();
            win = el.ownerDocument.defaultView;

            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },

        height: function(el) {
            return KTUtil.css(el, 'height');
        },

        outerHeight: function(el, withMargin) {
            var height = el.offsetHeight;
            var style;

            if (typeof withMargin !== 'undefined' && withMargin === true) {
                style = getComputedStyle(el);
                height += parseInt(style.marginTop) + parseInt(style.marginBottom);

                return height;
            } else {
                return height;
            }
        },

        visible: function(el) {
            return !(el.offsetWidth === 0 && el.offsetHeight === 0);
        },

        attr: function(el, name, value) {
            if (el == undefined) {
                return;
            }

            if (value !== undefined) {
                el.setAttribute(name, value);
            } else {
                return el.getAttribute(name);
            }
        },

        hasAttr: function(el, name) {
            if (el == undefined) {
                return;
            }

            return el.getAttribute(name) ? true : false;
        },

        removeAttr: function(el, name) {
            if (el == undefined) {
                return;
            }

            el.removeAttribute(name);
        },

        animate: function(from, to, duration, update, easing, done) {
            /**
             * TinyAnimate.easings
             *  Adapted from jQuery Easing
             */
            var easings = {};
            var easing;

            easings.linear = function(t, b, c, d) {
                return c * t / d + b;
            };

            easing = easings.linear;

            // Early bail out if called incorrectly
            if (typeof from !== 'number' ||
                typeof to !== 'number' ||
                typeof duration !== 'number' ||
                typeof update !== 'function') {
                return;
            }

            // Create mock done() function if necessary
            if (typeof done !== 'function') {
                done = function() {};
            }

            // Pick implementation (requestAnimationFrame | setTimeout)
            var rAF = window.requestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000 / 50);
            };

            // Animation loop
            var canceled = false;
            var change = to - from;

            function loop(timestamp) {
                var time = (timestamp || +new Date()) - start;

                if (time >= 0) {
                    update(easing(time, from, change, duration));
                }
                if (time >= 0 && time >= duration) {
                    update(to);
                    done();
                } else {
                    rAF(loop);
                }
            }

            update(from);

            // Start animation loop
            var start = window.performance && window.performance.now ? window.performance.now() : +new Date();

            rAF(loop);
        },

        actualCss: function(el, prop, cache) {
            var css = '';

            if (el instanceof HTMLElement === false) {
                return;
            }

            if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
                var value;

                // the element is hidden so:
                // making the el block so we can meassure its height but still be hidden
                css = el.style.cssText;
                el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

                if (prop == 'width') {
                    value = el.offsetWidth;
                } else if (prop == 'height') {
                    value = el.offsetHeight;
                }

                el.style.cssText = css;

                // store it in cache
                el.setAttribute('kt-hidden-' + prop, value);

                return parseFloat(value);
            } else {
                // store it in cache
                return parseFloat(el.getAttribute('kt-hidden-' + prop));
            }
        },

        actualHeight: function(el, cache) {
            return KTUtil.actualCss(el, 'height', cache);
        },

        actualWidth: function(el, cache) {
            return KTUtil.actualCss(el, 'width', cache);
        },

        getScroll: function(element, method) {
            // The passed in `method` value should be 'Top' or 'Left'
            method = 'scroll' + method;
            return (element == window || element == document) ? (
                self[(method == 'scrollTop') ? 'pageYOffset' : 'pageXOffset'] ||
                (browserSupportsBoxModel && document.documentElement[method]) ||
                document.body[method]
            ) : element[method];
        },

        css: function(el, styleProp, value) {
            if (!el) {
                return;
            }

            if (value !== undefined) {
                el.style[styleProp] = value;
            } else {
                var defaultView = (el.ownerDocument || document).defaultView;
                // W3C standard way:
                if (defaultView && defaultView.getComputedStyle) {
                    // sanitize property name to css notation
                    // (hyphen separated words eg. font-Size)
                    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
                    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
                } else if (el.currentStyle) { // IE
                    // sanitize property name to camelCase
                    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
                        return letter.toUpperCase();
                    });
                    value = el.currentStyle[styleProp];
                    // convert other units to pixels on IE
                    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                        return (function(value) {
                            var oldLeft = el.style.left,
                                oldRsLeft = el.runtimeStyle.left;
                            el.runtimeStyle.left = el.currentStyle.left;
                            el.style.left = value || 0;
                            value = el.style.pixelLeft + "px";
                            el.style.left = oldLeft;
                            el.runtimeStyle.left = oldRsLeft;
                            return value;
                        })(value);
                    }
                    return value;
                }
            }
        },

        slide: function(el, dir, speed, callback, recalcMaxHeight) {
            if (!el || (dir == 'up' && KTUtil.visible(el) === false) || (dir == 'down' && KTUtil.visible(el) === true)) {
                return;
            }

            speed = (speed ? speed : 600);
            var calcHeight = KTUtil.actualHeight(el);
            var calcPaddingTop = false;
            var calcPaddingBottom = false;

            if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
                KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
            }

            if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
                KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
            }

            if (KTUtil.data(el).has('slide-padding-top')) {
                calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
            }

            if (KTUtil.data(el).has('slide-padding-bottom')) {
                calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
            }

            if (dir == 'up') { // up
                el.style.cssText = 'display: block; overflow: hidden;';

                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function(value) {
                        el.style.paddingTop = (calcPaddingTop - value) + 'px';
                    }, 'linear');
                }

                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function(value) {
                        el.style.paddingBottom = (calcPaddingBottom - value) + 'px';
                    }, 'linear');
                }

                KTUtil.animate(0, calcHeight, speed, function(value) {
                    el.style.height = (calcHeight - value) + 'px';
                }, 'linear', function() {
                    el.style.height = '';
                    el.style.display = 'none';

                    if (typeof callback === 'function') {
                        callback();
                    }
                });


            } else if (dir == 'down') { // down
                el.style.cssText = 'display: block; overflow: hidden;';

                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function(value) {//
                        el.style.paddingTop = value + 'px';
                    }, 'linear', function() {
                        el.style.paddingTop = '';
                    });
                }

                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function(value) {
                        el.style.paddingBottom = value + 'px';
                    }, 'linear', function() {
                        el.style.paddingBottom = '';
                    });
                }

                KTUtil.animate(0, calcHeight, speed, function(value) {
                    el.style.height = value + 'px';
                }, 'linear', function() {
                    el.style.height = '';
                    el.style.display = '';
                    el.style.overflow = '';

                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
        },

        slideUp: function(el, speed, callback) {
            KTUtil.slide(el, 'up', speed, callback);
        },

        slideDown: function(el, speed, callback) {
            KTUtil.slide(el, 'down', speed, callback);
        },

        show: function(el, display) {
            if (typeof el !== 'undefined') {
                el.style.display = (display ? display : 'block');
            }
        },

        hide: function(el) {
            if (typeof el !== 'undefined') {
                el.style.display = 'none';
            }
        },

        addEvent: function(el, type, handler, one) {
            if (typeof el !== 'undefined' && el !== null) {
                el.addEventListener(type, handler);
            }
        },

        removeEvent: function(el, type, handler) {
            if (el !== null) {
                el.removeEventListener(type, handler);
            }
        },

        on: function(element, selector, event, handler) {
            if (!selector) {
                return;
            }

            var eventId = KTUtil.getUniqueID('event');

            window.KTUtilDelegatedEventHandlers[eventId] = function(e) {
                var targets = element.querySelectorAll(selector);
                var target = e.target;

                while (target && target !== element) {
                    for (var i = 0, j = targets.length; i < j; i++) {
                        if (target === targets[i]) {
                            handler.call(target, e);
                        }
                    }

                    target = target.parentNode;
                }
            }

            KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);

            return eventId;
        },

        off: function(element, event, eventId) {
            if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
                return;
            }

            KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);

            delete window.KTUtilDelegatedEventHandlers[eventId];
        },

        one: function onetime(el, type, callback) {
            el.addEventListener(type, function callee(e) {
                // remove event
                if (e.target && e.target.removeEventListener) {
                    e.target.removeEventListener(e.type, callee);
                }

                // need to verify from https://themeforest.net/author_dashboard#comment_23615588
                if (el && el.removeEventListener) {
				    e.currentTarget.removeEventListener(e.type, callee);
			    }

                // call handler
                return callback(e);
            });
        },

        hash: function(str) {
            var hash = 0,
                i, chr;

            if (str.length === 0) return hash;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }

            return hash;
        },

        animateClass: function(el, animationName, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }

            KTUtil.addClass(el, 'animated ' + animationName);

            KTUtil.one(el, animation, function() {
                KTUtil.removeClass(el, 'animated ' + animationName);
            });

            if (callback) {
                KTUtil.one(el, animation, callback);
            }
        },

        transitionEnd: function(el, callback) {
            var transition;
            var transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'mozTransitionEnd',
                WebkitTransition: 'webkitTransitionEnd',
                msTransition: 'msTransitionEnd'
            };

            for (var t in transitions) {
                if (el.style[t] !== undefined) {
                    transition = transitions[t];
                }
            }

            KTUtil.one(el, transition, callback);
        },

        animationEnd: function(el, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd'
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }

            KTUtil.one(el, animation, callback);
        },

        animateDelay: function(el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-delay', value);
            }
        },

        animateDuration: function(el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-duration', value);
            }
        },

        scrollTo: function(target, offset, duration) {
            var duration = duration ? duration : 500;
            var targetPos = target ? KTUtil.offset(target).top : 0;
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var from, to;

            if (offset) {
                scrollPos += offset;
            }

            from = scrollPos;
            to = targetPos;

            KTUtil.animate(from, to, duration, function(value) {
                document.documentElement.scrollTop = value;
                document.body.parentNode.scrollTop = value;
                document.body.scrollTop = value;
            }); //, easing, done
        },

        scrollTop: function(offset, duration) {
            KTUtil.scrollTo(null, offset, duration);
        },

        isArray: function(obj) {
            return obj && Array.isArray(obj);
        },

        ready: function(callback) {
            if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
                callback();
            } else {
                document.addEventListener('DOMContentLoaded', callback);
            }
        },

        isEmpty: function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }

            return true;
        },

        numberString: function(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        },

        detectIE: function() {
            var ua = window.navigator.userAgent;

            // Test values; Uncomment to check result …

            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

            // Edge 12 (Spartan)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

            // Edge 13
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;
        },

        isRTL: function() {
            var html = KTUtil.getByTagName('html')[0];

            if (html) {
                return (KTUtil.attr(html, 'direction') == 'rtl');
            }
        },

        // Scroller
        scrollInit: function(element, options) {
            if (!element) {
                return;
            }

            // Learn more: https://github.com/mdbootstrap/perfect-scrollbar#options
            var pluginDefOptions = {
                wheelSpeed: 0.5,
                swipeEasing: true,
                wheelPropagation: false,
                minScrollbarLength: 40,
                maxScrollbarLength: 300,
                suppressScrollX: true
            };

            options = KTUtil.deepExtend({}, pluginDefOptions, options);

            // Define init function
            function init() {
                var ps;
                var height;

                // Get extra options via data attributes
                var attrs = element.getAttributeNames();
                if (attrs.length > 0) {
                    attrs.forEach(function(attrName) {
            			// more options; https://github.com/ganlanyuan/tiny-slider#options
            			if ((/^data-.*/g).test(attrName)) {
                            if (['scroll', 'height', 'mobile-height'].includes(optionName) == false) {
                                var optionName = attrName.replace('data-', '').toLowerCase().replace(/(?:[\s-])\w/g, function(match) {
                					return match.replace('-', '').toUpperCase();
                				});

                                options[optionName] = KTUtil.filterBoolean(element.getAttribute(attrName));
                            }
            			}
            		});
                }

                if (options.height instanceof Function) {
                    height = options.height.call();
                } else {
                    if (KTUtil.isMobileDevice() === true && options.mobileHeight) {
                        height = parseInt(options.mobileHeight);
                    } else if (options.height) {
                        height = parseInt(options.height);
                    } else {
                        height = parseInt(KTUtil.css(element, 'height'));
                    }
                }

                if (height === false) {
                    KTUtil.scrollDestroy(element, true);

                    return;
                }

                height = parseInt(height);

                // Destroy scroll on table and mobile modes
                if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isMobileDevice() === true) {
                    ps = KTUtil.data(element).get('ps');
                    if (ps) {
                        if (options.resetHeightOnDestroy) {
                            KTUtil.css(element, 'height', 'auto');
                        } else {
                            KTUtil.css(element, 'overflow', 'auto');
                            if (height > 0) {
                                KTUtil.css(element, 'height', height + 'px');
                            }
                        }

                        ps.destroy();
                        ps = KTUtil.data(element).remove('ps');
                    } else if (height > 0){
                        KTUtil.css(element, 'overflow', 'auto');
                        KTUtil.css(element, 'height', height + 'px');
                    }

                    return;
                }

                if (height > 0) {
                    KTUtil.css(element, 'height', height + 'px');
                }

                if (options.desktopNativeScroll) {
                    KTUtil.css(element, 'overflow', 'auto');
                    return;
                }

                // Pass options via HTML Attributes
                if (KTUtil.attr(element, 'data-window-scroll') == 'true') {
                     options.windowScroll = true;
                }

                // Init scroll
                ps = KTUtil.data(element).get('ps');

                if (ps) {
                    ps.update();
                } else {
                    KTUtil.css(element, 'overflow', 'hidden');
                    KTUtil.addClass(element, 'scroll');

                    ps = new PerfectScrollbar(element, options);

                    KTUtil.data(element).set('ps', ps);
                }

                // Remember scroll position in cookie
                var uid = KTUtil.attr(element, 'id');

                // Todo:Consider using Localstorage
                if (options.rememberPosition === true && KTCookie && uid) {
                    if (KTCookie.getCookie(uid)) {
                        var pos = parseInt(KTCookie.getCookie(uid));

                        if (pos > 0) {
                            element.scrollTop = pos;
                        }
                    }

                    element.addEventListener('ps-scroll-y', function() {
                        KTCookie.setCookie(uid, element.scrollTop);
                    });
                }
            }

            // Init
            init();

            // Handle window resize
            if (options.handleWindowResize) {
                KTUtil.addResizeHandler(function() {
                    init();
                });
            }
        },

        scrollUpdate: function(element) {
            var ps = KTUtil.data(element).get('ps');
            if (ps) {
                ps.update();
            }
        },

        scrollUpdateAll: function(parent) {
            var scrollers = KTUtil.findAll(parent, '.ps');
            for (var i = 0, len = scrollers.length; i < len; i++) {
                KTUtil.scrollUpdate(scrollers[i]);
            }
        },

        scrollDestroy: function(element, resetAll) {
            var ps = KTUtil.data(element).get('ps');

            if (ps) {
                ps.destroy();
                ps = KTUtil.data(element).remove('ps');
            }

            if (element && resetAll) {
                element.style.setProperty('overflow', '');
                element.style.setProperty('height', '');
            }
        },

        filterBoolean: function(val) {
            // Convert string boolean
			if (val === true || val === 'true') {
				return true;
			}

			if (val === false || val === 'false') {
				return false;
			}

            return val;
        },

        setHTML: function(el, html) {
            el.innerHTML = html;
        },

        getHTML: function(el) {
            if (el) {
                return el.innerHTML;
            }
        },

        getDocumentHeight: function() {
            var body = document.body;
            var html = document.documentElement;

            return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        },

        getScrollTop: function() {
            return  (document.scrollingElement || document.documentElement).scrollTop;
        },

        changeColor: function(col, amt) {

            var usePound = false;

            if (col[0] == "#") {
                col = col.slice(1);
                usePound = true;
            }

            var num = parseInt(col,16);

            var r = (num >> 16) + amt;

            if (r > 255) r = 255;
            else if  (r < 0) r = 0;

            var b = ((num >> 8) & 0x00FF) + amt;

            if (b > 255) b = 255;
            else if  (b < 0) b = 0;

            var g = (num & 0x0000FF) + amt;

            if (g > 255) g = 255;
            else if (g < 0) g = 0;

            return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

        },

        // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
        throttle:  function (timer, func, delay) {
        	// If setTimeout is already scheduled, no need to do anything
        	if (timer) {
        		return;
        	}

        	// Schedule a setTimeout after delay seconds
        	timer  =  setTimeout(function () {
        		func();

        		// Once setTimeout function execution is finished, timerId = undefined so that in <br>
        		// the next scroll event function execution can be scheduled by the setTimeout
        		timer  =  undefined;
        	}, delay);
        },

        // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
        debounce: function (timer, func, delay) {
        	// Cancels the setTimeout method execution
        	clearTimeout(timer)

        	// Executes the func after delay time.
        	timer  =  setTimeout(func, delay);
        },

        btnWait: function(el, cls, message, disable) {
            if (!el) {
                return;
            }

            if (typeof disable !== 'undefined' && disable === true) {
                KTUtil.attr(el, "disabled", true);
            }

            if (cls) {
                KTUtil.addClass(el, cls);
                KTUtil.attr(el, "wait-class", cls);
            }

            if (message) {
                var caption = KTUtil.find(el, '.btn-caption');

                if (caption) {
                    KTUtil.data(caption).set('caption', KTUtil.getHTML(caption));
                    KTUtil.setHTML(caption, message);
                } else {
                    KTUtil.data(el).set('caption', KTUtil.getHTML(el));
                    KTUtil.setHTML(el, message);
                }
            }
        },

        btnRelease: function(el) {
            if (!el) {
                return;
            }

            /// Show loading state on button
            KTUtil.removeAttr(el, "disabled");

            if (KTUtil.hasAttr(el, "wait-class")) {
                KTUtil.removeClass(el, KTUtil.attr(el, "wait-class"));
            }

            var caption = KTUtil.find(el, '.btn-caption');

            if (caption && KTUtil.data(caption).has('caption')) {
                KTUtil.setHTML(caption, KTUtil.data(caption).get('caption'));
            } else if (KTUtil.data(el).has('caption')) {
                KTUtil.setHTML(el, KTUtil.data(el).get('caption'));
            }
        },

        isOffscreen: function(el, direction, offset) {
            offset = offset || 0;

            var windowWidth = KTUtil.getViewPort().width;
            var windowHeight = KTUtil.getViewPort().height;

            var top = KTUtil.offset(el).top;
            var height = KTUtil.outerHeight(el) + offset;
            var left = KTUtil.offset(el).left;
            var width = KTUtil.outerWidth(el) + offset;

            if (direction == 'bottom') {
                if (windowHeight < top + height) {
                    return true;
                } else if (windowHeight > top + height * 1.5) {
                    return true;
                }
            }

            if (direction == 'top') {
                if (top < 0) {
                    return true;
                } else if (top > height) {
                    return true;
                }
            }

            if (direction == 'left') {
                if (left < 0) {
                    return true;
                } else if (left * 2 > width) {
                    //console.log('left 2');
                    //return true;
                }
            }

            if (direction == 'right') {
                if (windowWidth < left + width) {
                    return true;
                } else {
                    //console.log('right 2');
                    //return true;
                }
            }

            return false;
        }
    }
}();

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTUtil;
}

// Initialize KTUtil class on document ready
KTUtil.ready(function() {
	if (typeof KTAppSettings !== 'undefined') {
		KTUtil.init(KTAppSettings);
	} else {
		KTUtil.init();
	}
});

"use strict";

// Component Definition
var KTWizard = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        startStep: 1,
        clickableSteps: false, // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element
        navigation: true
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (KTUtil.data(element).has('wizard')) {
                the = KTUtil.data(element).get('wizard');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                KTUtil.data(element).set('wizard', the);
            }

            return the;
        },

        /**
         * Init wizard
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            // Elements
            the.steps = KTUtil.findAll(element, '[data-wizard-type="step"]');

            the.btnNext = KTUtil.find(element, '[data-wizard-type="action-next"]');
            the.btnPrev = KTUtil.find(element, '[data-wizard-type="action-prev"]');
            the.btnSubmit = KTUtil.find(element, '[data-wizard-type="action-submit"]');

            // Variables
            the.events = [];
            the.lastStep = 0;
            the.currentStep = 1;
            the.newStep = 0;
            the.stopped = false;
            the.totalSteps = the.steps.length;

            // Init current step
            if (the.options.startStep > 1) {
                Plugin.goTo(the.options.startStep);
            }

            // Init UI
            Plugin.updateUI();
        },

        /**
         * Build Form Wizard
         */
        build: function() {
            if (the.options.navigation) {
                // Next button event handler
                KTUtil.addEvent(the.btnNext, 'click', function(e) {
                    e.preventDefault();

                    // Set new step number
                    Plugin.setNewStep(Plugin.getNextStep());

                    // Trigger change event
                    if (Plugin.eventTrigger('change') !== false) {
                        Plugin.goTo(Plugin.getNextStep());
                    }
                });

                // Prev button event handler
                KTUtil.addEvent(the.btnPrev, 'click', function(e) {
                    e.preventDefault();

                    // Set new step number
                    Plugin.setNewStep(Plugin.getPrevStep());

                    // Trigger change event
                    if (Plugin.eventTrigger('change') !== false) {
                        Plugin.goTo(Plugin.getPrevStep());
                    }
                });

                // Submit button event handler
                KTUtil.addEvent(the.btnSubmit, 'click', function(e) {
                    e.preventDefault();

                    Plugin.eventTrigger('submit');
                });
            }

            if (the.options.clickableSteps === true) {
                KTUtil.on(element, '[data-wizard-type="step"]', 'click', function() {
                    var index = KTUtil.index(this) + 1;

                    if (index !== the.currentStep) {
                        Plugin.setNewStep(index);

                        // Trigger change event
                        if (Plugin.eventTrigger('change') !== false) {
                            Plugin.goTo(index);
                        }
                    }
                });
            }
        },

        /**
         * Handles wizard click wizard
         */
        goTo: function(number) {
            // Skip if stopped
            if (the.stopped === true) {
                the.stopped = false;
                return;
            }

            // Skip if this step is already shown
            if (number === the.currentStep || number > the.totalSteps || number < 0) {
                return;
            }

            // Validate step number
            number = parseInt(number);

            // Set current step
            the.lastStep = the.currentStep;
            the.currentStep = number;
            the.newStep = 0;

            Plugin.updateUI();

            Plugin.eventTrigger('changed');

            return the;
        },

        /**
         * Stop wizard
         */
        stop: function() {
            the.stopped = true;
        },

        /**
         * Resume wizard
         */
        resume: function() {
            the.stopped = false;
        },

        /**
         * Check last step
         */
        isLastStep: function() {
            return the.currentStep === the.totalSteps;
        },

        /**
         * Check first step
         */
        isFirstStep: function() {
            return the.currentStep === 1;
        },

        /**
         * Check between step
         */
        isBetweenStep: function() {
            return Plugin.isLastStep() === false && Plugin.isFirstStep() === false;
        },

        /**
         * Update wizard UI after step change
         */
        updateUI: function() {
            var stepType = '';
            var index = the.currentStep - 1;

            if (Plugin.isLastStep()) {
                stepType = 'last';
            } else if (Plugin.isFirstStep()) {
                stepType = 'first';
            } else {
                stepType = 'between';
            }

            KTUtil.attr(the.element, 'data-wizard-state', stepType);

            // Steps
            var steps = KTUtil.findAll(the.element, '[data-wizard-type="step"]');

            if (steps && steps.length > 0) {
                for (var i = 0, len = steps.length; i < len; i++) {
                    if (i == index) {
                        KTUtil.attr(steps[i], 'data-wizard-state', 'current');
                    } else {
                        if (i < index) {
                            KTUtil.attr(steps[i], 'data-wizard-state', 'done');
                        } else {
                            KTUtil.attr(steps[i], 'data-wizard-state', 'pending');
                        }
                    }
                }
            }

            // Steps Info
            var stepsInfo = KTUtil.findAll(the.element, '[data-wizard-type="step-info"]');
            if (stepsInfo &&stepsInfo.length > 0) {
                for (var i = 0, len = stepsInfo.length; i < len; i++) {
                    if (i == index) {
                        KTUtil.attr(stepsInfo[i], 'data-wizard-state', 'current');
                    } else {
                        KTUtil.removeAttr(stepsInfo[i], 'data-wizard-state');
                    }
                }
            }

            // Steps Content
            var stepsContent = KTUtil.findAll(the.element, '[data-wizard-type="step-content"]');
            if (stepsContent&& stepsContent.length > 0) {
                for (var i = 0, len = stepsContent.length; i < len; i++) {
                    if (i == index) {
                        KTUtil.attr(stepsContent[i], 'data-wizard-state', 'current');
                    } else {
                        KTUtil.removeAttr(stepsContent[i], 'data-wizard-state');
                    }
                }
            }
        },

        /**
         * Get next step number
         */
        getNextStep: function() {
            if (the.totalSteps >= (the.currentStep + 1)) {
                return the.currentStep + 1;
            } else {
                return the.totalSteps;
            }
        },

        /**
         * Get prev step number
         */
        getPrevStep: function() {
            if ((the.currentStep - 1) >= 1) {
                return the.currentStep - 1;
            } else {
                return 1;
            }
        },

        /**
         * Get new step number
         */
        getNewStep: function() {
            return the.newStep;
        },

        /**
         * Set new step
         */
        setNewStep: function(step) {
            the.newStep = step;
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name, nested) {
            //KTUtil.triggerCustomEvent(name);
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Go to the next step
     */
    the.goNext = function() {
        return Plugin.goTo(Plugin.getNextStep());
    };

    /**
     * Go to the prev step
     */
    the.goPrev = function() {
        return Plugin.goTo(Plugin.getPrevStep());
    };

    /**
     * Go to the last step
     */
    the.goLast = function() {
        return Plugin.goTo(Plugin.getLastStep());
    };

    /**
     * Go to the first step
     */
    the.goFirst = function() {
        return Plugin.goTo(Plugin.getFirstStep());
    };

    /**
     * Go to a step
     */
    the.goTo = function(number) {
        return Plugin.goTo(number);
    };

    /**
     * Stop wizard
     */
    the.stop = function() {
        return Plugin.stop();
    };

    /**
     * Resume wizard
     */
    the.resume = function() {
        return Plugin.resume();
    };

    /**
     * Get current step number
     */
    the.getStep = function() {
        return the.currentStep;
    };

    /**
     * Get new step number
     */
    the.getNewStep = function() {
        return Plugin.getNewStep();
    };

    /**
     * Set new step number
     */
    the.setNewStep = function(number) {
        Plugin.setNewStep(number);
    };

    /**
     * Check last step
     */
    the.isLastStep = function() {
        return Plugin.isLastStep();
    };

    /**
     * Check first step
     */
    the.isFirstStep = function() {
        return Plugin.isFirstStep();
    };

    /**
     * Attach event("change", "changed", "submit")
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTWizard;
}

'use strict';
(function($) {

	var pluginName = 'KTDatatable';
	var pfx = '';
	var util = KTUtil;
	var app = KTApp;

	if (typeof util === 'undefined') throw new Error('Util class is required and must be included before ' + pluginName);

	// plugin setup
	$.fn[pluginName] = function(options) {
		if ($(this).length === 0) {
			console.warn('No ' + pluginName + ' element exist.');
			return;
		}

		// global variables
		var datatable = this;

		// debug enabled?
		// 1) state will be cleared on each refresh
		// 2) enable some logs
		// 3) etc.
		datatable.debug = false;

		datatable.API = {
			record: null,
			value: null,
			params: null,
		};

		var Plugin = {
			/********************
			 ** PRIVATE METHODS
			 ********************/
			isInit: false,
			cellOffset: 108,
			iconOffset: 15,
			stateId: 'meta',
			ajaxParams: {},
			pagingObject: {},

			init: function(options) {
				var isHtmlTable = false;
				// data source option empty is normal table
				if (options.data.source === null) {
					Plugin.extractTable();
					isHtmlTable = true;
				}

				Plugin.setupBaseDOM.call();
				Plugin.setupDOM(datatable.table);

				// on event after layout had done setup, show datatable
				$(datatable).on(pfx + 'datatable-on-layout-updated', Plugin.afterRender);

				if (datatable.debug) {
					Plugin.stateRemove(Plugin.stateId);
				}

				/*var es = Plugin.stateGet(Plugin.stateId);
				var eq = {};
				if (es && es.hasOwnProperty('query')) {
					eq = es.query;
				}
				Plugin.setDataSourceQuery(Object.assign({}, eq, Plugin.getOption('data.source.read.params.query')));*/

				// set custom query from options
				Plugin.setDataSourceQuery(Plugin.getOption('data.source.read.params.query'));

				// initialize extensions
				$.each(Plugin.getOption('extensions'), function(extName, extOptions) {
					if (typeof $.fn[pluginName][extName] === 'function') {
						if (typeof extOptions !== 'object') {
							extOptions = $.extend({}, extOptions);
						}
						new $.fn[pluginName][extName](datatable, extOptions);
					}
				});

				Plugin.spinnerCallback(true);
				// get data
				if (options.data.type === 'remote' || options.data.type === 'local') {
					if (options.data.saveState === false) {
						Plugin.stateRemove(Plugin.stateId);
					}
					// get data for local datatable and local table
					if (options.data.type === 'local' && typeof options.data.source === 'object') {
						datatable.dataSet = datatable.originalDataSet = Plugin.dataMapCallback(options.data.source);
					}
					Plugin.dataRender();
				}

				// if html table, remove and setup a new header
				if (isHtmlTable) {
					$(datatable.tableHead).find('tr').remove();
					$(datatable.tableFoot).find('tr').remove();
				}

				Plugin.setHeadTitle();
				if (Plugin.getOption('layout.footer')) {
					Plugin.setHeadTitle(datatable.tableFoot);
				}

				// hide header
				if (typeof options.layout.header !== 'undefined' &&
					options.layout.header === false) {
					$(datatable.table).find('thead').remove();
				}

				// hide footer
				if (typeof options.layout.footer !== 'undefined' &&
					options.layout.footer === false) {
					$(datatable.table).find('tfoot').remove();
				}

				// for normal and local data type, run layoutUpdate
				if (options.data.type === null ||
					options.data.type === 'local') {
					Plugin.setupCellField.call();
					Plugin.setupTemplateCell.call();

					// setup nested datatable, if option enabled
					Plugin.setupSubDatatable.call();

					// setup extra system column properties
					Plugin.setupSystemColumn.call();
					Plugin.redraw();
				}

				var width;
				var initialWidth = false;
				$(window).resize(function() {
					// issue: URL Bar Resizing on mobile, https://developers.google.com/web/updates/2016/12/url-bar-resizing
					// trigger datatable resize on width change only
					if ($(this).width() !== width) {
						width = $(this).width();
						Plugin.fullRender();
					}
					// get initial width
					if (!initialWidth) {
						width = $(this).width();
						initialWidth = true;
					}
				});

				$(datatable).height('');

				var prevKeyword = '';
				$(Plugin.getOption('search.input')).on('keyup', function(e) {
					if (Plugin.getOption('search.onEnter') && e.which !== 13) return;
					var keyword = $(this).val();
					// prevent multiple search request on every button keyup
					if (prevKeyword !== keyword) {
						Plugin.search(keyword);
						prevKeyword = keyword;
					}
				});

				return datatable;
			},

			/**
			 * Extract static HTML table content into datasource
			 */
			extractTable: function() {
				var columns = [];
				var headers = $(datatable).find('tr:first-child th').get().map(function(cell, i) {
					var field = $(cell).data('field');
					var title = $(cell).data('title');
					if (typeof field === 'undefined') {
						field = $(cell).text().trim();
					}
					if (typeof title === 'undefined') {
						title = $(cell).text().trim();
					}
					var column = {field: field, title: title};
					for (var ii in options.columns) {
						if (options.columns[ii].field === field) {
							column = $.extend(true, {}, options.columns[ii], column);
						}
					}
					columns.push(column);
					return field;
				});
				// auto create columns config
				options.columns = columns;

				var rowProp = [];
				var source = [];

				$(datatable).find('tr').each(function() {
					if ($(this).find('td').length) {
						rowProp.push($(this).prop('attributes'));
					}
					var td = {};
					$(this).find('td').each(function(i, cell) {
						td[headers[i]] = cell.innerHTML.trim();
					});
					if (!util.isEmpty(td)) {
						source.push(td);
					}
				});

				options.data.attr.rowProps = rowProp;
				options.data.source = source;
			},

			/**
			 * One time layout update on init
			 */
			layoutUpdate: function() {
				// setup nested datatable, if option enabled
				Plugin.setupSubDatatable.call();

				// setup extra system column properties
				Plugin.setupSystemColumn.call();

				// setup cell hover event
				Plugin.setupHover.call();

				if (typeof options.detail === 'undefined'
					// temporary disable lock column in subtable
					&& Plugin.getDepth() === 1) {
					// lock columns handler
					Plugin.lockTable.call();
				}

				Plugin.resetScroll();

				// check if not is a locked column
				if (!Plugin.isLocked()) {
					Plugin.redraw.call();
					// check if its not a subtable and has autoHide option enabled
					if (!Plugin.isSubtable() && Plugin.getOption('rows.autoHide') === true) {
						Plugin.autoHide();
					}
					// reset row
					$(datatable.table).find('.' + pfx + 'datatable-row').css('height', '');
				}

				Plugin.columnHide.call();

				Plugin.rowEvenOdd.call();

				Plugin.sorting.call();

				Plugin.scrollbar.call();

				if (!Plugin.isInit) {
					// run once dropdown inside datatable
					Plugin.dropdownFix();
					$(datatable).trigger(pfx + 'datatable-on-init', {table: $(datatable.wrap).attr('id'), options: options});
					Plugin.isInit = true;
				}

				$(datatable).trigger(pfx + 'datatable-on-layout-updated', {table: $(datatable.wrap).attr('id')});
			},

			dropdownFix: function() {
				var dropdownMenu;
				$('body').on('show.bs.dropdown', '.' + pfx + 'datatable .' + pfx + 'datatable-body', function(e) {
					dropdownMenu = $(e.target).find('.dropdown-menu');
					$('body').append(dropdownMenu.detach());
					dropdownMenu.css('display', 'block');
					dropdownMenu.position({
						'my': 'right top',
						'at': 'right bottom',
						'of': $(e.relatedTarget),
					});
					// if datatable is inside modal
					if (datatable.closest('.modal').length) {
						// increase dropdown z-index
						dropdownMenu.css('z-index', '2000');
					}
				}).on('hide.bs.dropdown', '.' + pfx + 'datatable .' + pfx + 'datatable-body', function(e) {
					if (typeof dropdownMenu !== 'undefined') {
						$(e.target).append(dropdownMenu.detach());
						dropdownMenu.hide();
						dropdownMenu.css('display', '');
					}
				});

				// remove dropdown if window resize
				$(window).on('resize', function(e) {
					if (typeof dropdownMenu !== 'undefined') {
						dropdownMenu.hide();
					}
				});
			},

			lockTable: function() {
				var lock = {
					lockEnabled: false,
					init: function() {
						// check if table should be locked columns
						lock.lockEnabled = Plugin.lockEnabledColumns();
						if (lock.lockEnabled.left.length === 0 &&
							lock.lockEnabled.right.length === 0) {
							return;
						}
						lock.enable();
					},
					enable: function() {
						var enableLock = function(tablePart) {
							// check if already has lock column
							if ($(tablePart).find('.' + pfx + 'datatable-lock').length > 0) {
								Plugin.log('Locked container already exist in: ', tablePart);
								return;
							}
							// check if no rows exists
							if ($(tablePart).find('.' + pfx + 'datatable-row').length === 0) {
								Plugin.log('No row exist in: ', tablePart);
								return;
							}

							// locked div container
							var lockLeft = $('<div/>').addClass(pfx + 'datatable-lock ' + pfx + 'datatable-lock-left');
							var lockScroll = $('<div/>').addClass(pfx + 'datatable-lock ' + pfx + 'datatable-lock-scroll');
							var lockRight = $('<div/>').addClass(pfx + 'datatable-lock ' + pfx + 'datatable-lock-right');

							$(tablePart).find('.' + pfx + 'datatable-row').each(function() {
								// create new row for lock columns and pass the data
								var rowLeft = $('<tr/>').addClass(pfx + 'datatable-row').data('obj', $(this).data('obj')).appendTo(lockLeft);
								var rowScroll = $('<tr/>').addClass(pfx + 'datatable-row').data('obj', $(this).data('obj')).appendTo(lockScroll);
								var rowRight = $('<tr/>').addClass(pfx + 'datatable-row').data('obj', $(this).data('obj')).appendTo(lockRight);
								$(this).find('.' + pfx + 'datatable-cell').each(function() {
									var locked = $(this).data('locked');
									if (typeof locked !== 'undefined') {
										if (typeof locked.left !== 'undefined' || locked === true) {
											// default locked to left
											$(this).appendTo(rowLeft);
										}
										if (typeof locked.right !== 'undefined') {
											$(this).appendTo(rowRight);
										}
									} else {
										$(this).appendTo(rowScroll);
									}
								});
								// remove old row
								$(this).remove();
							});

							if (lock.lockEnabled.left.length > 0) {
								$(datatable.wrap).addClass(pfx + 'datatable-lock');
								$(lockLeft).appendTo(tablePart);
							}
							if (lock.lockEnabled.left.length > 0 || lock.lockEnabled.right.length > 0) {
								$(lockScroll).appendTo(tablePart);
							}
							if (lock.lockEnabled.right.length > 0) {
								$(datatable.wrap).addClass(pfx + 'datatable-lock');
								$(lockRight).appendTo(tablePart);
							}
						};

						$(datatable.table).find('thead,tbody,tfoot').each(function() {
							var tablePart = this;
							if ($(this).find('.' + pfx + 'datatable-lock').length === 0) {
								$(this).ready(function() {
									enableLock(tablePart);
								});
							}
						});
					},
				};
				lock.init();
				return lock;
			},

			/**
			 * Render everything for resize
			 */
			fullRender: function() {
				$(datatable.tableHead).empty();
				Plugin.setHeadTitle();
				if (Plugin.getOption('layout.footer')) {
					$(datatable.tableFoot).empty();
					Plugin.setHeadTitle(datatable.tableFoot);
				}

				Plugin.spinnerCallback(true);
				$(datatable.wrap).removeClass(pfx + 'datatable-loaded');

				Plugin.insertData();
			},

			lockEnabledColumns: function() {
				var screen = $(window).width();
				var columns = options.columns;
				var enabled = {left: [], right: []};
				$.each(columns, function(i, column) {
					if (typeof column.locked !== 'undefined') {
						if (typeof column.locked.left !== 'undefined') {
							if (util.getBreakpoint(column.locked.left) <= screen) {
								enabled['left'].push(column.locked.left);
							}
						}
						if (typeof column.locked.right !== 'undefined') {
							if (util.getBreakpoint(column.locked.right) <= screen) {
								enabled['right'].push(column.locked.right);
							}
						}
					}
				});
				return enabled;
			},

			/**
			 * After render event, called by "datatable-on-layout-updated"
			 * @param e
			 * @param args
			 */
			afterRender: function(e, args) {
				$(datatable).ready(function() {
					// redraw locked columns table
					if (Plugin.isLocked()) {
						Plugin.redraw();
					}

					$(datatable.tableBody).css('visibility', '');
					$(datatable.wrap).addClass(pfx + 'datatable-loaded');

					Plugin.spinnerCallback(false);
				});
			},

			hoverTimer: 0,
			isScrolling: false,
			setupHover: function() {
				$(window).scroll(function(e) {
					// stop hover when scrolling
					clearTimeout(Plugin.hoverTimer);
					Plugin.isScrolling = true;
				});

				$(datatable.tableBody).find('.' + pfx + 'datatable-cell').off('mouseenter', 'mouseleave').on('mouseenter', function() {
					// reset scroll timer to hover class
					Plugin.hoverTimer = setTimeout(function() {
						Plugin.isScrolling = false;
					}, 200);
					if (Plugin.isScrolling) return;

					// normal table
					var row = $(this).closest('.' + pfx + 'datatable-row').addClass(pfx + 'datatable-row-hover');
					var index = $(row).index() + 1;

					// lock table
					$(row).closest('.' + pfx + 'datatable-lock').parent().find('.' + pfx + 'datatable-row:nth-child(' + index + ')').addClass(pfx + 'datatable-row-hover');
				}).on('mouseleave', function() {
					// normal table
					var row = $(this).closest('.' + pfx + 'datatable-row').removeClass(pfx + 'datatable-row-hover');
					var index = $(row).index() + 1;

					// look table
					$(row).closest('.' + pfx + 'datatable-lock').parent().find('.' + pfx + 'datatable-row:nth-child(' + index + ')').removeClass(pfx + 'datatable-row-hover');
				});
			},

			/**
			 * Adjust width of locked table containers by resize handler
			 * @returns {number}
			 */
			adjustLockContainer: function() {
				if (!Plugin.isLocked()) return 0;

				// refer to head dimension
				var containerWidth = $(datatable.tableHead).width();
				var lockLeft = $(datatable.tableHead).find('.' + pfx + 'datatable-lock-left').width();
				var lockRight = $(datatable.tableHead).find('.' + pfx + 'datatable-lock-right').width();

				if (typeof lockLeft === 'undefined') lockLeft = 0;
				if (typeof lockRight === 'undefined') lockRight = 0;

				var lockScroll = Math.floor(containerWidth - lockLeft - lockRight);
				$(datatable.table).find('.' + pfx + 'datatable-lock-scroll').css('width', lockScroll);

				return lockScroll;
			},

			/**
			 * todo; not in use
			 */
			dragResize: function() {
				var pressed = false;
				var start = undefined;
				var startX, startWidth;
				$(datatable.tableHead).find('.' + pfx + 'datatable-cell').mousedown(function(e) {
					start = $(this);
					pressed = true;
					startX = e.pageX;
					startWidth = $(this).width();
					$(start).addClass(pfx + 'datatable-cell-resizing');

				}).mousemove(function(e) {
					if (pressed) {
						var i = $(start).index();
						var tableBody = $(datatable.tableBody);
						var ifLocked = $(start).closest('.' + pfx + 'datatable-lock');

						if (ifLocked) {
							var lockedIndex = $(ifLocked).index();
							tableBody = $(datatable.tableBody).find('.' + pfx + 'datatable-lock').eq(lockedIndex);
						}

						$(tableBody).find('.' + pfx + 'datatable-row').each(function(tri, tr) {
							$(tr).find('.' + pfx + 'datatable-cell').eq(i).width(startWidth + (e.pageX - startX)).children().width(startWidth + (e.pageX - startX));
						});

						$(start).children().css('width', startWidth + (e.pageX - startX));
					}

				}).mouseup(function() {
					$(start).removeClass(pfx + 'datatable-cell-resizing');
					pressed = false;
				});

				$(document).mouseup(function() {
					$(start).removeClass(pfx + 'datatable-cell-resizing');
					pressed = false;
				});
			},

			/**
			 * To prepare placeholder for table before content is loading
			 */
			initHeight: function() {
				if (options.layout.height && options.layout.scroll) {
					var theadHeight = $(datatable.tableHead).find('.' + pfx + 'datatable-row').outerHeight();
					var tfootHeight = $(datatable.tableFoot).find('.' + pfx + 'datatable-row').outerHeight();
					var bodyHeight = options.layout.height;
					if (theadHeight > 0) {
						bodyHeight -= theadHeight;
					}
					if (tfootHeight > 0) {
						bodyHeight -= tfootHeight;
					}

					// scrollbar offset
					bodyHeight -= 2;

					$(datatable.tableBody).css('max-height', Math.floor(parseFloat(bodyHeight)));

					// set scrollable area fixed height
					// $(datatable.tableBody).find('.' + pfx + 'datatable-lock-scroll').css('height', Math.floor(parseFloat(bodyHeight)));
				}
			},

			/**
			 * Setup base DOM (table, thead, tbody, tfoot) and create if not
			 * exist.
			 */
			setupBaseDOM: function() {
				// keep original state before datatable initialize
				datatable.initialDatatable = $(datatable).clone();

				// main element
				if ($(datatable).prop('tagName') === 'TABLE') {
					// if main init element is <table>, wrap with div
					datatable.table = $(datatable).removeClass(pfx + 'datatable').addClass(pfx + 'datatable-table');
					if ($(datatable.table).parents('.' + pfx + 'datatable').length === 0) {
						datatable.table.wrap($('<div/>').addClass(pfx + 'datatable').addClass(pfx + 'datatable-' + options.layout.theme));
						datatable.wrap = $(datatable.table).parent();
					}
				} else {
					// create table
					datatable.wrap = $(datatable).addClass(pfx + 'datatable').addClass(pfx + 'datatable-' + options.layout.theme);
					datatable.table = $('<table/>').addClass(pfx + 'datatable-table').appendTo(datatable);
				}

				if (typeof options.layout.class !== 'undefined') {
					$(datatable.wrap).addClass(options.layout.class);
				}

				$(datatable.table).removeClass(pfx + 'datatable-destroyed').css('display', 'block');

				// force disable save state
				if (typeof $(datatable).attr('id') === 'undefined') {
					Plugin.setOption('data.saveState', false);
					$(datatable.table).attr('id', util.getUniqueID(pfx + 'datatable-'));
				}

				// predefine table height
				if (Plugin.getOption('layout.minHeight'))
					$(datatable.table).css('min-height', Plugin.getOption('layout.minHeight'));

				if (Plugin.getOption('layout.height'))
					$(datatable.table).css('max-height', Plugin.getOption('layout.height'));

				// for normal table load
				if (options.data.type === null) {
					$(datatable.table).css('width', '').css('display', '');
				}

				// create table head element
				datatable.tableHead = $(datatable.table).find('thead');
				if ($(datatable.tableHead).length === 0) {
					datatable.tableHead = $('<thead/>').prependTo(datatable.table);
				}

				// create table head element
				datatable.tableBody = $(datatable.table).find('tbody');
				if ($(datatable.tableBody).length === 0) {
					datatable.tableBody = $('<tbody/>').appendTo(datatable.table);
				}

				if (typeof options.layout.footer !== 'undefined' &&
					options.layout.footer) {
					// create table foot element
					datatable.tableFoot = $(datatable.table).find('tfoot');
					if ($(datatable.tableFoot).length === 0) {
						datatable.tableFoot = $('<tfoot/>').appendTo(datatable.table);
					}
				}
			},

			/**
			 * Set column data before table manipulation.
			 */
			setupCellField: function(tableParts) {
				if (typeof tableParts === 'undefined') tableParts = $(datatable.table).children();
				var columns = options.columns;
				$.each(tableParts, function(part, tablePart) {
					$(tablePart).find('.' + pfx + 'datatable-row').each(function(tri, tr) {
						// prepare data
						$(tr).find('.' + pfx + 'datatable-cell').each(function(tdi, td) {
							if (typeof columns[tdi] !== 'undefined') {
								$(td).data(columns[tdi]);
							}
						});
					});
				});
			},

			/**
			 * Set column template callback
			 * @param tablePart
			 */
			setupTemplateCell: function(tablePart) {
				if (typeof tablePart === 'undefined') tablePart = datatable.tableBody;
				var columns = options.columns;
				$(tablePart).find('.' + pfx + 'datatable-row').each(function(tri, tr) {
					// row data object, if any
					var obj = $(tr).data('obj');
					if (typeof obj === 'undefined') {
						return;
					}

					// @deprecated in v5.0.6
					// obj['getIndex'] = function() {
					// 	return tri;
					// };
					// @deprecated in v5.0.6
					// obj['getDatatable'] = function() {
					// 	return datatable;
					// };

					// @deprecated in v5.0.6
					var rowCallback = Plugin.getOption('rows.callback');
					if (typeof rowCallback === 'function') {
						rowCallback($(tr), obj, tri);
					}
					// before template row callback
					var beforeTemplate = Plugin.getOption('rows.beforeTemplate');
					if (typeof beforeTemplate === 'function') {
						beforeTemplate($(tr), obj, tri);
					}
					// if data object is undefined, collect from table
					if (typeof obj === 'undefined') {
						obj = {};
						$(tr).find('.' + pfx + 'datatable-cell').each(function(tdi, td) {
							// get column settings by field
							var column = $.grep(columns, function(n, i) {
								return $(td).data('field') === n.field;
							})[0];
							if (typeof column !== 'undefined') {
								obj[column['field']] = $(td).text();
							}
						});
					}

					$(tr).find('.' + pfx + 'datatable-cell').each(function(tdi, td) {
						// get column settings by field
						var column = $.grep(columns, function(n, i) {
							return $(td).data('field') === n.field;
						})[0];
						if (typeof column !== 'undefined') {
							// column template
							if (typeof column.template !== 'undefined') {
								var finalValue = '';
								// template string
								if (typeof column.template === 'string') {
									finalValue = Plugin.dataPlaceholder(column.template, obj);
								}
								// template callback function
								if (typeof column.template === 'function') {
									finalValue = column.template(obj, tri, datatable);
								}

								// sanitize using DOMPurify if installed
								if (typeof DOMPurify !== 'undefined') {
									finalValue = DOMPurify.sanitize(finalValue);
								}

								var span = document.createElement('span');
								span.innerHTML = finalValue;

								// insert to cell, wrap with span
								$(td).html(span);

								// set span overflow
								if (typeof column.overflow !== 'undefined') {
									$(span).css('overflow', column.overflow);
									$(span).css('position', 'relative');
								}
							}
						}
					});

					// after template row callback
					var afterTemplate = Plugin.getOption('rows.afterTemplate');
					if (typeof afterTemplate === 'function') {
						afterTemplate($(tr), obj, tri);
					}
				});
			},

			/**
			 * Setup extra system column properties
			 * Note: selector checkbox, subtable toggle
			 */
			setupSystemColumn: function() {
				datatable.dataSet = datatable.dataSet || [];
				// no records available
				if (datatable.dataSet.length === 0) return;

				var columns = options.columns;
				$(datatable.tableBody).find('.' + pfx + 'datatable-row').each(function(tri, tr) {
					$(tr).find('.' + pfx + 'datatable-cell').each(function(tdi, td) {
						// get column settings by field
						var column = $.grep(columns, function(n, i) {
							return $(td).data('field') === n.field;
						})[0];
						if (typeof column !== 'undefined') {
							var value = $(td).text();

							// enable column selector
							if (typeof column.selector !== 'undefined' && column.selector !== false) {
								// check if checkbox exist
								if ($(td).find('.' + pfx + 'checkbox [type="checkbox"]').length > 0) return;

								$(td).addClass(pfx + 'datatable-cell-check');

								// append checkbox
								var chk = $('<label/>').
									addClass(pfx + 'checkbox ' + pfx + 'checkbox-single').
									append($('<input/>').attr('type', 'checkbox').attr('value', value).on('click', function() {
										if ($(this).is(':checked')) {
											// add checkbox active row class
											Plugin.setActive(this);
										} else {
											// add checkbox active row class
											Plugin.setInactive(this);
										}
									})).
									append('&nbsp;<span></span>');

								// checkbox selector has outline style
								if (typeof column.selector.class !== 'undefined') {
									$(chk).addClass(column.selector.class);
								}

								$(td).children().html(chk);
							}

							// enable column subtable toggle
							if (typeof column.subtable !== 'undefined' && column.subtable) {
								// check if subtable toggle exist
								if ($(td).find('.' + pfx + 'datatable-toggle-subtable').length > 0) return;
								// append subtable toggle
								$(td).
									children().
									html($('<a/>').
										addClass(pfx + 'datatable-toggle-subtable').
										attr('href', '#').
										attr('data-value', value).
										append($('<i/>').addClass(Plugin.getOption('layout.icons.rowDetail.collapse'))));
							}
						}
					});
				});

				// init checkbox for header/footer
				var initCheckbox = function(tr) {
					// get column settings by field
					var column = $.grep(columns, function(n, i) {
						return typeof n.selector !== 'undefined' && n.selector !== false;
					})[0];

					if (typeof column !== 'undefined') {
						// enable column selector
						if (typeof column.selector !== 'undefined' && column.selector !== false) {
							var td = $(tr).find('[data-field="' + column.field + '"]');
							// check if checkbox exist
							if ($(td).find('.' + pfx + 'checkbox [type="checkbox"]').length > 0) return;

							$(td).addClass(pfx + 'datatable-cell-check');

							// append checkbox
							var chk = $('<label/>').
								addClass(pfx + 'checkbox ' + pfx + 'checkbox-single ' + pfx + 'checkbox-all').
								append($('<input/>').attr('type', 'checkbox').on('click', function() {
									if ($(this).is(':checked')) {
										Plugin.setActiveAll(true);
									} else {
										Plugin.setActiveAll(false);
									}
								})).
								append('&nbsp;<span></span>');

							// checkbox selector has outline style
							if (typeof column.selector.class !== 'undefined') {
								$(chk).addClass(column.selector.class);
							}

							$(td).children().html(chk);
						}
					}
				};

				if (options.layout.header) {
					initCheckbox($(datatable.tableHead).find('.' + pfx + 'datatable-row').first());
				}
				if (options.layout.footer) {
					initCheckbox($(datatable.tableFoot).find('.' + pfx + 'datatable-row').first());
				}
			},

			maxWidthList: {},

			/**
			 * Adjust width to match container size
			 */
			adjustCellsWidth: function() {
				// get table width
				var containerWidth = $(datatable.tableBody).innerWidth() - Plugin.iconOffset;

				// get total number of columns
				var columns = $(datatable.tableHead).
					find('.' + pfx + 'datatable-row:first-child').
					find('.' + pfx + 'datatable-cell').
					// exclude expand icon
					not('.' + pfx + 'datatable-toggle-detail').
					not(':hidden').length;

				if (columns > 0) {
					//  remove reserved sort icon width
					containerWidth = containerWidth - (Plugin.iconOffset * columns);
					var minWidth = Math.floor(containerWidth / columns);

					// minimum width
					if (minWidth <= Plugin.cellOffset) {
						minWidth = Plugin.cellOffset;
					}

					$(datatable.table).find('.' + pfx + 'datatable-row').
							find('.' + pfx + 'datatable-cell').
							// exclude expand icon
							not('.' + pfx + 'datatable-toggle-detail').
							not(':hidden').each(function(tdi, td) {

						var width = minWidth;
						var dataWidth = $(td).data('width');

						if (typeof dataWidth !== 'undefined') {
							if (dataWidth === 'auto') {
								var field = $(td).data('field');
								if (Plugin.maxWidthList[field]) {
									width = Plugin.maxWidthList[field];
								}
								else {
									var cells = $(datatable.table).find('.' + pfx + 'datatable-cell[data-field="' + field + '"]');
									width = Plugin.maxWidthList[field] = Math.max.apply(null,
											$(cells).map(function() {
												return $(this).outerWidth();
											}).get());
								}
							}
							else {
								width = dataWidth;
							}
						}
						$(td).children().css('width', Math.ceil(width));
					});
				}

				return datatable;
			},

			/**
			 * Adjust height to match container size
			 */
			adjustCellsHeight: function() {
				$.each($(datatable.table).children(), function(part, tablePart) {
					var totalRows = $(tablePart).find('.' + pfx + 'datatable-row').first().parent().find('.' + pfx + 'datatable-row').length;
					for (var i = 1; i <= totalRows; i++) {
						var rows = $(tablePart).find('.' + pfx + 'datatable-row:nth-child(' + i + ')');
						if ($(rows).length > 0) {
							var maxHeight = Math.max.apply(null, $(rows).map(function() {
								return $(this).outerHeight();
							}).get());
							$(rows).css('height', Math.ceil(maxHeight));
						}
					}
				});
			},

			/**
			 * Setup table DOM and classes
			 */
			setupDOM: function(table) {
				// set table classes
				$(table).find('> thead').addClass(pfx + 'datatable-head');
				$(table).find('> tbody').addClass(pfx + 'datatable-body');
				$(table).find('> tfoot').addClass(pfx + 'datatable-foot');
				$(table).find('tr').addClass(pfx + 'datatable-row');
				$(table).find('tr > th, tr > td').addClass(pfx + 'datatable-cell');
				$(table).find('tr > th, tr > td').each(function(i, td) {
					if ($(td).find('span').length === 0) {
						$(td).wrapInner($('<span/>').css('width', Plugin.cellOffset));
					}
				});
			},

			/**
			 * Default scrollbar
			 * @returns {{tableLocked: null, init: init, onScrolling:
			 *     onScrolling}}
			 */
			scrollbar: function() {
				var scroll = {
					scrollable: null,
					tableLocked: null,
					initPosition: null,
					init: function() {
						var screen = util.getViewPort().width;
						// setup scrollable datatable
						if (options.layout.scroll) {
							// add scrollable datatable class
							$(datatable.wrap).addClass(pfx + 'datatable-scroll');

							var scrollable = $(datatable.tableBody).find('.' + pfx + 'datatable-lock-scroll');

							// check if scrollable area have rows
							if ($(scrollable).find('.' + pfx + 'datatable-row').length > 0 && $(scrollable).length > 0) {
								scroll.scrollHead = $(datatable.tableHead).find('> .' + pfx + 'datatable-lock-scroll > .' + pfx + 'datatable-row');
								scroll.scrollFoot = $(datatable.tableFoot).find('> .' + pfx + 'datatable-lock-scroll > .' + pfx + 'datatable-row');
								scroll.tableLocked = $(datatable.tableBody).find('.' + pfx + 'datatable-lock:not(.' + pfx + 'datatable-lock-scroll)');
								if (Plugin.getOption('layout.customScrollbar') && util.detectIE() != 10 && screen > util.getBreakpoint('lg')) {
									scroll.initCustomScrollbar(scrollable[0]);
								} else {
									scroll.initDefaultScrollbar(scrollable);
								}
							} else if ($(datatable.tableBody).find('.' + pfx + 'datatable-row').length > 0) {
								scroll.scrollHead = $(datatable.tableHead).find('> .' + pfx + 'datatable-row');
								scroll.scrollFoot = $(datatable.tableFoot).find('> .' + pfx + 'datatable-row');
								if (Plugin.getOption('layout.customScrollbar') && util.detectIE() != 10 && screen > util.getBreakpoint('lg')) {
									scroll.initCustomScrollbar(datatable.tableBody);
								} else {
									scroll.initDefaultScrollbar(datatable.tableBody);
								}
							}
						}
					},
					initDefaultScrollbar: function(scrollable) {
						// get initial scroll position
						scroll.initPosition = $(scrollable).scrollLeft();
						$(scrollable).css('overflow-y', 'auto').off().on('scroll', scroll.onScrolling);
						$(scrollable).css('overflow-x', 'auto');
					},
					onScrolling: function(e) {
						var left = $(this).scrollLeft();
						var top = $(this).scrollTop();
						if (util.isRTL()) {
							// deduct initial position for RTL
							left = left - scroll.initPosition;
						}
						$(scroll.scrollHead).css('left', -left);
						$(scroll.scrollFoot).css('left', -left);
						$(scroll.tableLocked).each(function(i, table) {
							if (Plugin.isLocked()) {
								// scrollbar offset
								top -= 1;
							}
							$(table).css('top', -top);
						});
					},
					initCustomScrollbar: function(scrollable) {
						scroll.scrollable = scrollable;
						// create a new instance for table body with scrollbar
						Plugin.initScrollbar(scrollable);
						// get initial scroll position
						scroll.initPosition = $(scrollable).scrollLeft();
						$(scrollable).off().on('scroll', scroll.onScrolling);
					},
				};
				scroll.init();
				return scroll;
			},

			/**
			 * Init custom scrollbar and reset position
			 * @param element
			 * @param options
			 */
			initScrollbar: function(element, options) {
				if (!element || !element.nodeName) {
					return;
				}
				$(datatable.tableBody).css('overflow', '');
				var ps = $(element).data('ps');
				if (util.hasClass(element, 'ps') && typeof ps !== 'undefined') {
					ps.update();
				} else {
					ps = new PerfectScrollbar(element, Object.assign({}, {
						wheelSpeed: 0.5,
						swipeEasing: true,
						// wheelPropagation: false,
						minScrollbarLength: 40,
						maxScrollbarLength: 300,
						suppressScrollX: Plugin.getOption('rows.autoHide') && !Plugin.isLocked()
					}, options));
					$(element).data('ps', ps);
				}

				// reset perfect scrollbar on resize
				$(window).resize(function() {
					ps.update();
				});
			},

			/**
			 * Set column title from options.columns settings
			 */
			setHeadTitle: function(tablePart) {
				if (typeof tablePart === 'undefined') tablePart = datatable.tableHead;
				tablePart = $(tablePart)[0];
				var columns = options.columns;
				var row = tablePart.getElementsByTagName('tr')[0];
				var ths = tablePart.getElementsByTagName('td');

				if (typeof row === 'undefined') {
					row = document.createElement('tr');
					tablePart.appendChild(row);
				}

				$.each(columns, function(i, column) {
					var th = ths[i];
					if (typeof th === 'undefined') {
						th = document.createElement('th');
						row.appendChild(th);
					}

					// set column title
					if (typeof column['title'] !== 'undefined') {
						th.innerHTML = column.title;
						th.setAttribute('data-field', column.field);
						util.addClass(th, column.class);
						// set disable autoHide or force enable
						if (typeof column.autoHide !== 'undefined') {
							if (column.autoHide !== true) {
								th.setAttribute('data-autohide-disabled', column.autoHide);
							} else {
								th.setAttribute('data-autohide-enabled', column.autoHide);
							}
						}
						$(th).data(column);
					}

					// set header attr option
					if (typeof column.attr !== 'undefined') {
						$.each(column.attr, function(key, val) {
							th.setAttribute(key, val);
						});
					}

					// apply text align to thead/tfoot
					if (typeof column.textAlign !== 'undefined') {
						var align = typeof datatable.textAlign[column.textAlign] !== 'undefined' ? datatable.textAlign[column.textAlign] : '';
						util.addClass(th, align);
					}
				});
				Plugin.setupDOM(tablePart);
			},

			/**
			 * Initiate to get remote or local data via ajax
			 */
			dataRender: function(action) {
				$(datatable.table).siblings('.' + pfx + 'datatable-pager').removeClass(pfx + 'datatable-paging-loaded');

				var buildMeta = function() {
					datatable.dataSet = datatable.dataSet || [];
					Plugin.localDataUpdate();
					// local pagination meta
					var meta = Plugin.getDataSourceParam('pagination');
					if (meta.perpage === 0) {
						meta.perpage = options.data.pageSize || 10;
					}
					meta.total = datatable.dataSet.length;
					var start = Math.max(meta.perpage * (meta.page - 1), 0);
					var end = Math.min(start + meta.perpage, meta.total);
					datatable.dataSet = $(datatable.dataSet).slice(start, end);
					return meta;
				};

				var afterGetData = function(result) {
					var localPagingCallback = function(ctx, meta) {
						if (!$(ctx.pager).hasClass(pfx + 'datatable-paging-loaded')) {
							$(ctx.pager).remove();
							ctx.init(meta);
						}
						$(ctx.pager).off().on(pfx + 'datatable-on-goto-page', function(e) {
							$(ctx.pager).remove();
							ctx.init(meta);
						});

						var start = Math.max(meta.perpage * (meta.page - 1), 0);
						var end = Math.min(start + meta.perpage, meta.total);

						Plugin.localDataUpdate();
						datatable.dataSet = $(datatable.dataSet).slice(start, end);

						// insert data into table content
						Plugin.insertData();
					};

					$(datatable.wrap).removeClass(pfx + 'datatable-error');
					// pagination enabled
					if (options.pagination) {
						if (options.data.serverPaging && options.data.type !== 'local') {
							// server pagination
							var serverMeta = Plugin.getObject('meta', result || null);
							if (serverMeta !== null) {
								Plugin.pagingObject = Plugin.paging(serverMeta);
							} else {
								// no meta object from server response, fallback to local pagination
								Plugin.pagingObject = Plugin.paging(buildMeta(), localPagingCallback);
							}
						} else {
							// local pagination can be used by remote data also
							Plugin.pagingObject = Plugin.paging(buildMeta(), localPagingCallback);
						}
					} else {
						// pagination is disabled
						Plugin.localDataUpdate();
					}
					// insert data into table content
					Plugin.insertData();
				};

				// get local datasource
				if (options.data.type === 'local'
					// for remote json datasource
					// || typeof options.data.source.read === 'undefined' && datatable.dataSet !== null
					// for remote datasource, server sorting is disabled and data already received from remote
					|| options.data.serverSorting === false && action === 'sort'
					|| options.data.serverFiltering === false && action === 'search'
				) {
					setTimeout(function() {
						Plugin.setAutoColumns();
						afterGetData();
					});
					return;
				}

				// getting data from remote only
				Plugin.getData().done(afterGetData);
			},

			/**
			 * Process ajax data
			 */
			insertData: function() {
				datatable.dataSet = datatable.dataSet || [];
				var params = Plugin.getDataSourceParam();

				// get row attributes
				var pagination = params.pagination;
				var start = (Math.max(pagination.page, 1) - 1) * pagination.perpage;
				var end = Math.min(pagination.page, pagination.pages) * pagination.perpage;
				var rowProps = {};
				if (typeof options.data.attr.rowProps !== 'undefined' && options.data.attr.rowProps.length) {
					rowProps = options.data.attr.rowProps.slice(start, end);
				}

				var tableBody = document.createElement('tbody');
				tableBody.style.visibility = 'hidden';
				var colLength = options.columns.length;

				$.each(datatable.dataSet, function(rowIndex, row) {
					var tr = document.createElement('tr');
					tr.setAttribute('data-row', rowIndex);
					// keep data object to row
					$(tr).data('obj', row);

					if (typeof rowProps[rowIndex] !== 'undefined') {
						$.each(rowProps[rowIndex], function() {
							tr.setAttribute(this.name, this.value);
						});
					}

					var cellIndex = 0;
					var tds = [];
					for (var a = 0; a < colLength; a += 1) {
						var column = options.columns[a];
						var classes = [];
						// add sorted class to cells
						if (Plugin.getObject('sort.field', params) === column.field) {
							classes.push(pfx + 'datatable-cell-sorted');
						}

						// apply text align
						if (typeof column.textAlign !== 'undefined') {
							var align = typeof datatable.textAlign[column.textAlign] !== 'undefined' ? datatable.textAlign[column.textAlign] : '';
							classes.push(align);
						}

						// var classAttr = '';
						if (typeof column.class !== 'undefined') {
							classes.push(column.class);
						}

						var td = document.createElement('td');
						util.addClass(td, classes.join(' '));
						td.setAttribute('data-field', column.field);
						// set disable autoHide or force enable
						if (typeof column.autoHide !== 'undefined') {
							if (column.autoHide !== true) {
								td.setAttribute('data-autohide-disabled', column.autoHide);
							} else {
								td.setAttribute('data-autohide-enabled', column.autoHide);
							}
						}
						td.innerHTML = Plugin.getObject(column.field, row);
						td.setAttribute('aria-label', Plugin.getObject(column.field, row));
						tr.appendChild(td);
					}

					tableBody.appendChild(tr);
				});

				// display no records message
				if (datatable.dataSet.length === 0) {
					var errorSpan = document.createElement('span');
					util.addClass(errorSpan, pfx + 'datatable-error');
					errorSpan.innerHTML = Plugin.getOption('translate.records.noRecords');
					tableBody.appendChild(errorSpan);
					$(datatable.wrap).addClass(pfx + 'datatable-error ' + pfx + 'datatable-loaded');
					Plugin.spinnerCallback(false);
				}

				// replace existing table body
				$(datatable.tableBody).replaceWith(tableBody);
				datatable.tableBody = tableBody;

				// layout update
				Plugin.setupDOM(datatable.table);
				Plugin.setupCellField([datatable.tableBody]);
				Plugin.setupTemplateCell(datatable.tableBody);
				Plugin.layoutUpdate();
			},

			updateTableComponents: function() {
				datatable.tableHead = $(datatable.table).children('thead').get(0);
				datatable.tableBody = $(datatable.table).children('tbody').get(0);
				datatable.tableFoot = $(datatable.table).children('tfoot').get(0);
			},

			/**
			 * Call ajax for raw JSON data
			 */
			getData: function() {
				// Plugin.spinnerCallback(true);

				var ajaxParams = {
					dataType: 'json',
					method: 'POST',
					data: {},
					timeout: Plugin.getOption('data.source.read.timeout') || 30000,
				};

				if (options.data.type === 'local') {
					ajaxParams.url = options.data.source;
				}

				if (options.data.type === 'remote') {
					var data = Plugin.getDataSourceParam();
					// remove if server params is not enabled
					if (!Plugin.getOption('data.serverPaging')) {
						delete data['pagination'];
					}
					if (!Plugin.getOption('data.serverSorting')) {
						delete data['sort'];
					}
					ajaxParams.data = $.extend({}, ajaxParams.data, Plugin.getOption('data.source.read.params'), data);
					ajaxParams = $.extend({}, ajaxParams, Plugin.getOption('data.source.read'));

					if (typeof ajaxParams.url !== 'string') ajaxParams.url = Plugin.getOption('data.source.read');
					if (typeof ajaxParams.url !== 'string') ajaxParams.url = Plugin.getOption('data.source');
					// ajaxParams.data = $.extend(ajaxParams.data, data.pagination);
				}

				return $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
					datatable.lastResponse = response;
					// extendible data map callback for custom datasource
					datatable.dataSet = datatable.originalDataSet = Plugin.dataMapCallback(response);
					Plugin.setAutoColumns();
					$(datatable).trigger(pfx + 'datatable-on-ajax-done', [datatable.dataSet]);
				}).fail(function(jqXHR, textStatus, errorThrown) {
					$(datatable).trigger(pfx + 'datatable-on-ajax-fail', [jqXHR]);
					$(datatable.tableBody).html($('<span/>').addClass(pfx + 'datatable-error').html(Plugin.getOption('translate.records.noRecords')));
					$(datatable.wrap).addClass(pfx + 'datatable-error ' + pfx + 'datatable-loaded');
					Plugin.spinnerCallback(false);
				}).always(function() {
				});
			},

			/**
			 * Pagination object
			 * @param meta if null, local pagination, otherwise remote
			 *     pagination
			 * @param callback for update data when navigating page
			 */
			paging: function(meta, callback) {
				var pg = {
					meta: null,
					pager: null,
					paginateEvent: null,
					pagerLayout: {pagination: null, info: null},
					callback: null,
					init: function(meta) {
						pg.meta = meta;

						// parse pagination meta to integer
						pg.meta.page = parseInt(pg.meta.page);
						pg.meta.pages = parseInt(pg.meta.pages);
						pg.meta.perpage = parseInt(pg.meta.perpage);
						pg.meta.total = parseInt(pg.meta.total);

						// always recount total pages
						pg.meta.pages = Math.max(Math.ceil(pg.meta.total / pg.meta.perpage), 1);

						// current page must be not over than total pages
						if (pg.meta.page > pg.meta.pages) pg.meta.page = pg.meta.pages;

						// set unique event name between tables
						pg.paginateEvent = Plugin.getTablePrefix('paging');

						pg.pager = $(datatable.table).siblings('.' + pfx + 'datatable-pager');
						if ($(pg.pager).hasClass(pfx + 'datatable-paging-loaded')) return;

						// if class .'+pfx+'datatable-paging-loaded not exist, recreate pagination
						$(pg.pager).remove();

						// if no pages available
						if (pg.meta.pages === 0) return;

						// update datasource params
						Plugin.setDataSourceParam('pagination', {
							page: pg.meta.page,
							pages: pg.meta.pages,
							perpage: pg.meta.perpage,
							total: pg.meta.total,
						});

						// default callback function, contains remote pagination handler
						pg.callback = pg.serverCallback;
						// custom callback function
						if (typeof callback === 'function') pg.callback = callback;

						pg.addPaginateEvent();
						pg.populate();

						pg.meta.page = Math.max(pg.meta.page || 1, pg.meta.page);

						$(datatable).trigger(pg.paginateEvent, pg.meta);

						pg.pagingBreakpoint.call();
						$(window).resize(pg.pagingBreakpoint);
					},
					serverCallback: function(ctx, meta) {
						Plugin.dataRender();
					},
					populate: function() {
						datatable.dataSet = datatable.dataSet || [];
						// no records available
						if (datatable.dataSet.length === 0) return;

						var icons = Plugin.getOption('layout.icons.pagination');
						var title = Plugin.getOption('translate.toolbar.pagination.items.default');
						// pager root element
						pg.pager = $('<div/>').addClass(pfx + 'datatable-pager ' + pfx + 'datatable-paging-loaded');
						// numbering links
						var pagerNumber = $('<ul/>').addClass(pfx + 'datatable-pager-nav my-2 mb-sm-0');
						pg.pagerLayout['pagination'] = pagerNumber;

						// pager first/previous button
						$('<li/>').
							append($('<a/>').
								attr('title', title.first).
								addClass(pfx + 'datatable-pager-link ' + pfx + 'datatable-pager-link-first').
								append($('<i/>').addClass(icons.first)).
								on('click', pg.gotoMorePage).
								attr('data-page', 1)).
							appendTo(pagerNumber);
						$('<li/>').
							append($('<a/>').
								attr('title', title.prev).
								addClass(pfx + 'datatable-pager-link ' + pfx + 'datatable-pager-link-prev').
								append($('<i/>').addClass(icons.prev)).
								on('click', pg.gotoMorePage)).
							appendTo(pagerNumber);

						$('<li/>').append($('<input/>').attr('type', 'text').addClass(pfx + 'datatable-pager-input form-control').attr('title', title.input).on('keyup', function() {
							// on keyup update [data-page]
							$(this).attr('data-page', Math.abs($(this).val()));
						}).on('keypress', function(e) {
							// on keypressed enter button
							if (e.which === 13) pg.gotoMorePage(e);
						})).appendTo(pagerNumber);

						var pagesNumber = Plugin.getOption('toolbar.items.pagination.pages.desktop.pagesNumber');
						var end = Math.ceil(pg.meta.page / pagesNumber) * pagesNumber;
						var start = end - pagesNumber;
						if (end > pg.meta.pages) {
							end = pg.meta.pages;
						}

						// keep pagination 1 if there is no records
						if (start < 0) {
							start = 0;
						}

						for (var x = start; x < (end || 1); x++) {
							var pageNumber = x + 1;
							$('<li/>').
								append($('<a/>').
									addClass(pfx + 'datatable-pager-link ' + pfx + 'datatable-pager-link-number').
									text(pageNumber).
									attr('data-page', pageNumber).
									attr('title', pageNumber).
									on('click', pg.gotoPage)).
								appendTo(pagerNumber);
						}

						// pager next/last button
						$('<li/>').
							append($('<a/>').
								attr('title', title.next).
								addClass(pfx + 'datatable-pager-link ' + pfx + 'datatable-pager-link-next').
								append($('<i/>').addClass(icons.next)).
								on('click', pg.gotoMorePage)).
							appendTo(pagerNumber);
						$('<li/>').
							append($('<a/>').
								attr('title', title.last).
								addClass(pfx + 'datatable-pager-link ' + pfx + 'datatable-pager-link-last').
								append($('<i/>').addClass(icons.last)).
								on('click', pg.gotoMorePage).
								attr('data-page', pg.meta.pages)).
							appendTo(pagerNumber);

						// page info
						if (Plugin.getOption('toolbar.items.info')) {
							pg.pagerLayout['info'] = $('<div/>').addClass(pfx + 'datatable-pager-info my-2 mb-sm-0').append($('<span/>').addClass(pfx + 'datatable-pager-detail'));
						}

						$.each(Plugin.getOption('toolbar.layout'), function(i, layout) {
							$(pg.pagerLayout[layout]).appendTo(pg.pager);
						});

						// page size select
						var pageSizeSelect = $('<select/>').
							addClass('selectpicker ' + pfx + 'datatable-pager-size').
							attr('title', Plugin.getOption('translate.toolbar.pagination.items.default.select')).
							attr('data-width', '60px').
							attr('data-container', 'body').
							val(pg.meta.perpage).
							on('change', pg.updatePerpage).
							prependTo(pg.pagerLayout['info']);

						var pageSizes = Plugin.getOption('toolbar.items.pagination.pageSizeSelect');
						// default value here, to fix override option by user
						if (pageSizes.length == 0) pageSizes = [5, 10, 20, 30, 50, 100];
						$.each(pageSizes, function(i, size) {
							var display = size;
							if (size === -1) display = Plugin.getOption('translate.toolbar.pagination.items.default.all');
							$('<option/>').attr('value', size).html(display).appendTo(pageSizeSelect);
						});

						// init selectpicker to dropdown
						$(datatable).ready(function() {
							$('.selectpicker').
								selectpicker().
								on('hide.bs.select', function() {
									// fix dropup arrow icon on hide
									$(this).closest('.bootstrap-select').removeClass('dropup');
								}).
								siblings('.dropdown-toggle').
								attr('title', Plugin.getOption('translate.toolbar.pagination.items.default.select'));
						});

						pg.paste();
					},
					paste: function() {
						// insert pagination based on placement position, top|bottom
						$.each($.unique(Plugin.getOption('toolbar.placement')),
							function(i, position) {
								if (position === 'bottom') {
									$(pg.pager).clone(true).insertAfter(datatable.table);
								}
								if (position === 'top') {
									// pager top need some extra space
									$(pg.pager).clone(true).addClass(pfx + 'datatable-pager-top').insertBefore(datatable.table);
								}
							});
					},
					gotoMorePage: function(e) {
						e.preventDefault();
						// $(this) is a link of .'+pfx+'datatable-pager-link

						if ($(this).attr('disabled') === 'disabled') return false;

						var page = $(this).attr('data-page');

						// event from text input
						if (typeof page === 'undefined') {
							page = $(e.target).attr('data-page');
						}

						pg.openPage(parseInt(page));
						return false;
					},
					gotoPage: function(e) {
						e.preventDefault();
						// prevent from click same page number
						if ($(this).hasClass(pfx + 'datatable-pager-link-active')) return;

						pg.openPage(parseInt($(this).data('page')));
					},
					openPage: function(page) {
						// currentPage is 1-based index
						pg.meta.page = parseInt(page);

						$(datatable).trigger(pg.paginateEvent, pg.meta);
						pg.callback(pg, pg.meta);

						// update page callback function
						$(pg.pager).trigger(pfx + 'datatable-on-goto-page', pg.meta);
					},
					updatePerpage: function(e) {
						e.preventDefault();
						// if (Plugin.getOption('layout.height') === null) {
						// fix white space, when perpage is set from many records to less records
						// $('html, body').animate({scrollTop: $(datatable).position().top});
						// }

						// hide dropdown after select
						$(this).selectpicker('toggle');

						pg.pager = $(datatable.table).siblings('.' + pfx + 'datatable-pager').removeClass(pfx + 'datatable-paging-loaded');

						// on change select page size
						if (e.originalEvent) {
							pg.meta.perpage = parseInt($(this).val());
						}

						$(pg.pager).find('select.' + pfx + 'datatable-pager-size').val(pg.meta.perpage).attr('data-selected', pg.meta.perpage);

						// update datasource params
						Plugin.setDataSourceParam('pagination', {
							page: pg.meta.page,
							pages: pg.meta.pages,
							perpage: pg.meta.perpage,
							total: pg.meta.total,
						});

						// update page callback function
						$(pg.pager).trigger(pfx + 'datatable-on-update-perpage', pg.meta);
						$(datatable).trigger(pg.paginateEvent, pg.meta);
						pg.callback(pg, pg.meta);

						// update pagination info
						pg.updateInfo.call();
					},
					addPaginateEvent: function(e) {
						// pagination event
						$(datatable).off(pg.paginateEvent).on(pg.paginateEvent, function(e, meta) {
							Plugin.spinnerCallback(true);

							pg.pager = $(datatable.table).siblings('.' + pfx + 'datatable-pager');
							var pagerNumber = $(pg.pager).find('.' + pfx + 'datatable-pager-nav');

							// set sync active page class
							$(pagerNumber).find('.' + pfx + 'datatable-pager-link-active').removeClass(pfx + 'datatable-pager-link-active');
							$(pagerNumber).find('.' + pfx + 'datatable-pager-link-number[data-page="' + meta.page + '"]').addClass(pfx + 'datatable-pager-link-active');

							// set next and previous link page number
							$(pagerNumber).find('.' + pfx + 'datatable-pager-link-prev').attr('data-page', Math.max(meta.page - 1, 1));
							$(pagerNumber).find('.' + pfx + 'datatable-pager-link-next').attr('data-page', Math.min(meta.page + 1, meta.pages));

							// current page input value sync
							$(pg.pager).each(function() {
								$(this).find('.' + pfx + 'datatable-pager-input[type="text"]').prop('value', meta.page);
							});

							// if only 1 page, should hide page?
							// $(pg.pager).find('.' + pfx + 'datatable-pager-nav').show();
							// if (meta.pages <= 1) {
							// 	// hide pager if has 1 page
							// 	$(pg.pager).find('.' + pfx + 'datatable-pager-nav').hide();
							// }

							// update datasource params
							Plugin.setDataSourceParam('pagination', {
								page: pg.meta.page,
								pages: pg.meta.pages,
								perpage: pg.meta.perpage,
								total: pg.meta.total,
							});

							$(pg.pager).find('select.' + pfx + 'datatable-pager-size').val(meta.perpage).attr('data-selected', meta.perpage);

							// clear active rows
							$(datatable.table).find('.' + pfx + 'checkbox > [type="checkbox"]').prop('checked', false);
							$(datatable.table).find('.' + pfx + 'datatable-row-active').removeClass(pfx + 'datatable-row-active');

							pg.updateInfo.call();
							pg.pagingBreakpoint.call();
							// Plugin.resetScroll();
						});
					},
					updateInfo: function() {
						var start = Math.max(pg.meta.perpage * (pg.meta.page - 1) + 1, 1);
						var end = Math.min(start + pg.meta.perpage - 1, pg.meta.total);
						// page info update
						$(pg.pager).find('.' + pfx + 'datatable-pager-info').find('.' + pfx + 'datatable-pager-detail').html(Plugin.dataPlaceholder(
							Plugin.getOption('translate.toolbar.pagination.items.info'), {
								// set start page 0 if the is no records. eg. Showing 0 - 0 of 0
								start: pg.meta.total === 0 ? 0 : start,
								end: pg.meta.perpage === -1 ? pg.meta.total : end,
								pageSize: pg.meta.perpage === -1 ||
								pg.meta.perpage >= pg.meta.total
									? pg.meta.total
									: pg.meta.perpage,
								total: pg.meta.total,
							}));
					},

					/**
					 * Update pagination layout breakpoint
					 */
					pagingBreakpoint: function() {
						// keep page links reference
						var pagerNumber = $(datatable.table).siblings('.' + pfx + 'datatable-pager').find('.' + pfx + 'datatable-pager-nav');
						if ($(pagerNumber).length === 0) return;

						var currentPage = Plugin.getCurrentPage();
						var pagerInput = $(pagerNumber).find('.' + pfx + 'datatable-pager-input').closest('li');

						// reset
						$(pagerNumber).find('li').show();

						// pagination update
						$.each(Plugin.getOption('toolbar.items.pagination.pages'),
							function(mode, option) {
								if (util.isInResponsiveRange(mode)) {
									switch (mode) {
										case 'desktop':
										case 'tablet':
											var end = Math.ceil(currentPage / option.pagesNumber) * option.pagesNumber;
											var start = end - option.pagesNumber;
											$(pagerInput).hide();
											pg.meta = Plugin.getDataSourceParam('pagination');
											pg.paginationUpdate();
											break;

										case 'mobile':
											$(pagerInput).show();
											$(pagerNumber).find('.' + pfx + 'datatable-pager-link-more-prev').closest('li').hide();
											$(pagerNumber).find('.' + pfx + 'datatable-pager-link-more-next').closest('li').hide();
											$(pagerNumber).find('.' + pfx + 'datatable-pager-link-number').closest('li').hide();
											break;
									}

									return false;
								}
							});
					},

					/**
					 * Update pagination number and button display
					 */
					paginationUpdate: function() {
						var pager = $(datatable.table).siblings('.' + pfx + 'datatable-pager').find('.' + pfx + 'datatable-pager-nav'),
							pagerMorePrev = $(pager).find('.' + pfx + 'datatable-pager-link-more-prev'),
							pagerMoreNext = $(pager).find('.' + pfx + 'datatable-pager-link-more-next'),
							pagerFirst = $(pager).find('.' + pfx + 'datatable-pager-link-first'),
							pagerPrev = $(pager).find('.' + pfx + 'datatable-pager-link-prev'),
							pagerNext = $(pager).find('.' + pfx + 'datatable-pager-link-next'),
							pagerLast = $(pager).find('.' + pfx + 'datatable-pager-link-last');

						// get visible page
						var pagerNumber = $(pager).find('.' + pfx + 'datatable-pager-link-number');
						// get page before of first visible
						var morePrevPage = Math.max($(pagerNumber).first().data('page') - 1, 1);
						$(pagerMorePrev).each(function(i, prev) {
							$(prev).attr('data-page', morePrevPage);
						});
						// show/hide <li>
						if (morePrevPage === 1) {
							$(pagerMorePrev).parent().hide();
						} else {
							$(pagerMorePrev).parent().show();
						}

						// get page after of last visible
						var moreNextPage = Math.min($(pagerNumber).last().data('page') + 1,
							pg.meta.pages);
						$(pagerMoreNext).each(function(i, prev) {
							$(pagerMoreNext).attr('data-page', moreNextPage).show();
						});

						// show/hide <li>
						if (moreNextPage === pg.meta.pages
							// missing dot fix when last hidden page is one left
							&& moreNextPage === $(pagerNumber).last().data('page')) {
							$(pagerMoreNext).parent().hide();
						} else {
							$(pagerMoreNext).parent().show();
						}

						// begin/end of pages
						if (pg.meta.page === 1) {
							$(pagerFirst).attr('disabled', true).addClass(pfx + 'datatable-pager-link-disabled');
							$(pagerPrev).attr('disabled', true).addClass(pfx + 'datatable-pager-link-disabled');
						} else {
							$(pagerFirst).removeAttr('disabled').removeClass(pfx + 'datatable-pager-link-disabled');
							$(pagerPrev).removeAttr('disabled').removeClass(pfx + 'datatable-pager-link-disabled');
						}
						if (pg.meta.page === pg.meta.pages) {
							$(pagerNext).attr('disabled', true).addClass(pfx + 'datatable-pager-link-disabled');
							$(pagerLast).attr('disabled', true).addClass(pfx + 'datatable-pager-link-disabled');
						} else {
							$(pagerNext).removeAttr('disabled').removeClass(pfx + 'datatable-pager-link-disabled');
							$(pagerLast).removeAttr('disabled').removeClass(pfx + 'datatable-pager-link-disabled');
						}

						// display more buttons
						var nav = Plugin.getOption('toolbar.items.pagination.navigation');
						if (!nav.first) $(pagerFirst).remove();
						if (!nav.prev) $(pagerPrev).remove();
						if (!nav.next) $(pagerNext).remove();
						if (!nav.last) $(pagerLast).remove();
						if (!nav.more) {
							$(pagerMorePrev).remove();
							$(pagerMoreNext).remove();
						}
					},
				};
				pg.init(meta);
				return pg;
			},

			/**
			 * Hide/show table cell defined by
			 * options[columns][i][responsive][visible/hidden]
			 */
			columnHide: function() {
				var screen = util.getViewPort().width;
				// foreach columns setting
				$.each(options.columns, function(i, column) {
					if (typeof column.responsive !== 'undefined' || typeof column.visible !== 'undefined') {
						var field = column.field;
						var tds = $.grep($(datatable.table).find('.' + pfx + 'datatable-cell'), function(n, i) {
							return field === $(n).data('field');
						});

						setTimeout(function () {
							// hide by force
							if (Plugin.getObject('visible', column) === false) {
								$(tds).hide();
							} else {
								// show/hide by responsive breakpoint
								if (util.getBreakpoint(Plugin.getObject('responsive.hidden', column)) >= screen) {
									$(tds).hide();
								} else {
									$(tds).show();
								}
								if (util.getBreakpoint(Plugin.getObject('responsive.visible', column)) <= screen) {
									$(tds).show();
								} else {
									$(tds).hide();
								}
							}
						});
					}
				});
			},

			/**
			 * Setup sub datatable
			 */
			setupSubDatatable: function() {
				var subTableCallback = Plugin.getOption('detail.content');
				if (typeof subTableCallback !== 'function') return;

				// subtable already exist
				if ($(datatable.table).find('.' + pfx + 'datatable-subtable').length > 0) return;

				$(datatable.wrap).addClass(pfx + 'datatable-subtable');

				options.columns[0]['subtable'] = true;

				// toggle on open sub table
				var toggleSubTable = function(e) {
					e.preventDefault();
					// get parent row of this subtable
					var parentRow = $(this).closest('.' + pfx + 'datatable-row');

					// get subtable row for sub table
					var subTableRow = $(parentRow).next('.' + pfx + 'datatable-row-subtable');
					if ($(subTableRow).length === 0) {
						// prepare DOM for sub table, each <tr> as parent and add <tr> as child table
						subTableRow = $('<tr/>').
							addClass(pfx + 'datatable-row-subtable ' + pfx + 'datatable-row-loading').
							hide().
							append($('<td/>').addClass(pfx + 'datatable-subtable').attr('colspan', Plugin.getTotalColumns()));
						$(parentRow).after(subTableRow);
						// add class to even row
						if ($(parentRow).hasClass(pfx + 'datatable-row-even')) {
							$(subTableRow).addClass(pfx + 'datatable-row-subtable-even');
						}
					}

					$(subTableRow).toggle();

					var subTable = $(subTableRow).find('.' + pfx + 'datatable-subtable');

					// get id from first column of parent row
					var primaryKey = $(this).closest('[data-field]:first-child').find('.' + pfx + 'datatable-toggle-subtable').data('value');

					var icon = $(this).find('i').removeAttr('class');

					// prevent duplicate datatable init
					if ($(parentRow).hasClass(pfx + 'datatable-row-subtable-expanded')) {
						$(icon).addClass(Plugin.getOption('layout.icons.rowDetail.collapse'));
						// remove expand class from parent row
						$(parentRow).removeClass(pfx + 'datatable-row-subtable-expanded');
						// trigger event on collapse
						$(datatable).trigger(pfx + 'datatable-on-collapse-subtable', [parentRow]);
					} else {
						// expand and run callback function
						$(icon).addClass(Plugin.getOption('layout.icons.rowDetail.expand'));
						// add expand class to parent row
						$(parentRow).addClass(pfx + 'datatable-row-subtable-expanded');
						// trigger event on expand
						$(datatable).trigger(pfx + 'datatable-on-expand-subtable', [parentRow]);
					}

					// prevent duplicate datatable init
					if ($(subTable).find('.' + pfx + 'datatable').length === 0) {
						// get data by primary id
						$.map(datatable.dataSet, function(n, i) {
							// primary id must be at the first column, otherwise e.data will be undefined
							if (primaryKey === n[options.columns[0].field]) {
								e.data = n;
								return true;
							}
							return false;
						});

						// deprecated in v5.0.6
						e.detailCell = subTable;

						e.parentRow = parentRow;
						e.subTable = subTable;

						// run callback with event
						subTableCallback(e);

						$(subTable).children('.' + pfx + 'datatable').on(pfx + 'datatable-on-init', function(e) {
							$(subTableRow).removeClass(pfx + 'datatable-row-loading');
						});
						if (Plugin.getOption('data.type') === 'local') {
							$(subTableRow).removeClass(pfx + 'datatable-row-loading');
						}
					}
				};

				var columns = options.columns;
				$(datatable.tableBody).find('.' + pfx + 'datatable-row').each(function(tri, tr) {
					$(tr).find('.' + pfx + 'datatable-cell').each(function(tdi, td) {
						// get column settings by field
						var column = $.grep(columns, function(n, i) {
							return $(td).data('field') === n.field;
						})[0];
						if (typeof column !== 'undefined') {
							var value = $(td).text();
							// enable column subtable toggle
							if (typeof column.subtable !== 'undefined' && column.subtable) {
								// check if subtable toggle exist
								if ($(td).find('.' + pfx + 'datatable-toggle-subtable').length > 0) return;
								// append subtable toggle
								$(td).
									html($('<a/>').
										addClass(pfx + 'datatable-toggle-subtable').
										attr('href', '#').
										attr('data-value', value).
										attr('title', Plugin.getOption('detail.title')).
										on('click', toggleSubTable).
										append($('<i/>').css('width', $(td).data('width')).addClass(Plugin.getOption('layout.icons.rowDetail.collapse'))));
							}
						}
					});
				});

				// $(datatable.tableHead).find('.'+pfx+'-datatable-row').first()
			},

			/**
			 * Datasource mapping callback
			 */
			dataMapCallback: function(raw) {
				// static dataset array
				var dataSet = raw;
				// dataset mapping callback
				if (typeof Plugin.getOption('data.source.read.map') === 'function') {
					return Plugin.getOption('data.source.read.map')(raw);
				} else {
					// default data mapping fallback
					if (typeof raw !== 'undefined' && typeof raw.data !== 'undefined') {
						dataSet = raw.data;
					}
				}
				return dataSet;
			},

			isSpinning: false,
			/**
			 * BlockUI spinner callback
			 * @param block
			 * @param target
			 */
			spinnerCallback: function(block, target) {
				if (typeof target === 'undefined') target = datatable;
				// get spinner options
				var spinnerOptions = Plugin.getOption('layout.spinner');
				// spinner is disabled
				if (typeof spinnerOptions === 'undefined' || !spinnerOptions) {
					return;
				}
				if (block) {
					if (!Plugin.isSpinning) {
						if (typeof spinnerOptions.message !== 'undefined' && spinnerOptions.message === true) {
							// use default spinner message from translation
							spinnerOptions.message = Plugin.getOption('translate.records.processing');
						}
						Plugin.isSpinning = true;
						if (typeof app !== 'undefined') {
							app.block(target, spinnerOptions);
						}
					}
				} else {
					Plugin.isSpinning = false;
					if (typeof app !== 'undefined') {
						app.unblock(target);
					}
				}
			},

			/**
			 * Default sort callback function
			 * @param data
			 * @param sort
			 * @param column
			 * @returns {*|Array.<T>|{sort, field}|{asc, desc}}
			 */
			sortCallback: function(data, sort, column) {
				var type = column['type'] || 'string';
				var format = column['format'] || '';
				var field = column['field'];

				return $(data).sort(function(a, b) {
					var aField = a[field];
					var bField = b[field];

					switch (type) {
						case 'date':
							if (typeof moment === 'undefined') {
								throw new Error('Moment.js is required.');
							}
							var diff = moment(aField, format).diff(moment(bField, format));
							if (sort === 'asc') {
								return diff > 0 ? 1 : diff < 0 ? -1 : 0;
							} else {
								return diff < 0 ? 1 : diff > 0 ? -1 : 0;
							}
							break;

						case 'number':
							if (isNaN(parseFloat(aField)) && aField != null) {
								aField = Number(aField.replace(/[^0-9\.-]+/g, ''));
							}
							if (isNaN(parseFloat(bField)) && bField != null) {
								bField = Number(bField.replace(/[^0-9\.-]+/g, ''));
							}
							aField = parseFloat(aField);
							bField = parseFloat(bField);
							if (sort === 'asc') {
								return aField > bField ? 1 : aField < bField ? -1 : 0;
							} else {
								return aField < bField ? 1 : aField > bField ? -1 : 0;
							}
							break;

						case 'html':
							return $(data).sort(function(a, b) {
								// get the text only from html
								aField = $(a[field]).text();
								bField = $(b[field]).text();
								// sort
								if (sort === 'asc') {
									return aField > bField ? 1 : aField < bField ? -1 : 0;
								} else {
									return aField < bField ? 1 : aField > bField ? -1 : 0;
								}
							});
							break;

						case 'string':
						default:
							if (sort === 'asc') {
								return aField > bField ? 1 : aField < bField ? -1 : 0;
							} else {
								return aField < bField ? 1 : aField > bField ? -1 : 0;
							}
							break;
					}
				});
			},

			/**
			 * Custom debug log
			 * @param text
			 * @param obj
			 */
			log: function(text, obj) {
				if (typeof obj === 'undefined') obj = '';
				if (datatable.debug) {
					console.log(text, obj);
				}
			},

			/**
			 * Auto hide columnds overflow in row
			 */
			autoHide: function() {
				var hiddenExist = false;
				// force hide enabled
				var hidDefault = $(datatable.table).find('[data-autohide-enabled]');
				if (hidDefault.length) {
					hiddenExist = true;
					hidDefault.hide();
				}

				var toggleHiddenColumns = function(e) {
					e.preventDefault();

					var row = $(this).closest('.' + pfx + 'datatable-row');
					var detailRow = $(row).next();

					if (!$(detailRow).hasClass(pfx + 'datatable-row-detail')) {
						$(this).find('i').removeClass(Plugin.getOption('layout.icons.rowDetail.collapse')).addClass(Plugin.getOption('layout.icons.rowDetail.expand'));

						var hiddenCells = $(row).find('.' + pfx + 'datatable-cell:hidden');
						var clonedCells = hiddenCells.clone().show();

						detailRow = $('<tr/>').addClass(pfx + 'datatable-row-detail').insertAfter(row);
						var detailRowTd = $('<td/>').addClass(pfx + 'datatable-detail').attr('colspan', Plugin.getTotalColumns()).appendTo(detailRow);

						var detailSubTable = $('<table/>');
						$(clonedCells).each(function() {
							var field = $(this).data('field');
							var column = $.grep(options.columns, function(n, i) {
								return field === n.field;
							})[0];
							if (typeof column === 'undefined' || column.visible !== false) {
								$(detailSubTable).
										append($('<tr class="' + pfx + 'datatable-row"></tr>').
												append($('<td class="' + pfx + 'datatable-cell"></td>').append($('<span/>').append(column.title))).
												append(this));
							}
						});
						$(detailRowTd).append(detailSubTable);

					} else {
						$(this).find('i').removeClass(Plugin.getOption('layout.icons.rowDetail.expand')).addClass(Plugin.getOption('layout.icons.rowDetail.collapse'));
						$(detailRow).remove();
					}
				};

				setTimeout(function () {
					$(datatable.table).find('.' + pfx + 'datatable-cell').show();
					$(datatable.tableBody).each(function() {
						var recursive = 0;
						var offsetWidth = $(this)[0].offsetWidth;
						var scrollWidth = $(this)[0].scrollWidth;

						while (offsetWidth < scrollWidth && (scrollWidth - offsetWidth) > Plugin.cellOffset && recursive < options.columns.length) {

							$(datatable.table).find('.' + pfx + 'datatable-row').each(function(i) {
								var cell = $(this).find('.' + pfx + 'datatable-cell:not(:hidden):not([data-autohide-disabled])').last();
									if (cell.length) {
										$(cell).hide();
										hiddenExist = true;
									}
							});
							recursive++;

							offsetWidth = $(this)[0].offsetWidth;
							scrollWidth = $(this)[0].scrollWidth;
						}
					});

					if (hiddenExist) {
						// toggle show hidden columns
						$(datatable.tableBody).find('.' + pfx + 'datatable-row').each(function() {
							// if no toggle yet
							if($(this).find('.' + pfx + 'datatable-toggle-detail').length === 0) {
								// add toggle
								$(this).prepend($('<td/>').
										addClass(pfx + 'datatable-cell ' + pfx + 'datatable-toggle-detail').
										append($('<a/>').
											addClass(pfx + 'datatable-toggle-detail').
											attr('href', '').
											on('click', toggleHiddenColumns).
											append('<i class="' + Plugin.getOption('layout.icons.rowDetail.collapse') + '"></i>')));
							}

							// check if subtable toggle exist
							if ($(datatable.tableHead).find('.' + pfx + 'datatable-toggle-detail').length === 0) {
								// add empty column to the header and footer
								$(datatable.tableHead).
									find('.' + pfx + 'datatable-row').
									first().
									prepend('<th class="' + pfx + 'datatable-cell ' + pfx + 'datatable-toggle-detail"><span></span></th>');
								$(datatable.tableFoot).
									find('.' + pfx + 'datatable-row').
									first().
									prepend('<th class="' + pfx + 'datatable-cell ' + pfx + 'datatable-toggle-detail"><span></span></th>');
							} else {
								$(datatable.tableHead).find('.' + pfx + 'datatable-toggle-detail').find('span');
							}
						});
					}
				});

				Plugin.adjustCellsWidth.call();
			},

			/**
			 * To enable auto columns features for remote data source
			 */
			setAutoColumns: function() {
				if (Plugin.getOption('data.autoColumns')) {
					$.each(datatable.dataSet[0], function(k, v) {
						var found = $.grep(options.columns, function(n, i) {
							return k === n.field;
						});
						if (found.length === 0) {
							options.columns.push({field: k, title: k});
						}
					});
					$(datatable.tableHead).find('.' + pfx + 'datatable-row').remove();
					Plugin.setHeadTitle();
					if (Plugin.getOption('layout.footer')) {
						$(datatable.tableFoot).find('.' + pfx + 'datatable-row').remove();
						Plugin.setHeadTitle(datatable.tableFoot);
					}
				}
			},

			/********************
			 ** HELPERS
			 ********************/

			/**
			 * Check if table is a locked colums table
			 */
			isLocked: function() {
				var isLocked = Plugin.lockEnabledColumns();
				return isLocked.left.length > 0 || isLocked.right.length > 0;
			},

			isSubtable: function() {
				return util.hasClass(datatable.wrap[0], pfx + 'datatable-subtable') || false;
			},

			/**
			 * Get total extra space of an element for width calculation,
			 * including padding, margin, border
			 * @param element
			 * @returns {number}
			 */
			getExtraSpace: function(element) {
				var padding = parseInt($(element).css('paddingRight')) +
					parseInt($(element).css('paddingLeft'));
				var margin = parseInt($(element).css('marginRight')) +
					parseInt($(element).css('marginLeft'));
				var border = Math.ceil(
					$(element).css('border-right-width').replace('px', ''));
				return padding + margin + border;
			},

			/**
			 * Insert data of array into {{ }} template placeholder
			 * @param template
			 * @param data
			 * @returns {*}
			 */
			dataPlaceholder: function(template, data) {
				var result = template;
				$.each(data, function(key, val) {
					result = result.replace('{{' + key + '}}', val);
				});
				return result;
			},

			/**
			 * Get table unique ID
			 * Note: table unique change each time refreshed
			 * @param suffix
			 * @returns {*}
			 */
			getTableId: function(suffix) {
				if (typeof suffix === 'undefined') suffix = '';
				var id = $(datatable).attr('id');
				if (typeof id === 'undefined') {
					id = $(datatable).attr('class').split(' ')[0];
				}
				return id + suffix;
			},

			/**
			 * Get table prefix with depth number
			 */
			getTablePrefix: function(suffix) {
				if (typeof suffix !== 'undefined') suffix = '-' + suffix;
				return Plugin.getTableId() + '-' + Plugin.getDepth() + suffix;
			},

			/**
			 * Get current table depth of sub table
			 * @returns {number}
			 */
			getDepth: function() {
				var depth = 0;
				var table = datatable.table;
				do {
					table = $(table).parents('.' + pfx + 'datatable-table');
					depth++;
				} while ($(table).length > 0);
				return depth;
			},

			/**
			 * Keep state item
			 * @param key
			 * @param value
			 */
			stateKeep: function(key, value) {
				key = Plugin.getTablePrefix(key);
				if (Plugin.getOption('data.saveState') === false) return;
				if (localStorage) {
					localStorage.setItem(key, JSON.stringify(value));
				}
			},

			/**
			 * Get state item
			 * @param key
			 * @param defValue
			 */
			stateGet: function(key, defValue) {
				key = Plugin.getTablePrefix(key);
				if (Plugin.getOption('data.saveState') === false) return;
				var value = null;
				if (localStorage) {
					value = localStorage.getItem(key);
				}
				if (typeof value !== 'undefined' && value !== null) {
					return JSON.parse(value);
				}
			},

			/**
			 * Update data in state without clear existing
			 * @param key
			 * @param value
			 */
			stateUpdate: function(key, value) {
				var ori = Plugin.stateGet(key);
				if (typeof ori === 'undefined' || ori === null) ori = {};
				Plugin.stateKeep(key, $.extend({}, ori, value));
			},

			/**
			 * Remove state item
			 * @param key
			 */
			stateRemove: function(key) {
				key = Plugin.getTablePrefix(key);
				if (localStorage) {
					localStorage.removeItem(key);
				}
			},

			/**
			 * Get total columns.
			 */
			getTotalColumns: function(tablePart) {
				if (typeof tablePart === 'undefined') tablePart = datatable.tableBody;
				return $(tablePart).find('.' + pfx + 'datatable-row').first().find('.' + pfx + 'datatable-cell').length;
			},

			/**
			 * Get table row. Useful to get row when current table is in lock
			 * mode. Can be used for both lock and normal table mode. By
			 * default, returning result will be in a list of <td>.
			 * @param tablePart
			 * @param row 1-based index
			 * @param tdOnly Optional. Default true
			 * @returns {*}
			 */
			getOneRow: function(tablePart, row, tdOnly) {
				if (typeof tdOnly === 'undefined') tdOnly = true;
				// get list of <tr>
				var result = $(tablePart).find('.' + pfx + 'datatable-row:not(.' + pfx + 'datatable-row-detail):nth-child(' + row + ')');
				if (tdOnly) {
					// get list of <td> or <th>
					result = result.find('.' + pfx + 'datatable-cell');
				}
				return result;
			},

			/**
			 * Sort table row at HTML level by column index.
			 * todo; Not in use.
			 * @param header Header sort clicked
			 * @param sort asc|desc. Optional. Default asc
			 * @param int Boolean. Optional. Comparison value parse to integer.
			 *     Default false
			 */
			sortColumn: function(header, sort, int) {
				if (typeof sort === 'undefined') sort = 'asc'; // desc
				if (typeof int === 'undefined') int = false;

				var column = $(header).index();
				var rows = $(datatable.tableBody).find('.' + pfx + 'datatable-row');
				var hIndex = $(header).closest('.' + pfx + 'datatable-lock').index();
				if (hIndex !== -1) {
					rows = $(datatable.tableBody).find('.' + pfx + 'datatable-lock:nth-child(' + (hIndex + 1) + ')').find('.' + pfx + 'datatable-row');
				}

				var container = $(rows).parent();
				$(rows).sort(function(a, b) {
					var tda = $(a).find('td:nth-child(' + column + ')').text();
					var tdb = $(b).find('td:nth-child(' + column + ')').text();

					if (int) {
						// useful for integer type sorting
						tda = parseInt(tda);
						tdb = parseInt(tdb);
					}

					if (sort === 'asc') {
						return tda > tdb ? 1 : tda < tdb ? -1 : 0;
					} else {
						return tda < tdb ? 1 : tda > tdb ? -1 : 0;
					}
				}).appendTo(container);
			},

			/**
			 * Perform sort remote and local
			 */
			sorting: function() {
				var sortObj = {
					init: function() {
						if (options.sortable) {
							$(datatable.tableHead).
								find('.' + pfx + 'datatable-cell:not(.' + pfx + 'datatable-cell-check)').
								addClass(pfx + 'datatable-cell-sort').
								off('click').
								on('click', sortObj.sortClick);
							// first init
							sortObj.setIcon();
						}
					},
					setIcon: function() {
						var meta = Plugin.getDataSourceParam('sort');
						if ($.isEmptyObject(meta)) return;

						var column = Plugin.getColumnByField(meta.field);
						// sort is disabled for this column
						if (typeof column === 'undefined') return;
						if (typeof column.sortable !== 'undefined' && column.sortable === false) return;
						if (typeof column.selector !== 'undefined' && column.selector === true) return;

						// sort icon beside column header
						var td = $(datatable.tableHead).find('.' + pfx + 'datatable-cell[data-field="' + meta.field + '"]').attr('data-sort', meta.sort);
						var sorting = $(td).find('span');
						var icon = $(sorting).find('i');

						var icons = Plugin.getOption('layout.icons.sort');
						// update sort icon; desc & asc
						if ($(icon).length > 0) {
							$(icon).removeAttr('class').addClass(icons[meta.sort]);
						} else {
							$(sorting).append($('<i/>').addClass(icons[meta.sort]));
						}

						// set sorted class to header on init
						$(td).addClass(pfx + 'datatable-cell-sorted');
					},
					sortClick: function(e) {
						var meta = Plugin.getDataSourceParam('sort');
						var field = $(this).data('field');
						var column = Plugin.getColumnByField(field);
						// sort is disabled for this column
						if (typeof column === 'undefined') return;
						if (typeof column.sortable !== 'undefined' && column.sortable === false) return;
						if (typeof column.selector !== 'undefined' && column.selector === true) return;

						// set sorted class to header
						$(datatable.tableHead).find('th').removeClass(pfx + 'datatable-cell-sorted');
						util.addClass(this, pfx + 'datatable-cell-sorted');

						$(datatable.tableHead).find('.' + pfx + 'datatable-cell > span > i').remove();

						if (options.sortable) {
							Plugin.spinnerCallback(true);

							var sort = 'desc';
							if (Plugin.getObject('field', meta) === field) {
								sort = Plugin.getObject('sort', meta);
							}

							// toggle sort
							sort = typeof sort === 'undefined' || sort === 'desc'
								? 'asc'
								: 'desc';

							// update field and sort params
							meta = {field: field, sort: sort};
							Plugin.setDataSourceParam('sort', meta);

							sortObj.setIcon();

							setTimeout(function() {
								Plugin.dataRender('sort');
								$(datatable).trigger(pfx + 'datatable-on-sort', meta);
							}, 300);
						}
					},
				};
				sortObj.init();
			},

			/**
			 * Update JSON data list linked with sort, filter and pagination.
			 * Call this method, before using dataSet variable.
			 * @returns {*|null}
			 */
			localDataUpdate: function() {
				var params = Plugin.getDataSourceParam();
				if (typeof datatable.originalDataSet === 'undefined') {
					datatable.originalDataSet = datatable.dataSet;
				}

				var field = Plugin.getObject('sort.field', params);
				var sort = Plugin.getObject('sort.sort', params);
				var column = Plugin.getColumnByField(field);
				if (typeof column !== 'undefined' && Plugin.getOption('data.serverSorting') !== true) {
					if (typeof column.sortCallback === 'function') {
						datatable.dataSet = column.sortCallback(datatable.originalDataSet, sort, column);
					} else {
						datatable.dataSet = Plugin.sortCallback(datatable.originalDataSet, sort, column);
					}
				} else {
					datatable.dataSet = datatable.originalDataSet;
				}

				// if server filter enable, don't pass local filter
				if (typeof params.query === 'object' && !Plugin.getOption('data.serverFiltering')) {
					params.query = params.query || {};

					var nestedSearch = function(obj) {
						for (var field in obj) {
							if (!obj.hasOwnProperty(field)) continue;
							if (typeof obj[field] === 'string') {
								if (obj[field].toLowerCase() == search || obj[field].toLowerCase().indexOf(search) !== -1) {
									return true;
								}
							} else if (typeof obj[field] === 'number') {
								if (obj[field] === search) {
									return true;
								}
							} else if (typeof obj[field] === 'object') {
								if (nestedSearch(obj[field])) {
									return true;
								}
							}
						}
						return false;
					};

					var search = $(Plugin.getOption('search.input')).val();
					if (typeof search !== 'undefined' && search !== '') {
						search = search.toLowerCase();
						datatable.dataSet = $.grep(datatable.dataSet, nestedSearch);
						// remove generalSearch as we don't need this for next columns filter
						delete params.query[Plugin.getGeneralSearchKey()];
					}

					// remove empty element from array
					$.each(params.query, function(k, v) {
						if (v === '') {
							delete params.query[k];
						}
					});

					// filter array by query
					datatable.dataSet = Plugin.filterArray(datatable.dataSet, params.query);

					// reset array index
					datatable.dataSet = datatable.dataSet.filter(function() {
						return true;
					});
				}

				return datatable.dataSet;
			},

			/**
			 * Utility helper to filter array by object pair of {key:value}
			 * @param list
			 * @param args
			 * @param operator
			 * @returns {*}
			 */
			filterArray: function(list, args, operator) {
				if (typeof list !== 'object') {
					return [];
				}

				if (typeof operator === 'undefined') operator = 'AND';

				if (typeof args !== 'object') {
					return list;
				}

				operator = operator.toUpperCase();

				if ($.inArray(operator, ['AND', 'OR', 'NOT']) === -1) {
					return [];
				}

				var count = Object.keys(args).length;
				var filtered = [];

				$.each(list, function(key, obj) {
					var to_match = obj;

					var matched = 0;
					$.each(args, function(m_key, m_value) {
						m_value = m_value instanceof Array ? m_value : [m_value];
						var match_property = Plugin.getObject(m_key, to_match);
						if (typeof match_property !== 'undefined' && match_property) {
							var lhs = match_property.toString().toLowerCase();
							m_value.forEach(function(item, index) {
								if (item.toString().toLowerCase() == lhs || lhs.indexOf(item.toString().toLowerCase()) !== -1) {
									matched++;
								}
							});
						}
					});

					if (('AND' == operator && matched == count) ||
						('OR' == operator && matched > 0) ||
						('NOT' == operator && 0 == matched)) {
						filtered[key] = obj;
					}
				});

				list = filtered;

				return list;
			},

			/**
			 * Reset lock column scroll to 0 when resize
			 */
			resetScroll: function() {
				if (typeof options.detail === 'undefined' && Plugin.getDepth() === 1) {
					$(datatable.table).find('.' + pfx + 'datatable-row').css('left', 0);
					$(datatable.table).find('.' + pfx + 'datatable-lock').css('top', 0);
					$(datatable.tableBody).scrollTop(0);
				}
			},

			/**
			 * Get column options by field
			 * @param field
			 * @returns {boolean}
			 */
			getColumnByField: function(field) {
				if (typeof field === 'undefined') return;
				var result;
				$.each(options.columns, function(i, column) {
					if (field === column.field) {
						result = column;
						return false;
					}
				});
				return result;
			},

			/**
			 * Get default sort column
			 */
			getDefaultSortColumn: function() {
				var result;
				$.each(options.columns, function(i, column) {
					if (typeof column.sortable !== 'undefined'
						&& $.inArray(column.sortable, ['asc', 'desc']) !== -1) {
						result = {sort: column.sortable, field: column.field};
						return false;
					}
				});
				return result;
			},

			/**
			 * Helper to get element dimensions, when the element is hidden
			 * @param element
			 * @param includeMargin
			 * @returns {{width: number, height: number, innerWidth: number,
			 *     innerHeight: number, outerWidth: number, outerHeight:
			 *     number}}
			 */
			getHiddenDimensions: function(element, includeMargin) {
				var props = {
						position: 'absolute',
						visibility: 'hidden',
						display: 'block',
					},
					dim = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0,
					},
					hiddenParents = $(element).parents().addBack().not(':visible');
				includeMargin = (typeof includeMargin === 'boolean')
					? includeMargin
					: false;

				var oldProps = [];
				hiddenParents.each(function() {
					var old = {};

					for (var name in props) {
						old[name] = this.style[name];
						this.style[name] = props[name];
					}

					oldProps.push(old);
				});

				dim.width = $(element).width();
				dim.outerWidth = $(element).outerWidth(includeMargin);
				dim.innerWidth = $(element).innerWidth();
				dim.height = $(element).height();
				dim.innerHeight = $(element).innerHeight();
				dim.outerHeight = $(element).outerHeight(includeMargin);

				hiddenParents.each(function(i) {
					var old = oldProps[i];
					for (var name in props) {
						this.style[name] = old[name];
					}
				});

				return dim;
			},

			getGeneralSearchKey: function() {
				var searchInput = $(Plugin.getOption('search.input'));
				return Plugin.getOption('search.key') || $(searchInput).prop('name');
			},

			/**
			 * Get value by dot notation path string and to prevent undefined
			 * errors
			 * @param path String Dot notation path in string
			 * @param object Object to iterate
			 * @returns {*}
			 */
			getObject: function(path, object) {
				return path.split('.').reduce(function(obj, i) {
					return obj !== null && typeof obj[i] !== 'undefined' ? obj[i] : null;
				}, object);
			},

			/**
			 * Extend object
			 * @param obj
			 * @param path
			 * @param value
			 * @returns {*}
			 */
			extendObj: function(obj, path, value) {
				var levels = path.split('.'),
					i = 0;

				function createLevel(child) {
					var name = levels[i++];
					if (typeof child[name] !== 'undefined' && child[name] !== null) {
						if (typeof child[name] !== 'object' &&
							typeof child[name] !== 'function') {
							child[name] = {};
						}
					} else {
						child[name] = {};
					}
					if (i === levels.length) {
						child[name] = value;
					} else {
						createLevel(child[name]);
					}
				}

				createLevel(obj);
				return obj;
			},

			rowEvenOdd: function() {
				// row even class
				$(datatable.tableBody).find('.' + pfx + 'datatable-row').removeClass(pfx + 'datatable-row-even');
				if ($(datatable.wrap).hasClass(pfx + 'datatable-subtable')) {
					$(datatable.tableBody).find('.' + pfx + 'datatable-row:not(.' + pfx + 'datatable-row-detail):even').addClass(pfx + 'datatable-row-even');
				} else {
					$(datatable.tableBody).find('.' + pfx + 'datatable-row:nth-child(even)').addClass(pfx + 'datatable-row-even');
				}
			},

			/********************
			 ** PUBLIC API METHODS
			 ********************/

			// delay timer
			timer: 0,

			/**
			 * Redraw datatable by recalculating its DOM elements, etc.
			 * @returns {jQuery}
			 */
			redraw: function() {
				Plugin.adjustCellsWidth.call();
				if (Plugin.isLocked()) {
					// fix hiding cell width issue
					Plugin.scrollbar();
					Plugin.resetScroll();
					Plugin.adjustCellsHeight.call();
				}
				Plugin.adjustLockContainer.call();
				Plugin.initHeight.call();
				return datatable;
			},

			/**
			 * Shortcode to reload
			 * @returns {jQuery}
			 */
			load: function() {
				Plugin.reload();
				return datatable;
			},

			/**
			 * Datasource reload
			 * @returns {jQuery}
			 */
			reload: function() {
				var delay = (function() {
					return function(callback, ms) {
						clearTimeout(Plugin.timer);
						Plugin.timer = setTimeout(callback, ms);
					};
				})();
				delay(function() {
					// local only. remote pagination will skip this block
					if (!options.data.serverFiltering) {
						Plugin.localDataUpdate();
					}
					Plugin.dataRender();
					$(datatable).trigger(pfx + 'datatable-on-reloaded');
				}, Plugin.getOption('search.delay'));
				return datatable;
			},

			/**
			 * Get record by record ID
			 * @param id
			 * @returns {jQuery}
			 */
			getRecord: function(id) {
				if (typeof datatable.tableBody === 'undefined') datatable.tableBody = $(datatable.table).children('tbody');
				$(datatable.tableBody).find('.' + pfx + 'datatable-cell:first-child').each(function(i, cell) {
					if (id == $(cell).text()) {
						var rowNumber = $(cell).closest('.' + pfx + 'datatable-row').index() + 1;
						datatable.API.record = datatable.API.value = Plugin.getOneRow(datatable.tableBody, rowNumber);
						return datatable;
					}
				});
				return datatable;
			},

			/**
			 * @deprecated in v5.0.6
			 * Get column of current record ID
			 * @param columnName
			 * @returns {jQuery}
			 */
			getColumn: function(columnName) {
				Plugin.setSelectedRecords();
				datatable.API.value = $(datatable.API.record).find('[data-field="' + columnName + '"]');
				return datatable;
			},

			/**
			 * Destroy datatable to original DOM state before datatable was
			 * initialized
			 * @returns {jQuery}
			 */
			destroy: function() {
				$(datatable).parent().find('.' + pfx + 'datatable-pager').remove();
				var initialDatatable = $(datatable.initialDatatable).addClass(pfx + 'datatable-destroyed').show();
				$(datatable).replaceWith(initialDatatable);
				datatable = initialDatatable;
				$(datatable).trigger(pfx + 'datatable-on-destroy');
				Plugin.isInit = false;

				// clean up variables
				initialDatatable = null;
				datatable.dataSet = null;
				datatable.originalDataSet = null;
				datatable.tableHead = null;
				datatable.tableBody = null;
				datatable.table = null;
				datatable.wrap = null;
				datatable.API = {
					record: null,
					value: null,
					params: null,
				};

				Plugin.ajaxParams = {};
				Plugin.pagingObject = {};
				Plugin.nodeTr = [];
				Plugin.nodeTd = [];
				Plugin.nodeCols = [];
				Plugin.recentNode = [];

				return initialDatatable;
			},

			/**
			 * Sort by column field
			 * @param field
			 * @param sort
			 */
			sort: function(field, sort) {
				// toggle sort
				sort = typeof sort === 'undefined' ? 'asc' : sort;

				Plugin.spinnerCallback(true);

				// update field and sort params
				var meta = {field: field, sort: sort};
				Plugin.setDataSourceParam('sort', meta);

				setTimeout(function() {
					Plugin.dataRender('sort');
					$(datatable).trigger(pfx + 'datatable-on-sort', meta);
					$(datatable.tableHead).find('.' + pfx + 'datatable-cell > span > i').remove();
				}, 300);

				return datatable;
			},

			/**
			 * @deprecated in v5.0.6
			 * Get current selected column value
			 * @returns {jQuery}
			 */
			getValue: function() {
				return $(datatable.API.value).text();
			},

			/**
			 * Set checkbox active
			 * @param cell JQuery selector or checkbox ID
			 */
			setActive: function(cell) {
				if (typeof cell === 'string') {
					// set by checkbox id
					cell = $(datatable.tableBody).find('.' + pfx + 'checkbox-single > [type="checkbox"][value="' + cell + '"]');
				}

				$(cell).prop('checked', true);

				var ids = [];
				$(cell).each(function(i, td) {
					// normal table
					var row = $(td).closest('tr').addClass(pfx + 'datatable-row-active');

					var id = $(td).attr('value');
					if (typeof id !== 'undefined') {
						ids.push(id);
					}
				});

				$(datatable).trigger(pfx + 'datatable-on-check', [ids]);
			},

			/**
			 * Set checkbox inactive
			 * @param cell JQuery selector or checkbox ID
			 */
			setInactive: function(cell) {
				if (typeof cell === 'string') {
					// set by checkbox id
					cell = $(datatable.tableBody).find('.' + pfx + 'checkbox-single > [type="checkbox"][value="' + cell + '"]');
				}

				$(cell).prop('checked', false);

				var ids = [];
				$(cell).each(function(i, td) {
					// normal table
					var row = $(td).closest('tr').removeClass(pfx + 'datatable-row-active');

					var id = $(td).attr('value');
					if (typeof id !== 'undefined') {
						ids.push(id);
					}
				});

				$(datatable).trigger(pfx + 'datatable-on-uncheck', [ids]);
			},

			/**
			 * Set all checkboxes active or inactive
			 * @param active
			 */
			setActiveAll: function(active) {
				var checkboxes = $(datatable.table).
					find('> tbody, > thead').
					find('tr').not('.' + pfx + 'datatable-row-subtable').
					find('.' + pfx + 'datatable-cell-check [type="checkbox"]');
				if (active) {
					Plugin.setActive(checkboxes);
				} else {
					Plugin.setInactive(checkboxes);
				}
			},

			/**
			 * @deprecated in v5.0.6
			 * Get selected rows which are active
			 * @returns {jQuery}
			 */
			setSelectedRecords: function() {
				datatable.API.record = $(datatable.tableBody).find('.' + pfx + 'datatable-row-active');
				return datatable;
			},

			/**
			 * Get selected records
			 * @returns {null}
			 */
			getSelectedRecords: function() {
				// support old method
				Plugin.setSelectedRecords();
				datatable.API.record = datatable.rows('.' + pfx + 'datatable-row-active').nodes();
				return datatable.API.record;
			},

			/**
			 * Get options by dots notation path
			 * @param path String Dot notation path in string
			 * @returns {*}
			 */
			getOption: function(path) {
				return Plugin.getObject(path, options);
			},

			/**
			 * Set global options nodes by dots notation path
			 * @param path
			 * @param object
			 */
			setOption: function(path, object) {
				options = Plugin.extendObj(options, path, object);
			},

			/**
			 * Search filter for local & remote
			 * @param value
			 * @param columns. Optional list of columns to be filtered.
			 */
			search: function(value, columns) {
				if (typeof columns !== 'undefined') columns = $.makeArray(columns);
				var delay = (function() {
					return function(callback, ms) {
						clearTimeout(Plugin.timer);
						Plugin.timer = setTimeout(callback, ms);
					};
				})();

				delay(function() {
					// get query parameters
					var query = Plugin.getDataSourceQuery();

					// search not by columns
					if (typeof columns === 'undefined' && typeof value !== 'undefined') {
						var key = Plugin.getGeneralSearchKey();
						query[key] = value;
					}

					// search by columns, support multiple columns
					if (typeof columns === 'object') {
						$.each(columns, function(k, column) {
							query[column] = value;
						});
						// remove empty element from arrays
						$.each(query, function(k, v) {
							if (v === '' || $.isEmptyObject(v)) {
								delete query[k];
							}
						});
					}

					Plugin.setDataSourceQuery(query);

					// reset pagination to 1 when doing seearching
					datatable.setDataSourceParam('pagination', Object.assign({}, datatable.getDataSourceParam('pagination'), {page: 1}));

					// local filter only. remote pagination will skip this block
					if (!options.data.serverFiltering) {
						Plugin.localDataUpdate();
					}
					Plugin.dataRender('search');
				}, Plugin.getOption('search.delay'));
			},

			/**
			 * Set datasource params extract
			 * @param param
			 * @param value
			 */
			setDataSourceParam: function(param, value) {
				datatable.API.params = $.extend({}, {
					pagination: {page: 1, perpage: Plugin.getOption('data.pageSize')},
					sort: Plugin.getDefaultSortColumn(),
					query: {},
				}, datatable.API.params, Plugin.stateGet(Plugin.stateId));

				datatable.API.params = Plugin.extendObj(datatable.API.params, param, value);

				Plugin.stateKeep(Plugin.stateId, datatable.API.params);
			},

			/**
			 * Get datasource params
			 * @param param
			 */
			getDataSourceParam: function(param) {
				datatable.API.params = $.extend({}, {
					pagination: {page: 1, perpage: Plugin.getOption('data.pageSize')},
					sort: Plugin.getDefaultSortColumn(),
					query: {},
				}, datatable.API.params, Plugin.stateGet(Plugin.stateId));

				if (typeof param === 'string') {
					return Plugin.getObject(param, datatable.API.params);
				}

				return datatable.API.params;
			},

			/**
			 * Shortcode to datatable.getDataSourceParam('query');
			 * @returns {*}
			 */
			getDataSourceQuery: function() {
				return Plugin.getDataSourceParam('query') || {};
			},

			/**
			 * Shortcode to datatable.setDataSourceParam('query', query);
			 * @param query
			 */
			setDataSourceQuery: function(query) {
				Plugin.setDataSourceParam('query', query);
			},

			/**
			 * Get current page number
			 * @returns {number}
			 */
			getCurrentPage: function() {
				return $(datatable.table).
					siblings('.' + pfx + 'datatable-pager').
					last().
					find('.' + pfx + 'datatable-pager-nav').
					find('.' + pfx + 'datatable-pager-link.' + pfx + 'datatable-pager-link-active').
					data('page') || 1;
			},

			/**
			 * Get selected dropdown page size
			 * @returns {*|number}
			 */
			getPageSize: function() {
				return $(datatable.table).siblings('.' + pfx + 'datatable-pager').last().find('select.' + pfx + 'datatable-pager-size').val() || 10;
			},

			/**
			 * Get total rows
			 */
			getTotalRows: function() {
				return datatable.API.params.pagination.total;
			},

			/**
			 * Get full dataset in grid
			 * @returns {*|null|Array}
			 */
			getDataSet: function() {
				return datatable.originalDataSet;
			},

			nodeTr: [],
			nodeTd: [],
			nodeCols: [],
			recentNode: [],

			table: function() {
				if (typeof datatable.table !== 'undefined') {
					return datatable.table;
				}
			},

			/**
			 * Select a single row from the table
			 * @param selector
			 * @returns {jQuery}
			 */
			row: function(selector) {
				Plugin.rows(selector);
				Plugin.nodeTr = Plugin.recentNode = $(Plugin.nodeTr).first();
				return datatable;
			},

			/**
			 * Select multiple rows from the table
			 * @param selector
			 * @returns {jQuery}
			 */
			rows: function(selector) {
				if (Plugin.isLocked()) {
					Plugin.nodeTr = Plugin.recentNode = $(datatable.tableBody).find(selector).filter('.' + pfx + 'datatable-lock-scroll > .' + pfx + 'datatable-row');
				} else {
					Plugin.nodeTr = Plugin.recentNode = $(datatable.tableBody).find(selector).filter('.' + pfx + 'datatable-row');
				}
				return datatable;
			},

			/**
			 * Select a single column from the table
			 * @param index zero-based index
			 * @returns {jQuery}
			 */
			column: function(index) {
				Plugin.nodeCols = Plugin.recentNode = $(datatable.tableBody).find('.' + pfx + 'datatable-cell:nth-child(' + (index + 1) + ')');
				return datatable;
			},

			/**
			 * Select multiple columns from the table
			 * @param selector
			 * @returns {jQuery}
			 */
			columns: function(selector) {
				var context = datatable.table;
				if (Plugin.nodeTr === Plugin.recentNode) {
					context = Plugin.nodeTr;
				}
				var columns = $(context).find('.' + pfx + 'datatable-cell[data-field="' + selector + '"]');
				if (columns.length > 0) {
					Plugin.nodeCols = Plugin.recentNode = columns;
				} else {
					Plugin.nodeCols = Plugin.recentNode = $(context).find(selector).filter('.' + pfx + 'datatable-cell');
				}
				return datatable;
			},

			cell: function(selector) {
				Plugin.cells(selector);
				Plugin.nodeTd = Plugin.recentNode = $(Plugin.nodeTd).first();
				return datatable;
			},

			cells: function(selector) {
				var cells = $(datatable.tableBody).find('.' + pfx + 'datatable-cell');
				if (typeof selector !== 'undefined') {
					cells = $(cells).filter(selector);
				}
				Plugin.nodeTd = Plugin.recentNode = cells;
				return datatable;
			},

			/**
			 * Delete the selected row from the table
			 * @returns {jQuery}
			 */
			remove: function() {
				if ($(Plugin.nodeTr.length) && Plugin.nodeTr === Plugin.recentNode) {
					$(Plugin.nodeTr).remove();
				}
				Plugin.layoutUpdate();
				return datatable;
			},

			/**
			 * Show or hide the columns or rows
			 */
			visible: function(bool) {
				if ($(Plugin.recentNode.length)) {
					var locked = Plugin.lockEnabledColumns();
					if (Plugin.recentNode === Plugin.nodeCols) {
						var index = Plugin.recentNode.index();

						if (Plugin.isLocked()) {
							var scrollColumns = $(Plugin.recentNode).closest('.' + pfx + 'datatable-lock-scroll').length;
							if (scrollColumns) {
								// is at center of scrollable area
								index += locked.left.length + 1;
							} else if ($(Plugin.recentNode).closest('.' + pfx + 'datatable-lock-right').length) {
								// is at the right locked table
								index += locked.left.length + scrollColumns + 1;
							}
						}
					}

					if (bool) {
						if (Plugin.recentNode === Plugin.nodeCols) {
							delete options.columns[index].visible;
						}
						$(Plugin.recentNode).show();
					} else {
						if (Plugin.recentNode === Plugin.nodeCols) {
							Plugin.setOption('columns.' + (index) + '.visible', false);
						}
						$(Plugin.recentNode).hide();
					}
					Plugin.columnHide();
					Plugin.redraw();
				}
			},

			/**
			 * Get the the DOM element for the selected rows or columns
			 * @returns {Array}
			 */
			nodes: function() {
				return Plugin.recentNode;
			},

			/**
			 * will be implemented soon
			 * @returns {jQuery}
			 */
			dataset: function() {
				return datatable;
			},

			/**
			 * Open page by number
			 * @param page number
			 */
			gotoPage: function (page) {
				if (typeof Plugin.pagingObject !== 'undefined') {
					Plugin.isInit = true;
					Plugin.pagingObject.openPage(page);
				}
			},

		};

		/**
		 * Public API methods can be used directly by datatable
		 */
		$.each(Plugin, function(funcName, func) {
			datatable[funcName] = func;
		});

		// initialize main datatable plugin
		if (typeof options !== 'undefined') {
			if (typeof options === 'string') {
				var method = options;
				datatable = $(this).data(pluginName);
				if (typeof datatable !== 'undefined') {
					options = datatable.options;
					Plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
				}
			} else {
				if (!datatable.data(pluginName) && !$(this).hasClass(pfx + 'datatable-loaded')) {
					datatable.dataSet = null;
					datatable.textAlign = {
						left: pfx + 'datatable-cell-left',
						center: pfx + 'datatable-cell-center',
						right: pfx + 'datatable-cell-right',
					};

					// merge default and user defined options
					options = $.extend(true, {}, $.fn[pluginName].defaults, options);

					datatable.options = options;

					// init plugin process
					Plugin.init.apply(this, [options]);

					$(datatable.wrap).data(pluginName, datatable);
				}
			}
		} else {
			// get existing instance datatable
			datatable = $(this).data(pluginName);
			if (typeof datatable === 'undefined') {
				$.error(pluginName + ' not initialized');
			}
			options = datatable.options;
		}

		return datatable;
	};

	// default options
	$.fn[pluginName].defaults = {
		// datasource definition
		data: {
			type: 'local',
			source: null,
			pageSize: 10, // display records per page
			saveState: true,

			serverPaging: false,
			serverFiltering: false,
			serverSorting: false,

			autoColumns: false,
			attr: {
				rowProps: [],
			},
		},

		// layout definition
		layout: {
			theme: 'default', // datatable will support multiple themes and designs
			class: pfx + 'datatable-primary', // custom wrapper class
			scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
			height: null, // datatable's body's fixed height
			minHeight: null,
			footer: false, // display/hide footer
			header: true, // display/hide header
			customScrollbar: true, // set false to disable custom scrollbar

			// datatable spinner
			spinner: {
				overlayColor: '#000000',
				opacity: 0,
				type: 'loader',
				state: 'primary',
				message: true,
			},

			// datatable UI icons
			icons: {
				sort: {asc: 'flaticon2-arrow-up', desc: 'flaticon2-arrow-down'},
				pagination: {
					next: 'flaticon2-next',
					prev: 'flaticon2-back',
					first: 'flaticon2-fast-back',
					last: 'flaticon2-fast-next',
					more: 'flaticon-more-1',
				},
				rowDetail: {expand: 'fa fa-caret-down', collapse: 'fa fa-caret-right'},
			},
		},

		// column sorting
		sortable: true,

		// resize column size with mouse drag coming soon)
		resizable: false,

		// column based filtering (coming soon)
		filterable: false,

		pagination: true,

		// inline and bactch editing (cooming soon)
		editable: false,

		// columns definition
		columns: [],

		search: {
			// enable trigger search by keyup enter
			onEnter: false,
			// input text for search
			input: null,
			// search delay in milliseconds
			delay: 400,
			//	remote server search key value
			key: null
		},

		rows: {
			// deprecated
			callback: function() {
			},
			// call before row template
			beforeTemplate: function() {
			},
			// call after row template
			afterTemplate: function() {
			},
			autoHide: true,
		},

		// toolbar
		toolbar: {
			// place pagination and displayInfo blocks according to the array order
			layout: ['pagination', 'info'],

			// toolbar placement can be at top or bottom or both top and bottom repeated
			placement: ['bottom'],  //'top', 'bottom'

			// toolbar items
			items: {
				// pagination
				pagination: {
					// pagination type(default or scroll)
					type: 'default',

					// number of pages to display by breakpoints
					pages: {
						desktop: {
							layout: 'default',
							pagesNumber: 5,
						},
						tablet: {
							layout: 'default',
							pagesNumber: 3,
						},
						mobile: {
							layout: 'compact',
						},
					},

					// navigation buttons
					navigation: {
						prev: true, // display prev button
						next: true, // display next button
						first: true, // display first button
						last: true, // display last button
						more: false // display more button
					},

					// page size select
					pageSizeSelect: [], // display dropdown to select pagination size. -1 is used for "ALl" option
				},

				// records info
				info: true,
			},
		},

		// here we will keep all strings and message used by datatable UI so developer can easiliy translate to any language.
		// By default the stirngs will be in the plugin source and here can override it
		translate: {
			records: {
				processing: 'Please wait...',
				noRecords: 'No records found',
			},
			toolbar: {
				pagination: {
					items: {
						default: {
							first: 'First',
							prev: 'Previous',
							next: 'Next',
							last: 'Last',
							more: 'More pages',
							input: 'Page number',
							select: 'Select page size',
							all: 'all',
						},
						info: 'Showing {{start}} - {{end}} of {{total}}',
					},
				},
			},
		},

		extensions: {},
	};

}(jQuery));

"use strict";
(function($) {

	var pluginName = 'KTDatatable';
	var pfx = '';

	$.fn[pluginName] = $.fn[pluginName] || {};

	/**
	 * @param datatable Main datatable plugin instance
	 * @param options Extension options
	 * @returns {*}
	 */
	$.fn[pluginName].checkbox = function(datatable, options) {
		var Extension = {
			selectedAllRows: false,
			selectedRows: [],
			unselectedRows: [],

			init: function() {
				if (Extension.selectorEnabled()) {
					// reset
					datatable.setDataSourceParam(options.vars.selectedAllRows, false);
					datatable.stateRemove('checkbox');

					// requestIds is not null
					if (options.vars.requestIds) {
						// request ids in response
						datatable.setDataSourceParam(options.vars.requestIds, true);
					}

					// remove selected checkbox on datatable reload
					$(datatable).on(pfx + 'datatable-on-reloaded', function() {
						datatable.stateRemove('checkbox');
						datatable.setDataSourceParam(options.vars.selectedAllRows, false);
						Extension.selectedAllRows = false;
						Extension.selectedRows = [];
						Extension.unselectedRows = [];
					});

					// select all on extension init
					Extension.selectedAllRows = datatable.getDataSourceParam(options.vars.selectedAllRows);

					$(datatable).on(pfx + 'datatable-on-layout-updated', function(e, args) {
						if (args.table != $(datatable.wrap).attr('id')) {
							return;
						}
						datatable.ready(function() {
							Extension.initVars();
							Extension.initEvent();
							Extension.initSelect();
						});
					});

					$(datatable).on(pfx + 'datatable-on-check', function(e, ids) {
						ids.forEach(function(id) {
							Extension.selectedRows.push(id);
							// // remove from unselected rows
							Extension.unselectedRows = Extension.remove(Extension.unselectedRows, id);
						});
						var storage = {};
						storage['selectedRows'] = Extension.selectedRows.filter(Extension.unique);
						storage['unselectedRows'] = Extension.unselectedRows.filter(Extension.unique);
						datatable.stateKeep('checkbox', storage);
					});
					$(datatable).on(pfx + 'datatable-on-uncheck', function(e, ids) {
						ids.forEach(function(id) {
							Extension.unselectedRows.push(id);
							// // remove from selected rows
							Extension.selectedRows = Extension.remove(Extension.selectedRows, id);
						});
						var storage = {};
						storage['selectedRows'] = Extension.selectedRows.filter(Extension.unique);
						storage['unselectedRows'] = Extension.unselectedRows.filter(Extension.unique);
						storage['unselectedRows'] = Extension.unselectedRows.filter(Extension.unique);
						datatable.stateKeep('checkbox', storage);
					});
				}
			},

			/**
			 * Init checkbox clicks event
			 */
			initEvent: function() {
				// select all checkbox click
				$(datatable.tableHead).find('.' + pfx + 'checkbox-all > [type="checkbox"]').click(function(e) {
					// clear selected and unselected rows
					Extension.selectedRows = Extension.unselectedRows = [];
					datatable.stateRemove('checkbox');

					// select all rows
					Extension.selectedAllRows = !!$(this).is(':checked');

					// local select all current page rows
					if (!options.vars.requestIds) {
						if ($(this).is(':checked')) {
							Extension.selectedRows = $.makeArray($(datatable.tableBody).find('.' + pfx + 'checkbox-single > [type="checkbox"]').map(function(i, chk) {
								return $(chk).val();
							}));
						}
						var storage = {};
						storage['selectedRows'] = Extension.selectedRows.filter(Extension.unique);
						datatable.stateKeep('checkbox', storage);
					}

					// keep selectedAllRows in datasource params
					datatable.setDataSourceParam(options.vars.selectedAllRows, Extension.selectedAllRows);

					$(datatable).trigger(pfx + 'datatable-on-click-checkbox', [$(this)]);
				});

				// single row checkbox click
				$(datatable.tableBody).find('.' + pfx + 'checkbox-single > [type="checkbox"]').click(function(e) {
					var id = $(this).val();
					if ($(this).is(':checked')) {
						Extension.selectedRows.push(id);
						// remove from unselected rows
						Extension.unselectedRows = Extension.remove(Extension.unselectedRows, id);
					}
					else {
						Extension.unselectedRows.push(id);
						// remove from selected rows
						Extension.selectedRows = Extension.remove(Extension.selectedRows, id);
					}

					// local checkbox header check
					if (!options.vars.requestIds && Extension.selectedRows.length < 1) {
						// remove select all checkbox, if there is no checked checkbox left
						$(datatable.tableHead).find('.' + pfx + 'checkbox-all > [type="checkbox"]').prop('checked', false);
					}

					var storage = {};
					storage['selectedRows'] = Extension.selectedRows.filter(Extension.unique);
					storage['unselectedRows'] = Extension.unselectedRows.filter(Extension.unique);
					datatable.stateKeep('checkbox', storage);

					$(datatable).trigger(pfx + 'datatable-on-click-checkbox', [$(this)]);
				});
			},

			unique: function(value, index, self) {
				return self.indexOf(value) === index;
			},

			initSelect: function() {
				// selected all rows from server
				if (Extension.selectedAllRows && options.vars.requestIds) {
					if (!datatable.hasClass(pfx + 'datatable-error')) {
						// set header select all checkbox checked
						$(datatable.tableHead).find('.' + pfx + 'checkbox-all > [type="checkbox"]').prop('checked', true);
					}

					// set all checkbox in table body
					datatable.setActiveAll(true);

					// remove unselected rows
					Extension.unselectedRows.forEach(function(id) {
						datatable.setInactive(id);
					});

				}
				else {
					// single check for server and local
					Extension.selectedRows.forEach(function(id) {
						datatable.setActive(id);
					});

					// local checkbox; check if all checkboxes of currect page are checked
					if (!datatable.hasClass(pfx + 'datatable-error') && $(datatable.tableBody).find('.' + pfx + 'checkbox-single > [type="checkbox"]').not(':checked').length < 1) {
						// set header select all checkbox checked
						$(datatable.tableHead).find('.' + pfx + 'checkbox-all > [type="checkbox"]').prop('checked', true);
					}
				}
			},

			/**
			 * Check if selector is enabled from options
			 */
			selectorEnabled: function() {
				return $.grep(datatable.options.columns, function(n, i) {
					return n.selector || false;
				})[0];
			},

			initVars: function() {
				// get single select/unselect from localstorage
				var storage = datatable.stateGet('checkbox');
				if (typeof storage !== 'undefined') {
					Extension.selectedRows = storage['selectedRows'] || [];
					Extension.unselectedRows = storage['unselectedRows'] || [];
				}
			},

			getSelectedId: function(path) {
				Extension.initVars();

				// server selected all rows
				if (Extension.selectedAllRows && options.vars.requestIds) {
					if (typeof path === 'undefined') {
						path = options.vars.rowIds;
					}

					// if selected all rows, return id from response meta
					var selectedAllRows = datatable.getObject(path, datatable.lastResponse) || [];

					if (selectedAllRows.length > 0) {
						// remove single unselected rows from selectedAllRows ids from server response emta
						Extension.unselectedRows.forEach(function(id) {
							selectedAllRows = Extension.remove(selectedAllRows, parseInt(id));
						});
					}
					return selectedAllRows.filter(Extension.unique);
				}

				// else return single checked selected rows
				return Extension.selectedRows.filter(Extension.unique);
			},

			remove: function(array, element) {
				return array.filter(function(e) {
					return e !== element;
				});
			},
		};

		// make the extension accessible from datatable init
		datatable.checkbox = function() {
			return Extension;
		};

		if (typeof options === 'object') {
			options = $.extend(true, {}, $.fn[pluginName].checkbox.default, options);
			Extension.init.apply(this, [options]);
		}

		return datatable;
	};

	$.fn[pluginName].checkbox.default = {
		vars: {
			// select all rows flag to be sent to the server
			selectedAllRows: 'selectedAllRows',
			// request id parameter's name
			requestIds: 'requestIds',
			// response path to all rows id
			rowIds: 'meta.rowIds',
		},
	};

}(jQuery));

var defaults = {
	layout: {
		icons: {
			pagination: {
				next: 'flaticon2-next',
				prev: 'flaticon2-back',
				first: 'flaticon2-fast-back',
				last: 'flaticon2-fast-next',
				more: 'flaticon-more-1',
			},
			rowDetail: {expand: 'fa fa-caret-down', collapse: 'fa fa-caret-right'},
		}
	}
};

if (KTUtil.isRTL()) {
	defaults = {
		layout: {
			icons: {
				pagination: {
					next: 'flaticon2-back',
					prev: 'flaticon2-next',
					first: 'flaticon2-fast-next',
					last: 'flaticon2-fast-back',
				},
				rowDetail: {collapse: 'fa fa-caret-down', expand: 'fa fa-caret-right'},
			}
		}
	}
}

$.extend(true, $.fn.KTDatatable.defaults, defaults);

"use strict";

// Initialization
KTUtil.ready(function() {
    ////////////////////////////////////////////////////
    // Layout Base Partials(mandatory for core layout)//
    ////////////////////////////////////////////////////

    // Init Desktop & Mobile Headers
    if (typeof KTLayoutHeader !== 'undefined') {
        KTLayoutHeader.init('kt_header', 'kt_header_mobile');
    }

    // Init Header Menu
    if (typeof KTLayoutHeaderMenu !== 'undefined') {
        KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
    }

    // Init Header Topbar For Mobile Mode
    if (typeof KTLayoutHeaderTopbar !== 'undefined') {
        KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');
    }

    // Init Brand Panel For Logo
    if (typeof KTLayoutBrand !== 'undefined') {
        KTLayoutBrand.init('kt_brand');
    }

    // Init Aside
    if (typeof KTLayoutAside !== 'undefined') {
        KTLayoutAside.init('kt_aside');
    }

    // Init Aside Menu Toggle
    if (typeof KTLayoutAsideToggle !== 'undefined') {
        KTLayoutAsideToggle.init('kt_aside_toggle');
    }

    // Init Aside Menu
    if (typeof KTLayoutAsideMenu !== 'undefined') {
        KTLayoutAsideMenu.init('kt_aside_menu');
    }

    // Init Subheader
    if (typeof KTLayoutSubheader !== 'undefined') {
        KTLayoutSubheader.init('kt_subheader');
    }

    // Init Content
    if (typeof KTLayoutContent !== 'undefined') {
        KTLayoutContent.init('kt_content');
    }

    // Init Footer
    if (typeof KTLayoutFooter !== 'undefined') {
        KTLayoutFooter.init('kt_footer');
    }


    //////////////////////////////////////////////
    // Layout Extended Partials(optional to use)//
    //////////////////////////////////////////////

    // Init Scrolltop
    if (typeof KTLayoutScrolltop !== 'undefined') {
        KTLayoutScrolltop.init('kt_scrolltop');
    }

    // Init Sticky Card
    if (typeof KTLayoutStickyCard !== 'undefined') {
        KTLayoutStickyCard.init('kt_page_sticky_card');
    }

    // Init Stretched Card
    if (typeof KTLayoutStretchedCard !== 'undefined') {
        KTLayoutStretchedCard.init('kt_page_stretched_card');
    }

    // Init Code Highlighter & Preview Blocks(used to demonstrate the theme features)
    if (typeof KTLayoutExamples !== 'undefined') {
        KTLayoutExamples.init();
    }

    // Init Demo Selection Panel
    if (typeof KTLayoutDemoPanel !== 'undefined') {
        KTLayoutDemoPanel.init('kt_demo_panel');
    }

    // Init Chat App(quick modal chat)
    if (typeof KTLayoutChat !== 'undefined') {
        KTLayoutChat.init('kt_chat_modal');
    }

    // Init Quick Actions Offcanvas Panel
    if (typeof KTLayoutQuickActions !== 'undefined') {
        KTLayoutQuickActions.init('kt_quick_actions');
    }

    // Init Quick Notifications Offcanvas Panel
    if (typeof KTLayoutQuickNotifications !== 'undefined') {
        KTLayoutQuickNotifications.init('kt_quick_notifications');
    }

    // Init Quick Offcanvas Panel
    if (typeof KTLayoutQuickPanel!== 'undefined') {
        KTLayoutQuickPanel.init('kt_quick_panel');
    }

    // Init Quick User Panel
    if (typeof KTLayoutQuickUser !== 'undefined') {
        KTLayoutQuickUser.init('kt_quick_user');
    }

    // Init Quick Search Panel
    if (typeof KTLayoutQuickSearch !== 'undefined') {
        KTLayoutQuickSearch.init('kt_quick_search');
    }

    // Init Quick Cart Panel
    if (typeof KTLayoutQuickCartPanel !== 'undefined') {
        KTLayoutQuickCartPanel.init('kt_quick_cart');
    }

    // Init Dropdown Search
    if (typeof KTLayoutSearch !== 'undefined') {
        KTLayoutSearch().init('kt_quick_search_dropdown');
    }

    // Init Offcanvas Search
    if (typeof KTLayoutSearchOffcanvas !== 'undefined') {
        KTLayoutSearchOffcanvas().init('kt_quick_search_offcanvas');
    }
});

"use strict";

var KTLayoutAsideMenu = function() {
    // Private properties
    var _body;
    var _element;
    var _menuObject;

	// Initialize
	var _init = function() {
		var menuDesktopMode = (KTUtil.attr(_element, 'data-menu-dropdown') === '1' ? 'dropdown' : 'accordion');
        var scroll;

		if (KTUtil.attr(_element, 'data-menu-scroll') === '1') {
			scroll = {
				rememberPosition: true, // remember position on page reload
				height: function() { // calculate available scrollable area height
					var height = parseInt(KTUtil.getViewPort().height);

					if (KTUtil.isBreakpointUp('lg')) {
						height = height - KTLayoutBrand.getHeight();
					}

					height = height - (parseInt(KTUtil.css(_element, 'marginBottom')) + parseInt(KTUtil.css(_element, 'marginTop')));

					return height;
				}
			};
		}

		_menuObject = new KTMenu(_element, {
			// Vertical scroll
			scroll: scroll,

			// Submenu setup
			submenu: {
				desktop: menuDesktopMode,
				tablet: 'accordion', // menu set to accordion in tablet mode
				mobile: 'accordion' // menu set to accordion in mobile mode
			},

			// Accordion setup
			accordion: {
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});
	}

    var _initHover = function() {
        // Handle Minimized Aside Hover
		if (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable')) {
			var insideTm;
			var outsideTm;

            // Handle Aside Hover Mode
			KTUtil.addEvent(_element, 'mouseenter', function(e) {
				e.preventDefault();

				if (KTUtil.isBreakpointUp('lg') === false) {
					return;
				}

				if (outsideTm) {
					clearTimeout(outsideTm);
					outsideTm = null;
				}

                if (insideTm) {
					clearTimeout(insideTm);
					insideTm = null;
				}

				insideTm = setTimeout(function() {
					if (KTUtil.hasClass(_body, 'aside-minimize') && KTUtil.isBreakpointUp('lg')) {
						// Hover class
						KTUtil.addClass(_body, 'aside-minimize-hover');

						KTLayoutAsideMenu.getMenu().scrollUpdate();
						KTLayoutAsideMenu.getMenu().scrollTop();
					}
				}, 50);
			});

			KTUtil.addEvent(KTLayoutAside.getElement(), 'mouseleave', function(e) {
				e.preventDefault();

				if (KTUtil.isBreakpointUp('lg') === false) {
					return;
				}

				if (insideTm) {
					clearTimeout(insideTm);
					insideTm = null;
				}

                if (outsideTm) {
					clearTimeout(outsideTm);
					outsideTm = null;
				}

				outsideTm = setTimeout(function() {
				    if (KTUtil.hasClass(_body, 'aside-minimize-hover') && KTUtil.isBreakpointUp('lg')) {
					    KTUtil.removeClass(_body, 'aside-minimize-hover');

						// Hover class
                        KTLayoutAsideMenu.getMenu().scrollUpdate();
						KTLayoutAsideMenu.getMenu().scrollTop();
					}
				}, 100);
			});
		}
	}

    // Public methods
	return {
		init: function(id) {
            _body = KTUtil.getBody();
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize menu
            _init();
            _initHover();
		},

		getElement: function() {
			return _element;
		},

        getMenu: function() {
			return _menuObject;
		},

        pauseDropdownHover: function(time) {
			if (_menuObject) {
				_menuObject.pauseDropdownHover(time);
			}
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && KTUtil.isMobileDevice()) {
				_menuObject.hide();
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAsideMenu;
}

"use strict";

var KTLayoutAsideToggle = function() {
    // Private properties
    var _body;
    var _element;
    var _toggleObject;

	// Initialize
	var _init = function() {
		_toggleObject = new KTToggle(_element, _body, {
			targetState: 'aside-minimize',
			toggleState: 'active'
		});

		_toggleObject.on('toggle', function(toggle) {
            // Update sticky card
            if (typeof KTLayoutStickyCard !== 'undefined') {
                KTLayoutStickyCard.update();
            }

            // Pause header menu dropdowns
            if (typeof KTLayoutHeaderMenu !== 'undefined') {
                KTLayoutHeaderMenu.pauseDropdownHover(800);
            }

            // Pause aside menu dropdowns
            if (typeof KTLayoutAsideMenu !== 'undefined') {
                KTLayoutAsideMenu.pauseDropdownHover(800);
            }

            // Remember state in cookie
			KTCookie.setCookie('kt_aside_toggle_state', toggle.getState());
			// to set default minimized left aside use this cookie value in your
			// server side code and add "kt-primary--minimize aside-minimize" classes to
			// the body tag in order to initialize the minimized left aside mode during page loading.
		});

		_toggleObject.on('beforeToggle', function(toggle) {
			if (KTUtil.hasClass(_body, 'aside-minimize') === false && KTUtil.hasClass(_body, 'aside-minimize-hover')) {
				KTUtil.removeClass(_body, 'aside-minimize-hover');
			}
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
            _body = KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
		},

        getElement: function() {
            return _element;
        },

        getToggle: function() {
			return _toggleObject;
		},

		onToggle: function(handler) {
			if (typeof _toggleObject.element !== 'undefined') {
				_toggleObject.on('toggle', handler);
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAsideToggle;
}

"use strict";

var KTLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;

    // Private functions
	// Initialize
	var _init = function() {
		var offcanvasClass = KTUtil.hasClass(_element, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside';

        // Initialize mobile aside offcanvas
		_offcanvasObject = new KTOffcanvas(_element, {
			baseClass: offcanvasClass,
			overlay: true,
			closeBy: 'kt_aside_close_btn',
			toggleBy: {
				target: 'kt_aside_mobile_toggle',
				state: 'mobile-toggle-active'
			}
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
            _body = KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        },

        isFixed: function() {
            return KTUtil.hasClass(_body, 'aside-fixed');
        },

        isMinimized: function() {
            return (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize'));
        },

        isHoverable: function() {
            return (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable'));
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAside;
}

"use strict";

var KTLayoutBrand = function() {
    // Private properties
    var _element;

    // Private functions
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = KTUtil.actualHeight(_element);
        }

        return height;
    }

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }
		},

        getElement: function() {
            return _element;
        },

        getHeight: function() {
            return _getHeight();
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutBrand;
}

"use strict";

var KTLayoutContent = function() {
    // Private properties
    var _element;

	// Private functions
	var _getHeight = function() {
		var height;

		height = KTUtil.getViewPort().height;

        if (_element) {
            height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));
        }

        height = height - KTLayoutHeader.getHeight();
        height = height - KTLayoutSubheader.getHeight();
        height = height - KTLayoutFooter.getHeight();

		return height;
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
		},

		getHeight: function() {
			return _getHeight();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutContent;
}

"use strict";

var KTLayoutFooter = function() {
    // Private properties
    var _element;

	// Private functions
	var _getHeight = function() {
		var height = 0;

        if (_element) {
            height = KTUtil.actualHeight(_element);
        }

		return height;
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
		},

		getHeight: function() {
			return _getHeight();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutFooter;
}

"use strict";

var KTLayoutHeaderMenu = function() {
    // Private properties
	var _menuElement;
    var _menuObject;
    var _offcanvasElement;
    var _offcanvasObject;

    // Private functions
	var _init = function() {
		_offcanvasObject = new KTOffcanvas(_offcanvasElement, {
			overlay: true,
			baseClass: 'header-menu-wrapper',
			closeBy: 'kt_header_menu_mobile_close_btn',
			toggleBy: {
				target: 'kt_header_mobile_toggle',
				state: 'mobile-toggle-active'
			}
		});
		
		_menuObject = new KTMenu(_menuElement, {
			submenu: {
				desktop: 'dropdown',
				tablet: 'accordion',
				mobile: 'accordion'
			},
			accordion: {
				slideSpeed: 200, // accordion toggle slide speed in milliseconds
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});

		// Close aside offcanvas panel before page reload On tablet and mobile
        _menuObject.on('linkClick', function(menu) {
            if (KTUtil.isBreakpointDown('lg')) { // Tablet and mobile mode
                _offcanvasObject.hide(); // Hide offcanvas after general link click
            }
        });
	}

    // Public methods
	return {
        init: function(menuId, offcanvasId) {
            _menuElement = KTUtil.getById(menuId);
            _offcanvasElement = KTUtil.getById(offcanvasId);

            if (!_menuElement) {
                return;
            }

            // Initialize menu
            _init();
		},

		getMenuElement: function() {
			return _menuElement;
		},

        getOffcanvasElement: function() {
			return _offcanvasElement;
		},

        getMenu: function() {
			return _menuObject;
		},

		pauseDropdownHover: function(time) {
			if (_menuObject) {
				_menuObject.pauseDropdownHover(time);
			}
		},

        getOffcanvas: function() {
			return _offcanvasObject;
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && KTUtil.isMobileDevice()) {
				_offcanvasObject.hide();
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutHeaderMenu;
}

"use strict";

var KTLayoutHeaderTopbar = function() {
    // Private properties
	var _toggleElement;
    var _toggleObject;

    // Private functions
    var _init = function() {
        _toggleObject = new KTToggle(_toggleElement, KTUtil.getBody(), {
            targetState: 'topbar-mobile-on',
            toggleState: 'active',
        });
    }

    // Public methods
	return {
		init: function(id) {
            _toggleElement = KTUtil.getById(id);

			if (!_toggleElement) {
                return;
            }

            // Initialize
            _init();
		},

        getToggleElement: function() {
            return _toggleElement;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutHeaderTopbar;
}

"use strict";

var KTLayoutHeader = function() {
    // Private properties
    var _element;
    var _elementForMobile;
    var _object;

	// Private functions
    // Get Height
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = KTUtil.actualHeight(_element) + 1;
        }

        return height;
    }

    // Get Height
    var _getHeightForMobile = function() {
        var height;

        height = KTUtil.actualHeight(_elementForMobile);

        return height;
    }

    // Public Methods
	return {
		init: function(id, idForMobile) {
            _element = KTUtil.getById(id);
            _elementForMobile = KTUtil.getById(idForMobile);

            if (!_element) {
                return;
            }
		},

        isFixed: function() {
            return KTUtil.hasClass(KTUtil.getBody(), 'header-fixed')
        },

        isFixedForMobile: function() {
            return KTUtil.hasClass(KTUtil.getBody(), 'header-mobile-fixed')
        },

        getElement: function() {
            return _element;
        },

        getElementForMobile: function() {
            return _elementForMobile;
        },

        getHeader: function() {
            return _object;
        },

        getHeight: function() {
            return _getHeight();
        },

        getHeightForMobile: function() {
            return _getHeightForMobile();
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutHeader;
}

"use strict";

var KTLayoutStickyCard = function() {
    // Private properties
	var _element;
    var _object;

	// Private functions
	var _init = function() {
		var offset = 300;

		if (typeof KTLayoutHeader !== 'undefined') {
			offset = KTLayoutHeader.getHeight();
		}

        _object = new KTCard(_element, {
			sticky: {
				offset: offset,
				zIndex: 90,
				position: {
					top: function() {
						var pos = 0;
                        var body = KTUtil.getBody();

						if (KTUtil.isBreakpointUp('lg')) {
							if (typeof KTLayoutHeader !== 'undefined' && KTLayoutHeader.isFixed()) {
								pos = pos + KTLayoutHeader.getHeight();
							}

							if (typeof KTLayoutSubheader !== 'undefined' && KTLayoutSubheader.isFixed()) {
								pos = pos + KTLayoutSubheader.getHeight();
							}
						} else {
							if (typeof KTLayoutHeader !== 'undefined' && KTLayoutHeader.isFixedForMobile()) {
								pos = pos + KTLayoutHeader.getHeightForMobile();
							}
						}

						pos = pos - 1; // remove header border width

						return pos;
					},
					left: function(card) {
						return KTUtil.offset(_element).left;
					},
					right: function(card) {
						var body = KTUtil.getBody();

						var cardWidth = parseInt(KTUtil.css(_element, 'width'));
						var bodyWidth = parseInt(KTUtil.css(body, 'width'));
						var cardOffsetLeft = KTUtil.offset(_element).left;

						return bodyWidth - cardWidth - cardOffsetLeft;
					}
				}
			}
		});

		_object.initSticky();

		KTUtil.addResizeHandler(function() {
			_object.updateSticky();
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
			_init();
		},

		update: function() {
			if (_object) {
				_object.updateSticky();
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutStickyCard;
}

"use strict";

var KTLayoutStretchedCard = function() {
    // Private properties
	var _element;

	// Private functions
	var _init = function() {
		var scroll = KTUtil.find(_element, '.card-scroll');
		var cardBody = KTUtil.find(_element, '.card-body');
		var cardHeader = KTUtil.find(_element, '.card-header');

		var height = KTLayoutContent.getHeight();

		height = height - parseInt(KTUtil.actualHeight(cardHeader));

		height = height - parseInt(KTUtil.css(_element, 'marginTop')) - parseInt(KTUtil.css(_element, 'marginBottom'));
		height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));

		height = height - parseInt(KTUtil.css(cardBody, 'paddingTop')) - parseInt(KTUtil.css(cardBody, 'paddingBottom'));
		height = height - parseInt(KTUtil.css(cardBody, 'marginTop')) - parseInt(KTUtil.css(cardBody, 'marginBottom'));

		height = height - 3;

		KTUtil.css(scroll, 'height', height + 'px');
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
			_init();

            // Re-calculate on window resize
            KTUtil.addResizeHandler(function() {
				_init();
			});
		},

		update: function() {
			_init();
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutStretchedCard;
}

"use strict";

var KTLayoutSubheader = function() {
    // Private properties
    var _element;

    // Private functions
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = KTUtil.actualHeight(_element);
        }

        return height;
    }

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }
		},

        isFixed: function() {
            return KTUtil.hasClass(KTUtil.getBody(), 'subheader-fixed');
        },

        getElement: function() {
            return _element;
        },

        getHeight: function() {
            return _getHeight();
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutSubheader;
}

"use strict";

// Class definition
var KTLayoutChat = function () {
	// Private functions
	var _init = function (element) {
		var scrollEl = KTUtil.find(element, '.scroll');
		var cardBodyEl = KTUtil.find(element, '.card-body');
		var cardHeaderEl = KTUtil.find(element, '.card-header');
		var cardFooterEl = KTUtil.find(element, '.card-footer');

		if (!scrollEl) {
			return;
		}

		// initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)
		KTUtil.scrollInit(scrollEl, {
			windowScroll: false, // allow browser scroll when the scroll reaches the end of the side
			mobileNativeScroll: true,  // enable native scroll for mobile
			desktopNativeScroll: false, // disable native scroll and use custom scroll for desktop
			resetHeightOnDestroy: true,  // reset css height on scroll feature destroyed
			handleWindowResize: true, // recalculate hight on window resize
			rememberPosition: true, // remember scroll position in cookie
			height: function() {  // calculate height
				var height;

				if (KTUtil.isBreakpointDown('lg')) { // Mobile mode
					return KTUtil.hasAttr(scrollEl, 'data-mobile-height') ? parseInt(KTUtil.attr(scrollEl, 'data-mobile-height')) : 400;
				} else if (KTUtil.isBreakpointUp('lg') && KTUtil.hasAttr(scrollEl, 'data-height')) { // Desktop Mode
					return parseInt(KTUtil.attr(scrollEl, 'data-height'));
				} else {
					height = KTLayoutContent.getHeight();

					if (scrollEl) {
						height = height - parseInt(KTUtil.css(scrollEl, 'margin-top')) - parseInt(KTUtil.css(scrollEl, 'margin-bottom'));
					}

					if (cardHeaderEl) {
						height = height - parseInt(KTUtil.css(cardHeaderEl, 'height'));
						height = height - parseInt(KTUtil.css(cardHeaderEl, 'margin-top')) - parseInt(KTUtil.css(cardHeaderEl, 'margin-bottom'));
					}

					if (cardBodyEl) {
						height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));
					}

					if (cardFooterEl) {
						height = height - parseInt(KTUtil.css(cardFooterEl, 'height'));
						height = height - parseInt(KTUtil.css(cardFooterEl, 'margin-top')) - parseInt(KTUtil.css(cardFooterEl, 'margin-bottom'));
					}
				}

				// Remove additional space
				height = height - 2;

				return height;
			}
		});

		// attach events
		KTUtil.on(element, '.card-footer textarea', 'keydown', function(e) {
			if (e.keyCode == 13) {
				_handeMessaging(element);
				e.preventDefault();

				return false;
			}
		});

		KTUtil.on(element, '.card-footer .chat-send', 'click', function(e) {
			_handeMessaging(element);
		});
	}

	var _handeMessaging = function(element) {
		var messagesEl = KTUtil.find(element, '.messages');
		var scrollEl = KTUtil.find(element, '.scroll');
        var textarea = KTUtil.find(element, 'textarea');

        if (textarea.value.length === 0 ) {
            return;
        }

		var node = document.createElement("DIV");
		KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-end');

		var html = '';
		html += '<div class="d-flex align-items-center">';
		html += '	<div>';
		html += '		<span class="text-muted font-size-sm">2 Hours</span>';
		html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>';
		html += '	</div>';
		html += '	<div class="symbol symbol-circle symbol-40 ml-3">';
		html += '		<img alt="Pic" src="assets/media/users/300_12.jpg"/>';
		html += '	</div>';
		html += '</div>';
		html += '<div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">' + textarea.value + '</div>';

		KTUtil.setHTML(node, html);
		messagesEl.appendChild(node);
		textarea.value = '';
		scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));

		var ps;
		if (ps = KTUtil.data(scrollEl).get('ps')) {
			ps.update();
		}

		setTimeout(function() {
			var node = document.createElement("DIV");
			KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-start');

			var html = '';
			html += '<div class="d-flex align-items-center">';
			html += '	<div class="symbol symbol-circle symbol-40 mr-3">';
			html += '		<img alt="Pic" src="assets/media/users/300_12.jpg"/>';
			html += '	</div>';
			html += '	<div>';
			html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>';
			html += '		<span class="text-muted font-size-sm">Just now</span>';
			html += '	</div>';
			html += '</div>';
			html += '<div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">';
			html += 'Right before vacation season we have the next Big Deal for you.';
			html += '</div>';

			KTUtil.setHTML(node, html);
			messagesEl.appendChild(node);
			textarea.value = '';
			scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));

			var ps;
			if (ps = KTUtil.data(scrollEl).get('ps')) {
				ps.update();
			}
		}, 2000);
	}

	// Public methods
	return {
		init: function(id) {
			// Init modal chat example
			_init(KTUtil.getById(id));

			// Trigger click to show popup modal chat on page load
			if (encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com') {
				setTimeout(function() {
		            if (!KTCookie.getCookie('kt_app_chat_shown')) {
		                var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

						KTCookie.setCookie('kt_app_chat_shown', 1, { expires: expires });

						if (KTUtil.getById('kt_app_chat_launch_btn')) {
							KTUtil.getById('kt_app_chat_launch_btn').click();
						}
		            }
		        }, 2000);
	        }
        },

        setup: function(element) {
            _init(element);
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutChat;
}

"use strict";

var KTLayoutDemoPanel = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_demo_panel_close',
            toggleBy: 'kt_demo_panel_toggle'
        });

        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');
        var wrapper = KTUtil.find(_element, '.offcanvas-wrapper');
        var footer = KTUtil.find(_element, '.offcanvas-footer');

        KTUtil.scrollInit(wrapper, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                if (wrapper) {
                    height = height - parseInt(KTUtil.css(wrapper, 'marginTop'));
                    height = height - parseInt(KTUtil.css(wrapper, 'marginBottom'));
                }

                if (footer) {
                    height = height - parseInt(KTUtil.actualHeight(footer));
                    height = height - parseInt(KTUtil.css(footer, 'marginTop'));
                    height = height - parseInt(KTUtil.css(footer, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });

        if (typeof offcanvas !== 'undefined' && offcanvas.length === 0) {
            offcanvas.on('hide', function() {
                var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now
                KTCookie.setCookie('kt_demo_panel_shown', 1, {expires: expires});
            });
        }
    }

    var _remind = function() {
        if (!(encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com')) {
            return;
        }

        setTimeout(function() {
            if (!KTCookie.getCookie('kt_demo_panel_shown')) {
                var expires = new Date(new Date().getTime() + 15 * 60 * 1000); // expire in 15 minutes from now
                KTCookie.setCookie('kt_demo_panel_shown', 1, { expires: expires });
                if (typeof _offcanvasObject !== 'undefined') {
                    _offcanvasObject.show();
                }
            }
        }, 4000);
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();

            // Remind
            _remind();
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutDemoPanel;
}

"use strict";

var KTLayoutExamples = function() {

    var initDefaultMode = function(element) {
        var elements = element;
        if (typeof elements === 'undefined') {
            elements = document.querySelectorAll('.example:not(.example-compact):not(.example-hover):not(.example-basic)');
        }

        if (elements && elements.length > 0 ) {
            for (var i = 0; i < elements.length; ++i) {
                var example = elements[i];
                var copy = KTUtil.find(example, '.example-copy');

                if (copy) {
                    var clipboard = new ClipboardJS(copy, {
                        target: function(trigger) {
                            var example = trigger.closest('.example');
                            var el = KTUtil.find(example, '.example-code .tab-pane.active');

                            if (!el) {
                                el = KTUtil.find(example, '.example-code');
                            }

                            return el;
                        }
                    });

                    clipboard.on('success', function(e) {
                        KTUtil.addClass(e.trigger, 'example-copied');
                        e.clearSelection();

                        setTimeout(function() {
                            KTUtil.removeClass(e.trigger, 'example-copied');
                        }, 2000);
                    });
                }
            }
        }
    }

    var initCompactMode = function(element) {
        var example,code,toggle,copy, clipboard;

        var elements = element;
        if (typeof elements === 'undefined') {
            var elements = document.querySelectorAll('.example.example-compact');
        }

        if (elements && elements.length > 0 ) {
            for (var i = 0; i < elements.length; ++i) {
                var example = elements[i];
                var toggle = KTUtil.find(example, '.example-toggle');
                var copy = KTUtil.find(example, '.example-copy');

                // Handle toggle
                KTUtil.addEvent(toggle, 'click', function() {
                    var example = this.closest('.example');
                    var code =  KTUtil.find(example, '.example-code');
                    var the = this;

                    if (KTUtil.hasClass(this, 'example-toggled')) {
                        KTUtil.slideUp(code, 300, function() {
                            KTUtil.removeClass(the, 'example-toggled');
                            KTUtil.removeClass(code, 'example-code-on');
                            KTUtil.hide(code);
                        });
                    } else {
                        KTUtil.addClass(code, 'example-code-on');
                        KTUtil.addClass(this, 'example-toggled');
                        KTUtil.slideDown(code, 300, function() {
                            KTUtil.show(code);
                        });
                    }
                });

                // Handle copy
                if (copy) {
                    var clipboard = new ClipboardJS(copy, {
                        target: function(trigger) {
                            var example = trigger.closest('.example');
                            var el = KTUtil.find(example, '.example-code .tab-pane.active');

                            if (!el) {
                                el = KTUtil.find(example, '.example-code');
                            }

                            return el;
                        }
                    });

                    clipboard.on('success', function(e) {
                        KTUtil.addClass(e.trigger, 'example-copied');
                        e.clearSelection();

                        setTimeout(function() {
                            KTUtil.removeClass(e.trigger, 'example-copied');
                        }, 2000);
                    });
                }
            }
        }
    }

    return {
        init: function(element, options) {
            initDefaultMode(element);
            initCompactMode(element);
        }
    };
}();

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTLayoutExamples;
}

"use strict";

var KTLayoutQuickActions = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_actions_close',
            toggleBy: 'kt_quick_actions_toggle'
        });

        KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutQuickActions;
}

"use strict";

var KTLayoutQuickCartPanel = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_cart_close',
            toggleBy: 'kt_quick_cart_toggle'
        });

        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');
        var wrapper = KTUtil.find(_element, '.offcanvas-wrapper');
        var footer = KTUtil.find(_element, '.offcanvas-footer');

        KTUtil.scrollInit(wrapper, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                if (wrapper) {
                    height = height - parseInt(KTUtil.css(wrapper, 'marginTop'));
                    height = height - parseInt(KTUtil.css(wrapper, 'marginBottom'));
                }

                if (footer) {
                    height = height - parseInt(KTUtil.actualHeight(footer));
                    height = height - parseInt(KTUtil.css(footer, 'marginTop'));
                    height = height - parseInt(KTUtil.css(footer, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutQuickCartPanel;
}

"use strict";

var KTLayoutQuickNotifications = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_notifications_close',
            toggleBy: 'kt_quick_notifications_toggle'
        });

        KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutQuickNotifications;
}

"use strict";

var KTLayoutQuickPanel = function() {
    // Private properties
    var _element;
    var _offcanvasObject;
    var _notificationsElement;
    var _logsElement;
    var _settingsElement;

    // Private functions
    var _getContentHeight = function() {
        var height;

        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');

        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
            height = height - parseInt(KTUtil.actualHeight(header));
            height = height - parseInt(KTUtil.css(header, 'marginTop'));
            height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
            height = height - parseInt(KTUtil.css(content, 'marginTop'));
            height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

        height = height - 2;

        return height;
    }

    var _init = function() {
        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_panel_close',
            toggleBy: 'kt_quick_panel_toggle'
        });
    }

    var _initNotifications = function() {
        KTUtil.scrollInit(_notificationsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return _getContentHeight();
            }
        });
    }

    var _initLogs = function() {
        KTUtil.scrollInit(_logsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return _getContentHeight();
            }
        });
    }

    var _initSettings = function() {
        KTUtil.scrollInit(_settingsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return _getContentHeight();
            }
        });
    }

    var _updateScrollbars = function() {
        $(_element).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            KTUtil.scrollUpdate(_notificationsElement);
            KTUtil.scrollUpdate(_logsElement);
            KTUtil.scrollUpdate(_settingsElement);
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);
            _notificationsElement = KTUtil.getById('kt_quick_panel_notifications');
            _logsElement = KTUtil.getById('kt_quick_panel_logs');
            _settingsElement = KTUtil.getById('kt_quick_panel_settings');

            _init();
            _initNotifications();
            _initLogs();
            _initSettings();

            _updateScrollbars();
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutQuickPanel;
}

"use strict";

var KTLayoutQuickSearch = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');
        var form = KTUtil.find(_element, '.quick-search-form');
        var results = KTUtil.find(_element, '.quick-search-wrapper');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_search_close',
            toggleBy: 'kt_quick_search_toggle'
        });

        KTUtil.scrollInit(results, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                if (results) {
                    height = height - parseInt(KTUtil.actualHeight(form));
                    height = height - parseInt(KTUtil.css(form, 'marginTop'));
                    height = height - parseInt(KTUtil.css(form, 'marginBottom'));

                    height = height - parseInt(KTUtil.css(results, 'marginTop'));
                    height = height - parseInt(KTUtil.css(results, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutQuickSearch;
}

"use strict";

var KTLayoutQuickUser = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_user_close',
            toggleBy: 'kt_quick_user_toggle'
        });

        KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutQuickUser;
}

"use strict";

var KTLayoutScrolltop = function() {
    // Private properties
    var _element;
    var _object;

    // Private functions
    var _init = function() {
        _object = new KTScrolltop(_element, {
          offset: 300,
          speed: 600,
        });
    }

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutScrolltop;
}

"use strict";
//
// Handle User Quick Search For Dropdown, Inline and Offcanvas Search Panels
//

var KTLayoutSearch = function() {
    // Private properties
    var _target;
    var _form;
    var _input;
    var _closeIcon;
    var _resultWrapper;
    var _resultDropdown;
    var _resultDropdownToggle;
    var _closeIconContainer;
    var _inputGroup;
    var _query = '';

    var _hasResult = false;
    var _timeout = false;
    var _isProcessing = false;
    var _requestTimeout = 200; // ajax request fire timeout in milliseconds
    var _spinnerClass = 'spinner spinner-sm spinner-primary';
    var _resultClass = 'quick-search-has-result';
    var _minLength = 2;

    // Private functions
    var _showProgress = function() {
        _isProcessing = true;
        KTUtil.addClass(_closeIconContainer, _spinnerClass);

        if (_closeIcon) {
            KTUtil.hide(_closeIcon);
        }
    }

    var _hideProgress = function() {
        _isProcessing = false;
        KTUtil.removeClass(_closeIconContainer, _spinnerClass);

        if (_closeIcon) {
            if (_input.value.length < _minLength) {
                KTUtil.hide(_closeIcon);
            } else {
                KTUtil.show(_closeIcon, 'flex');
            }
        }
    }

    var _showDropdown = function() {
        if (_resultDropdownToggle && !KTUtil.hasClass(_resultDropdown, 'show')) {
            $(_resultDropdownToggle).dropdown('toggle');
            $(_resultDropdownToggle).dropdown('update');
        }
    }

    var _hideDropdown = function() {
        if (_resultDropdownToggle && KTUtil.hasClass(_resultDropdown, 'show')) {
            $(_resultDropdownToggle).dropdown('toggle');
        }
    }

    var _processSearch = function() {
        if (_hasResult && _query === _input.value) {
            _hideProgress();
            KTUtil.addClass(_target, _resultClass);
            _showDropdown();
            KTUtil.scrollUpdate(_resultWrapper);

            return;
        }

        _query = _input.value;

        KTUtil.removeClass(_target, _resultClass);
        _showProgress();
        _hideDropdown();

        setTimeout(function() {
            $.ajax({
                url: HOST_URL + '/api/quick_search.php',
                data: {
                    query: _query
                },
                dataType: 'html',
                success: function(res) {
                    _hasResult = true;
                    _hideProgress();
                    KTUtil.addClass(_target, _resultClass);
                    KTUtil.setHTML(_resultWrapper, res);
                    _showDropdown();
                    KTUtil.scrollUpdate(_resultWrapper);
                },
                error: function(res) {
                    _hasResult = false;
                    _hideProgress();
                    KTUtil.addClass(_target, _resultClass);
                    KTUtil.setHTML(_resultWrapper, '<span class="font-weight-bold text-muted">Connection error. Please try again later..</div>');
                    _showDropdown();
                    KTUtil.scrollUpdate(_resultWrapper);
                }
            });
        }, 1000);
    }

    var _handleCancel = function(e) {
        _input.value = '';
        _query = '';
        _hasResult = false;
        KTUtil.hide(_closeIcon);
        KTUtil.removeClass(_target, _resultClass);
        _hideDropdown();
    }

    var _handleSearch = function() {
        if (_input.value.length < _minLength) {
            _hideProgress();
            _hideDropdown();

            return;
        }

        if (_isProcessing == true) {
            return;
        }

        if (_timeout) {
            clearTimeout(_timeout);
        }

        _timeout = setTimeout(function() {
            _processSearch();
        }, _requestTimeout);
    }

    // Public methods
    return {
        init: function(id) {
            _target = KTUtil.getById(id);

            if (!_target) {
                return;
            }

            _form = KTUtil.find(_target, '.quick-search-form');
            _input = KTUtil.find(_target, '.form-control');
            _closeIcon = KTUtil.find(_target, '.quick-search-close');
            _resultWrapper = KTUtil.find(_target, '.quick-search-wrapper');
            _resultDropdown = KTUtil.find(_target, '.dropdown-menu');
            _resultDropdownToggle = KTUtil.find(_target, '[data-toggle="dropdown"]');
            _inputGroup = KTUtil.find(_target, '.input-group');
            _closeIconContainer = KTUtil.find(_target, '.input-group .input-group-append');

            // Attach input keyup handler
            KTUtil.addEvent(_input, 'keyup', _handleSearch);
            KTUtil.addEvent(_input, 'focus', _handleSearch);

            // Prevent enter click
            _form.onkeypress = function(e) {
                var key = e.charCode || e.keyCode || 0;
                if (key == 13) {
                    e.preventDefault();
                }
            }

            KTUtil.addEvent(_closeIcon, 'click', _handleCancel);
        }
    };
};

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTLayoutSearch;
}

var KTLayoutSearchInline = KTLayoutSearch;
var KTLayoutSearchOffcanvas = KTLayoutSearch;

/* Select2 4.0.13
* https://select2.github.io
*
* Released under the MIT license
* https://github.com/select2/select2/blob/master/LICENSE.md
*/
;(function (factory) {
 if (typeof define === 'function' && define.amd) {
   // AMD. Register as an anonymous module.
   define(['jquery'], factory);
 } else if (typeof module === 'object' && module.exports) {
   // Node/CommonJS
   module.exports = function (root, jQuery) {
     if (jQuery === undefined) {
       // require('jQuery') returns a factory that requires window to
       // build a jQuery instance, we normalize how we use modules
       // that require this pattern but the window provided is a noop
       // if it's defined (how jquery works)
       if (typeof window !== 'undefined') {
         jQuery = require('jquery');
       }
       else {
         jQuery = require('jquery')(root);
       }
     }
     factory(jQuery);
     return jQuery;
   };
 } else {
   // Browser globals
   factory(jQuery);
 }
} (function (jQuery) {
 // This is needed so we can catch the AMD loader configuration and use it
 // The inner file should be wrapped (by `banner.start.js`) in a function that
 // returns the AMD loader references.
 var S2 =(function () {
 // Restore the Select2 AMD loader so it can be used
 // Needed mostly in the language files, where the loader is not inserted
 if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
   var S2 = jQuery.fn.select2.amd;
 }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
* @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
* Released under MIT license, http://github.com/requirejs/almond/LICENSE
*/
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
   var main, req, makeMap, handlers,
       defined = {},
       waiting = {},
       config = {},
       defining = {},
       hasOwn = Object.prototype.hasOwnProperty,
       aps = [].slice,
       jsSuffixRegExp = /\.js$/;

   function hasProp(obj, prop) {
       return hasOwn.call(obj, prop);
   }

   /**
    * Given a relative module name, like ./something, normalize it to
    * a real name that can be mapped to a path.
    * @param {String} name the relative name
    * @param {String} baseName a real name that the name arg is relative
    * to.
    * @returns {String} normalized name
    */
   function normalize(name, baseName) {
       var nameParts, nameSegment, mapValue, foundMap, lastIndex,
           foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
           baseParts = baseName && baseName.split("/"),
           map = config.map,
           starMap = (map && map['*']) || {};

       //Adjust any relative paths.
       if (name) {
           name = name.split('/');
           lastIndex = name.length - 1;

           // If wanting node ID compatibility, strip .js from end
           // of IDs. Have to do this here, and not in nameToUrl
           // because node allows either .js or non .js to map
           // to same file.
           if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
               name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
           }

           // Starts with a '.' so need the baseName
           if (name[0].charAt(0) === '.' && baseParts) {
               //Convert baseName to array, and lop off the last part,
               //so that . matches that 'directory' and not name of the baseName's
               //module. For instance, baseName of 'one/two/three', maps to
               //'one/two/three.js', but we want the directory, 'one/two' for
               //this normalization.
               normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
               name = normalizedBaseParts.concat(name);
           }

           //start trimDots
           for (i = 0; i < name.length; i++) {
               part = name[i];
               if (part === '.') {
                   name.splice(i, 1);
                   i -= 1;
               } else if (part === '..') {
                   // If at the start, or previous value is still ..,
                   // keep them so that when converted to a path it may
                   // still work when converted to a path, even though
                   // as an ID it is less than ideal. In larger point
                   // releases, may be better to just kick out an error.
                   if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                       continue;
                   } else if (i > 0) {
                       name.splice(i - 1, 2);
                       i -= 2;
                   }
               }
           }
           //end trimDots

           name = name.join('/');
       }

       //Apply map config if available.
       if ((baseParts || starMap) && map) {
           nameParts = name.split('/');

           for (i = nameParts.length; i > 0; i -= 1) {
               nameSegment = nameParts.slice(0, i).join("/");

               if (baseParts) {
                   //Find the longest baseName segment match in the config.
                   //So, do joins on the biggest to smallest lengths of baseParts.
                   for (j = baseParts.length; j > 0; j -= 1) {
                       mapValue = map[baseParts.slice(0, j).join('/')];

                       //baseName segment has  config, find if it has one for
                       //this name.
                       if (mapValue) {
                           mapValue = mapValue[nameSegment];
                           if (mapValue) {
                               //Match, update name to the new value.
                               foundMap = mapValue;
                               foundI = i;
                               break;
                           }
                       }
                   }
               }

               if (foundMap) {
                   break;
               }

               //Check for a star map match, but just hold on to it,
               //if there is a shorter segment match later in a matching
               //config, then favor over this star map.
               if (!foundStarMap && starMap && starMap[nameSegment]) {
                   foundStarMap = starMap[nameSegment];
                   starI = i;
               }
           }

           if (!foundMap && foundStarMap) {
               foundMap = foundStarMap;
               foundI = starI;
           }

           if (foundMap) {
               nameParts.splice(0, foundI, foundMap);
               name = nameParts.join('/');
           }
       }

       return name;
   }

   function makeRequire(relName, forceSync) {
       return function () {
           //A version of a require function that passes a moduleName
           //value for items that may need to
           //look up paths relative to the moduleName
           var args = aps.call(arguments, 0);

           //If first arg is not require('string'), and there is only
           //one arg, it is the array form without a callback. Insert
           //a null so that the following concat is correct.
           if (typeof args[0] !== 'string' && args.length === 1) {
               args.push(null);
           }
           return req.apply(undef, args.concat([relName, forceSync]));
       };
   }

   function makeNormalize(relName) {
       return function (name) {
           return normalize(name, relName);
       };
   }

   function makeLoad(depName) {
       return function (value) {
           defined[depName] = value;
       };
   }

   function callDep(name) {
       if (hasProp(waiting, name)) {
           var args = waiting[name];
           delete waiting[name];
           defining[name] = true;
           main.apply(undef, args);
       }

       if (!hasProp(defined, name) && !hasProp(defining, name)) {
           throw new Error('No ' + name);
       }
       return defined[name];
   }

   //Turns a plugin!resource to [plugin, resource]
   //with the plugin being undefined if the name
   //did not have a plugin prefix.
   function splitPrefix(name) {
       var prefix,
           index = name ? name.indexOf('!') : -1;
       if (index > -1) {
           prefix = name.substring(0, index);
           name = name.substring(index + 1, name.length);
       }
       return [prefix, name];
   }

   //Creates a parts array for a relName where first part is plugin ID,
   //second part is resource ID. Assumes relName has already been normalized.
   function makeRelParts(relName) {
       return relName ? splitPrefix(relName) : [];
   }

   /**
    * Makes a name map, normalizing the name, and using a plugin
    * for normalization if necessary. Grabs a ref to plugin
    * too, as an optimization.
    */
   makeMap = function (name, relParts) {
       var plugin,
           parts = splitPrefix(name),
           prefix = parts[0],
           relResourceName = relParts[1];

       name = parts[1];

       if (prefix) {
           prefix = normalize(prefix, relResourceName);
           plugin = callDep(prefix);
       }

       //Normalize according
       if (prefix) {
           if (plugin && plugin.normalize) {
               name = plugin.normalize(name, makeNormalize(relResourceName));
           } else {
               name = normalize(name, relResourceName);
           }
       } else {
           name = normalize(name, relResourceName);
           parts = splitPrefix(name);
           prefix = parts[0];
           name = parts[1];
           if (prefix) {
               plugin = callDep(prefix);
           }
       }

       //Using ridiculous property names for space reasons
       return {
           f: prefix ? prefix + '!' + name : name, //fullName
           n: name,
           pr: prefix,
           p: plugin
       };
   };

   function makeConfig(name) {
       return function () {
           return (config && config.config && config.config[name]) || {};
       };
   }

   handlers = {
       require: function (name) {
           return makeRequire(name);
       },
       exports: function (name) {
           var e = defined[name];
           if (typeof e !== 'undefined') {
               return e;
           } else {
               return (defined[name] = {});
           }
       },
       module: function (name) {
           return {
               id: name,
               uri: '',
               exports: defined[name],
               config: makeConfig(name)
           };
       }
   };

   main = function (name, deps, callback, relName) {
       var cjsModule, depName, ret, map, i, relParts,
           args = [],
           callbackType = typeof callback,
           usingExports;

       //Use name if no relName
       relName = relName || name;
       relParts = makeRelParts(relName);

       //Call the callback to define the module, if necessary.
       if (callbackType === 'undefined' || callbackType === 'function') {
           //Pull out the defined dependencies and pass the ordered
           //values to the callback.
           //Default to [require, exports, module] if no deps
           deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
           for (i = 0; i < deps.length; i += 1) {
               map = makeMap(deps[i], relParts);
               depName = map.f;

               //Fast path CommonJS standard dependencies.
               if (depName === "require") {
                   args[i] = handlers.require(name);
               } else if (depName === "exports") {
                   //CommonJS module spec 1.1
                   args[i] = handlers.exports(name);
                   usingExports = true;
               } else if (depName === "module") {
                   //CommonJS module spec 1.1
                   cjsModule = args[i] = handlers.module(name);
               } else if (hasProp(defined, depName) ||
                          hasProp(waiting, depName) ||
                          hasProp(defining, depName)) {
                   args[i] = callDep(depName);
               } else if (map.p) {
                   map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                   args[i] = defined[depName];
               } else {
                   throw new Error(name + ' missing ' + depName);
               }
           }

           ret = callback ? callback.apply(defined[name], args) : undefined;

           if (name) {
               //If setting exports via "module" is in play,
               //favor that over return value and exports. After that,
               //favor a non-undefined return value over exports use.
               if (cjsModule && cjsModule.exports !== undef &&
                       cjsModule.exports !== defined[name]) {
                   defined[name] = cjsModule.exports;
               } else if (ret !== undef || !usingExports) {
                   //Use the return value from the function.
                   defined[name] = ret;
               }
           }
       } else if (name) {
           //May just be an object definition for the module. Only
           //worry about defining if have a module name.
           defined[name] = callback;
       }
   };

   requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
       if (typeof deps === "string") {
           if (handlers[deps]) {
               //callback in this case is really relName
               return handlers[deps](callback);
           }
           //Just return the module wanted. In this scenario, the
           //deps arg is the module name, and second arg (if passed)
           //is just the relName.
           //Normalize module name, if it contains . or ..
           return callDep(makeMap(deps, makeRelParts(callback)).f);
       } else if (!deps.splice) {
           //deps is a config object, not an array.
           config = deps;
           if (config.deps) {
               req(config.deps, config.callback);
           }
           if (!callback) {
               return;
           }

           if (callback.splice) {
               //callback is an array, which means it is a dependency list.
               //Adjust args if there are dependencies
               deps = callback;
               callback = relName;
               relName = null;
           } else {
               deps = undef;
           }
       }

       //Support require(['a'])
       callback = callback || function () {};

       //If relName is a function, it is an errback handler,
       //so remove it.
       if (typeof relName === 'function') {
           relName = forceSync;
           forceSync = alt;
       }

       //Simulate async callback;
       if (forceSync) {
           main(undef, deps, callback, relName);
       } else {
           //Using a non-zero value because of concern for what old browsers
           //do, and latest browsers "upgrade" to 4 if lower value is used:
           //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
           //If want a value immediately, use require('id') instead -- something
           //that works in almond on the global level, but not guaranteed and
           //unlikely to work in other AMD implementations.
           setTimeout(function () {
               main(undef, deps, callback, relName);
           }, 4);
       }

       return req;
   };

   /**
    * Just drops the config on the floor, but returns req in case
    * the config return value is used.
    */
   req.config = function (cfg) {
       return req(cfg);
   };

   /**
    * Expose module registry for debugging and tooling
    */
   requirejs._defined = defined;

   define = function (name, deps, callback) {
       if (typeof name !== 'string') {
           throw new Error('See almond README: incorrect module build, no module name');
       }

       //This module may not have dependencies
       if (!deps.splice) {
           //deps is not an array, so probably means
           //an object literal or factory function for
           //the value. Adjust args.
           callback = deps;
           deps = [];
       }

       if (!hasProp(defined, name) && !hasProp(waiting, name)) {
           waiting[name] = [name, deps, callback];
       }
   };

   define.amd = {
       jQuery: true
   };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
 var _$ = jQuery || $;

 if (_$ == null && console && console.error) {
   console.error(
     'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
     'found. Make sure that you are including jQuery before Select2 on your ' +
     'web page.'
   );
 }

 return _$;
});

S2.define('select2/utils',[
 'jquery'
], function ($) {
 var Utils = {};

 Utils.Extend = function (ChildClass, SuperClass) {
   var __hasProp = {}.hasOwnProperty;

   function BaseConstructor () {
     this.constructor = ChildClass;
   }

   for (var key in SuperClass) {
     if (__hasProp.call(SuperClass, key)) {
       ChildClass[key] = SuperClass[key];
     }
   }

   BaseConstructor.prototype = SuperClass.prototype;
   ChildClass.prototype = new BaseConstructor();
   ChildClass.__super__ = SuperClass.prototype;

   return ChildClass;
 };

 function getMethods (theClass) {
   var proto = theClass.prototype;

   var methods = [];

   for (var methodName in proto) {
     var m = proto[methodName];

     if (typeof m !== 'function') {
       continue;
     }

     if (methodName === 'constructor') {
       continue;
     }

     methods.push(methodName);
   }

   return methods;
 }

 Utils.Decorate = function (SuperClass, DecoratorClass) {
   var decoratedMethods = getMethods(DecoratorClass);
   var superMethods = getMethods(SuperClass);

   function DecoratedClass () {
     var unshift = Array.prototype.unshift;

     var argCount = DecoratorClass.prototype.constructor.length;

     var calledConstructor = SuperClass.prototype.constructor;

     if (argCount > 0) {
       unshift.call(arguments, SuperClass.prototype.constructor);

       calledConstructor = DecoratorClass.prototype.constructor;
     }

     calledConstructor.apply(this, arguments);
   }

   DecoratorClass.displayName = SuperClass.displayName;

   function ctr () {
     this.constructor = DecoratedClass;
   }

   DecoratedClass.prototype = new ctr();

   for (var m = 0; m < superMethods.length; m++) {
     var superMethod = superMethods[m];

     DecoratedClass.prototype[superMethod] =
       SuperClass.prototype[superMethod];
   }

   var calledMethod = function (methodName) {
     // Stub out the original method if it's not decorating an actual method
     var originalMethod = function () {};

     if (methodName in DecoratedClass.prototype) {
       originalMethod = DecoratedClass.prototype[methodName];
     }

     var decoratedMethod = DecoratorClass.prototype[methodName];

     return function () {
       var unshift = Array.prototype.unshift;

       unshift.call(arguments, originalMethod);

       return decoratedMethod.apply(this, arguments);
     };
   };

   for (var d = 0; d < decoratedMethods.length; d++) {
     var decoratedMethod = decoratedMethods[d];

     DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
   }

   return DecoratedClass;
 };

 var Observable = function () {
   this.listeners = {};
 };

 Observable.prototype.on = function (event, callback) {
   this.listeners = this.listeners || {};

   if (event in this.listeners) {
     this.listeners[event].push(callback);
   } else {
     this.listeners[event] = [callback];
   }
 };

 Observable.prototype.trigger = function (event) {
   var slice = Array.prototype.slice;
   var params = slice.call(arguments, 1);

   this.listeners = this.listeners || {};

   // Params should always come in as an array
   if (params == null) {
     params = [];
   }

   // If there are no arguments to the event, use a temporary object
   if (params.length === 0) {
     params.push({});
   }

   // Set the `_type` of the first object to the event
   params[0]._type = event;

   if (event in this.listeners) {
     this.invoke(this.listeners[event], slice.call(arguments, 1));
   }

   if ('*' in this.listeners) {
     this.invoke(this.listeners['*'], arguments);
   }
 };

 Observable.prototype.invoke = function (listeners, params) {
   for (var i = 0, len = listeners.length; i < len; i++) {
     listeners[i].apply(this, params);
   }
 };

 Utils.Observable = Observable;

 Utils.generateChars = function (length) {
   var chars = '';

   for (var i = 0; i < length; i++) {
     var randomChar = Math.floor(Math.random() * 36);
     chars += randomChar.toString(36);
   }

   return chars;
 };

 Utils.bind = function (func, context) {
   return function () {
     func.apply(context, arguments);
   };
 };

 Utils._convertData = function (data) {
   for (var originalKey in data) {
     var keys = originalKey.split('-');

     var dataLevel = data;

     if (keys.length === 1) {
       continue;
     }

     for (var k = 0; k < keys.length; k++) {
       var key = keys[k];

       // Lowercase the first letter
       // By default, dash-separated becomes camelCase
       key = key.substring(0, 1).toLowerCase() + key.substring(1);

       if (!(key in dataLevel)) {
         dataLevel[key] = {};
       }

       if (k == keys.length - 1) {
         dataLevel[key] = data[originalKey];
       }

       dataLevel = dataLevel[key];
     }

     delete data[originalKey];
   }

   return data;
 };

 Utils.hasScroll = function (index, el) {
   // Adapted from the function created by @ShadowScripter
   // and adapted by @BillBarry on the Stack Exchange Code Review website.
   // The original code can be found at
   // http://codereview.stackexchange.com/q/13338
   // and was designed to be used with the Sizzle selector engine.

   var $el = $(el);
   var overflowX = el.style.overflowX;
   var overflowY = el.style.overflowY;

   //Check both x and y declarations
   if (overflowX === overflowY &&
       (overflowY === 'hidden' || overflowY === 'visible')) {
     return false;
   }

   if (overflowX === 'scroll' || overflowY === 'scroll') {
     return true;
   }

   return ($el.innerHeight() < el.scrollHeight ||
     $el.innerWidth() < el.scrollWidth);
 };

 Utils.escapeMarkup = function (markup) {
   var replaceMap = {
     '\\': '&#92;',
     '&': '&amp;',
     '<': '&lt;',
     '>': '&gt;',
     '"': '&quot;',
     '\'': '&#39;',
     '/': '&#47;'
   };

   // Do not try to escape the markup if it's not a string
   if (typeof markup !== 'string') {
     return markup;
   }

   return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
     return replaceMap[match];
   });
 };

 // Append an array of jQuery nodes to a given element.
 Utils.appendMany = function ($element, $nodes) {
   // jQuery 1.7.x does not support $.fn.append() with an array
   // Fall back to a jQuery object collection using $.fn.add()
   if ($.fn.jquery.substr(0, 3) === '1.7') {
     var $jqNodes = $();

     $.map($nodes, function (node) {
       $jqNodes = $jqNodes.add(node);
     });

     $nodes = $jqNodes;
   }

   $element.append($nodes);
 };

 // Cache objects in Utils.__cache instead of $.data (see #4346)
 Utils.__cache = {};

 var id = 0;
 Utils.GetUniqueElementId = function (element) {
   // Get a unique element Id. If element has no id,
   // creates a new unique number, stores it in the id
   // attribute and returns the new id.
   // If an id already exists, it simply returns it.

   var select2Id = element.getAttribute('data-select2-id');
   if (select2Id == null) {
     // If element has id, use it.
     if (element.id) {
       select2Id = element.id;
       element.setAttribute('data-select2-id', select2Id);
     } else {
       element.setAttribute('data-select2-id', ++id);
       select2Id = id.toString();
     }
   }
   return select2Id;
 };

 Utils.StoreData = function (element, name, value) {
   // Stores an item in the cache for a specified element.
   // name is the cache key.
   var id = Utils.GetUniqueElementId(element);
   if (!Utils.__cache[id]) {
     Utils.__cache[id] = {};
   }

   Utils.__cache[id][name] = value;
 };

 Utils.GetData = function (element, name) {
   // Retrieves a value from the cache by its key (name)
   // name is optional. If no name specified, return
   // all cache items for the specified element.
   // and for a specified element.
   var id = Utils.GetUniqueElementId(element);
   if (name) {
     if (Utils.__cache[id]) {
       if (Utils.__cache[id][name] != null) {
         return Utils.__cache[id][name];
       }
       return $(element).data(name); // Fallback to HTML5 data attribs.
     }
     return $(element).data(name); // Fallback to HTML5 data attribs.
   } else {
     return Utils.__cache[id];
   }
 };

 Utils.RemoveData = function (element) {
   // Removes all cached items for a specified element.
   var id = Utils.GetUniqueElementId(element);
   if (Utils.__cache[id] != null) {
     delete Utils.__cache[id];
   }

   element.removeAttribute('data-select2-id');
 };

 return Utils;
});

S2.define('select2/results',[
 'jquery',
 './utils'
], function ($, Utils) {
 function Results ($element, options, dataAdapter) {
   this.$element = $element;
   this.data = dataAdapter;
   this.options = options;

   Results.__super__.constructor.call(this);
 }

 Utils.Extend(Results, Utils.Observable);

 Results.prototype.render = function () {
   var $results = $(
     '<ul class="select2-results__options" role="listbox"></ul>'
   );

   if (this.options.get('multiple')) {
     $results.attr('aria-multiselectable', 'true');
   }

   this.$results = $results;

   return $results;
 };

 Results.prototype.clear = function () {
   this.$results.empty();
 };

 Results.prototype.displayMessage = function (params) {
   var escapeMarkup = this.options.get('escapeMarkup');

   this.clear();
   this.hideLoading();

   var $message = $(
     '<li role="alert" aria-live="assertive"' +
     ' class="select2-results__option"></li>'
   );

   var message = this.options.get('translations').get(params.message);

   $message.append(
     escapeMarkup(
       message(params.args)
     )
   );

   $message[0].className += ' select2-results__message';

   this.$results.append($message);
 };

 Results.prototype.hideMessages = function () {
   this.$results.find('.select2-results__message').remove();
 };

 Results.prototype.append = function (data) {
   this.hideLoading();

   var $options = [];

   if (data.results == null || data.results.length === 0) {
     if (this.$results.children().length === 0) {
       this.trigger('results:message', {
         message: 'noResults'
       });
     }

     return;
   }

   data.results = this.sort(data.results);

   for (var d = 0; d < data.results.length; d++) {
     var item = data.results[d];

     var $option = this.option(item);

     $options.push($option);
   }

   this.$results.append($options);
 };

 Results.prototype.position = function ($results, $dropdown) {
   var $resultsContainer = $dropdown.find('.select2-results');
   $resultsContainer.append($results);
 };

 Results.prototype.sort = function (data) {
   var sorter = this.options.get('sorter');

   return sorter(data);
 };

 Results.prototype.highlightFirstItem = function () {
   var $options = this.$results
     .find('.select2-results__option[aria-selected]');

   var $selected = $options.filter('[aria-selected=true]');

   // Check if there are any selected options
   if ($selected.length > 0) {
     // If there are selected options, highlight the first
     $selected.first().trigger('mouseenter');
   } else {
     // If there are no selected options, highlight the first option
     // in the dropdown
     $options.first().trigger('mouseenter');
   }

   this.ensureHighlightVisible();
 };

 Results.prototype.setClasses = function () {
   var self = this;

   this.data.current(function (selected) {
     var selectedIds = $.map(selected, function (s) {
       return s.id.toString();
     });

     var $options = self.$results
       .find('.select2-results__option[aria-selected]');

     $options.each(function () {
       var $option = $(this);

       var item = Utils.GetData(this, 'data');

       // id needs to be converted to a string when comparing
       var id = '' + item.id;

       if ((item.element != null && item.element.selected) ||
           (item.element == null && $.inArray(id, selectedIds) > -1)) {
         $option.attr('aria-selected', 'true');
       } else {
         $option.attr('aria-selected', 'false');
       }
     });

   });
 };

 Results.prototype.showLoading = function (params) {
   this.hideLoading();

   var loadingMore = this.options.get('translations').get('searching');

   var loading = {
     disabled: true,
     loading: true,
     text: loadingMore(params)
   };
   var $loading = this.option(loading);
   $loading.className += ' loading-results';

   this.$results.prepend($loading);
 };

 Results.prototype.hideLoading = function () {
   this.$results.find('.loading-results').remove();
 };

 Results.prototype.option = function (data) {
   var option = document.createElement('li');
   option.className = 'select2-results__option';

   var attrs = {
     'role': 'option',
     'aria-selected': 'false'
   };

   var matches = window.Element.prototype.matches ||
     window.Element.prototype.msMatchesSelector ||
     window.Element.prototype.webkitMatchesSelector;

   if ((data.element != null && matches.call(data.element, ':disabled')) ||
       (data.element == null && data.disabled)) {
     delete attrs['aria-selected'];
     attrs['aria-disabled'] = 'true';
   }

   if (data.id == null) {
     delete attrs['aria-selected'];
   }

   if (data._resultId != null) {
     option.id = data._resultId;
   }

   if (data.title) {
     option.title = data.title;
   }

   if (data.children) {
     attrs.role = 'group';
     attrs['aria-label'] = data.text;
     delete attrs['aria-selected'];
   }

   for (var attr in attrs) {
     var val = attrs[attr];

     option.setAttribute(attr, val);
   }

   if (data.children) {
     var $option = $(option);

     var label = document.createElement('strong');
     label.className = 'select2-results__group';

     var $label = $(label);
     this.template(data, label);

     var $children = [];

     for (var c = 0; c < data.children.length; c++) {
       var child = data.children[c];

       var $child = this.option(child);

       $children.push($child);
     }

     var $childrenContainer = $('<ul></ul>', {
       'class': 'select2-results__options select2-results__options--nested'
     });

     $childrenContainer.append($children);

     $option.append(label);
     $option.append($childrenContainer);
   } else {
     this.template(data, option);
   }

   Utils.StoreData(option, 'data', data);

   return option;
 };

 Results.prototype.bind = function (container, $container) {
   var self = this;

   var id = container.id + '-results';

   this.$results.attr('id', id);

   container.on('results:all', function (params) {
     self.clear();
     self.append(params.data);

     if (container.isOpen()) {
       self.setClasses();
       self.highlightFirstItem();
     }
   });

   container.on('results:append', function (params) {
     self.append(params.data);

     if (container.isOpen()) {
       self.setClasses();
     }
   });

   container.on('query', function (params) {
     self.hideMessages();
     self.showLoading(params);
   });

   container.on('select', function () {
     if (!container.isOpen()) {
       return;
     }

     self.setClasses();

     if (self.options.get('scrollAfterSelect')) {
       self.highlightFirstItem();
     }
   });

   container.on('unselect', function () {
     if (!container.isOpen()) {
       return;
     }

     self.setClasses();

     if (self.options.get('scrollAfterSelect')) {
       self.highlightFirstItem();
     }
   });

   container.on('open', function () {
     // When the dropdown is open, aria-expended="true"
     self.$results.attr('aria-expanded', 'true');
     self.$results.attr('aria-hidden', 'false');

     self.setClasses();
     self.ensureHighlightVisible();
   });

   container.on('close', function () {
     // When the dropdown is closed, aria-expended="false"
     self.$results.attr('aria-expanded', 'false');
     self.$results.attr('aria-hidden', 'true');
     self.$results.removeAttr('aria-activedescendant');
   });

   container.on('results:toggle', function () {
     var $highlighted = self.getHighlightedResults();

     if ($highlighted.length === 0) {
       return;
     }

     $highlighted.trigger('mouseup');
   });

   container.on('results:select', function () {
     var $highlighted = self.getHighlightedResults();

     if ($highlighted.length === 0) {
       return;
     }

     var data = Utils.GetData($highlighted[0], 'data');

     if ($highlighted.attr('aria-selected') == 'true') {
       self.trigger('close', {});
     } else {
       self.trigger('select', {
         data: data
       });
     }
   });

   container.on('results:previous', function () {
     var $highlighted = self.getHighlightedResults();

     var $options = self.$results.find('[aria-selected]');

     var currentIndex = $options.index($highlighted);

     // If we are already at the top, don't move further
     // If no options, currentIndex will be -1
     if (currentIndex <= 0) {
       return;
     }

     var nextIndex = currentIndex - 1;

     // If none are highlighted, highlight the first
     if ($highlighted.length === 0) {
       nextIndex = 0;
     }

     var $next = $options.eq(nextIndex);

     $next.trigger('mouseenter');

     var currentOffset = self.$results.offset().top;
     var nextTop = $next.offset().top;
     var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

     if (nextIndex === 0) {
       self.$results.scrollTop(0);
     } else if (nextTop - currentOffset < 0) {
       self.$results.scrollTop(nextOffset);
     }
   });

   container.on('results:next', function () {
     var $highlighted = self.getHighlightedResults();

     var $options = self.$results.find('[aria-selected]');

     var currentIndex = $options.index($highlighted);

     var nextIndex = currentIndex + 1;

     // If we are at the last option, stay there
     if (nextIndex >= $options.length) {
       return;
     }

     var $next = $options.eq(nextIndex);

     $next.trigger('mouseenter');

     var currentOffset = self.$results.offset().top +
       self.$results.outerHeight(false);
     var nextBottom = $next.offset().top + $next.outerHeight(false);
     var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

     if (nextIndex === 0) {
       self.$results.scrollTop(0);
     } else if (nextBottom > currentOffset) {
       self.$results.scrollTop(nextOffset);
     }
   });

   container.on('results:focus', function (params) {
     params.element.addClass('select2-results__option--highlighted');
   });

   container.on('results:message', function (params) {
     self.displayMessage(params);
   });

   if ($.fn.mousewheel) {
     this.$results.on('mousewheel', function (e) {
       var top = self.$results.scrollTop();

       var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

       var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
       var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

       if (isAtTop) {
         self.$results.scrollTop(0);

         e.preventDefault();
         e.stopPropagation();
       } else if (isAtBottom) {
         self.$results.scrollTop(
           self.$results.get(0).scrollHeight - self.$results.height()
         );

         e.preventDefault();
         e.stopPropagation();
       }
     });
   }

   this.$results.on('mouseup', '.select2-results__option[aria-selected]',
     function (evt) {
     var $this = $(this);

     var data = Utils.GetData(this, 'data');

     if ($this.attr('aria-selected') === 'true') {
       if (self.options.get('multiple')) {
         self.trigger('unselect', {
           originalEvent: evt,
           data: data
         });
       } else {
         self.trigger('close', {});
       }

       return;
     }

     self.trigger('select', {
       originalEvent: evt,
       data: data
     });
   });

   this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
     function (evt) {
     var data = Utils.GetData(this, 'data');

     self.getHighlightedResults()
         .removeClass('select2-results__option--highlighted');

     self.trigger('results:focus', {
       data: data,
       element: $(this)
     });
   });
 };

 Results.prototype.getHighlightedResults = function () {
   var $highlighted = this.$results
   .find('.select2-results__option--highlighted');

   return $highlighted;
 };

 Results.prototype.destroy = function () {
   this.$results.remove();
 };

 Results.prototype.ensureHighlightVisible = function () {
   var $highlighted = this.getHighlightedResults();

   if ($highlighted.length === 0) {
     return;
   }

   var $options = this.$results.find('[aria-selected]');

   var currentIndex = $options.index($highlighted);

   var currentOffset = this.$results.offset().top;
   var nextTop = $highlighted.offset().top;
   var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

   var offsetDelta = nextTop - currentOffset;
   nextOffset -= $highlighted.outerHeight(false) * 2;

   if (currentIndex <= 2) {
     this.$results.scrollTop(0);
   } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
     this.$results.scrollTop(nextOffset);
   }
 };

 Results.prototype.template = function (result, container) {
   var template = this.options.get('templateResult');
   var escapeMarkup = this.options.get('escapeMarkup');

   var content = template(result, container);

   if (content == null) {
     container.style.display = 'none';
   } else if (typeof content === 'string') {
     container.innerHTML = escapeMarkup(content);
   } else {
     $(container).append(content);
   }
 };

 return Results;
});

S2.define('select2/keys',[

], function () {
 var KEYS = {
   BACKSPACE: 8,
   TAB: 9,
   ENTER: 13,
   SHIFT: 16,
   CTRL: 17,
   ALT: 18,
   ESC: 27,
   SPACE: 32,
   PAGE_UP: 33,
   PAGE_DOWN: 34,
   END: 35,
   HOME: 36,
   LEFT: 37,
   UP: 38,
   RIGHT: 39,
   DOWN: 40,
   DELETE: 46
 };

 return KEYS;
});

S2.define('select2/selection/base',[
 'jquery',
 '../utils',
 '../keys'
], function ($, Utils, KEYS) {
 function BaseSelection ($element, options) {
   this.$element = $element;
   this.options = options;

   BaseSelection.__super__.constructor.call(this);
 }

 Utils.Extend(BaseSelection, Utils.Observable);

 BaseSelection.prototype.render = function () {
   var $selection = $(
     '<span class="select2-selection" role="combobox" ' +
     ' aria-haspopup="true" aria-expanded="false">' +
     '</span>'
   );

   this._tabindex = 0;

   if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
     this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
   } else if (this.$element.attr('tabindex') != null) {
     this._tabindex = this.$element.attr('tabindex');
   }

   $selection.attr('title', this.$element.attr('title'));
   $selection.attr('tabindex', this._tabindex);
   $selection.attr('aria-disabled', 'false');

   this.$selection = $selection;

   return $selection;
 };

 BaseSelection.prototype.bind = function (container, $container) {
   var self = this;

   var resultsId = container.id + '-results';

   this.container = container;

   this.$selection.on('focus', function (evt) {
     self.trigger('focus', evt);
   });

   this.$selection.on('blur', function (evt) {
     self._handleBlur(evt);
   });

   this.$selection.on('keydown', function (evt) {
     self.trigger('keypress', evt);

     if (evt.which === KEYS.SPACE) {
       evt.preventDefault();
     }
   });

   container.on('results:focus', function (params) {
     self.$selection.attr('aria-activedescendant', params.data._resultId);
   });

   container.on('selection:update', function (params) {
     self.update(params.data);
   });

   container.on('open', function () {
     // When the dropdown is open, aria-expanded="true"
     self.$selection.attr('aria-expanded', 'true');
     self.$selection.attr('aria-owns', resultsId);

     self._attachCloseHandler(container);
   });

   container.on('close', function () {
     // When the dropdown is closed, aria-expanded="false"
     self.$selection.attr('aria-expanded', 'false');
     self.$selection.removeAttr('aria-activedescendant');
     self.$selection.removeAttr('aria-owns');

     self.$selection.trigger('focus');

     self._detachCloseHandler(container);
   });

   container.on('enable', function () {
     self.$selection.attr('tabindex', self._tabindex);
     self.$selection.attr('aria-disabled', 'false');
   });

   container.on('disable', function () {
     self.$selection.attr('tabindex', '-1');
     self.$selection.attr('aria-disabled', 'true');
   });
 };

 BaseSelection.prototype._handleBlur = function (evt) {
   var self = this;

   // This needs to be delayed as the active element is the body when the tab
   // key is pressed, possibly along with others.
   window.setTimeout(function () {
     // Don't trigger `blur` if the focus is still in the selection
     if (
       (document.activeElement == self.$selection[0]) ||
       ($.contains(self.$selection[0], document.activeElement))
     ) {
       return;
     }

     self.trigger('blur', evt);
   }, 1);
 };

 BaseSelection.prototype._attachCloseHandler = function (container) {

   $(document.body).on('mousedown.select2.' + container.id, function (e) {
     var $target = $(e.target);

     var $select = $target.closest('.select2');

     var $all = $('.select2.select2-container--open');

     $all.each(function () {
       if (this == $select[0]) {
         return;
       }

       var $element = Utils.GetData(this, 'element');

       $element.select2('close');
     });
   });
 };

 BaseSelection.prototype._detachCloseHandler = function (container) {
   $(document.body).off('mousedown.select2.' + container.id);
 };

 BaseSelection.prototype.position = function ($selection, $container) {
   var $selectionContainer = $container.find('.selection');
   $selectionContainer.append($selection);
 };

 BaseSelection.prototype.destroy = function () {
   this._detachCloseHandler(this.container);
 };

 BaseSelection.prototype.update = function (data) {
   throw new Error('The `update` method must be defined in child classes.');
 };

 /**
  * Helper method to abstract the "enabled" (not "disabled") state of this
  * object.
  *
  * @return {true} if the instance is not disabled.
  * @return {false} if the instance is disabled.
  */
 BaseSelection.prototype.isEnabled = function () {
   return !this.isDisabled();
 };

 /**
  * Helper method to abstract the "disabled" state of this object.
  *
  * @return {true} if the disabled option is true.
  * @return {false} if the disabled option is false.
  */
 BaseSelection.prototype.isDisabled = function () {
   return this.options.get('disabled');
 };

 return BaseSelection;
});

S2.define('select2/selection/single',[
 'jquery',
 './base',
 '../utils',
 '../keys'
], function ($, BaseSelection, Utils, KEYS) {
 function SingleSelection () {
   SingleSelection.__super__.constructor.apply(this, arguments);
 }

 Utils.Extend(SingleSelection, BaseSelection);

 SingleSelection.prototype.render = function () {
   var $selection = SingleSelection.__super__.render.call(this);

   $selection.addClass('select2-selection--single');

   $selection.html(
     '<span class="select2-selection__rendered"></span>' +
     '<span class="select2-selection__arrow" role="presentation">' +
       '<b role="presentation"></b>' +
     '</span>'
   );

   return $selection;
 };

 SingleSelection.prototype.bind = function (container, $container) {
   var self = this;

   SingleSelection.__super__.bind.apply(this, arguments);

   var id = container.id + '-container';

   this.$selection.find('.select2-selection__rendered')
     .attr('id', id)
     .attr('role', 'textbox')
     .attr('aria-readonly', 'true');
   this.$selection.attr('aria-labelledby', id);

   this.$selection.on('mousedown', function (evt) {
     // Only respond to left clicks
     if (evt.which !== 1) {
       return;
     }

     self.trigger('toggle', {
       originalEvent: evt
     });
   });

   this.$selection.on('focus', function (evt) {
     // User focuses on the container
   });

   this.$selection.on('blur', function (evt) {
     // User exits the container
   });

   container.on('focus', function (evt) {
     if (!container.isOpen()) {
       self.$selection.trigger('focus');
     }
   });
 };

 SingleSelection.prototype.clear = function () {
   var $rendered = this.$selection.find('.select2-selection__rendered');
   $rendered.empty();
   $rendered.removeAttr('title'); // clear tooltip on empty
 };

 SingleSelection.prototype.display = function (data, container) {
   var template = this.options.get('templateSelection');
   var escapeMarkup = this.options.get('escapeMarkup');

   return escapeMarkup(template(data, container));
 };

 SingleSelection.prototype.selectionContainer = function () {
   return $('<span></span>');
 };

 SingleSelection.prototype.update = function (data) {
   if (data.length === 0) {
     this.clear();
     return;
   }

   var selection = data[0];

   var $rendered = this.$selection.find('.select2-selection__rendered');
   var formatted = this.display(selection, $rendered);

   $rendered.empty().append(formatted);

   var title = selection.title || selection.text;

   if (title) {
     $rendered.attr('title', title);
   } else {
     $rendered.removeAttr('title');
   }
 };

 return SingleSelection;
});

S2.define('select2/selection/multiple',[
 'jquery',
 './base',
 '../utils'
], function ($, BaseSelection, Utils) {
 function MultipleSelection ($element, options) {
   MultipleSelection.__super__.constructor.apply(this, arguments);
 }

 Utils.Extend(MultipleSelection, BaseSelection);

 MultipleSelection.prototype.render = function () {
   var $selection = MultipleSelection.__super__.render.call(this);

   $selection.addClass('select2-selection--multiple');

   $selection.html(
     '<ul class="select2-selection__rendered"></ul>'
   );

   return $selection;
 };

 MultipleSelection.prototype.bind = function (container, $container) {
   var self = this;

   MultipleSelection.__super__.bind.apply(this, arguments);

   this.$selection.on('click', function (evt) {
     self.trigger('toggle', {
       originalEvent: evt
     });
   });

   this.$selection.on(
     'click',
     '.select2-selection__choice__remove',
     function (evt) {
       // Ignore the event if it is disabled
       if (self.isDisabled()) {
         return;
       }

       var $remove = $(this);
       var $selection = $remove.parent();

       var data = Utils.GetData($selection[0], 'data');

       self.trigger('unselect', {
         originalEvent: evt,
         data: data
       });
     }
   );
 };

 MultipleSelection.prototype.clear = function () {
   var $rendered = this.$selection.find('.select2-selection__rendered');
   $rendered.empty();
   $rendered.removeAttr('title');
 };

 MultipleSelection.prototype.display = function (data, container) {
   var template = this.options.get('templateSelection');
   var escapeMarkup = this.options.get('escapeMarkup');

   return escapeMarkup(template(data, container));
 };

 MultipleSelection.prototype.selectionContainer = function () {
   var $container = $(
     '<li class="select2-selection__choice">' +
       '<span class="select2-selection__choice__remove" role="presentation">' +
         '&times;' +
       '</span>' +
     '</li>'
   );

   return $container;
 };

 MultipleSelection.prototype.update = function (data) {
   this.clear();

   if (data.length === 0) {
     return;
   }

   var $selections = [];

   for (var d = 0; d < data.length; d++) {
     var selection = data[d];

     var $selection = this.selectionContainer();
     var formatted = this.display(selection, $selection);

     $selection.append(formatted);

     var title = selection.title || selection.text;

     if (title) {
       $selection.attr('title', title);
     }

     Utils.StoreData($selection[0], 'data', selection);

     $selections.push($selection);
   }

   var $rendered = this.$selection.find('.select2-selection__rendered');

   Utils.appendMany($rendered, $selections);
 };

 return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
 '../utils'
], function (Utils) {
 function Placeholder (decorated, $element, options) {
   this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

   decorated.call(this, $element, options);
 }

 Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
   if (typeof placeholder === 'string') {
     placeholder = {
       id: '',
       text: placeholder
     };
   }

   return placeholder;
 };

 Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
   var $placeholder = this.selectionContainer();

   $placeholder.html(this.display(placeholder));
   $placeholder.addClass('select2-selection__placeholder')
               .removeClass('select2-selection__choice');

   return $placeholder;
 };

 Placeholder.prototype.update = function (decorated, data) {
   var singlePlaceholder = (
     data.length == 1 && data[0].id != this.placeholder.id
   );
   var multipleSelections = data.length > 1;

   if (multipleSelections || singlePlaceholder) {
     return decorated.call(this, data);
   }

   this.clear();

   var $placeholder = this.createPlaceholder(this.placeholder);

   this.$selection.find('.select2-selection__rendered').append($placeholder);
 };

 return Placeholder;
});

S2.define('select2/selection/allowClear',[
 'jquery',
 '../keys',
 '../utils'
], function ($, KEYS, Utils) {
 function AllowClear () { }

 AllowClear.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   if (this.placeholder == null) {
     if (this.options.get('debug') && window.console && console.error) {
       console.error(
         'Select2: The `allowClear` option should be used in combination ' +
         'with the `placeholder` option.'
       );
     }
   }

   this.$selection.on('mousedown', '.select2-selection__clear',
     function (evt) {
       self._handleClear(evt);
   });

   container.on('keypress', function (evt) {
     self._handleKeyboardClear(evt, container);
   });
 };

 AllowClear.prototype._handleClear = function (_, evt) {
   // Ignore the event if it is disabled
   if (this.isDisabled()) {
     return;
   }

   var $clear = this.$selection.find('.select2-selection__clear');

   // Ignore the event if nothing has been selected
   if ($clear.length === 0) {
     return;
   }

   evt.stopPropagation();

   var data = Utils.GetData($clear[0], 'data');

   var previousVal = this.$element.val();
   this.$element.val(this.placeholder.id);

   var unselectData = {
     data: data
   };
   this.trigger('clear', unselectData);
   if (unselectData.prevented) {
     this.$element.val(previousVal);
     return;
   }

   for (var d = 0; d < data.length; d++) {
     unselectData = {
       data: data[d]
     };

     // Trigger the `unselect` event, so people can prevent it from being
     // cleared.
     this.trigger('unselect', unselectData);

     // If the event was prevented, don't clear it out.
     if (unselectData.prevented) {
       this.$element.val(previousVal);
       return;
     }
   }

   this.$element.trigger('input').trigger('change');

   this.trigger('toggle', {});
 };

 AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
   if (container.isOpen()) {
     return;
   }

   if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
     this._handleClear(evt);
   }
 };

 AllowClear.prototype.update = function (decorated, data) {
   decorated.call(this, data);

   if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
       data.length === 0) {
     return;
   }

   var removeAll = this.options.get('translations').get('removeAllItems');

   var $remove = $(
     '<span class="select2-selection__clear" title="' + removeAll() +'">' +
       '&times;' +
     '</span>'
   );
   Utils.StoreData($remove[0], 'data', data);

   this.$selection.find('.select2-selection__rendered').prepend($remove);
 };

 return AllowClear;
});

S2.define('select2/selection/search',[
 'jquery',
 '../utils',
 '../keys'
], function ($, Utils, KEYS) {
 function Search (decorated, $element, options) {
   decorated.call(this, $element, options);
 }

 Search.prototype.render = function (decorated) {
   var $search = $(
     '<li class="select2-search select2-search--inline">' +
       '<input class="select2-search__field" type="search" tabindex="-1"' +
       ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
       ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
     '</li>'
   );

   this.$searchContainer = $search;
   this.$search = $search.find('input');

   var $rendered = decorated.call(this);

   this._transferTabIndex();

   return $rendered;
 };

 Search.prototype.bind = function (decorated, container, $container) {
   var self = this;

   var resultsId = container.id + '-results';

   decorated.call(this, container, $container);

   container.on('open', function () {
     self.$search.attr('aria-controls', resultsId);
     self.$search.trigger('focus');
   });

   container.on('close', function () {
     self.$search.val('');
     self.$search.removeAttr('aria-controls');
     self.$search.removeAttr('aria-activedescendant');
     self.$search.trigger('focus');
   });

   container.on('enable', function () {
     self.$search.prop('disabled', false);

     self._transferTabIndex();
   });

   container.on('disable', function () {
     self.$search.prop('disabled', true);
   });

   container.on('focus', function (evt) {
     self.$search.trigger('focus');
   });

   container.on('results:focus', function (params) {
     if (params.data._resultId) {
       self.$search.attr('aria-activedescendant', params.data._resultId);
     } else {
       self.$search.removeAttr('aria-activedescendant');
     }
   });

   this.$selection.on('focusin', '.select2-search--inline', function (evt) {
     self.trigger('focus', evt);
   });

   this.$selection.on('focusout', '.select2-search--inline', function (evt) {
     self._handleBlur(evt);
   });

   this.$selection.on('keydown', '.select2-search--inline', function (evt) {
     evt.stopPropagation();

     self.trigger('keypress', evt);

     self._keyUpPrevented = evt.isDefaultPrevented();

     var key = evt.which;

     if (key === KEYS.BACKSPACE && self.$search.val() === '') {
       var $previousChoice = self.$searchContainer
         .prev('.select2-selection__choice');

       if ($previousChoice.length > 0) {
         var item = Utils.GetData($previousChoice[0], 'data');

         self.searchRemoveChoice(item);

         evt.preventDefault();
       }
     }
   });

   this.$selection.on('click', '.select2-search--inline', function (evt) {
     if (self.$search.val()) {
       evt.stopPropagation();
     }
   });

   // Try to detect the IE version should the `documentMode` property that
   // is stored on the document. This is only implemented in IE and is
   // slightly cleaner than doing a user agent check.
   // This property is not available in Edge, but Edge also doesn't have
   // this bug.
   var msie = document.documentMode;
   var disableInputEvents = msie && msie <= 11;

   // Workaround for browsers which do not support the `input` event
   // This will prevent double-triggering of events for browsers which support
   // both the `keyup` and `input` events.
   this.$selection.on(
     'input.searchcheck',
     '.select2-search--inline',
     function (evt) {
       // IE will trigger the `input` event when a placeholder is used on a
       // search box. To get around this issue, we are forced to ignore all
       // `input` events in IE and keep using `keyup`.
       if (disableInputEvents) {
         self.$selection.off('input.search input.searchcheck');
         return;
       }

       // Unbind the duplicated `keyup` event
       self.$selection.off('keyup.search');
     }
   );

   this.$selection.on(
     'keyup.search input.search',
     '.select2-search--inline',
     function (evt) {
       // IE will trigger the `input` event when a placeholder is used on a
       // search box. To get around this issue, we are forced to ignore all
       // `input` events in IE and keep using `keyup`.
       if (disableInputEvents && evt.type === 'input') {
         self.$selection.off('input.search input.searchcheck');
         return;
       }

       var key = evt.which;

       // We can freely ignore events from modifier keys
       if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
         return;
       }

       // Tabbing will be handled during the `keydown` phase
       if (key == KEYS.TAB) {
         return;
       }

       self.handleSearch(evt);
     }
   );
 };

 /**
  * This method will transfer the tabindex attribute from the rendered
  * selection to the search box. This allows for the search box to be used as
  * the primary focus instead of the selection container.
  *
  * @private
  */
 Search.prototype._transferTabIndex = function (decorated) {
   this.$search.attr('tabindex', this.$selection.attr('tabindex'));
   this.$selection.attr('tabindex', '-1');
 };

 Search.prototype.createPlaceholder = function (decorated, placeholder) {
   this.$search.attr('placeholder', placeholder.text);
 };

 Search.prototype.update = function (decorated, data) {
   var searchHadFocus = this.$search[0] == document.activeElement;

   this.$search.attr('placeholder', '');

   decorated.call(this, data);

   this.$selection.find('.select2-selection__rendered')
                  .append(this.$searchContainer);

   this.resizeSearch();
   if (searchHadFocus) {
     this.$search.trigger('focus');
   }
 };

 Search.prototype.handleSearch = function () {
   this.resizeSearch();

   if (!this._keyUpPrevented) {
     var input = this.$search.val();

     this.trigger('query', {
       term: input
     });
   }

   this._keyUpPrevented = false;
 };

 Search.prototype.searchRemoveChoice = function (decorated, item) {
   this.trigger('unselect', {
     data: item
   });

   this.$search.val(item.text);
   this.handleSearch();
 };

 Search.prototype.resizeSearch = function () {
   this.$search.css('width', '25px');

   var width = '';

   if (this.$search.attr('placeholder') !== '') {
     width = this.$selection.find('.select2-selection__rendered').width();
   } else {
     var minimumWidth = this.$search.val().length + 1;

     width = (minimumWidth * 0.75) + 'em';
   }

   this.$search.css('width', width);
 };

 return Search;
});

S2.define('select2/selection/eventRelay',[
 'jquery'
], function ($) {
 function EventRelay () { }

 EventRelay.prototype.bind = function (decorated, container, $container) {
   var self = this;
   var relayEvents = [
     'open', 'opening',
     'close', 'closing',
     'select', 'selecting',
     'unselect', 'unselecting',
     'clear', 'clearing'
   ];

   var preventableEvents = [
     'opening', 'closing', 'selecting', 'unselecting', 'clearing'
   ];

   decorated.call(this, container, $container);

   container.on('*', function (name, params) {
     // Ignore events that should not be relayed
     if ($.inArray(name, relayEvents) === -1) {
       return;
     }

     // The parameters should always be an object
     params = params || {};

     // Generate the jQuery event for the Select2 event
     var evt = $.Event('select2:' + name, {
       params: params
     });

     self.$element.trigger(evt);

     // Only handle preventable events if it was one
     if ($.inArray(name, preventableEvents) === -1) {
       return;
     }

     params.prevented = evt.isDefaultPrevented();
   });
 };

 return EventRelay;
});

S2.define('select2/translation',[
 'jquery',
 'require'
], function ($, require) {
 function Translation (dict) {
   this.dict = dict || {};
 }

 Translation.prototype.all = function () {
   return this.dict;
 };

 Translation.prototype.get = function (key) {
   return this.dict[key];
 };

 Translation.prototype.extend = function (translation) {
   this.dict = $.extend({}, translation.all(), this.dict);
 };

 // Static functions

 Translation._cache = {};

 Translation.loadPath = function (path) {
   if (!(path in Translation._cache)) {
     var translations = require(path);

     Translation._cache[path] = translations;
   }

   return new Translation(Translation._cache[path]);
 };

 return Translation;
});

S2.define('select2/diacritics',[

], function () {
 var diacritics = {
   '\u24B6': 'A',
   '\uFF21': 'A',
   '\u00C0': 'A',
   '\u00C1': 'A',
   '\u00C2': 'A',
   '\u1EA6': 'A',
   '\u1EA4': 'A',
   '\u1EAA': 'A',
   '\u1EA8': 'A',
   '\u00C3': 'A',
   '\u0100': 'A',
   '\u0102': 'A',
   '\u1EB0': 'A',
   '\u1EAE': 'A',
   '\u1EB4': 'A',
   '\u1EB2': 'A',
   '\u0226': 'A',
   '\u01E0': 'A',
   '\u00C4': 'A',
   '\u01DE': 'A',
   '\u1EA2': 'A',
   '\u00C5': 'A',
   '\u01FA': 'A',
   '\u01CD': 'A',
   '\u0200': 'A',
   '\u0202': 'A',
   '\u1EA0': 'A',
   '\u1EAC': 'A',
   '\u1EB6': 'A',
   '\u1E00': 'A',
   '\u0104': 'A',
   '\u023A': 'A',
   '\u2C6F': 'A',
   '\uA732': 'AA',
   '\u00C6': 'AE',
   '\u01FC': 'AE',
   '\u01E2': 'AE',
   '\uA734': 'AO',
   '\uA736': 'AU',
   '\uA738': 'AV',
   '\uA73A': 'AV',
   '\uA73C': 'AY',
   '\u24B7': 'B',
   '\uFF22': 'B',
   '\u1E02': 'B',
   '\u1E04': 'B',
   '\u1E06': 'B',
   '\u0243': 'B',
   '\u0182': 'B',
   '\u0181': 'B',
   '\u24B8': 'C',
   '\uFF23': 'C',
   '\u0106': 'C',
   '\u0108': 'C',
   '\u010A': 'C',
   '\u010C': 'C',
   '\u00C7': 'C',
   '\u1E08': 'C',
   '\u0187': 'C',
   '\u023B': 'C',
   '\uA73E': 'C',
   '\u24B9': 'D',
   '\uFF24': 'D',
   '\u1E0A': 'D',
   '\u010E': 'D',
   '\u1E0C': 'D',
   '\u1E10': 'D',
   '\u1E12': 'D',
   '\u1E0E': 'D',
   '\u0110': 'D',
   '\u018B': 'D',
   '\u018A': 'D',
   '\u0189': 'D',
   '\uA779': 'D',
   '\u01F1': 'DZ',
   '\u01C4': 'DZ',
   '\u01F2': 'Dz',
   '\u01C5': 'Dz',
   '\u24BA': 'E',
   '\uFF25': 'E',
   '\u00C8': 'E',
   '\u00C9': 'E',
   '\u00CA': 'E',
   '\u1EC0': 'E',
   '\u1EBE': 'E',
   '\u1EC4': 'E',
   '\u1EC2': 'E',
   '\u1EBC': 'E',
   '\u0112': 'E',
   '\u1E14': 'E',
   '\u1E16': 'E',
   '\u0114': 'E',
   '\u0116': 'E',
   '\u00CB': 'E',
   '\u1EBA': 'E',
   '\u011A': 'E',
   '\u0204': 'E',
   '\u0206': 'E',
   '\u1EB8': 'E',
   '\u1EC6': 'E',
   '\u0228': 'E',
   '\u1E1C': 'E',
   '\u0118': 'E',
   '\u1E18': 'E',
   '\u1E1A': 'E',
   '\u0190': 'E',
   '\u018E': 'E',
   '\u24BB': 'F',
   '\uFF26': 'F',
   '\u1E1E': 'F',
   '\u0191': 'F',
   '\uA77B': 'F',
   '\u24BC': 'G',
   '\uFF27': 'G',
   '\u01F4': 'G',
   '\u011C': 'G',
   '\u1E20': 'G',
   '\u011E': 'G',
   '\u0120': 'G',
   '\u01E6': 'G',
   '\u0122': 'G',
   '\u01E4': 'G',
   '\u0193': 'G',
   '\uA7A0': 'G',
   '\uA77D': 'G',
   '\uA77E': 'G',
   '\u24BD': 'H',
   '\uFF28': 'H',
   '\u0124': 'H',
   '\u1E22': 'H',
   '\u1E26': 'H',
   '\u021E': 'H',
   '\u1E24': 'H',
   '\u1E28': 'H',
   '\u1E2A': 'H',
   '\u0126': 'H',
   '\u2C67': 'H',
   '\u2C75': 'H',
   '\uA78D': 'H',
   '\u24BE': 'I',
   '\uFF29': 'I',
   '\u00CC': 'I',
   '\u00CD': 'I',
   '\u00CE': 'I',
   '\u0128': 'I',
   '\u012A': 'I',
   '\u012C': 'I',
   '\u0130': 'I',
   '\u00CF': 'I',
   '\u1E2E': 'I',
   '\u1EC8': 'I',
   '\u01CF': 'I',
   '\u0208': 'I',
   '\u020A': 'I',
   '\u1ECA': 'I',
   '\u012E': 'I',
   '\u1E2C': 'I',
   '\u0197': 'I',
   '\u24BF': 'J',
   '\uFF2A': 'J',
   '\u0134': 'J',
   '\u0248': 'J',
   '\u24C0': 'K',
   '\uFF2B': 'K',
   '\u1E30': 'K',
   '\u01E8': 'K',
   '\u1E32': 'K',
   '\u0136': 'K',
   '\u1E34': 'K',
   '\u0198': 'K',
   '\u2C69': 'K',
   '\uA740': 'K',
   '\uA742': 'K',
   '\uA744': 'K',
   '\uA7A2': 'K',
   '\u24C1': 'L',
   '\uFF2C': 'L',
   '\u013F': 'L',
   '\u0139': 'L',
   '\u013D': 'L',
   '\u1E36': 'L',
   '\u1E38': 'L',
   '\u013B': 'L',
   '\u1E3C': 'L',
   '\u1E3A': 'L',
   '\u0141': 'L',
   '\u023D': 'L',
   '\u2C62': 'L',
   '\u2C60': 'L',
   '\uA748': 'L',
   '\uA746': 'L',
   '\uA780': 'L',
   '\u01C7': 'LJ',
   '\u01C8': 'Lj',
   '\u24C2': 'M',
   '\uFF2D': 'M',
   '\u1E3E': 'M',
   '\u1E40': 'M',
   '\u1E42': 'M',
   '\u2C6E': 'M',
   '\u019C': 'M',
   '\u24C3': 'N',
   '\uFF2E': 'N',
   '\u01F8': 'N',
   '\u0143': 'N',
   '\u00D1': 'N',
   '\u1E44': 'N',
   '\u0147': 'N',
   '\u1E46': 'N',
   '\u0145': 'N',
   '\u1E4A': 'N',
   '\u1E48': 'N',
   '\u0220': 'N',
   '\u019D': 'N',
   '\uA790': 'N',
   '\uA7A4': 'N',
   '\u01CA': 'NJ',
   '\u01CB': 'Nj',
   '\u24C4': 'O',
   '\uFF2F': 'O',
   '\u00D2': 'O',
   '\u00D3': 'O',
   '\u00D4': 'O',
   '\u1ED2': 'O',
   '\u1ED0': 'O',
   '\u1ED6': 'O',
   '\u1ED4': 'O',
   '\u00D5': 'O',
   '\u1E4C': 'O',
   '\u022C': 'O',
   '\u1E4E': 'O',
   '\u014C': 'O',
   '\u1E50': 'O',
   '\u1E52': 'O',
   '\u014E': 'O',
   '\u022E': 'O',
   '\u0230': 'O',
   '\u00D6': 'O',
   '\u022A': 'O',
   '\u1ECE': 'O',
   '\u0150': 'O',
   '\u01D1': 'O',
   '\u020C': 'O',
   '\u020E': 'O',
   '\u01A0': 'O',
   '\u1EDC': 'O',
   '\u1EDA': 'O',
   '\u1EE0': 'O',
   '\u1EDE': 'O',
   '\u1EE2': 'O',
   '\u1ECC': 'O',
   '\u1ED8': 'O',
   '\u01EA': 'O',
   '\u01EC': 'O',
   '\u00D8': 'O',
   '\u01FE': 'O',
   '\u0186': 'O',
   '\u019F': 'O',
   '\uA74A': 'O',
   '\uA74C': 'O',
   '\u0152': 'OE',
   '\u01A2': 'OI',
   '\uA74E': 'OO',
   '\u0222': 'OU',
   '\u24C5': 'P',
   '\uFF30': 'P',
   '\u1E54': 'P',
   '\u1E56': 'P',
   '\u01A4': 'P',
   '\u2C63': 'P',
   '\uA750': 'P',
   '\uA752': 'P',
   '\uA754': 'P',
   '\u24C6': 'Q',
   '\uFF31': 'Q',
   '\uA756': 'Q',
   '\uA758': 'Q',
   '\u024A': 'Q',
   '\u24C7': 'R',
   '\uFF32': 'R',
   '\u0154': 'R',
   '\u1E58': 'R',
   '\u0158': 'R',
   '\u0210': 'R',
   '\u0212': 'R',
   '\u1E5A': 'R',
   '\u1E5C': 'R',
   '\u0156': 'R',
   '\u1E5E': 'R',
   '\u024C': 'R',
   '\u2C64': 'R',
   '\uA75A': 'R',
   '\uA7A6': 'R',
   '\uA782': 'R',
   '\u24C8': 'S',
   '\uFF33': 'S',
   '\u1E9E': 'S',
   '\u015A': 'S',
   '\u1E64': 'S',
   '\u015C': 'S',
   '\u1E60': 'S',
   '\u0160': 'S',
   '\u1E66': 'S',
   '\u1E62': 'S',
   '\u1E68': 'S',
   '\u0218': 'S',
   '\u015E': 'S',
   '\u2C7E': 'S',
   '\uA7A8': 'S',
   '\uA784': 'S',
   '\u24C9': 'T',
   '\uFF34': 'T',
   '\u1E6A': 'T',
   '\u0164': 'T',
   '\u1E6C': 'T',
   '\u021A': 'T',
   '\u0162': 'T',
   '\u1E70': 'T',
   '\u1E6E': 'T',
   '\u0166': 'T',
   '\u01AC': 'T',
   '\u01AE': 'T',
   '\u023E': 'T',
   '\uA786': 'T',
   '\uA728': 'TZ',
   '\u24CA': 'U',
   '\uFF35': 'U',
   '\u00D9': 'U',
   '\u00DA': 'U',
   '\u00DB': 'U',
   '\u0168': 'U',
   '\u1E78': 'U',
   '\u016A': 'U',
   '\u1E7A': 'U',
   '\u016C': 'U',
   '\u00DC': 'U',
   '\u01DB': 'U',
   '\u01D7': 'U',
   '\u01D5': 'U',
   '\u01D9': 'U',
   '\u1EE6': 'U',
   '\u016E': 'U',
   '\u0170': 'U',
   '\u01D3': 'U',
   '\u0214': 'U',
   '\u0216': 'U',
   '\u01AF': 'U',
   '\u1EEA': 'U',
   '\u1EE8': 'U',
   '\u1EEE': 'U',
   '\u1EEC': 'U',
   '\u1EF0': 'U',
   '\u1EE4': 'U',
   '\u1E72': 'U',
   '\u0172': 'U',
   '\u1E76': 'U',
   '\u1E74': 'U',
   '\u0244': 'U',
   '\u24CB': 'V',
   '\uFF36': 'V',
   '\u1E7C': 'V',
   '\u1E7E': 'V',
   '\u01B2': 'V',
   '\uA75E': 'V',
   '\u0245': 'V',
   '\uA760': 'VY',
   '\u24CC': 'W',
   '\uFF37': 'W',
   '\u1E80': 'W',
   '\u1E82': 'W',
   '\u0174': 'W',
   '\u1E86': 'W',
   '\u1E84': 'W',
   '\u1E88': 'W',
   '\u2C72': 'W',
   '\u24CD': 'X',
   '\uFF38': 'X',
   '\u1E8A': 'X',
   '\u1E8C': 'X',
   '\u24CE': 'Y',
   '\uFF39': 'Y',
   '\u1EF2': 'Y',
   '\u00DD': 'Y',
   '\u0176': 'Y',
   '\u1EF8': 'Y',
   '\u0232': 'Y',
   '\u1E8E': 'Y',
   '\u0178': 'Y',
   '\u1EF6': 'Y',
   '\u1EF4': 'Y',
   '\u01B3': 'Y',
   '\u024E': 'Y',
   '\u1EFE': 'Y',
   '\u24CF': 'Z',
   '\uFF3A': 'Z',
   '\u0179': 'Z',
   '\u1E90': 'Z',
   '\u017B': 'Z',
   '\u017D': 'Z',
   '\u1E92': 'Z',
   '\u1E94': 'Z',
   '\u01B5': 'Z',
   '\u0224': 'Z',
   '\u2C7F': 'Z',
   '\u2C6B': 'Z',
   '\uA762': 'Z',
   '\u24D0': 'a',
   '\uFF41': 'a',
   '\u1E9A': 'a',
   '\u00E0': 'a',
   '\u00E1': 'a',
   '\u00E2': 'a',
   '\u1EA7': 'a',
   '\u1EA5': 'a',
   '\u1EAB': 'a',
   '\u1EA9': 'a',
   '\u00E3': 'a',
   '\u0101': 'a',
   '\u0103': 'a',
   '\u1EB1': 'a',
   '\u1EAF': 'a',
   '\u1EB5': 'a',
   '\u1EB3': 'a',
   '\u0227': 'a',
   '\u01E1': 'a',
   '\u00E4': 'a',
   '\u01DF': 'a',
   '\u1EA3': 'a',
   '\u00E5': 'a',
   '\u01FB': 'a',
   '\u01CE': 'a',
   '\u0201': 'a',
   '\u0203': 'a',
   '\u1EA1': 'a',
   '\u1EAD': 'a',
   '\u1EB7': 'a',
   '\u1E01': 'a',
   '\u0105': 'a',
   '\u2C65': 'a',
   '\u0250': 'a',
   '\uA733': 'aa',
   '\u00E6': 'ae',
   '\u01FD': 'ae',
   '\u01E3': 'ae',
   '\uA735': 'ao',
   '\uA737': 'au',
   '\uA739': 'av',
   '\uA73B': 'av',
   '\uA73D': 'ay',
   '\u24D1': 'b',
   '\uFF42': 'b',
   '\u1E03': 'b',
   '\u1E05': 'b',
   '\u1E07': 'b',
   '\u0180': 'b',
   '\u0183': 'b',
   '\u0253': 'b',
   '\u24D2': 'c',
   '\uFF43': 'c',
   '\u0107': 'c',
   '\u0109': 'c',
   '\u010B': 'c',
   '\u010D': 'c',
   '\u00E7': 'c',
   '\u1E09': 'c',
   '\u0188': 'c',
   '\u023C': 'c',
   '\uA73F': 'c',
   '\u2184': 'c',
   '\u24D3': 'd',
   '\uFF44': 'd',
   '\u1E0B': 'd',
   '\u010F': 'd',
   '\u1E0D': 'd',
   '\u1E11': 'd',
   '\u1E13': 'd',
   '\u1E0F': 'd',
   '\u0111': 'd',
   '\u018C': 'd',
   '\u0256': 'd',
   '\u0257': 'd',
   '\uA77A': 'd',
   '\u01F3': 'dz',
   '\u01C6': 'dz',
   '\u24D4': 'e',
   '\uFF45': 'e',
   '\u00E8': 'e',
   '\u00E9': 'e',
   '\u00EA': 'e',
   '\u1EC1': 'e',
   '\u1EBF': 'e',
   '\u1EC5': 'e',
   '\u1EC3': 'e',
   '\u1EBD': 'e',
   '\u0113': 'e',
   '\u1E15': 'e',
   '\u1E17': 'e',
   '\u0115': 'e',
   '\u0117': 'e',
   '\u00EB': 'e',
   '\u1EBB': 'e',
   '\u011B': 'e',
   '\u0205': 'e',
   '\u0207': 'e',
   '\u1EB9': 'e',
   '\u1EC7': 'e',
   '\u0229': 'e',
   '\u1E1D': 'e',
   '\u0119': 'e',
   '\u1E19': 'e',
   '\u1E1B': 'e',
   '\u0247': 'e',
   '\u025B': 'e',
   '\u01DD': 'e',
   '\u24D5': 'f',
   '\uFF46': 'f',
   '\u1E1F': 'f',
   '\u0192': 'f',
   '\uA77C': 'f',
   '\u24D6': 'g',
   '\uFF47': 'g',
   '\u01F5': 'g',
   '\u011D': 'g',
   '\u1E21': 'g',
   '\u011F': 'g',
   '\u0121': 'g',
   '\u01E7': 'g',
   '\u0123': 'g',
   '\u01E5': 'g',
   '\u0260': 'g',
   '\uA7A1': 'g',
   '\u1D79': 'g',
   '\uA77F': 'g',
   '\u24D7': 'h',
   '\uFF48': 'h',
   '\u0125': 'h',
   '\u1E23': 'h',
   '\u1E27': 'h',
   '\u021F': 'h',
   '\u1E25': 'h',
   '\u1E29': 'h',
   '\u1E2B': 'h',
   '\u1E96': 'h',
   '\u0127': 'h',
   '\u2C68': 'h',
   '\u2C76': 'h',
   '\u0265': 'h',
   '\u0195': 'hv',
   '\u24D8': 'i',
   '\uFF49': 'i',
   '\u00EC': 'i',
   '\u00ED': 'i',
   '\u00EE': 'i',
   '\u0129': 'i',
   '\u012B': 'i',
   '\u012D': 'i',
   '\u00EF': 'i',
   '\u1E2F': 'i',
   '\u1EC9': 'i',
   '\u01D0': 'i',
   '\u0209': 'i',
   '\u020B': 'i',
   '\u1ECB': 'i',
   '\u012F': 'i',
   '\u1E2D': 'i',
   '\u0268': 'i',
   '\u0131': 'i',
   '\u24D9': 'j',
   '\uFF4A': 'j',
   '\u0135': 'j',
   '\u01F0': 'j',
   '\u0249': 'j',
   '\u24DA': 'k',
   '\uFF4B': 'k',
   '\u1E31': 'k',
   '\u01E9': 'k',
   '\u1E33': 'k',
   '\u0137': 'k',
   '\u1E35': 'k',
   '\u0199': 'k',
   '\u2C6A': 'k',
   '\uA741': 'k',
   '\uA743': 'k',
   '\uA745': 'k',
   '\uA7A3': 'k',
   '\u24DB': 'l',
   '\uFF4C': 'l',
   '\u0140': 'l',
   '\u013A': 'l',
   '\u013E': 'l',
   '\u1E37': 'l',
   '\u1E39': 'l',
   '\u013C': 'l',
   '\u1E3D': 'l',
   '\u1E3B': 'l',
   '\u017F': 'l',
   '\u0142': 'l',
   '\u019A': 'l',
   '\u026B': 'l',
   '\u2C61': 'l',
   '\uA749': 'l',
   '\uA781': 'l',
   '\uA747': 'l',
   '\u01C9': 'lj',
   '\u24DC': 'm',
   '\uFF4D': 'm',
   '\u1E3F': 'm',
   '\u1E41': 'm',
   '\u1E43': 'm',
   '\u0271': 'm',
   '\u026F': 'm',
   '\u24DD': 'n',
   '\uFF4E': 'n',
   '\u01F9': 'n',
   '\u0144': 'n',
   '\u00F1': 'n',
   '\u1E45': 'n',
   '\u0148': 'n',
   '\u1E47': 'n',
   '\u0146': 'n',
   '\u1E4B': 'n',
   '\u1E49': 'n',
   '\u019E': 'n',
   '\u0272': 'n',
   '\u0149': 'n',
   '\uA791': 'n',
   '\uA7A5': 'n',
   '\u01CC': 'nj',
   '\u24DE': 'o',
   '\uFF4F': 'o',
   '\u00F2': 'o',
   '\u00F3': 'o',
   '\u00F4': 'o',
   '\u1ED3': 'o',
   '\u1ED1': 'o',
   '\u1ED7': 'o',
   '\u1ED5': 'o',
   '\u00F5': 'o',
   '\u1E4D': 'o',
   '\u022D': 'o',
   '\u1E4F': 'o',
   '\u014D': 'o',
   '\u1E51': 'o',
   '\u1E53': 'o',
   '\u014F': 'o',
   '\u022F': 'o',
   '\u0231': 'o',
   '\u00F6': 'o',
   '\u022B': 'o',
   '\u1ECF': 'o',
   '\u0151': 'o',
   '\u01D2': 'o',
   '\u020D': 'o',
   '\u020F': 'o',
   '\u01A1': 'o',
   '\u1EDD': 'o',
   '\u1EDB': 'o',
   '\u1EE1': 'o',
   '\u1EDF': 'o',
   '\u1EE3': 'o',
   '\u1ECD': 'o',
   '\u1ED9': 'o',
   '\u01EB': 'o',
   '\u01ED': 'o',
   '\u00F8': 'o',
   '\u01FF': 'o',
   '\u0254': 'o',
   '\uA74B': 'o',
   '\uA74D': 'o',
   '\u0275': 'o',
   '\u0153': 'oe',
   '\u01A3': 'oi',
   '\u0223': 'ou',
   '\uA74F': 'oo',
   '\u24DF': 'p',
   '\uFF50': 'p',
   '\u1E55': 'p',
   '\u1E57': 'p',
   '\u01A5': 'p',
   '\u1D7D': 'p',
   '\uA751': 'p',
   '\uA753': 'p',
   '\uA755': 'p',
   '\u24E0': 'q',
   '\uFF51': 'q',
   '\u024B': 'q',
   '\uA757': 'q',
   '\uA759': 'q',
   '\u24E1': 'r',
   '\uFF52': 'r',
   '\u0155': 'r',
   '\u1E59': 'r',
   '\u0159': 'r',
   '\u0211': 'r',
   '\u0213': 'r',
   '\u1E5B': 'r',
   '\u1E5D': 'r',
   '\u0157': 'r',
   '\u1E5F': 'r',
   '\u024D': 'r',
   '\u027D': 'r',
   '\uA75B': 'r',
   '\uA7A7': 'r',
   '\uA783': 'r',
   '\u24E2': 's',
   '\uFF53': 's',
   '\u00DF': 's',
   '\u015B': 's',
   '\u1E65': 's',
   '\u015D': 's',
   '\u1E61': 's',
   '\u0161': 's',
   '\u1E67': 's',
   '\u1E63': 's',
   '\u1E69': 's',
   '\u0219': 's',
   '\u015F': 's',
   '\u023F': 's',
   '\uA7A9': 's',
   '\uA785': 's',
   '\u1E9B': 's',
   '\u24E3': 't',
   '\uFF54': 't',
   '\u1E6B': 't',
   '\u1E97': 't',
   '\u0165': 't',
   '\u1E6D': 't',
   '\u021B': 't',
   '\u0163': 't',
   '\u1E71': 't',
   '\u1E6F': 't',
   '\u0167': 't',
   '\u01AD': 't',
   '\u0288': 't',
   '\u2C66': 't',
   '\uA787': 't',
   '\uA729': 'tz',
   '\u24E4': 'u',
   '\uFF55': 'u',
   '\u00F9': 'u',
   '\u00FA': 'u',
   '\u00FB': 'u',
   '\u0169': 'u',
   '\u1E79': 'u',
   '\u016B': 'u',
   '\u1E7B': 'u',
   '\u016D': 'u',
   '\u00FC': 'u',
   '\u01DC': 'u',
   '\u01D8': 'u',
   '\u01D6': 'u',
   '\u01DA': 'u',
   '\u1EE7': 'u',
   '\u016F': 'u',
   '\u0171': 'u',
   '\u01D4': 'u',
   '\u0215': 'u',
   '\u0217': 'u',
   '\u01B0': 'u',
   '\u1EEB': 'u',
   '\u1EE9': 'u',
   '\u1EEF': 'u',
   '\u1EED': 'u',
   '\u1EF1': 'u',
   '\u1EE5': 'u',
   '\u1E73': 'u',
   '\u0173': 'u',
   '\u1E77': 'u',
   '\u1E75': 'u',
   '\u0289': 'u',
   '\u24E5': 'v',
   '\uFF56': 'v',
   '\u1E7D': 'v',
   '\u1E7F': 'v',
   '\u028B': 'v',
   '\uA75F': 'v',
   '\u028C': 'v',
   '\uA761': 'vy',
   '\u24E6': 'w',
   '\uFF57': 'w',
   '\u1E81': 'w',
   '\u1E83': 'w',
   '\u0175': 'w',
   '\u1E87': 'w',
   '\u1E85': 'w',
   '\u1E98': 'w',
   '\u1E89': 'w',
   '\u2C73': 'w',
   '\u24E7': 'x',
   '\uFF58': 'x',
   '\u1E8B': 'x',
   '\u1E8D': 'x',
   '\u24E8': 'y',
   '\uFF59': 'y',
   '\u1EF3': 'y',
   '\u00FD': 'y',
   '\u0177': 'y',
   '\u1EF9': 'y',
   '\u0233': 'y',
   '\u1E8F': 'y',
   '\u00FF': 'y',
   '\u1EF7': 'y',
   '\u1E99': 'y',
   '\u1EF5': 'y',
   '\u01B4': 'y',
   '\u024F': 'y',
   '\u1EFF': 'y',
   '\u24E9': 'z',
   '\uFF5A': 'z',
   '\u017A': 'z',
   '\u1E91': 'z',
   '\u017C': 'z',
   '\u017E': 'z',
   '\u1E93': 'z',
   '\u1E95': 'z',
   '\u01B6': 'z',
   '\u0225': 'z',
   '\u0240': 'z',
   '\u2C6C': 'z',
   '\uA763': 'z',
   '\u0386': '\u0391',
   '\u0388': '\u0395',
   '\u0389': '\u0397',
   '\u038A': '\u0399',
   '\u03AA': '\u0399',
   '\u038C': '\u039F',
   '\u038E': '\u03A5',
   '\u03AB': '\u03A5',
   '\u038F': '\u03A9',
   '\u03AC': '\u03B1',
   '\u03AD': '\u03B5',
   '\u03AE': '\u03B7',
   '\u03AF': '\u03B9',
   '\u03CA': '\u03B9',
   '\u0390': '\u03B9',
   '\u03CC': '\u03BF',
   '\u03CD': '\u03C5',
   '\u03CB': '\u03C5',
   '\u03B0': '\u03C5',
   '\u03CE': '\u03C9',
   '\u03C2': '\u03C3',
   '\u2019': '\''
 };

 return diacritics;
});

S2.define('select2/data/base',[
 '../utils'
], function (Utils) {
 function BaseAdapter ($element, options) {
   BaseAdapter.__super__.constructor.call(this);
 }

 Utils.Extend(BaseAdapter, Utils.Observable);

 BaseAdapter.prototype.current = function (callback) {
   throw new Error('The `current` method must be defined in child classes.');
 };

 BaseAdapter.prototype.query = function (params, callback) {
   throw new Error('The `query` method must be defined in child classes.');
 };

 BaseAdapter.prototype.bind = function (container, $container) {
   // Can be implemented in subclasses
 };

 BaseAdapter.prototype.destroy = function () {
   // Can be implemented in subclasses
 };

 BaseAdapter.prototype.generateResultId = function (container, data) {
   var id = container.id + '-result-';

   id += Utils.generateChars(4);

   if (data.id != null) {
     id += '-' + data.id.toString();
   } else {
     id += '-' + Utils.generateChars(4);
   }
   return id;
 };

 return BaseAdapter;
});

S2.define('select2/data/select',[
 './base',
 '../utils',
 'jquery'
], function (BaseAdapter, Utils, $) {
 function SelectAdapter ($element, options) {
   this.$element = $element;
   this.options = options;

   SelectAdapter.__super__.constructor.call(this);
 }

 Utils.Extend(SelectAdapter, BaseAdapter);

 SelectAdapter.prototype.current = function (callback) {
   var data = [];
   var self = this;

   this.$element.find(':selected').each(function () {
     var $option = $(this);

     var option = self.item($option);

     data.push(option);
   });

   callback(data);
 };

 SelectAdapter.prototype.select = function (data) {
   var self = this;

   data.selected = true;

   // If data.element is a DOM node, use it instead
   if ($(data.element).is('option')) {
     data.element.selected = true;

     this.$element.trigger('input').trigger('change');

     return;
   }

   if (this.$element.prop('multiple')) {
     this.current(function (currentData) {
       var val = [];

       data = [data];
       data.push.apply(data, currentData);

       for (var d = 0; d < data.length; d++) {
         var id = data[d].id;

         if ($.inArray(id, val) === -1) {
           val.push(id);
         }
       }

       self.$element.val(val);
       self.$element.trigger('input').trigger('change');
     });
   } else {
     var val = data.id;

     this.$element.val(val);
     this.$element.trigger('input').trigger('change');
   }
 };

 SelectAdapter.prototype.unselect = function (data) {
   var self = this;

   if (!this.$element.prop('multiple')) {
     return;
   }

   data.selected = false;

   if ($(data.element).is('option')) {
     data.element.selected = false;

     this.$element.trigger('input').trigger('change');

     return;
   }

   this.current(function (currentData) {
     var val = [];

     for (var d = 0; d < currentData.length; d++) {
       var id = currentData[d].id;

       if (id !== data.id && $.inArray(id, val) === -1) {
         val.push(id);
       }
     }

     self.$element.val(val);

     self.$element.trigger('input').trigger('change');
   });
 };

 SelectAdapter.prototype.bind = function (container, $container) {
   var self = this;

   this.container = container;

   container.on('select', function (params) {
     self.select(params.data);
   });

   container.on('unselect', function (params) {
     self.unselect(params.data);
   });
 };

 SelectAdapter.prototype.destroy = function () {
   // Remove anything added to child elements
   this.$element.find('*').each(function () {
     // Remove any custom data set by Select2
     Utils.RemoveData(this);
   });
 };

 SelectAdapter.prototype.query = function (params, callback) {
   var data = [];
   var self = this;

   var $options = this.$element.children();

   $options.each(function () {
     var $option = $(this);

     if (!$option.is('option') && !$option.is('optgroup')) {
       return;
     }

     var option = self.item($option);

     var matches = self.matches(params, option);

     if (matches !== null) {
       data.push(matches);
     }
   });

   callback({
     results: data
   });
 };

 SelectAdapter.prototype.addOptions = function ($options) {
   Utils.appendMany(this.$element, $options);
 };

 SelectAdapter.prototype.option = function (data) {
   var option;

   if (data.children) {
     option = document.createElement('optgroup');
     option.label = data.text;
   } else {
     option = document.createElement('option');

     if (option.textContent !== undefined) {
       option.textContent = data.text;
     } else {
       option.innerText = data.text;
     }
   }

   if (data.id !== undefined) {
     option.value = data.id;
   }

   if (data.disabled) {
     option.disabled = true;
   }

   if (data.selected) {
     option.selected = true;
   }

   if (data.title) {
     option.title = data.title;
   }

   var $option = $(option);

   var normalizedData = this._normalizeItem(data);
   normalizedData.element = option;

   // Override the option's data with the combined data
   Utils.StoreData(option, 'data', normalizedData);

   return $option;
 };

 SelectAdapter.prototype.item = function ($option) {
   var data = {};

   data = Utils.GetData($option[0], 'data');

   if (data != null) {
     return data;
   }

   if ($option.is('option')) {
     data = {
       id: $option.val(),
       text: $option.text(),
       disabled: $option.prop('disabled'),
       selected: $option.prop('selected'),
       title: $option.prop('title')
     };
   } else if ($option.is('optgroup')) {
     data = {
       text: $option.prop('label'),
       children: [],
       title: $option.prop('title')
     };

     var $children = $option.children('option');
     var children = [];

     for (var c = 0; c < $children.length; c++) {
       var $child = $($children[c]);

       var child = this.item($child);

       children.push(child);
     }

     data.children = children;
   }

   data = this._normalizeItem(data);
   data.element = $option[0];

   Utils.StoreData($option[0], 'data', data);

   return data;
 };

 SelectAdapter.prototype._normalizeItem = function (item) {
   if (item !== Object(item)) {
     item = {
       id: item,
       text: item
     };
   }

   item = $.extend({}, {
     text: ''
   }, item);

   var defaults = {
     selected: false,
     disabled: false
   };

   if (item.id != null) {
     item.id = item.id.toString();
   }

   if (item.text != null) {
     item.text = item.text.toString();
   }

   if (item._resultId == null && item.id && this.container != null) {
     item._resultId = this.generateResultId(this.container, item);
   }

   return $.extend({}, defaults, item);
 };

 SelectAdapter.prototype.matches = function (params, data) {
   var matcher = this.options.get('matcher');

   return matcher(params, data);
 };

 return SelectAdapter;
});

S2.define('select2/data/array',[
 './select',
 '../utils',
 'jquery'
], function (SelectAdapter, Utils, $) {
 function ArrayAdapter ($element, options) {
   this._dataToConvert = options.get('data') || [];

   ArrayAdapter.__super__.constructor.call(this, $element, options);
 }

 Utils.Extend(ArrayAdapter, SelectAdapter);

 ArrayAdapter.prototype.bind = function (container, $container) {
   ArrayAdapter.__super__.bind.call(this, container, $container);

   this.addOptions(this.convertToOptions(this._dataToConvert));
 };

 ArrayAdapter.prototype.select = function (data) {
   var $option = this.$element.find('option').filter(function (i, elm) {
     return elm.value == data.id.toString();
   });

   if ($option.length === 0) {
     $option = this.option(data);

     this.addOptions($option);
   }

   ArrayAdapter.__super__.select.call(this, data);
 };

 ArrayAdapter.prototype.convertToOptions = function (data) {
   var self = this;

   var $existing = this.$element.find('option');
   var existingIds = $existing.map(function () {
     return self.item($(this)).id;
   }).get();

   var $options = [];

   // Filter out all items except for the one passed in the argument
   function onlyItem (item) {
     return function () {
       return $(this).val() == item.id;
     };
   }

   for (var d = 0; d < data.length; d++) {
     var item = this._normalizeItem(data[d]);

     // Skip items which were pre-loaded, only merge the data
     if ($.inArray(item.id, existingIds) >= 0) {
       var $existingOption = $existing.filter(onlyItem(item));

       var existingData = this.item($existingOption);
       var newData = $.extend(true, {}, item, existingData);

       var $newOption = this.option(newData);

       $existingOption.replaceWith($newOption);

       continue;
     }

     var $option = this.option(item);

     if (item.children) {
       var $children = this.convertToOptions(item.children);

       Utils.appendMany($option, $children);
     }

     $options.push($option);
   }

   return $options;
 };

 return ArrayAdapter;
});

S2.define('select2/data/ajax',[
 './array',
 '../utils',
 'jquery'
], function (ArrayAdapter, Utils, $) {
 function AjaxAdapter ($element, options) {
   this.ajaxOptions = this._applyDefaults(options.get('ajax'));

   if (this.ajaxOptions.processResults != null) {
     this.processResults = this.ajaxOptions.processResults;
   }

   AjaxAdapter.__super__.constructor.call(this, $element, options);
 }

 Utils.Extend(AjaxAdapter, ArrayAdapter);

 AjaxAdapter.prototype._applyDefaults = function (options) {
   var defaults = {
     data: function (params) {
       return $.extend({}, params, {
         q: params.term
       });
     },
     transport: function (params, success, failure) {
       var $request = $.ajax(params);

       $request.then(success);
       $request.fail(failure);

       return $request;
     }
   };

   return $.extend({}, defaults, options, true);
 };

 AjaxAdapter.prototype.processResults = function (results) {
   return results;
 };

 AjaxAdapter.prototype.query = function (params, callback) {
   var matches = [];
   var self = this;

   if (this._request != null) {
     // JSONP requests cannot always be aborted
     if ($.isFunction(this._request.abort)) {
       this._request.abort();
     }

     this._request = null;
   }

   var options = $.extend({
     type: 'GET'
   }, this.ajaxOptions);

   if (typeof options.url === 'function') {
     options.url = options.url.call(this.$element, params);
   }

   if (typeof options.data === 'function') {
     options.data = options.data.call(this.$element, params);
   }

   function request () {
     var $request = options.transport(options, function (data) {
       var results = self.processResults(data, params);

       if (self.options.get('debug') && window.console && console.error) {
         // Check to make sure that the response included a `results` key.
         if (!results || !results.results || !$.isArray(results.results)) {
           console.error(
             'Select2: The AJAX results did not return an array in the ' +
             '`results` key of the response.'
           );
         }
       }

       callback(results);
     }, function () {
       // Attempt to detect if a request was aborted
       // Only works if the transport exposes a status property
       if ('status' in $request &&
           ($request.status === 0 || $request.status === '0')) {
         return;
       }

       self.trigger('results:message', {
         message: 'errorLoading'
       });
     });

     self._request = $request;
   }

   if (this.ajaxOptions.delay && params.term != null) {
     if (this._queryTimeout) {
       window.clearTimeout(this._queryTimeout);
     }

     this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
   } else {
     request();
   }
 };

 return AjaxAdapter;
});

S2.define('select2/data/tags',[
 'jquery'
], function ($) {
 function Tags (decorated, $element, options) {
   var tags = options.get('tags');

   var createTag = options.get('createTag');

   if (createTag !== undefined) {
     this.createTag = createTag;
   }

   var insertTag = options.get('insertTag');

   if (insertTag !== undefined) {
       this.insertTag = insertTag;
   }

   decorated.call(this, $element, options);

   if ($.isArray(tags)) {
     for (var t = 0; t < tags.length; t++) {
       var tag = tags[t];
       var item = this._normalizeItem(tag);

       var $option = this.option(item);

       this.$element.append($option);
     }
   }
 }

 Tags.prototype.query = function (decorated, params, callback) {
   var self = this;

   this._removeOldTags();

   if (params.term == null || params.page != null) {
     decorated.call(this, params, callback);
     return;
   }

   function wrapper (obj, child) {
     var data = obj.results;

     for (var i = 0; i < data.length; i++) {
       var option = data[i];

       var checkChildren = (
         option.children != null &&
         !wrapper({
           results: option.children
         }, true)
       );

       var optionText = (option.text || '').toUpperCase();
       var paramsTerm = (params.term || '').toUpperCase();

       var checkText = optionText === paramsTerm;

       if (checkText || checkChildren) {
         if (child) {
           return false;
         }

         obj.data = data;
         callback(obj);

         return;
       }
     }

     if (child) {
       return true;
     }

     var tag = self.createTag(params);

     if (tag != null) {
       var $option = self.option(tag);
       $option.attr('data-select2-tag', true);

       self.addOptions([$option]);

       self.insertTag(data, tag);
     }

     obj.results = data;

     callback(obj);
   }

   decorated.call(this, params, wrapper);
 };

 Tags.prototype.createTag = function (decorated, params) {
   var term = $.trim(params.term);

   if (term === '') {
     return null;
   }

   return {
     id: term,
     text: term
   };
 };

 Tags.prototype.insertTag = function (_, data, tag) {
   data.unshift(tag);
 };

 Tags.prototype._removeOldTags = function (_) {
   var $options = this.$element.find('option[data-select2-tag]');

   $options.each(function () {
     if (this.selected) {
       return;
     }

     $(this).remove();
   });
 };

 return Tags;
});

S2.define('select2/data/tokenizer',[
 'jquery'
], function ($) {
 function Tokenizer (decorated, $element, options) {
   var tokenizer = options.get('tokenizer');

   if (tokenizer !== undefined) {
     this.tokenizer = tokenizer;
   }

   decorated.call(this, $element, options);
 }

 Tokenizer.prototype.bind = function (decorated, container, $container) {
   decorated.call(this, container, $container);

   this.$search =  container.dropdown.$search || container.selection.$search ||
     $container.find('.select2-search__field');
 };

 Tokenizer.prototype.query = function (decorated, params, callback) {
   var self = this;

   function createAndSelect (data) {
     // Normalize the data object so we can use it for checks
     var item = self._normalizeItem(data);

     // Check if the data object already exists as a tag
     // Select it if it doesn't
     var $existingOptions = self.$element.find('option').filter(function () {
       return $(this).val() === item.id;
     });

     // If an existing option wasn't found for it, create the option
     if (!$existingOptions.length) {
       var $option = self.option(item);
       $option.attr('data-select2-tag', true);

       self._removeOldTags();
       self.addOptions([$option]);
     }

     // Select the item, now that we know there is an option for it
     select(item);
   }

   function select (data) {
     self.trigger('select', {
       data: data
     });
   }

   params.term = params.term || '';

   var tokenData = this.tokenizer(params, this.options, createAndSelect);

   if (tokenData.term !== params.term) {
     // Replace the search term if we have the search box
     if (this.$search.length) {
       this.$search.val(tokenData.term);
       this.$search.trigger('focus');
     }

     params.term = tokenData.term;
   }

   decorated.call(this, params, callback);
 };

 Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
   var separators = options.get('tokenSeparators') || [];
   var term = params.term;
   var i = 0;

   var createTag = this.createTag || function (params) {
     return {
       id: params.term,
       text: params.term
     };
   };

   while (i < term.length) {
     var termChar = term[i];

     if ($.inArray(termChar, separators) === -1) {
       i++;

       continue;
     }

     var part = term.substr(0, i);
     var partParams = $.extend({}, params, {
       term: part
     });

     var data = createTag(partParams);

     if (data == null) {
       i++;
       continue;
     }

     callback(data);

     // Reset the term to not include the tokenized portion
     term = term.substr(i + 1) || '';
     i = 0;
   }

   return {
     term: term
   };
 };

 return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
 function MinimumInputLength (decorated, $e, options) {
   this.minimumInputLength = options.get('minimumInputLength');

   decorated.call(this, $e, options);
 }

 MinimumInputLength.prototype.query = function (decorated, params, callback) {
   params.term = params.term || '';

   if (params.term.length < this.minimumInputLength) {
     this.trigger('results:message', {
       message: 'inputTooShort',
       args: {
         minimum: this.minimumInputLength,
         input: params.term,
         params: params
       }
     });

     return;
   }

   decorated.call(this, params, callback);
 };

 return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
 function MaximumInputLength (decorated, $e, options) {
   this.maximumInputLength = options.get('maximumInputLength');

   decorated.call(this, $e, options);
 }

 MaximumInputLength.prototype.query = function (decorated, params, callback) {
   params.term = params.term || '';

   if (this.maximumInputLength > 0 &&
       params.term.length > this.maximumInputLength) {
     this.trigger('results:message', {
       message: 'inputTooLong',
       args: {
         maximum: this.maximumInputLength,
         input: params.term,
         params: params
       }
     });

     return;
   }

   decorated.call(this, params, callback);
 };

 return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
 function MaximumSelectionLength (decorated, $e, options) {
   this.maximumSelectionLength = options.get('maximumSelectionLength');

   decorated.call(this, $e, options);
 }

 MaximumSelectionLength.prototype.bind =
   function (decorated, container, $container) {
     var self = this;

     decorated.call(this, container, $container);

     container.on('select', function () {
       self._checkIfMaximumSelected();
     });
 };

 MaximumSelectionLength.prototype.query =
   function (decorated, params, callback) {
     var self = this;

     this._checkIfMaximumSelected(function () {
       decorated.call(self, params, callback);
     });
 };

 MaximumSelectionLength.prototype._checkIfMaximumSelected =
   function (_, successCallback) {
     var self = this;

     this.current(function (currentData) {
       var count = currentData != null ? currentData.length : 0;
       if (self.maximumSelectionLength > 0 &&
         count >= self.maximumSelectionLength) {
         self.trigger('results:message', {
           message: 'maximumSelected',
           args: {
             maximum: self.maximumSelectionLength
           }
         });
         return;
       }

       if (successCallback) {
         successCallback();
       }
     });
 };

 return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
 'jquery',
 './utils'
], function ($, Utils) {
 function Dropdown ($element, options) {
   this.$element = $element;
   this.options = options;

   Dropdown.__super__.constructor.call(this);
 }

 Utils.Extend(Dropdown, Utils.Observable);

 Dropdown.prototype.render = function () {
   var $dropdown = $(
     '<span class="select2-dropdown">' +
       '<span class="select2-results"></span>' +
     '</span>'
   );

   $dropdown.attr('dir', this.options.get('dir'));

   this.$dropdown = $dropdown;

   return $dropdown;
 };

 Dropdown.prototype.bind = function () {
   // Should be implemented in subclasses
 };

 Dropdown.prototype.position = function ($dropdown, $container) {
   // Should be implemented in subclasses
 };

 Dropdown.prototype.destroy = function () {
   // Remove the dropdown from the DOM
   this.$dropdown.remove();
 };

 return Dropdown;
});

S2.define('select2/dropdown/search',[
 'jquery',
 '../utils'
], function ($, Utils) {
 function Search () { }

 Search.prototype.render = function (decorated) {
   var $rendered = decorated.call(this);

   var $search = $(
     '<span class="select2-search select2-search--dropdown">' +
       '<input class="select2-search__field" type="search" tabindex="-1"' +
       ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
       ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
     '</span>'
   );

   this.$searchContainer = $search;
   this.$search = $search.find('input');

   $rendered.prepend($search);

   return $rendered;
 };

 Search.prototype.bind = function (decorated, container, $container) {
   var self = this;

   var resultsId = container.id + '-results';

   decorated.call(this, container, $container);

   this.$search.on('keydown', function (evt) {
     self.trigger('keypress', evt);

     self._keyUpPrevented = evt.isDefaultPrevented();
   });

   // Workaround for browsers which do not support the `input` event
   // This will prevent double-triggering of events for browsers which support
   // both the `keyup` and `input` events.
   this.$search.on('input', function (evt) {
     // Unbind the duplicated `keyup` event
     $(this).off('keyup');
   });

   this.$search.on('keyup input', function (evt) {
     self.handleSearch(evt);
   });

   container.on('open', function () {
     self.$search.attr('tabindex', 0);
     self.$search.attr('aria-controls', resultsId);

     self.$search.trigger('focus');

     window.setTimeout(function () {
       self.$search.trigger('focus');
     }, 0);
   });

   container.on('close', function () {
     self.$search.attr('tabindex', -1);
     self.$search.removeAttr('aria-controls');
     self.$search.removeAttr('aria-activedescendant');

     self.$search.val('');
     self.$search.trigger('blur');
   });

   container.on('focus', function () {
     if (!container.isOpen()) {
       self.$search.trigger('focus');
     }
   });

   container.on('results:all', function (params) {
     if (params.query.term == null || params.query.term === '') {
       var showSearch = self.showSearch(params);

       if (showSearch) {
         self.$searchContainer.removeClass('select2-search--hide');
       } else {
         self.$searchContainer.addClass('select2-search--hide');
       }
     }
   });

   container.on('results:focus', function (params) {
     if (params.data._resultId) {
       self.$search.attr('aria-activedescendant', params.data._resultId);
     } else {
       self.$search.removeAttr('aria-activedescendant');
     }
   });
 };

 Search.prototype.handleSearch = function (evt) {
   if (!this._keyUpPrevented) {
     var input = this.$search.val();

     this.trigger('query', {
       term: input
     });
   }

   this._keyUpPrevented = false;
 };

 Search.prototype.showSearch = function (_, params) {
   return true;
 };

 return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
 function HidePlaceholder (decorated, $element, options, dataAdapter) {
   this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

   decorated.call(this, $element, options, dataAdapter);
 }

 HidePlaceholder.prototype.append = function (decorated, data) {
   data.results = this.removePlaceholder(data.results);

   decorated.call(this, data);
 };

 HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
   if (typeof placeholder === 'string') {
     placeholder = {
       id: '',
       text: placeholder
     };
   }

   return placeholder;
 };

 HidePlaceholder.prototype.removePlaceholder = function (_, data) {
   var modifiedData = data.slice(0);

   for (var d = data.length - 1; d >= 0; d--) {
     var item = data[d];

     if (this.placeholder.id === item.id) {
       modifiedData.splice(d, 1);
     }
   }

   return modifiedData;
 };

 return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
 'jquery'
], function ($) {
 function InfiniteScroll (decorated, $element, options, dataAdapter) {
   this.lastParams = {};

   decorated.call(this, $element, options, dataAdapter);

   this.$loadingMore = this.createLoadingMore();
   this.loading = false;
 }

 InfiniteScroll.prototype.append = function (decorated, data) {
   this.$loadingMore.remove();
   this.loading = false;

   decorated.call(this, data);

   if (this.showLoadingMore(data)) {
     this.$results.append(this.$loadingMore);
     this.loadMoreIfNeeded();
   }
 };

 InfiniteScroll.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('query', function (params) {
     self.lastParams = params;
     self.loading = true;
   });

   container.on('query:append', function (params) {
     self.lastParams = params;
     self.loading = true;
   });

   this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
 };

 InfiniteScroll.prototype.loadMoreIfNeeded = function () {
   var isLoadMoreVisible = $.contains(
     document.documentElement,
     this.$loadingMore[0]
   );

   if (this.loading || !isLoadMoreVisible) {
     return;
   }

   var currentOffset = this.$results.offset().top +
     this.$results.outerHeight(false);
   var loadingMoreOffset = this.$loadingMore.offset().top +
     this.$loadingMore.outerHeight(false);

   if (currentOffset + 50 >= loadingMoreOffset) {
     this.loadMore();
   }
 };

 InfiniteScroll.prototype.loadMore = function () {
   this.loading = true;

   var params = $.extend({}, {page: 1}, this.lastParams);

   params.page++;

   this.trigger('query:append', params);
 };

 InfiniteScroll.prototype.showLoadingMore = function (_, data) {
   return data.pagination && data.pagination.more;
 };

 InfiniteScroll.prototype.createLoadingMore = function () {
   var $option = $(
     '<li ' +
     'class="select2-results__option select2-results__option--load-more"' +
     'role="option" aria-disabled="true"></li>'
   );

   var message = this.options.get('translations').get('loadingMore');

   $option.html(message(this.lastParams));

   return $option;
 };

 return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
 'jquery',
 '../utils'
], function ($, Utils) {
 function AttachBody (decorated, $element, options) {
   this.$dropdownParent = $(options.get('dropdownParent') || document.body);

   decorated.call(this, $element, options);
 }

 AttachBody.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('open', function () {
     self._showDropdown();
     self._attachPositioningHandler(container);

     // Must bind after the results handlers to ensure correct sizing
     self._bindContainerResultHandlers(container);
   });

   container.on('close', function () {
     self._hideDropdown();
     self._detachPositioningHandler(container);
   });

   this.$dropdownContainer.on('mousedown', function (evt) {
     evt.stopPropagation();
   });
 };

 AttachBody.prototype.destroy = function (decorated) {
   decorated.call(this);

   this.$dropdownContainer.remove();
 };

 AttachBody.prototype.position = function (decorated, $dropdown, $container) {
   // Clone all of the container classes
   $dropdown.attr('class', $container.attr('class'));

   $dropdown.removeClass('select2');
   $dropdown.addClass('select2-container--open');

   $dropdown.css({
     position: 'absolute',
     top: -999999
   });

   this.$container = $container;
 };

 AttachBody.prototype.render = function (decorated) {
   var $container = $('<span></span>');

   var $dropdown = decorated.call(this);
   $container.append($dropdown);

   this.$dropdownContainer = $container;

   return $container;
 };

 AttachBody.prototype._hideDropdown = function (decorated) {
   this.$dropdownContainer.detach();
 };

 AttachBody.prototype._bindContainerResultHandlers =
     function (decorated, container) {

   // These should only be bound once
   if (this._containerResultsHandlersBound) {
     return;
   }

   var self = this;

   container.on('results:all', function () {
     self._positionDropdown();
     self._resizeDropdown();
   });

   container.on('results:append', function () {
     self._positionDropdown();
     self._resizeDropdown();
   });

   container.on('results:message', function () {
     self._positionDropdown();
     self._resizeDropdown();
   });

   container.on('select', function () {
     self._positionDropdown();
     self._resizeDropdown();
   });

   container.on('unselect', function () {
     self._positionDropdown();
     self._resizeDropdown();
   });

   this._containerResultsHandlersBound = true;
 };

 AttachBody.prototype._attachPositioningHandler =
     function (decorated, container) {
   var self = this;

   var scrollEvent = 'scroll.select2.' + container.id;
   var resizeEvent = 'resize.select2.' + container.id;
   var orientationEvent = 'orientationchange.select2.' + container.id;

   var $watchers = this.$container.parents().filter(Utils.hasScroll);
   $watchers.each(function () {
     Utils.StoreData(this, 'select2-scroll-position', {
       x: $(this).scrollLeft(),
       y: $(this).scrollTop()
     });
   });

   $watchers.on(scrollEvent, function (ev) {
     var position = Utils.GetData(this, 'select2-scroll-position');
     $(this).scrollTop(position.y);
   });

   $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
     function (e) {
     self._positionDropdown();
     self._resizeDropdown();
   });
 };

 AttachBody.prototype._detachPositioningHandler =
     function (decorated, container) {
   var scrollEvent = 'scroll.select2.' + container.id;
   var resizeEvent = 'resize.select2.' + container.id;
   var orientationEvent = 'orientationchange.select2.' + container.id;

   var $watchers = this.$container.parents().filter(Utils.hasScroll);
   $watchers.off(scrollEvent);

   $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
 };

 AttachBody.prototype._positionDropdown = function () {
   var $window = $(window);

   var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
   var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

   var newDirection = null;

   var offset = this.$container.offset();

   offset.bottom = offset.top + this.$container.outerHeight(false);

   var container = {
     height: this.$container.outerHeight(false)
   };

   container.top = offset.top;
   container.bottom = offset.top + container.height;

   var dropdown = {
     height: this.$dropdown.outerHeight(false)
   };

   var viewport = {
     top: $window.scrollTop(),
     bottom: $window.scrollTop() + $window.height()
   };

   var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
   var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

   var css = {
     left: offset.left,
     top: container.bottom
   };

   // Determine what the parent element is to use for calculating the offset
   var $offsetParent = this.$dropdownParent;

   // For statically positioned elements, we need to get the element
   // that is determining the offset
   if ($offsetParent.css('position') === 'static') {
     $offsetParent = $offsetParent.offsetParent();
   }

   var parentOffset = {
     top: 0,
     left: 0
   };

   if (
     $.contains(document.body, $offsetParent[0]) ||
     $offsetParent[0].isConnected
     ) {
     parentOffset = $offsetParent.offset();
   }

   css.top -= parentOffset.top;
   css.left -= parentOffset.left;

   if (!isCurrentlyAbove && !isCurrentlyBelow) {
     newDirection = 'below';
   }

   if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
     newDirection = 'above';
   } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
     newDirection = 'below';
   }

   if (newDirection == 'above' ||
     (isCurrentlyAbove && newDirection !== 'below')) {
     css.top = container.top - parentOffset.top - dropdown.height;
   }

   if (newDirection != null) {
     this.$dropdown
       .removeClass('select2-dropdown--below select2-dropdown--above')
       .addClass('select2-dropdown--' + newDirection);
     this.$container
       .removeClass('select2-container--below select2-container--above')
       .addClass('select2-container--' + newDirection);
   }

   this.$dropdownContainer.css(css);
 };

 AttachBody.prototype._resizeDropdown = function () {
   var css = {
     width: this.$container.outerWidth(false) + 'px'
   };

   if (this.options.get('dropdownAutoWidth')) {
     css.minWidth = css.width;
     css.position = 'relative';
     css.width = 'auto';
   }

   this.$dropdown.css(css);
 };

 AttachBody.prototype._showDropdown = function (decorated) {
   this.$dropdownContainer.appendTo(this.$dropdownParent);

   this._positionDropdown();
   this._resizeDropdown();
 };

 return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
 function countResults (data) {
   var count = 0;

   for (var d = 0; d < data.length; d++) {
     var item = data[d];

     if (item.children) {
       count += countResults(item.children);
     } else {
       count++;
     }
   }

   return count;
 }

 function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
   this.minimumResultsForSearch = options.get('minimumResultsForSearch');

   if (this.minimumResultsForSearch < 0) {
     this.minimumResultsForSearch = Infinity;
   }

   decorated.call(this, $element, options, dataAdapter);
 }

 MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
   if (countResults(params.data.results) < this.minimumResultsForSearch) {
     return false;
   }

   return decorated.call(this, params);
 };

 return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
 '../utils'
], function (Utils) {
 function SelectOnClose () { }

 SelectOnClose.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('close', function (params) {
     self._handleSelectOnClose(params);
   });
 };

 SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
   if (params && params.originalSelect2Event != null) {
     var event = params.originalSelect2Event;

     // Don't select an item if the close event was triggered from a select or
     // unselect event
     if (event._type === 'select' || event._type === 'unselect') {
       return;
     }
   }

   var $highlightedResults = this.getHighlightedResults();

   // Only select highlighted results
   if ($highlightedResults.length < 1) {
     return;
   }

   var data = Utils.GetData($highlightedResults[0], 'data');

   // Don't re-select already selected resulte
   if (
     (data.element != null && data.element.selected) ||
     (data.element == null && data.selected)
   ) {
     return;
   }

   this.trigger('select', {
       data: data
   });
 };

 return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
 function CloseOnSelect () { }

 CloseOnSelect.prototype.bind = function (decorated, container, $container) {
   var self = this;

   decorated.call(this, container, $container);

   container.on('select', function (evt) {
     self._selectTriggered(evt);
   });

   container.on('unselect', function (evt) {
     self._selectTriggered(evt);
   });
 };

 CloseOnSelect.prototype._selectTriggered = function (_, evt) {
   var originalEvent = evt.originalEvent;

   // Don't close if the control key is being held
   if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
     return;
   }

   this.trigger('close', {
     originalEvent: originalEvent,
     originalSelect2Event: evt
   });
 };

 return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
 // English
 return {
   errorLoading: function () {
     return 'The results could not be loaded.';
   },
   inputTooLong: function (args) {
     var overChars = args.input.length - args.maximum;

     var message = 'Please delete ' + overChars + ' character';

     if (overChars != 1) {
       message += 's';
     }

     return message;
   },
   inputTooShort: function (args) {
     var remainingChars = args.minimum - args.input.length;

     var message = 'Please enter ' + remainingChars + ' or more characters';

     return message;
   },
   loadingMore: function () {
     return 'Loading more results…';
   },
   maximumSelected: function (args) {
     var message = 'You can only select ' + args.maximum + ' item';

     if (args.maximum != 1) {
       message += 's';
     }

     return message;
   },
   noResults: function () {
     return 'No results found';
   },
   searching: function () {
     return 'Searching…';
   },
   removeAllItems: function () {
     return 'Remove all items';
   }
 };
});

S2.define('select2/defaults',[
 'jquery',
 'require',

 './results',

 './selection/single',
 './selection/multiple',
 './selection/placeholder',
 './selection/allowClear',
 './selection/search',
 './selection/eventRelay',

 './utils',
 './translation',
 './diacritics',

 './data/select',
 './data/array',
 './data/ajax',
 './data/tags',
 './data/tokenizer',
 './data/minimumInputLength',
 './data/maximumInputLength',
 './data/maximumSelectionLength',

 './dropdown',
 './dropdown/search',
 './dropdown/hidePlaceholder',
 './dropdown/infiniteScroll',
 './dropdown/attachBody',
 './dropdown/minimumResultsForSearch',
 './dropdown/selectOnClose',
 './dropdown/closeOnSelect',

 './i18n/en'
], function ($, require,

            ResultsList,

            SingleSelection, MultipleSelection, Placeholder, AllowClear,
            SelectionSearch, EventRelay,

            Utils, Translation, DIACRITICS,

            SelectData, ArrayData, AjaxData, Tags, Tokenizer,
            MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

            Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
            AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

            EnglishTranslation) {
 function Defaults () {
   this.reset();
 }

 Defaults.prototype.apply = function (options) {
   options = $.extend(true, {}, this.defaults, options);

   if (options.dataAdapter == null) {
     if (options.ajax != null) {
       options.dataAdapter = AjaxData;
     } else if (options.data != null) {
       options.dataAdapter = ArrayData;
     } else {
       options.dataAdapter = SelectData;
     }

     if (options.minimumInputLength > 0) {
       options.dataAdapter = Utils.Decorate(
         options.dataAdapter,
         MinimumInputLength
       );
     }

     if (options.maximumInputLength > 0) {
       options.dataAdapter = Utils.Decorate(
         options.dataAdapter,
         MaximumInputLength
       );
     }

     if (options.maximumSelectionLength > 0) {
       options.dataAdapter = Utils.Decorate(
         options.dataAdapter,
         MaximumSelectionLength
       );
     }

     if (options.tags) {
       options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
     }

     if (options.tokenSeparators != null || options.tokenizer != null) {
       options.dataAdapter = Utils.Decorate(
         options.dataAdapter,
         Tokenizer
       );
     }

     if (options.query != null) {
       var Query = require(options.amdBase + 'compat/query');

       options.dataAdapter = Utils.Decorate(
         options.dataAdapter,
         Query
       );
     }

     if (options.initSelection != null) {
       var InitSelection = require(options.amdBase + 'compat/initSelection');

       options.dataAdapter = Utils.Decorate(
         options.dataAdapter,
         InitSelection
       );
     }
   }

   if (options.resultsAdapter == null) {
     options.resultsAdapter = ResultsList;

     if (options.ajax != null) {
       options.resultsAdapter = Utils.Decorate(
         options.resultsAdapter,
         InfiniteScroll
       );
     }

     if (options.placeholder != null) {
       options.resultsAdapter = Utils.Decorate(
         options.resultsAdapter,
         HidePlaceholder
       );
     }

     if (options.selectOnClose) {
       options.resultsAdapter = Utils.Decorate(
         options.resultsAdapter,
         SelectOnClose
       );
     }
   }

   if (options.dropdownAdapter == null) {
     if (options.multiple) {
       options.dropdownAdapter = Dropdown;
     } else {
       var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

       options.dropdownAdapter = SearchableDropdown;
     }

     if (options.minimumResultsForSearch !== 0) {
       options.dropdownAdapter = Utils.Decorate(
         options.dropdownAdapter,
         MinimumResultsForSearch
       );
     }

     if (options.closeOnSelect) {
       options.dropdownAdapter = Utils.Decorate(
         options.dropdownAdapter,
         CloseOnSelect
       );
     }

     if (
       options.dropdownCssClass != null ||
       options.dropdownCss != null ||
       options.adaptDropdownCssClass != null
     ) {
       var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

       options.dropdownAdapter = Utils.Decorate(
         options.dropdownAdapter,
         DropdownCSS
       );
     }

     options.dropdownAdapter = Utils.Decorate(
       options.dropdownAdapter,
       AttachBody
     );
   }

   if (options.selectionAdapter == null) {
     if (options.multiple) {
       options.selectionAdapter = MultipleSelection;
     } else {
       options.selectionAdapter = SingleSelection;
     }

     // Add the placeholder mixin if a placeholder was specified
     if (options.placeholder != null) {
       options.selectionAdapter = Utils.Decorate(
         options.selectionAdapter,
         Placeholder
       );
     }

     if (options.allowClear) {
       options.selectionAdapter = Utils.Decorate(
         options.selectionAdapter,
         AllowClear
       );
     }

     if (options.multiple) {
       options.selectionAdapter = Utils.Decorate(
         options.selectionAdapter,
         SelectionSearch
       );
     }

     if (
       options.containerCssClass != null ||
       options.containerCss != null ||
       options.adaptContainerCssClass != null
     ) {
       var ContainerCSS = require(options.amdBase + 'compat/containerCss');

       options.selectionAdapter = Utils.Decorate(
         options.selectionAdapter,
         ContainerCSS
       );
     }

     options.selectionAdapter = Utils.Decorate(
       options.selectionAdapter,
       EventRelay
     );
   }

   // If the defaults were not previously applied from an element, it is
   // possible for the language option to have not been resolved
   options.language = this._resolveLanguage(options.language);

   // Always fall back to English since it will always be complete
   options.language.push('en');

   var uniqueLanguages = [];

   for (var l = 0; l < options.language.length; l++) {
     var language = options.language[l];

     if (uniqueLanguages.indexOf(language) === -1) {
       uniqueLanguages.push(language);
     }
   }

   options.language = uniqueLanguages;

   options.translations = this._processTranslations(
     options.language,
     options.debug
   );

   return options;
 };

 Defaults.prototype.reset = function () {
   function stripDiacritics (text) {
     // Used 'uni range + named function' from http://jsperf.com/diacritics/18
     function match(a) {
       return DIACRITICS[a] || a;
     }

     return text.replace(/[^\u0000-\u007E]/g, match);
   }

   function matcher (params, data) {
     // Always return the object if there is nothing to compare
     if ($.trim(params.term) === '') {
       return data;
     }

     // Do a recursive check for options with children
     if (data.children && data.children.length > 0) {
       // Clone the data object if there are children
       // This is required as we modify the object to remove any non-matches
       var match = $.extend(true, {}, data);

       // Check each child of the option
       for (var c = data.children.length - 1; c >= 0; c--) {
         var child = data.children[c];

         var matches = matcher(params, child);

         // If there wasn't a match, remove the object in the array
         if (matches == null) {
           match.children.splice(c, 1);
         }
       }

       // If any children matched, return the new object
       if (match.children.length > 0) {
         return match;
       }

       // If there were no matching children, check just the plain object
       return matcher(params, match);
     }

     var original = stripDiacritics(data.text).toUpperCase();
     var term = stripDiacritics(params.term).toUpperCase();

     // Check if the text contains the term
     if (original.indexOf(term) > -1) {
       return data;
     }

     // If it doesn't contain the term, don't return anything
     return null;
   }

   this.defaults = {
     amdBase: './',
     amdLanguageBase: './i18n/',
     closeOnSelect: true,
     debug: false,
     dropdownAutoWidth: false,
     escapeMarkup: Utils.escapeMarkup,
     language: {},
     matcher: matcher,
     minimumInputLength: 0,
     maximumInputLength: 0,
     maximumSelectionLength: 0,
     minimumResultsForSearch: 0,
     selectOnClose: false,
     scrollAfterSelect: false,
     sorter: function (data) {
       return data;
     },
     templateResult: function (result) {
       return result.text;
     },
     templateSelection: function (selection) {
       return selection.text;
     },
     theme: 'default',
     width: 'resolve'
   };
 };

 Defaults.prototype.applyFromElement = function (options, $element) {
   var optionLanguage = options.language;
   var defaultLanguage = this.defaults.language;
   var elementLanguage = $element.prop('lang');
   var parentLanguage = $element.closest('[lang]').prop('lang');

   var languages = Array.prototype.concat.call(
     this._resolveLanguage(elementLanguage),
     this._resolveLanguage(optionLanguage),
     this._resolveLanguage(defaultLanguage),
     this._resolveLanguage(parentLanguage)
   );

   options.language = languages;

   return options;
 };

 Defaults.prototype._resolveLanguage = function (language) {
   if (!language) {
     return [];
   }

   if ($.isEmptyObject(language)) {
     return [];
   }

   if ($.isPlainObject(language)) {
     return [language];
   }

   var languages;

   if (!$.isArray(language)) {
     languages = [language];
   } else {
     languages = language;
   }

   var resolvedLanguages = [];

   for (var l = 0; l < languages.length; l++) {
     resolvedLanguages.push(languages[l]);

     if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
       // Extract the region information if it is included
       var languageParts = languages[l].split('-');
       var baseLanguage = languageParts[0];

       resolvedLanguages.push(baseLanguage);
     }
   }

   return resolvedLanguages;
 };

 Defaults.prototype._processTranslations = function (languages, debug) {
   var translations = new Translation();

   for (var l = 0; l < languages.length; l++) {
     var languageData = new Translation();

     var language = languages[l];

     if (typeof language === 'string') {
       try {
         // Try to load it with the original name
         languageData = Translation.loadPath(language);
       } catch (e) {
         try {
           // If we couldn't load it, check if it wasn't the full path
           language = this.defaults.amdLanguageBase + language;
           languageData = Translation.loadPath(language);
         } catch (ex) {
           // The translation could not be loaded at all. Sometimes this is
           // because of a configuration problem, other times this can be
           // because of how Select2 helps load all possible translation files
           if (debug && window.console && console.warn) {
             console.warn(
               'Select2: The language file for "' + language + '" could ' +
               'not be automatically loaded. A fallback will be used instead.'
             );
           }
         }
       }
     } else if ($.isPlainObject(language)) {
       languageData = new Translation(language);
     } else {
       languageData = language;
     }

     translations.extend(languageData);
   }

   return translations;
 };

 Defaults.prototype.set = function (key, value) {
   var camelKey = $.camelCase(key);

   var data = {};
   data[camelKey] = value;

   var convertedData = Utils._convertData(data);

   $.extend(true, this.defaults, convertedData);
 };

 var defaults = new Defaults();

 return defaults;
});

S2.define('select2/options',[
 'require',
 'jquery',
 './defaults',
 './utils'
], function (require, $, Defaults, Utils) {
 function Options (options, $element) {
   this.options = options;

   if ($element != null) {
     this.fromElement($element);
   }

   if ($element != null) {
     this.options = Defaults.applyFromElement(this.options, $element);
   }

   this.options = Defaults.apply(this.options);

   if ($element && $element.is('input')) {
     var InputCompat = require(this.get('amdBase') + 'compat/inputData');

     this.options.dataAdapter = Utils.Decorate(
       this.options.dataAdapter,
       InputCompat
     );
   }
 }

 Options.prototype.fromElement = function ($e) {
   var excludedData = ['select2'];

   if (this.options.multiple == null) {
     this.options.multiple = $e.prop('multiple');
   }

   if (this.options.disabled == null) {
     this.options.disabled = $e.prop('disabled');
   }

   if (this.options.dir == null) {
     if ($e.prop('dir')) {
       this.options.dir = $e.prop('dir');
     } else if ($e.closest('[dir]').prop('dir')) {
       this.options.dir = $e.closest('[dir]').prop('dir');
     } else {
       this.options.dir = 'ltr';
     }
   }

   $e.prop('disabled', this.options.disabled);
   $e.prop('multiple', this.options.multiple);

   if (Utils.GetData($e[0], 'select2Tags')) {
     if (this.options.debug && window.console && console.warn) {
       console.warn(
         'Select2: The `data-select2-tags` attribute has been changed to ' +
         'use the `data-data` and `data-tags="true"` attributes and will be ' +
         'removed in future versions of Select2.'
       );
     }

     Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
     Utils.StoreData($e[0], 'tags', true);
   }

   if (Utils.GetData($e[0], 'ajaxUrl')) {
     if (this.options.debug && window.console && console.warn) {
       console.warn(
         'Select2: The `data-ajax-url` attribute has been changed to ' +
         '`data-ajax--url` and support for the old attribute will be removed' +
         ' in future versions of Select2.'
       );
     }

     $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
     Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
   }

   var dataset = {};

   function upperCaseLetter(_, letter) {
     return letter.toUpperCase();
   }

   // Pre-load all of the attributes which are prefixed with `data-`
   for (var attr = 0; attr < $e[0].attributes.length; attr++) {
     var attributeName = $e[0].attributes[attr].name;
     var prefix = 'data-';

     if (attributeName.substr(0, prefix.length) == prefix) {
       // Get the contents of the attribute after `data-`
       var dataName = attributeName.substring(prefix.length);

       // Get the data contents from the consistent source
       // This is more than likely the jQuery data helper
       var dataValue = Utils.GetData($e[0], dataName);

       // camelCase the attribute name to match the spec
       var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

       // Store the data attribute contents into the dataset since
       dataset[camelDataName] = dataValue;
     }
   }

   // Prefer the element's `dataset` attribute if it exists
   // jQuery 1.x does not correctly handle data attributes with multiple dashes
   if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
     dataset = $.extend(true, {}, $e[0].dataset, dataset);
   }

   // Prefer our internal data cache if it exists
   var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

   data = Utils._convertData(data);

   for (var key in data) {
     if ($.inArray(key, excludedData) > -1) {
       continue;
     }

     if ($.isPlainObject(this.options[key])) {
       $.extend(this.options[key], data[key]);
     } else {
       this.options[key] = data[key];
     }
   }

   return this;
 };

 Options.prototype.get = function (key) {
   return this.options[key];
 };

 Options.prototype.set = function (key, val) {
   this.options[key] = val;
 };

 return Options;
});

S2.define('select2/core',[
 'jquery',
 './options',
 './utils',
 './keys'
], function ($, Options, Utils, KEYS) {
 var Select2 = function ($element, options) {
   if (Utils.GetData($element[0], 'select2') != null) {
     Utils.GetData($element[0], 'select2').destroy();
   }

   this.$element = $element;

   this.id = this._generateId($element);

   options = options || {};

   this.options = new Options(options, $element);

   Select2.__super__.constructor.call(this);

   // Set up the tabindex

   var tabindex = $element.attr('tabindex') || 0;
   Utils.StoreData($element[0], 'old-tabindex', tabindex);
   $element.attr('tabindex', '-1');

   // Set up containers and adapters

   var DataAdapter = this.options.get('dataAdapter');
   this.dataAdapter = new DataAdapter($element, this.options);

   var $container = this.render();

   this._placeContainer($container);

   var SelectionAdapter = this.options.get('selectionAdapter');
   this.selection = new SelectionAdapter($element, this.options);
   this.$selection = this.selection.render();

   this.selection.position(this.$selection, $container);

   var DropdownAdapter = this.options.get('dropdownAdapter');
   this.dropdown = new DropdownAdapter($element, this.options);
   this.$dropdown = this.dropdown.render();

   this.dropdown.position(this.$dropdown, $container);

   var ResultsAdapter = this.options.get('resultsAdapter');
   this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
   this.$results = this.results.render();

   this.results.position(this.$results, this.$dropdown);

   // Bind events

   var self = this;

   // Bind the container to all of the adapters
   this._bindAdapters();

   // Register any DOM event handlers
   this._registerDomEvents();

   // Register any internal event handlers
   this._registerDataEvents();
   this._registerSelectionEvents();
   this._registerDropdownEvents();
   this._registerResultsEvents();
   this._registerEvents();

   // Set the initial state
   this.dataAdapter.current(function (initialData) {
     self.trigger('selection:update', {
       data: initialData
     });
   });

   // Hide the original select
   $element.addClass('select2-hidden-accessible');
   $element.attr('aria-hidden', 'true');

   // Synchronize any monitored attributes
   this._syncAttributes();

   Utils.StoreData($element[0], 'select2', this);

   // Ensure backwards compatibility with $element.data('select2').
   $element.data('select2', this);
 };

 Utils.Extend(Select2, Utils.Observable);

 Select2.prototype._generateId = function ($element) {
   var id = '';

   if ($element.attr('id') != null) {
     id = $element.attr('id');
   } else if ($element.attr('name') != null) {
     id = $element.attr('name') + '-' + Utils.generateChars(2);
   } else {
     id = Utils.generateChars(4);
   }

   id = id.replace(/(:|\.|\[|\]|,)/g, '');
   id = 'select2-' + id;

   return id;
 };

 Select2.prototype._placeContainer = function ($container) {
   $container.insertAfter(this.$element);

   var width = this._resolveWidth(this.$element, this.options.get('width'));

   if (width != null) {
     $container.css('width', width);
   }
 };

 Select2.prototype._resolveWidth = function ($element, method) {
   var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

   if (method == 'resolve') {
     var styleWidth = this._resolveWidth($element, 'style');

     if (styleWidth != null) {
       return styleWidth;
     }

     return this._resolveWidth($element, 'element');
   }

   if (method == 'element') {
     var elementWidth = $element.outerWidth(false);

     if (elementWidth <= 0) {
       return 'auto';
     }

     return elementWidth + 'px';
   }

   if (method == 'style') {
     var style = $element.attr('style');

     if (typeof(style) !== 'string') {
       return null;
     }

     var attrs = style.split(';');

     for (var i = 0, l = attrs.length; i < l; i = i + 1) {
       var attr = attrs[i].replace(/\s/g, '');
       var matches = attr.match(WIDTH);

       if (matches !== null && matches.length >= 1) {
         return matches[1];
       }
     }

     return null;
   }

   if (method == 'computedstyle') {
     var computedStyle = window.getComputedStyle($element[0]);

     return computedStyle.width;
   }

   return method;
 };

 Select2.prototype._bindAdapters = function () {
   this.dataAdapter.bind(this, this.$container);
   this.selection.bind(this, this.$container);

   this.dropdown.bind(this, this.$container);
   this.results.bind(this, this.$container);
 };

 Select2.prototype._registerDomEvents = function () {
   var self = this;

   this.$element.on('change.select2', function () {
     self.dataAdapter.current(function (data) {
       self.trigger('selection:update', {
         data: data
       });
     });
   });

   this.$element.on('focus.select2', function (evt) {
     self.trigger('focus', evt);
   });

   this._syncA = Utils.bind(this._syncAttributes, this);
   this._syncS = Utils.bind(this._syncSubtree, this);

   if (this.$element[0].attachEvent) {
     this.$element[0].attachEvent('onpropertychange', this._syncA);
   }

   var observer = window.MutationObserver ||
     window.WebKitMutationObserver ||
     window.MozMutationObserver
   ;

   if (observer != null) {
     this._observer = new observer(function (mutations) {
       self._syncA();
       self._syncS(null, mutations);
     });
     this._observer.observe(this.$element[0], {
       attributes: true,
       childList: true,
       subtree: false
     });
   } else if (this.$element[0].addEventListener) {
     this.$element[0].addEventListener(
       'DOMAttrModified',
       self._syncA,
       false
     );
     this.$element[0].addEventListener(
       'DOMNodeInserted',
       self._syncS,
       false
     );
     this.$element[0].addEventListener(
       'DOMNodeRemoved',
       self._syncS,
       false
     );
   }
 };

 Select2.prototype._registerDataEvents = function () {
   var self = this;

   this.dataAdapter.on('*', function (name, params) {
     self.trigger(name, params);
   });
 };

 Select2.prototype._registerSelectionEvents = function () {
   var self = this;
   var nonRelayEvents = ['toggle', 'focus'];

   this.selection.on('toggle', function () {
     self.toggleDropdown();
   });

   this.selection.on('focus', function (params) {
     self.focus(params);
   });

   this.selection.on('*', function (name, params) {
     if ($.inArray(name, nonRelayEvents) !== -1) {
       return;
     }

     self.trigger(name, params);
   });
 };

 Select2.prototype._registerDropdownEvents = function () {
   var self = this;

   this.dropdown.on('*', function (name, params) {
     self.trigger(name, params);
   });
 };

 Select2.prototype._registerResultsEvents = function () {
   var self = this;

   this.results.on('*', function (name, params) {
     self.trigger(name, params);
   });
 };

 Select2.prototype._registerEvents = function () {
   var self = this;

   this.on('open', function () {
     self.$container.addClass('select2-container--open');
   });

   this.on('close', function () {
     self.$container.removeClass('select2-container--open');
   });

   this.on('enable', function () {
     self.$container.removeClass('select2-container--disabled');
   });

   this.on('disable', function () {
     self.$container.addClass('select2-container--disabled');
   });

   this.on('blur', function () {
     self.$container.removeClass('select2-container--focus');
   });

   this.on('query', function (params) {
     if (!self.isOpen()) {
       self.trigger('open', {});
     }

     this.dataAdapter.query(params, function (data) {
       self.trigger('results:all', {
         data: data,
         query: params
       });
     });
   });

   this.on('query:append', function (params) {
     this.dataAdapter.query(params, function (data) {
       self.trigger('results:append', {
         data: data,
         query: params
       });
     });
   });

   this.on('keypress', function (evt) {
     var key = evt.which;

     if (self.isOpen()) {
       if (key === KEYS.ESC || key === KEYS.TAB ||
           (key === KEYS.UP && evt.altKey)) {
         self.close(evt);

         evt.preventDefault();
       } else if (key === KEYS.ENTER) {
         self.trigger('results:select', {});

         evt.preventDefault();
       } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
         self.trigger('results:toggle', {});

         evt.preventDefault();
       } else if (key === KEYS.UP) {
         self.trigger('results:previous', {});

         evt.preventDefault();
       } else if (key === KEYS.DOWN) {
         self.trigger('results:next', {});

         evt.preventDefault();
       }
     } else {
       if (key === KEYS.ENTER || key === KEYS.SPACE ||
           (key === KEYS.DOWN && evt.altKey)) {
         self.open();

         evt.preventDefault();
       }
     }
   });
 };

 Select2.prototype._syncAttributes = function () {
   this.options.set('disabled', this.$element.prop('disabled'));

   if (this.isDisabled()) {
     if (this.isOpen()) {
       this.close();
     }

     this.trigger('disable', {});
   } else {
     this.trigger('enable', {});
   }
 };

 Select2.prototype._isChangeMutation = function (evt, mutations) {
   var changed = false;
   var self = this;

   // Ignore any mutation events raised for elements that aren't options or
   // optgroups. This handles the case when the select element is destroyed
   if (
     evt && evt.target && (
       evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
     )
   ) {
     return;
   }

   if (!mutations) {
     // If mutation events aren't supported, then we can only assume that the
     // change affected the selections
     changed = true;
   } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
     for (var n = 0; n < mutations.addedNodes.length; n++) {
       var node = mutations.addedNodes[n];

       if (node.selected) {
         changed = true;
       }
     }
   } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
     changed = true;
   } else if ($.isArray(mutations)) {
     $.each(mutations, function(evt, mutation) {
       if (self._isChangeMutation(evt, mutation)) {
         // We've found a change mutation.
         // Let's escape from the loop and continue
         changed = true;
         return false;
       }
     });
   }
   return changed;
 };

 Select2.prototype._syncSubtree = function (evt, mutations) {
   var changed = this._isChangeMutation(evt, mutations);
   var self = this;

   // Only re-pull the data if we think there is a change
   if (changed) {
     this.dataAdapter.current(function (currentData) {
       self.trigger('selection:update', {
         data: currentData
       });
     });
   }
 };

 /**
  * Override the trigger method to automatically trigger pre-events when
  * there are events that can be prevented.
  */
 Select2.prototype.trigger = function (name, args) {
   var actualTrigger = Select2.__super__.trigger;
   var preTriggerMap = {
     'open': 'opening',
     'close': 'closing',
     'select': 'selecting',
     'unselect': 'unselecting',
     'clear': 'clearing'
   };

   if (args === undefined) {
     args = {};
   }

   if (name in preTriggerMap) {
     var preTriggerName = preTriggerMap[name];
     var preTriggerArgs = {
       prevented: false,
       name: name,
       args: args
     };

     actualTrigger.call(this, preTriggerName, preTriggerArgs);

     if (preTriggerArgs.prevented) {
       args.prevented = true;

       return;
     }
   }

   actualTrigger.call(this, name, args);
 };

 Select2.prototype.toggleDropdown = function () {
   if (this.isDisabled()) {
     return;
   }

   if (this.isOpen()) {
     this.close();
   } else {
     this.open();
   }
 };

 Select2.prototype.open = function () {
   if (this.isOpen()) {
     return;
   }

   if (this.isDisabled()) {
     return;
   }

   this.trigger('query', {});
 };

 Select2.prototype.close = function (evt) {
   if (!this.isOpen()) {
     return;
   }

   this.trigger('close', { originalEvent : evt });
 };

 /**
  * Helper method to abstract the "enabled" (not "disabled") state of this
  * object.
  *
  * @return {true} if the instance is not disabled.
  * @return {false} if the instance is disabled.
  */
 Select2.prototype.isEnabled = function () {
   return !this.isDisabled();
 };

 /**
  * Helper method to abstract the "disabled" state of this object.
  *
  * @return {true} if the disabled option is true.
  * @return {false} if the disabled option is false.
  */
 Select2.prototype.isDisabled = function () {
   return this.options.get('disabled');
 };

 Select2.prototype.isOpen = function () {
   return this.$container.hasClass('select2-container--open');
 };

 Select2.prototype.hasFocus = function () {
   return this.$container.hasClass('select2-container--focus');
 };

 Select2.prototype.focus = function (data) {
   // No need to re-trigger focus events if we are already focused
   if (this.hasFocus()) {
     return;
   }

   this.$container.addClass('select2-container--focus');
   this.trigger('focus', {});
 };

 Select2.prototype.enable = function (args) {
   if (this.options.get('debug') && window.console && console.warn) {
     console.warn(
       'Select2: The `select2("enable")` method has been deprecated and will' +
       ' be removed in later Select2 versions. Use $element.prop("disabled")' +
       ' instead.'
     );
   }

   if (args == null || args.length === 0) {
     args = [true];
   }

   var disabled = !args[0];

   this.$element.prop('disabled', disabled);
 };

 Select2.prototype.data = function () {
   if (this.options.get('debug') &&
       arguments.length > 0 && window.console && console.warn) {
     console.warn(
       'Select2: Data can no longer be set using `select2("data")`. You ' +
       'should consider setting the value instead using `$element.val()`.'
     );
   }

   var data = [];

   this.dataAdapter.current(function (currentData) {
     data = currentData;
   });

   return data;
 };

 Select2.prototype.val = function (args) {
   if (this.options.get('debug') && window.console && console.warn) {
     console.warn(
       'Select2: The `select2("val")` method has been deprecated and will be' +
       ' removed in later Select2 versions. Use $element.val() instead.'
     );
   }

   if (args == null || args.length === 0) {
     return this.$element.val();
   }

   var newVal = args[0];

   if ($.isArray(newVal)) {
     newVal = $.map(newVal, function (obj) {
       return obj.toString();
     });
   }

   this.$element.val(newVal).trigger('input').trigger('change');
 };

 Select2.prototype.destroy = function () {
   this.$container.remove();

   if (this.$element[0].detachEvent) {
     this.$element[0].detachEvent('onpropertychange', this._syncA);
   }

   if (this._observer != null) {
     this._observer.disconnect();
     this._observer = null;
   } else if (this.$element[0].removeEventListener) {
     this.$element[0]
       .removeEventListener('DOMAttrModified', this._syncA, false);
     this.$element[0]
       .removeEventListener('DOMNodeInserted', this._syncS, false);
     this.$element[0]
       .removeEventListener('DOMNodeRemoved', this._syncS, false);
   }

   this._syncA = null;
   this._syncS = null;

   this.$element.off('.select2');
   this.$element.attr('tabindex',
   Utils.GetData(this.$element[0], 'old-tabindex'));

   this.$element.removeClass('select2-hidden-accessible');
   this.$element.attr('aria-hidden', 'false');
   Utils.RemoveData(this.$element[0]);
   this.$element.removeData('select2');

   this.dataAdapter.destroy();
   this.selection.destroy();
   this.dropdown.destroy();
   this.results.destroy();

   this.dataAdapter = null;
   this.selection = null;
   this.dropdown = null;
   this.results = null;
 };

 Select2.prototype.render = function () {
   var $container = $(
     '<span class="select2 select2-container">' +
       '<span class="selection"></span>' +
       '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
     '</span>'
   );

   $container.attr('dir', this.options.get('dir'));

   this.$container = $container;

   this.$container.addClass('select2-container--' + this.options.get('theme'));

   Utils.StoreData($container[0], 'element', this.$element);

   return $container;
 };

 return Select2;
});

S2.define('select2/compat/utils',[
 'jquery'
], function ($) {
 function syncCssClasses ($dest, $src, adapter) {
   var classes, replacements = [], adapted;

   classes = $.trim($dest.attr('class'));

   if (classes) {
     classes = '' + classes; // for IE which returns object

     $(classes.split(/\s+/)).each(function () {
       // Save all Select2 classes
       if (this.indexOf('select2-') === 0) {
         replacements.push(this);
       }
     });
   }

   classes = $.trim($src.attr('class'));

   if (classes) {
     classes = '' + classes; // for IE which returns object

     $(classes.split(/\s+/)).each(function () {
       // Only adapt non-Select2 classes
       if (this.indexOf('select2-') !== 0) {
         adapted = adapter(this);

         if (adapted != null) {
           replacements.push(adapted);
         }
       }
     });
   }

   $dest.attr('class', replacements.join(' '));
 }

 return {
   syncCssClasses: syncCssClasses
 };
});

S2.define('select2/compat/containerCss',[
 'jquery',
 './utils'
], function ($, CompatUtils) {
 // No-op CSS adapter that discards all classes by default
 function _containerAdapter (clazz) {
   return null;
 }

 function ContainerCSS () { }

 ContainerCSS.prototype.render = function (decorated) {
   var $container = decorated.call(this);

   var containerCssClass = this.options.get('containerCssClass') || '';

   if ($.isFunction(containerCssClass)) {
     containerCssClass = containerCssClass(this.$element);
   }

   var containerCssAdapter = this.options.get('adaptContainerCssClass');
   containerCssAdapter = containerCssAdapter || _containerAdapter;

   if (containerCssClass.indexOf(':all:') !== -1) {
     containerCssClass = containerCssClass.replace(':all:', '');

     var _cssAdapter = containerCssAdapter;

     containerCssAdapter = function (clazz) {
       var adapted = _cssAdapter(clazz);

       if (adapted != null) {
         // Append the old one along with the adapted one
         return adapted + ' ' + clazz;
       }

       return clazz;
     };
   }

   var containerCss = this.options.get('containerCss') || {};

   if ($.isFunction(containerCss)) {
     containerCss = containerCss(this.$element);
   }

   CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

   $container.css(containerCss);
   $container.addClass(containerCssClass);

   return $container;
 };

 return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
 'jquery',
 './utils'
], function ($, CompatUtils) {
 // No-op CSS adapter that discards all classes by default
 function _dropdownAdapter (clazz) {
   return null;
 }

 function DropdownCSS () { }

 DropdownCSS.prototype.render = function (decorated) {
   var $dropdown = decorated.call(this);

   var dropdownCssClass = this.options.get('dropdownCssClass') || '';

   if ($.isFunction(dropdownCssClass)) {
     dropdownCssClass = dropdownCssClass(this.$element);
   }

   var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
   dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

   if (dropdownCssClass.indexOf(':all:') !== -1) {
     dropdownCssClass = dropdownCssClass.replace(':all:', '');

     var _cssAdapter = dropdownCssAdapter;

     dropdownCssAdapter = function (clazz) {
       var adapted = _cssAdapter(clazz);

       if (adapted != null) {
         // Append the old one along with the adapted one
         return adapted + ' ' + clazz;
       }

       return clazz;
     };
   }

   var dropdownCss = this.options.get('dropdownCss') || {};

   if ($.isFunction(dropdownCss)) {
     dropdownCss = dropdownCss(this.$element);
   }

   CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

   $dropdown.css(dropdownCss);
   $dropdown.addClass(dropdownCssClass);

   return $dropdown;
 };

 return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
 'jquery'
], function ($) {
 function InitSelection (decorated, $element, options) {
   if (options.get('debug') && window.console && console.warn) {
     console.warn(
       'Select2: The `initSelection` option has been deprecated in favor' +
       ' of a custom data adapter that overrides the `current` method. ' +
       'This method is now called multiple times instead of a single ' +
       'time when the instance is initialized. Support will be removed ' +
       'for the `initSelection` option in future versions of Select2'
     );
   }

   this.initSelection = options.get('initSelection');
   this._isInitialized = false;

   decorated.call(this, $element, options);
 }

 InitSelection.prototype.current = function (decorated, callback) {
   var self = this;

   if (this._isInitialized) {
     decorated.call(this, callback);

     return;
   }

   this.initSelection.call(null, this.$element, function (data) {
     self._isInitialized = true;

     if (!$.isArray(data)) {
       data = [data];
     }

     callback(data);
   });
 };

 return InitSelection;
});

S2.define('select2/compat/inputData',[
 'jquery',
 '../utils'
], function ($, Utils) {
 function InputData (decorated, $element, options) {
   this._currentData = [];
   this._valueSeparator = options.get('valueSeparator') || ',';

   if ($element.prop('type') === 'hidden') {
     if (options.get('debug') && console && console.warn) {
       console.warn(
         'Select2: Using a hidden input with Select2 is no longer ' +
         'supported and may stop working in the future. It is recommended ' +
         'to use a `<select>` element instead.'
       );
     }
   }

   decorated.call(this, $element, options);
 }

 InputData.prototype.current = function (_, callback) {
   function getSelected (data, selectedIds) {
     var selected = [];

     if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
       data.selected = true;
       selected.push(data);
     } else {
       data.selected = false;
     }

     if (data.children) {
       selected.push.apply(selected, getSelected(data.children, selectedIds));
     }

     return selected;
   }

   var selected = [];

   for (var d = 0; d < this._currentData.length; d++) {
     var data = this._currentData[d];

     selected.push.apply(
       selected,
       getSelected(
         data,
         this.$element.val().split(
           this._valueSeparator
         )
       )
     );
   }

   callback(selected);
 };

 InputData.prototype.select = function (_, data) {
   if (!this.options.get('multiple')) {
     this.current(function (allData) {
       $.map(allData, function (data) {
         data.selected = false;
       });
     });

     this.$element.val(data.id);
     this.$element.trigger('input').trigger('change');
   } else {
     var value = this.$element.val();
     value += this._valueSeparator + data.id;

     this.$element.val(value);
     this.$element.trigger('input').trigger('change');
   }
 };

 InputData.prototype.unselect = function (_, data) {
   var self = this;

   data.selected = false;

   this.current(function (allData) {
     var values = [];

     for (var d = 0; d < allData.length; d++) {
       var item = allData[d];

       if (data.id == item.id) {
         continue;
       }

       values.push(item.id);
     }

     self.$element.val(values.join(self._valueSeparator));
     self.$element.trigger('input').trigger('change');
   });
 };

 InputData.prototype.query = function (_, params, callback) {
   var results = [];

   for (var d = 0; d < this._currentData.length; d++) {
     var data = this._currentData[d];

     var matches = this.matches(params, data);

     if (matches !== null) {
       results.push(matches);
     }
   }

   callback({
     results: results
   });
 };

 InputData.prototype.addOptions = function (_, $options) {
   var options = $.map($options, function ($option) {
     return Utils.GetData($option[0], 'data');
   });

   this._currentData.push.apply(this._currentData, options);
 };

 return InputData;
});

S2.define('select2/compat/matcher',[
 'jquery'
], function ($) {
 function oldMatcher (matcher) {
   function wrappedMatcher (params, data) {
     var match = $.extend(true, {}, data);

     if (params.term == null || $.trim(params.term) === '') {
       return match;
     }

     if (data.children) {
       for (var c = data.children.length - 1; c >= 0; c--) {
         var child = data.children[c];

         // Check if the child object matches
         // The old matcher returned a boolean true or false
         var doesMatch = matcher(params.term, child.text, child);

         // If the child didn't match, pop it off
         if (!doesMatch) {
           match.children.splice(c, 1);
         }
       }

       if (match.children.length > 0) {
         return match;
       }
     }

     if (matcher(params.term, data.text, data)) {
       return match;
     }

     return null;
   }

   return wrappedMatcher;
 }

 return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
 function Query (decorated, $element, options) {
   if (options.get('debug') && window.console && console.warn) {
     console.warn(
       'Select2: The `query` option has been deprecated in favor of a ' +
       'custom data adapter that overrides the `query` method. Support ' +
       'will be removed for the `query` option in future versions of ' +
       'Select2.'
     );
   }

   decorated.call(this, $element, options);
 }

 Query.prototype.query = function (_, params, callback) {
   params.callback = callback;

   var query = this.options.get('query');

   query.call(null, params);
 };

 return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
 function AttachContainer (decorated, $element, options) {
   decorated.call(this, $element, options);
 }

 AttachContainer.prototype.position =
   function (decorated, $dropdown, $container) {
   var $dropdownContainer = $container.find('.dropdown-wrapper');
   $dropdownContainer.append($dropdown);

   $dropdown.addClass('select2-dropdown--below');
   $container.addClass('select2-container--below');
 };

 return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
 function StopPropagation () { }

 StopPropagation.prototype.bind = function (decorated, container, $container) {
   decorated.call(this, container, $container);

   var stoppedEvents = [
   'blur',
   'change',
   'click',
   'dblclick',
   'focus',
   'focusin',
   'focusout',
   'input',
   'keydown',
   'keyup',
   'keypress',
   'mousedown',
   'mouseenter',
   'mouseleave',
   'mousemove',
   'mouseover',
   'mouseup',
   'search',
   'touchend',
   'touchstart'
   ];

   this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
     evt.stopPropagation();
   });
 };

 return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
 function StopPropagation () { }

 StopPropagation.prototype.bind = function (decorated, container, $container) {
   decorated.call(this, container, $container);

   var stoppedEvents = [
     'blur',
     'change',
     'click',
     'dblclick',
     'focus',
     'focusin',
     'focusout',
     'input',
     'keydown',
     'keyup',
     'keypress',
     'mousedown',
     'mouseenter',
     'mouseleave',
     'mousemove',
     'mouseover',
     'mouseup',
     'search',
     'touchend',
     'touchstart'
   ];

   this.$selection.on(stoppedEvents.join(' '), function (evt) {
     evt.stopPropagation();
   });
 };

 return StopPropagation;
});

/*!
* jQuery Mousewheel 3.1.13
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*/

(function (factory) {
   if ( typeof S2.define === 'function' && S2.define.amd ) {
       // AMD. Register as an anonymous module.
       S2.define('jquery-mousewheel',['jquery'], factory);
   } else if (typeof exports === 'object') {
       // Node/CommonJS style for Browserify
       module.exports = factory;
   } else {
       // Browser globals
       factory(jQuery);
   }
}(function ($) {

   var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
       toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                   ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
       slice  = Array.prototype.slice,
       nullLowestDeltaTimeout, lowestDelta;

   if ( $.event.fixHooks ) {
       for ( var i = toFix.length; i; ) {
           $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
       }
   }

   var special = $.event.special.mousewheel = {
       version: '3.1.12',

       setup: function() {
           if ( this.addEventListener ) {
               for ( var i = toBind.length; i; ) {
                   this.addEventListener( toBind[--i], handler, false );
               }
           } else {
               this.onmousewheel = handler;
           }
           // Store the line height and page height for this particular element
           $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
           $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
       },

       teardown: function() {
           if ( this.removeEventListener ) {
               for ( var i = toBind.length; i; ) {
                   this.removeEventListener( toBind[--i], handler, false );
               }
           } else {
               this.onmousewheel = null;
           }
           // Clean up the data we added to the element
           $.removeData(this, 'mousewheel-line-height');
           $.removeData(this, 'mousewheel-page-height');
       },

       getLineHeight: function(elem) {
           var $elem = $(elem),
               $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
           if (!$parent.length) {
               $parent = $('body');
           }
           return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
       },

       getPageHeight: function(elem) {
           return $(elem).height();
       },

       settings: {
           adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
           normalizeOffset: true  // calls getBoundingClientRect for each event
       }
   };

   $.fn.extend({
       mousewheel: function(fn) {
           return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
       },

       unmousewheel: function(fn) {
           return this.unbind('mousewheel', fn);
       }
   });


   function handler(event) {
       var orgEvent   = event || window.event,
           args       = slice.call(arguments, 1),
           delta      = 0,
           deltaX     = 0,
           deltaY     = 0,
           absDelta   = 0,
           offsetX    = 0,
           offsetY    = 0;
       event = $.event.fix(orgEvent);
       event.type = 'mousewheel';

       // Old school scrollwheel delta
       if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
       if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
       if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
       if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

       // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
       if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
           deltaX = deltaY * -1;
           deltaY = 0;
       }

       // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
       delta = deltaY === 0 ? deltaX : deltaY;

       // New school wheel delta (wheel event)
       if ( 'deltaY' in orgEvent ) {
           deltaY = orgEvent.deltaY * -1;
           delta  = deltaY;
       }
       if ( 'deltaX' in orgEvent ) {
           deltaX = orgEvent.deltaX;
           if ( deltaY === 0 ) { delta  = deltaX * -1; }
       }

       // No change actually happened, no reason to go any further
       if ( deltaY === 0 && deltaX === 0 ) { return; }

       // Need to convert lines and pages to pixels if we aren't already in pixels
       // There are three delta modes:
       //   * deltaMode 0 is by pixels, nothing to do
       //   * deltaMode 1 is by lines
       //   * deltaMode 2 is by pages
       if ( orgEvent.deltaMode === 1 ) {
           var lineHeight = $.data(this, 'mousewheel-line-height');
           delta  *= lineHeight;
           deltaY *= lineHeight;
           deltaX *= lineHeight;
       } else if ( orgEvent.deltaMode === 2 ) {
           var pageHeight = $.data(this, 'mousewheel-page-height');
           delta  *= pageHeight;
           deltaY *= pageHeight;
           deltaX *= pageHeight;
       }

       // Store lowest absolute delta to normalize the delta values
       absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

       if ( !lowestDelta || absDelta < lowestDelta ) {
           lowestDelta = absDelta;

           // Adjust older deltas if necessary
           if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
               lowestDelta /= 40;
           }
       }

       // Adjust older deltas if necessary
       if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
           // Divide all the things by 40!
           delta  /= 40;
           deltaX /= 40;
           deltaY /= 40;
       }

       // Get a whole, normalized value for the deltas
       delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
       deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
       deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

       // Normalise offsetX and offsetY properties
       if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
           var boundingRect = this.getBoundingClientRect();
           offsetX = event.clientX - boundingRect.left;
           offsetY = event.clientY - boundingRect.top;
       }

       // Add information to the event object
       event.deltaX = deltaX;
       event.deltaY = deltaY;
       event.deltaFactor = lowestDelta;
       event.offsetX = offsetX;
       event.offsetY = offsetY;
       // Go ahead and set deltaMode to 0 since we converted to pixels
       // Although this is a little odd since we overwrite the deltaX/Y
       // properties with normalized deltas.
       event.deltaMode = 0;

       // Add event and delta to the front of the arguments
       args.unshift(event, delta, deltaX, deltaY);

       // Clearout lowestDelta after sometime to better
       // handle multiple device types that give different
       // a different lowestDelta
       // Ex: trackpad = 3 and mouse wheel = 120
       if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
       nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

       return ($.event.dispatch || $.event.handle).apply(this, args);
   }

   function nullLowestDelta() {
       lowestDelta = null;
   }

   function shouldAdjustOldDeltas(orgEvent, absDelta) {
       // If this is an older event and the delta is divisable by 120,
       // then we are assuming that the browser is treating this as an
       // older mouse wheel event and that we should divide the deltas
       // by 40 to try and get a more usable deltaFactor.
       // Side note, this actually impacts the reported scroll distance
       // in older browsers and can cause scrolling to be slower than native.
       // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
       return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
   }

}));

S2.define('jquery.select2',[
 'jquery',
 'jquery-mousewheel',

 './select2/core',
 './select2/defaults',
 './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
 if ($.fn.select2 == null) {
   // All methods that should return the element
   var thisMethods = ['open', 'close', 'destroy'];

   $.fn.select2 = function (options) {
     options = options || {};

     if (typeof options === 'object') {
       this.each(function () {
         var instanceOptions = $.extend(true, {}, options);

         var instance = new Select2($(this), instanceOptions);
       });

       return this;
     } else if (typeof options === 'string') {
       var ret;
       var args = Array.prototype.slice.call(arguments, 1);

       this.each(function () {
         var instance = Utils.GetData(this, 'select2');

         if (instance == null && window.console && console.error) {
           console.error(
             'The select2(\'' + options + '\') method was called on an ' +
             'element that is not using Select2.'
           );
         }

         ret = instance[options].apply(instance, args);
       });

       // Check if we should be returning `this`
       if ($.inArray(options, thisMethods) > -1) {
         return this;
       }

       return ret;
     } else {
       throw new Error('Invalid arguments for Select2: ' + options);
     }
   };
 }

 if ($.fn.select2.defaults == null) {
   $.fn.select2.defaults = Defaults;
 }

 return Select2;
});

 // Return the AMD loader configuration so it can be used outside of this file
 return {
   define: S2.define,
   require: S2.require
 };
}());

 // Autoload the jQuery bindings
 // We know that all of the modules exist above this, so we're safe
 var select2 = S2.require('jquery.select2');

 // Hold the AMD module references on the jQuery function that was just loaded
 // This allows Select2 to use the internal loader outside of this file, such
 // as in the language files.
 jQuery.fn.select2.amd = S2;

 // Return the Select2 instance for anyone who is importing it.
 return select2;
}));