// добавляем отступы для Carrying the Things America Depends On

export default function() {

  const carryingList = document.querySelectorAll('.section--4 .carrying__list .nubmer');
  const sectionWidth = 160;

  for (var i = 0; i < carryingList.length; i++) {
    const element = carryingList[i];
    const width = element.offsetWidth;
    const offset = sectionWidth-width;
    element.parentElement.style.marginLeft = `${offset}px`;
    element.style.display = 'block';
  }

}
