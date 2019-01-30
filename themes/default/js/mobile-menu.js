// добавляем класс для мобильного меню

export default function() {

  const menuButton = document.querySelector('.menu');
  const menu = menuButton.querySelector('.menu__list');

  menuButton.addEventListener("click", () => menu.classList.toggle('menu__list--open') );
}
