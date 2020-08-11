new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	navigation: true,
	menu: '#menu',
	// onLeave: () => {
	// 	document.querySelectorAll('.section [data-animated]').forEach((el) => el.classList.remove('animated'));
	// },
	afterLoad: () => {
		const activeSectionContent = document.querySelector('.section.active [data-animated]');
		if (!Array.from(activeSectionContent.classList).includes('animated')) {
			activeSectionContent.classList.add('animated');
		}
	}
});
