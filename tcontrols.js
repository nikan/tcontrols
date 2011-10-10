(function ($) {

	var settings = {
		ron : 'img/r_on.png',
		roff : 'img/r_off.png',
		con : 'img/c_on.png',
		coff : 'img/c_off.png'
	},

		methods = {
//TODO: add generic settings with the init function
			init : function (options) {
				return this.each(function () {
						// If options exist, lets merge them
						// with our default settings
					if (options) {
						$.extend(settings, options);
					}
				});
			},

			radio : function () {
			
				var control_name;
			
				this.each(function () {
					if (this.tagName.toLowerCase() === 'input' && this.type === 'radio') {
						$(this).wrap("<span></span>");
						$(this).hide();
						control_name = $(this).attr('name');
						if ($(this).attr("data-off")) {
							$(this).after("<img name='" + control_name + "'class='radio' src='" + $(this).attr('data-off') + "'/>");
							$(this).siblings("img").data("data-on", $(this).attr('data-on'));
							$(this).siblings("img").data("data-off", $(this).attr('data-off'));
						} else {
							$(this).after("<img name='" + control_name + "' class='radio' src='" + settings.roff + "' />");
							$(this).siblings("img").data("data-on", settings.ron);
							$(this).siblings("img").data("data-off", settings.roff);
						}

						$(this).bind("change.tcontrol", function () {
							$("img[name='" + control_name + "']").attr("src", $(this).siblings("img[name='" + control_name + "']").data("data-off"));
							$(this).siblings("img[name='" + control_name + "']").attr("src", $(this).siblings("img[name='" + control_name + "']").data("data-on"));
						});   //bind change

						$(this).siblings("img").bind('click.tcontrol', function () {
							var $on = $(this).data("data-on"),
								$off = $(this).data("data-off");
							if (this.src.search($off) > 0) {
								control_name = $(this).attr('name');
								$("img[name='" + control_name + "']").attr("src", $off);
								this.src = $on;
						// .prop makes the other input tags with the same name go off while this goes on, but does not update the attribute
								$(this).siblings("input").prop("checked", true);
								$(this).siblings("input").attr("checked", true);
								$(this).siblings("input").trigger("change.tcontrol");
							} else {
								control_name = $(this).attr('name');
								$("img[name='" + control_name + "']").attr("src", $on);
								this.src = $off;
								$(this).siblings("input").prop("checked", false);
								$(this).siblings("input").attr("checked", false);
								$(this).siblings("input").trigger("change.tcontrol");
							}
						}); //bind click

					} // if type = radio
				}); // each
			},

			checkbox : function () {
				var control_name;
				this.each(function () {
					if (this.tagName.toLowerCase() === 'input' &&  this.type === 'checkbox') {
						$(this).wrap("<span></span>");
						$(this).hide();
						control_name = $(this).attr('name');
						if ($(this).attr("data-off")) {
							$(this).after("<img name='" + control_name + "' class='checkbox' src= '" + $(this).attr('data-off') + "' />");
							$(this).siblings("img").data("data-on", $(this).attr('data-on'));
							$(this).siblings("img").data("data-off", $(this).attr('data-off'));
						} else {
							$(this).after("<img name='" + control_name + "' class = 'checkbox' src = '" + settings.coff + "' />");
							$(this).siblings("img").data("data-on", settings.con);
							$(this).siblings("img").data("data-off", settings.coff);
						}

						$(this).siblings("img").bind('click.tcontrol', function () {
							var $on = $(this).data("data-on"),
								$off = $(this).data("data-off");
							if (this.src.search($off) > 0) {
								control_name = $(this).attr('name');
								$("img[name='" + control_name + "']").attr("src", $off);
								this.src = $on;
		// .prop makes the other input tags with the same name go off while this goes on, but does not update the attribute
								$(this).siblings("input").prop("checked", true);
								$(this).siblings("input").attr("checked", true);
								$(this).siblings("input").trigger("change.tcontrol");
							} else {
								control_name = $(this).attr('name');
								$("img[name='" + control_name + "']").attr("src", $on);
								this.src = $off;
								$(this).siblings("input").prop("checked", false);
								$(this).siblings("input").attr("checked", false);
								$(this).siblings("input").trigger("change.tcontrol");
							}
						}); //bind click

					} // if type = checkbox
				}); // each

			}// methods
		};

	$.fn.tcontrol = function (method) {

	// Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.tcontrol');
		}

	};

})(jQuery);
