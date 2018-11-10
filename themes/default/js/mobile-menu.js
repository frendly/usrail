// добавляем класс для мобильного меню

export default function() {

  const menuButton = document.querySelector('nav');
  const menu = menuButton.querySelector('ul');

  menuButton.addEventListener("click", () => menu.classList.toggle('active') );

}
