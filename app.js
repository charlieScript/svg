const logo = document.querySelectorAll('#logo path')

console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
  logo[i].style.strokeDashArray = logo[i].getTotalLength()
  logo[i].style.strokeDashOffset = logo[i].getTotalLength()
  // console.log(logo[i].style.strokeDashOffset);
}


logo.forEach(function(i) {
  console.log(parseInt(i.getTotalLength()));
})