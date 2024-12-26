// Scroll to section
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
	e.preventDefault();
	const sectionId = link.getAttribute('href');
	const section = document.querySelector(sectionId);
	section.scrollIntoView({ behavior: 'smooth' });
  });
})

document.getElementById('contact').addEventListener('submit', (e) => {
	const email = document.getElementById('email')
	const message = document.getElementById('message')

	let isValid = true

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email.value)) {
		isValid = false
		email.setCustomValidity('Please enter a valid email address')
	} else {
		email.setCustomValidity('')
	}

	// Message validation
	if (message.value.trim() === '') {
		isValid = false
		message.setCustomValidity('Message cannot be empty')
	} else {
		message.setCustomValidity('')
	}

	if (!isValid) {
		e.preventDefault()
		email.reportValidity()
		message.reportValidity()
	}
})