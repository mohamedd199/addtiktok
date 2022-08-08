//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//
$(window).load(function() {
	
	////////////////
	// Particles
	//////////////// 
	particlesJS.load('app-particles', 'js/particlesjs-config.json');
	
	var qsRegex;
	var $grid = $('.tweaked-apps-content').isotope({
	  itemSelector: '.tweaked-apps-grid-item',
	  stagger: 28,
	  transitionDuration: '0.7s',
	  layoutMode: 'fitRows',
	  filter: function() {
		return qsRegex ? $(this).text().match( qsRegex ) : true;
	  }
	});
	var $quicksearch = $('.quicksearch').keyup( debounce( function() {
		$('.search-error-wrapper').hide();	
		qsRegex = new RegExp( $quicksearch.val(), 'gi' );
		$grid.isotope();
		if( !$grid.data('isotope').filteredItems.length ) {
			$('.search-error-wrapper').fadeIn();
		}
	}, 200 ) );
	function debounce( fn, threshold ) {
	  var timeout;
	  threshold = threshold || 100;
	  return function debounced() {
		clearTimeout( timeout );
		var args = arguments;
		var _this = this;
		function delayed() {
		  fn.apply( _this, args );
		}
		timeout = setTimeout( delayed, threshold );
	  };
	}
});
//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//