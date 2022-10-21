const sections = document.querySelectorAll('.all-container .section-detecter');
const enlaces = document.querySelectorAll('#enlaces a');

const observer = new IntersectionObserver((entradas, observador) => {
	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			const id = '#' + entrada.target.id;
			history.pushState({}, entrada.target.innetText, id);

			enlaces.forEach(enlace => {
				enlace.classList.remove('active');

				const href = enlace.attributes.href.nodeValue;
				if(href === id){
					enlace.classList.add('active');
				}
			});
		}
	});
}, {
	threshold: 1,
	rootMargin: '0px 0px -50% 0px'
});


sections.forEach(section => {
	observer.observe(section);
});