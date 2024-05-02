// console.log(window.getComputedStyle(document.body));
console.log(
  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--box-text-color")
);
console.log(document.body.style.getPropertyValue("--box-text-color"));
document.body.style.setProperty("--box-text-color", 'red');
console.log(document.body.style.getPropertyValue("--box-text-color"));
document.querySelector('.box').style.setProperty("--box-text-color", 'green');