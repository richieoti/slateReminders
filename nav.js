(function () {
	var nav = document.querySelector('.site-nav');
	var toggle = nav && nav.querySelector('.site-menu-toggle');
	var links = nav && nav.querySelector('.site-links');

	if (!toggle || !links) return;

	function setOpen(open) {
		nav.classList.toggle('is-open', open);
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
	}

	toggle.addEventListener('click', function () {
		setOpen(!nav.classList.contains('is-open'));
	});

	links.addEventListener('click', function (event) {
		if (event.target.closest('a')) setOpen(false);
	});

	document.addEventListener('click', function (event) {
		if (!nav.contains(event.target)) setOpen(false);
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && nav.classList.contains('is-open')) {
			setOpen(false);
			toggle.focus();
		}
	});

	window.matchMedia('(min-width: 641px)').addEventListener('change', function (event) {
		if (event.matches) setOpen(false);
	});
})();
