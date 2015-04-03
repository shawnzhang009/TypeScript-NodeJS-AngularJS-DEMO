// 所有模块都通过 define 来定义
define('pages/index', ['jquery', 'fullpage'], function(require, exports, module) {

	// 通过 require 引入依赖
	var $ = require('jquery'),
		fullPage = require('fullpage');

	module.exports = (function() {
		$(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'css3': true,
				'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
				anchors: ['page1', 'page2', 'page3', 'page4'],
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple']
			})
		})
	})();


	/*	function Main(container) {
			this.container = $(container);
		}

		Main.prototype.render = function() {
			this.container.css("background", "green");
		}

		var s = new Main("#div1");
		s.render();


		module.exports = {
			h: function() {
				alert('fe');
			}
		};*/
	/*	exports.h = function() {
			
		};*/
});