"use strict";

window.onload = function () {
  var menuLink = document.querySelectorAll('.menu__link');

  var addMouseLeave = function addMouseLeave(category) {
    category.addEventListener('mouseleave', function (event) {
      category.classList.remove('active');
    });
  };

  var nowOpenCategory = null;
  menuLink.forEach(function (element) {
    element.addEventListener('mouseenter', function (event) {
      if (nowOpenCategory !== null) {
        nowOpenCategory.classList.remove('active');
      }

      var target = event.target;
      var category = target.parentElement.children[1];
      category.classList.toggle('active');
      addMouseLeave(category);
      nowOpenCategory = category;
      element.addEventListener('mouseleave', function (event) {
        category.classList.remove('active');
      });
      category.addEventListener('mouseenter', function (event) {
        category.classList.add('active');
      });
    });
  });
  var navLanguage = document.querySelector('.nav-language');
  navLanguage.addEventListener('click', function (event) {
    var target = event.target;

    while (target != navLanguage) {
      if (target.tagName == 'A') {
        var childrenNavLanguage = Array.from(navLanguage.children);
        childrenNavLanguage.forEach(function (element) {
          element != target ? element.classList.remove('active') : target.classList.add('active');
        });
        return;
      }

      target = target.parentNode;
    }
  });
  var navSearchBtn = document.querySelector('.nav-search__btn');
  var navSearch = document.querySelector('.nav-search');
  navSearchBtn.addEventListener('click', function (event) {
    navSearch.classList.add('active');
  });
  var popupMenu = document.getElementById('popupMenu');
  var popupMenuClose = document.querySelector('.popup-menu-close');
  var navSandwich = document.querySelector('.nav__sandwich');
  navSandwich.addEventListener('click', function (event) {
    navSandwich.classList.add('active');
    popupMenu.style.display = 'flex';
  });
  popupMenuClose.addEventListener('click', function (event) {
    popupMenu.style.display = 'none';
    navSandwich.classList.remove('active');
  });
  var popupMenuLanguage = document.querySelector('.popup-menu-language');
  popupMenuLanguage.addEventListener('click', function (event) {
    var target = event.target;

    while (target != popupMenuLanguage) {
      if (target.tagName == 'A') {
        var childrenNavLanguage = Array.from(popupMenuLanguage.children);
        childrenNavLanguage.forEach(function (element) {
          element != target ? element.classList.remove('active') : target.classList.add('active');
        });
        return;
      }

      target = target.parentNode;
    }
  });
  var popupMenuLink = document.querySelectorAll('.popup-menu__link');
  popupMenuLink.forEach(function (element) {
    element.addEventListener('click', function (event) {
      popupMenu.style.display = 'none';
      navSandwich.classList.remove('active');
    });
  });
  var menuMobileBtn = document.querySelector('.menu-mobile__btn');
  var menuMobileHeader = document.querySelector('.menu-mobile__header');
  var menuMobileCategory = document.querySelector('.menu-mobile__category');
  menuMobileBtn.addEventListener('click', function (evnet) {
    menuMobileBtn.classList.toggle('active');
    menuMobileHeader.classList.toggle('active');
    menuMobileCategory.classList.toggle('active');
  });

  var addAccordion = function addAccordion(arrayChildren) {
    arrayChildren.forEach(function (element) {
      element.addEventListener('click', function (event) {
        var title = element.children[0];
        title.classList.toggle('active');
        var panel = title.nextElementSibling;
        var count = Array.from(panel.children).length;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = "".concat(40 * count, "px");
        element.parentElement.style.maxHeight = 'none';
      });
    });
  };

  var menuMobilePanel = document.querySelectorAll('.menu-mobile__name');
  menuMobilePanel.forEach(function (element) {
    element.addEventListener('click', function (event) {
      element.classList.toggle('active');
      var panel = element.nextElementSibling;
      panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
      addAccordion(Array.from(panel.children));
    });
  });
};
//# sourceMappingURL=main.js.map
