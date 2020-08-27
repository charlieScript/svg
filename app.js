const logo = document.querySelectorAll('#logo path')

// logo.forEach((i) => {
//   console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
// })

console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}