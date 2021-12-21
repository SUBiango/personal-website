//Hamburger Menu
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
	navbar.classList.toggle("change");
});

// Active class on navlink
/*const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "active"
	}
};*/