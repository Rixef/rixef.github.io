//STICKY NAVBAR CODE
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction()
{
	if (window.pageYOffset >= sticky)
	{
		navbar.classList.add("sticky")
		navbar.style.boxShadow = '5px 5px 10px #1a1a1a, -5px -5px 10px #4a4a4a';
		navbar.style.background = '#333';
		//navbar.style.width = 100%;
	}
	else
	{
		navbar.classList.remove("sticky");
		navbar.style.boxShadow = '';
		navbar.style.background = '#2e2e2e';
	}
}

//BUTTON CODE
//function buttonClick()
//{
	//alert('Button clicked!');
//}

//SLIDER CODE
// document.querySelector(".neumorphic-slider").oninput = function()
// {
	// this.style.background = 'linear-gradient(to right, #00ffff 0%, #00ffff '+this.value +'%, #333 ' + this.value + '%, #333 100%)'
// };

//CHECKBOX CODE
//const dnmcheckbox = document.querySelector('.neumorphic-checkbox > input');

// document.querySelector('.neumorphic-checkbox > input').addEventListener('change', (event) =>
// {
	// if (event.currentTarget.checked)
	// {
		// alert('checked');
	// }
	// else
	// {
		// alert('unchecked');
	// }
// })

//COLLAPSIBLE CODE
var coll = document.getElementsByClassName("neumorphic-collapsible");
var i;

for (i = 0; i < coll.length; i++)
{
	coll[i].addEventListener("click", function()
	{
		this.classList.toggle("active");
		var content = this.querySelector('div.content');
		if (content.style.maxHeight)
		{
			content.style.maxHeight = null;
		}
		else
		{
			content.style.maxHeight = "800px";
		}
	});
}

//CAROUSEL CODE
const slides = document.querySelectorAll('.neumorphic-carousel img');
let currentSlide = 0;

document.getElementById('prev').addEventListener('click', () =>
{
	slides[currentSlide].style.display = 'none';
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].style.display = 'block';
});

document.getElementById('next').addEventListener('click', () =>
{
	slides[currentSlide].style.display = 'none';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].style.display = 'block';
});

//MODAL CODE
var modal = document.getElementById("myModal");

document.getElementById('openModal').addEventListener('click', function()
{
	document.getElementById('myModal').classList.add('show');
});

document.getElementById('closeModal').addEventListener('click', function()
{
	document.getElementById('myModal').classList.remove('show');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
	if (event.target == modal)
	{
		modal.classList.remove('show')
	}
}