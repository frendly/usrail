// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollOffset = 20;
  const buttonSelector = document.getElementById("button-top");

  if (document.body.scrollTop > scrollOffset || document.documentElement.scrollTop > scrollOffset) {
    buttonSelector.style.display = "block";
  } else {
    buttonSelector.style.display = "none";
  }
}