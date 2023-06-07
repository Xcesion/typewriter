const sentence = "hello there from lighthouse labs";
let delay = 0
for (const char of sentence) {
  // process.stdout.write(char);
  setTimeout(() => {
  // print the char here
  process.stdout.write(char);
  }, delay += 50)
}

setTimeout(()=> {
  console.log("")
}, delay)