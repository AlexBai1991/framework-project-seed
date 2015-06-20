define([
	'backbone',
	'views'
	],
	function (Backbone, views) {
		console.log(views);
		return Backbone.Router.extend({
			routes: {
				'': 'index'
			},
			index: function () {
				var view = new views.index();
				console.log(views.index);
			}
		});
	});