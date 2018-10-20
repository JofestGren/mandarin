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

//     const popupFeedback = document.getElementById('popupFeedback');
//     const feedbackBtn = document.querySelectorAll('.feedback-btn');
//     const popupFeedbackClose = document.querySelector('.popup-feedback-close');

//     feedbackBtn.forEach(element => {
//         element.addEventListener('click', event => {
//             popupFeedback.style.display = 'flex';
//         })
//     })
    
//     popupFeedbackClose.addEventListener('click', event => {
//         popupFeedback.style.display = 'none';
//     })

//     const actionsConsultationBtn = document.querySelector('.actions-consultation__btn');

//     if (window.innerWidth < 1024) {
//         actionsConsultationBtn.addEventListener('click', event => {
//             event.preventDefault();
//             popupFeedback.style.display = 'flex';
//         })
//     }

//     const sizeRoof = document.getElementById('sizeRoof');
//     const roofLine = document.getElementById('roofLine');

//     sizeRoof.addEventListener('mouseenter', event => {
//         roofLine.style.display = 'block';
//     })

//     sizeRoof.addEventListener('mouseleave', event => {
//         roofLine.style.display = 'none';
//     })

//     const popupMenu = document.getElementById('popupMenu');
//     const popupMenuClose = document.querySelector('.popup-menu-close');
//     const popupMenuList = document.querySelector('.popup-menu__list');

//     const homeSandwich = document.querySelector('.home__sandwich');
//     homeSandwich.addEventListener('click', event => {
//         homeSandwich.classList.toggle('active');
//         popupMenu.style.display = 'flex'
//     })

//     window.addEventListener('click', event => {
//         if (event.target == popupFeedback) {
//           popupFeedback.style.display = 'none';
//         } else if (event.target == popupMenu) {
//             popupMenu.style.display = 'none';
//             homeSandwich.classList.remove('active');
//         }
//     });
    
//     popupMenuClose.addEventListener('click', event => {
//         popupMenu.style.display = 'none';
//         homeSandwich.classList.remove('active');
//     })

//     popupMenuList.addEventListener('click', event => {
//         let target = event.target;

//         while (target != popupMenuList) {
//             if (target.tagName == 'A') {
//                 popupMenu.style.display = 'none';
//                 homeSandwich.classList.remove('active');
//                 return;
//             }
//             target = target.parentNode;
//         }
//     })

    

//     // Custom select don't touch the dangerous zone !!!
//     var i, j, selElmnt, a, b, c;
//     /*look for any elements with the class "custom-select":*/
//     var select = document.getElementsByClassName('calculation-content__select');

//     var selectorCustom = function (x) {
//         for (i = 0; i < x.length; i++) {
//             selElmnt = x[i].getElementsByTagName("select")[0];
//             /*for each element, create a new DIV that will act as the selected item:*/
//             a = document.createElement("DIV");
//             a.setAttribute("class", "select-selected");
//             a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//             x[i].appendChild(a);
//             /*for each element, create a new DIV that will contain the option list:*/
//             b = document.createElement("DIV");
//             b.setAttribute("class", "select-items select-hide");
//             for (j = 0; j < selElmnt.length; j++) {
//                 /*for each option in the original select element,
//                 create a new DIV that will act as an option item:*/
//                 c = document.createElement("DIV");
//                 c.innerHTML = selElmnt.options[j].innerHTML;
//                 c.addEventListener("click", function(e) {
//                     /*when an item is clicked, update the original select box,
//                     and the selected item:*/
//                     var y, i, k, s, h;
//                     s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//                     h = this.parentNode.previousSibling;
//                     for (i = 0; i < s.length; i++) {
//                     if (s.options[i].innerHTML == this.innerHTML) {
//                         s.selectedIndex = i;
//                         h.innerHTML = this.innerHTML;
//                         y = this.parentNode.getElementsByClassName("same-as-selected");
//                         for (k = 0; k < y.length; k++) {
//                         y[k].removeAttribute("class");
//                         }
//                         this.setAttribute("class", "same-as-selected");
//                         break;
//                     }
//                     }
//                     h.click();
//                 });
//                 b.appendChild(c);
//             }
//             x[i].appendChild(b);
//             a.addEventListener("click", function(e) {
//                 /*when the select box is clicked, close any other select boxes,
//                 and open/close the current select box:*/
//                 e.stopPropagation();
//                 closeAllSelect(this);
//                 this.nextSibling.classList.toggle("select-hide");
//                 this.classList.toggle("select-arrow-active");
//             });
//         }
//         function closeAllSelect(elmnt) {
//         /*a function that will close all select boxes in the document,
//         except the current select box:*/
//         var x, y, i, arrNo = [];
//         x = document.getElementsByClassName("select-items");
//         y = document.getElementsByClassName("select-selected");
//         for (i = 0; i < y.length; i++) {
//             if (elmnt == y[i]) {
//             arrNo.push(i)
//             } else {
//             y[i].classList.remove("select-arrow-active");
//             }
//         }
//         for (i = 0; i < x.length; i++) {
//             if (arrNo.indexOf(i)) {
//             x[i].classList.add("select-hide");
//             }
//         }
//         }
//         /*if the user clicks anywhere outside the select box,
//         then close all select boxes:*/
//         document.addEventListener("click", closeAllSelect);
//     }

//     selectorCustom(select)
    
}