const scriptURL = 'https://script.google.com/macros/s/AKfycbwrUrJhd5cTEbT6qhUReaYKmwt4MemKLhcccHytWaZPhMznxKXn-Sqt15rEOTtCs_Q-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  
  msg.innerHTML = "Sending...";

  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => response.json()) 
  .then(data => {
    msg.innerHTML = "Message sent successfully";
    setTimeout(function() {
        msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
    msg.innerHTML = "Failed to send the message. Please try again.";
    setTimeout(function() {
        msg.innerHTML = "";
    }, 5000);
  });
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

