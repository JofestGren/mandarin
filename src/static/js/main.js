window.onload = () => {
  const menuLink = document.querySelectorAll('.menu__link');

  let addMouseLeave = category => {
    category.addEventListener('mouseleave', event => {
      category.classList.remove('active')
    })
  }

  let nowOpenCategory = null;

  menuLink.forEach(element => {
    element.addEventListener('mouseenter', event => {
      if (nowOpenCategory !== null) {
        nowOpenCategory.classList.remove('active');
      }
      let target = event.target;
      const category = target.parentElement.children[1];
      category.classList.toggle('active');
      addMouseLeave(category);
      nowOpenCategory = category;
      element.addEventListener('mouseleave', event => {
        category.classList.remove('active')
      })
      category.addEventListener('mouseenter', event => {
        category.classList.add('active')
      })
    })
  })

  const navLanguage = document.querySelector('.nav-language');
  navLanguage.addEventListener('click', event => {
    let target = event.target;

    while (target != navLanguage) {
      if (target.tagName == 'A') {
        const childrenNavLanguage = Array.from(navLanguage.children);
        childrenNavLanguage.forEach(element => {
          element != target ? element.classList.remove('active') :
          target.classList.add('active')
        })
        return;
      }
      target = target.parentNode;
    }
  })

  const navSearchBtn = document.querySelector('.nav-search__btn');
  const navSearch = document.querySelector('.nav-search');
  navSearchBtn.addEventListener('click', event => {
    navSearch.classList.add('active');
  })

  const popupMenu = document.getElementById('popupMenu');
  const popupMenuClose = document.querySelector('.popup-menu-close');
  const navSandwich = document.querySelector('.nav__sandwich');

  navSandwich.addEventListener('click', event => {
    navSandwich.classList.add('active');
    popupMenu.style.display = 'flex';
  })

  popupMenuClose.addEventListener('click', event => {
    popupMenu.style.display = 'none';
    navSandwich.classList.remove('active');
  })

  const popupMenuLanguage = document.querySelector('.popup-menu-language');
  popupMenuLanguage.addEventListener('click', event => {
    let target = event.target;

    while (target != popupMenuLanguage) {
      if (target.tagName == 'A') {
        const childrenNavLanguage = Array.from(popupMenuLanguage.children);
        childrenNavLanguage.forEach(element => {
          element != target ? element.classList.remove('active') :
          target.classList.add('active')
        })
        return;
      }
      target = target.parentNode;
    }
  })

  const popupMenuLink = document.querySelectorAll('.popup-menu__link');

  popupMenuLink.forEach( element => {
    element.addEventListener('click', event => {
      popupMenu.style.display = 'none';
      navSandwich.classList.remove('active');
    })
  })

  const menuMobileBtn = document.querySelector('.menu-mobile__btn');
  const menuMobileHeader = document.querySelector('.menu-mobile__header');
  const menuMobileCategory = document.querySelector(
    '.menu-mobile__category'
  )

  menuMobileBtn.addEventListener('click', evnet => {
    menuMobileBtn.classList.toggle('active');
    menuMobileHeader.classList.toggle('active');
    menuMobileCategory.classList.toggle('active');
  })

  const addAccordion = arrayChildren => {
    arrayChildren.forEach(element => {
      element.addEventListener('click', event => {
        const title = element.children[0];
        title.classList.toggle('active');
        const panel = title.nextElementSibling;
        const count = Array.from(panel.children).length;

        panel.style.maxHeight ? panel.style.maxHeight = null :
        panel.style.maxHeight = `${40*count}px`;
        element.parentElement.style.maxHeight = 'none';
      })
    })
  }

  const menuMobilePanel = document.querySelectorAll('.menu-mobile__name');

  menuMobilePanel.forEach(element => {
    element.addEventListener('click', event => {
      element.classList.toggle('active');
      const panel = element.nextElementSibling;
      panel.style.maxHeight ? panel.style.maxHeight = null :
      panel.style.maxHeight = panel.scrollHeight + "px"
      addAccordion(Array.from(panel.children))
    })
  })
}