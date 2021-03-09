const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);  
  }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.  
}
setTimeout(() => {console.log()}, 50 * sentence.length);

