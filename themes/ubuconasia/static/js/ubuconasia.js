/**
  Toggles visibility of given subnav by toggling is-active class to it
  and setting aria-hidden attribute on dropdown contents.
  @param {HTMLElement} subnav Root element of subnavigation to open.
  @param {Boolean} open indicate whether we want to open or close the subnav.
*/
function toggleSubnav(subnav, open) {
  if (open) {
    subnav.classList.add('is-active');
  } else {
    subnav.classList.remove('is-active');
  }

  var toggle = subnav.querySelector('.p-subnav__toggle');

  if (toggle) {
    var dropdown = document.getElementById(toggle.getAttribute('aria-controls'));

    if (dropdown) {
      dropdown.setAttribute('aria-hidden', open ? false : true);
    }
  }
}

/**
  Closes all subnavs on the page.
*/
function closeAllSubnavs() {
  var subnavs = document.querySelectorAll('.p-subnav');
  for (var i = 0, l = subnavs.length; i < l; i++) {
    toggleSubnav(subnavs[i], false);
  }
}

/**
  Attaches click event listener to subnav toggle.
  @param {HTMLElement} subnavToggle Toggle element of subnavigation.
*/
function setupSubnavToggle(subnavToggle) {
  subnavToggle.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    var subnav = subnavToggle.parentElement;
    var isActive = subnav.classList.contains('is-active');

    closeAllSubnavs();
    if (!isActive) {
      toggleSubnav(subnav, true);
    }
  });
}

// Setup all subnav toggles on the page
var subnavToggles = document.querySelectorAll('.p-subnav__toggle');

for (var i = 0, l = subnavToggles.length; i < l; i++) {
  setupSubnavToggle(subnavToggles[i]);
}

// Close all menus if anything else on the page is clicked
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.closest) {
    if (!target.closest('.p-subnav__toggle') && !target.closest('.p-subnav__item')) {
      closeAllSubnavs();
    }
  } else if (target.msMatchesSelector) {
    // IE friendly `Element.closest` equivalent
    // as in https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    do {
      if (target.msMatchesSelector('.p-subnav__toggle') || target.msMatchesSelector('.p-subnav__item')) {
        return;
      }
      target = target.parentElement || target.parentNode;
    } while (target !== null && target.nodeType === 1);

    closeAllSubnavs();
  }
});

/**
  Toggles the necessary aria- attributes' values on the menus
  and handles to show or hide them.
  @param {HTMLElement} element The menu link or button.
  @param {Boolean} show Whether to show or hide the menu.
  @param {Number} top Top offset in pixels where to show the menu.
*/
function toggleMenu(element, show, top) {
  var target = document.getElementById(element.getAttribute('aria-controls'));

  if (target) {
    element.setAttribute('aria-expanded', show);
    element.setAttribute('aria-pressed', show);
    target.setAttribute('aria-hidden', !show);

    if (typeof top !== 'undefined') {
      target.style.top = top + 'px';
    }

    if (show) {
      target.focus();
    }
  }
}

/**
  Attaches event listeners for the menu toggle open and close click events.
  @param {HTMLElement} menuToggle The menu container element.
*/
function setupContextualMenu(menuToggle) {
  menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    var menuAlreadyOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    var top = menuToggle.offsetHeight;
    // for inline elements leave some space between text and menu
    if (window.getComputedStyle(menuToggle).display === 'inline') {
      top += 5;
    }

    toggleMenu(menuToggle, !menuAlreadyOpen, top);
  });
}

/**
  Attaches event listeners for all the menu toggles in the document and
  listeners to handle close when clicking outside the menu or using ESC key.
  @param {String} contextualMenuToggleSelector The CSS selector matching menu toggle elements.
*/
function setupAllContextualMenus(contextualMenuToggleSelector) {
  // Setup all menu toggles on the page.
  var toggles = document.querySelectorAll(contextualMenuToggleSelector);

  for (var i = 0, l = toggles.length; i < l; i++) {
    setupContextualMenu(toggles[i]);
  }

  // Add handler for clicking outside the menu.
  document.addEventListener('click', function (event) {
    for (var i = 0, l = toggles.length; i < l; i++) {
      var toggle = toggles[i];
      var contextualMenu = document.getElementById(toggle.getAttribute('aria-controls'));
      var clickOutside = !(toggle.contains(event.target) || contextualMenu.contains(event.target));

      if (clickOutside) {
        toggleMenu(toggle, false);
      }
    }
  });

  // Add handler for closing menus using ESC key.
  document.addEventListener('keydown', function (e) {
    e = e || window.event;

    if (e.keyCode === 27) {
      for (var i = 0, l = toggles.length; i < l; i++) {
        toggleMenu(toggles[i], false);
      }
    }
  });
}

setupAllContextualMenus('.p-contextual-menu__toggle');
