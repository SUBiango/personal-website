// Scroll to section
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
	e.preventDefault();
	const sectionId = link.getAttribute('href');
	const section = document.querySelector(sectionId);
	section.scrollIntoView({ behavior: 'smooth' });
  });
})

