// Scroll to section
const email = document.getElementById('mail');

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
	e.preventDefault();
	const sectionId = link.getAttribute('href');
	const section = document.querySelector(sectionId);
	section.scrollIntoView({ behavior: 'smooth' });
  });
})

email.addEventListener('input', (mail) => {
	const input = mail.target
	input.setCustomValidity(input.validity.typeMismatch ? 'Please enter a valid email' : '')
});
