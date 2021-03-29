const burger = document.getElementById( 'menu-toggle' );


burger.addEventListener( 'click', function() {
	// siteNavigation.classList.toggle( 'toggled' );
	document.body.classList.add( 'nav-open' );

	if ( burger.getAttribute( 'aria-expanded' ) === 'true' ) {
		burger.setAttribute( 'aria-expanded', 'false' );
		document.body.classList.remove('nav-open');
	} else {
		burger.setAttribute( 'aria-expanded', 'true' );
	}
} );



const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLinks => {
		menuLinks.addEventListener("click", onMenuLinkClick )
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			// const gotoBlockValue = gotoBlock.getBoundingClientReact().top + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlock,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}