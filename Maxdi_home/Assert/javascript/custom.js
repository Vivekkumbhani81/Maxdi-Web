// <!-------------------------------------  loaders -------------------------------- --!>
// Function to show loader after 1 second
function showLoader() {
  document.getElementById('pre-loader').style.display = 'block';
}

// Function to hide loader after 5 seconds
function hideLoader() {
  document.getElementById('pre-loader').style.display = 'none';
}

// Show loader after 1 second
// setTimeout(showLoader, 1000);

// Hide loader after 5 seconds
setTimeout(hideLoader, 2000);
// <!-------------------------------------  loaders -------------------------------- --!>


$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
});

function domLoaded() {
  return new Promise((resolve) => {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      resolve();
    } else {
      document.addEventListener(
        "DOMContentLoaded",
        () => {
          resolve();
        },
        {
          capture: true,
          once: true,
          passive: true,
        }
      );
    }
  });
}

// ----------------------------------------------- mobile menu js----------------------------------------------------------
jQuery(document).ready(function ($) {
  var icon = $(".mobile-menu-icon");
  var menu = $(".mobile-slider");
  var tl = new TimelineLite({ paused: true, reversed: true });
  tl.fromTo(
    ".mobile-slider",
    0.3,
    {
      x: 200,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      ease: Power4.easeOut,
    }
  );
  tl.to(
    ".filter",
    0.3,
    {
      autoAlpha: 1,
    },
    0
  );
  icon.click(function () {
    tl.play();
  });
  $(".close-menu").click(function () {
    tl.reverse();
  });
  // Also close slider when clicking outside of the menu
  $(".filter").click(function () {
    tl.reverse();
  });
});

// ****************************************************** side bar **********************************************************************

$(".sidebar-dropdown > a").click(function () {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});

// ****************************************************** navbar sticky ********************************************************************
$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 100) {
    $("#header-sticky").addClass("sticky")
  } else {
    $("#header-sticky").removeClass("sticky")
  }
});


// scroll rocket

const btn = document.querySelector('.scroll');

btn.addEventListener('click', function () {
  scroll(0, 200);
})

window.onscroll = function showHide() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    btn.style.transform = 'scale(1)';
  }
  else {
    btn.style.transform = 'scale(0)';
  }
}

function scroll(target, duration) {
  if (duration <= 0) { return };
  let difference = target - document.documentElement.scrollTop;
  let speed = difference / duration * 10;
  setTimeout(function () {
    document.documentElement.scrollTop += speed;
    if (document.documentElement.scrollTop == target) { return };
    scroll(target, duration - 10);
  }, 10);
}

// ****************************************************************************************************************************************
// Get the sidebar element
const sidebar = document.getElementById('sidebar');

// Get the offset position of the sidebar
const sidebarOffset = sidebar.offsetTop;

// Function to handle scrolling
function handleScroll() {
  // Check if the window's vertical scroll position is greater than the sidebar's offset position
  if (window.pageYOffset > sidebarOffset) {
    sidebar.style.position = 'fixed';
    sidebar.style.top = '100px'; // Adjust this value as needed
  } else {
    sidebar.style.position = 'relative';
    sidebar.style.top = 'auto';
  }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);




$(document).ready(function () {
  const sidebar = $('.blog-sidebar');

  if (sidebar.length > 0) {
    sidebar.css('position', 'sticky');
    sidebar.css('top', '100px'); // Adjust this value based on your layout
  }
});

// *************************************************************** scroll number javascript ************************************************************
// Counter To Count Number Visit
let a = 0;
$(window).scroll(function () {

  let oTop = $('#counter').offset().top - window.innerHeight;
  // Md.Asaduzzaman Muhid
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function () {
      let $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
    a = 1;// Md.Asaduzzaman Muhid
  }
});



