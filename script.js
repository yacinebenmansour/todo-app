const form = document.querySelector('.form--todo');
const input = document.querySelector('.new--todo');
const todos = document.querySelector('.todos');
const todoItems = document.querySelectorAll('.item');
const check = document.querySelectorAll('.check');
const all = document.querySelector('.all');
const active = document.querySelector('.active');
const completed = document.querySelector('.completed');
const clear = document.querySelector('.clear');
const number = document.querySelector('.number');
const theme = document.querySelector('.theme');
const themeIcon = document.querySelector('.theme-icon');
const topImage = document.querySelector('.top__image');
const html = document.querySelector('html');

theme.addEventListener('click', () => {
  if (themeIcon.getAttribute('src').includes('./images/icon-sun.svg')) {
    themeIcon.setAttribute('src', './images/icon-moon.svg');
    topImage.setAttribute('src', './images/bg-desktop-light.jpg');
    html.setAttribute('data-theme', 'light');
  } else {
    themeIcon.setAttribute('src', './images/icon-sun.svg');
    topImage.setAttribute('src', './images/bg-desktop-dark.jpg');
    html.setAttribute('data-theme', 'dark');
  }
});

let arr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = input.value.trim();
  if (todoText.value !== '') {
    const todoItem = document.createElement('div');
    arr.push('new-item');
    // todoItem.setAttribute('data-filter','')
    todoItem.className = 'item';
    todoItem.innerHTML = `
    <div class="aaa">
    <div class="check">
    <img src="./images/icon-check.svg" class="check-icon"/></div>
    <p class="item--text">${todoText}</p>
  </div>
  <div>
    <button class="cross"><img src="./images/icon-cross.svg" /></button>
  </div>
                `;
    todos.insertAdjacentElement('beforeend', todoItem);
    input.value = '';

    const del = todoItem.querySelector('.cross');

    del.addEventListener('click', () => {
      todoItem.remove();
      arr.pop('new-item');
      number.textContent = `${arr.length}`;
    });

    todoItem.addEventListener('click', () => {
      todoItem.classList.toggle('item-checked');
      todoItem.setAttribute('data-filter', 'checked');
    });
    number.textContent = `${arr.length}`;
    // clear.addEventListener('click', () => {});
  }
});

// active.addEventListener('click', () => {
//   todoItems.forEach((item) => {
//     if (item.getAttribute('data-filter').includes('checked')) {
//       item.style.display = 'none';
//     }
//   });
// });

// completed.addEventListener('click', () => {
//   todoItems.forEach((item) => {
//     if (!item.getAttribute('data-filter').includes('checked')) {
//       item.style.display = 'none';
//     }
//   });
// });
