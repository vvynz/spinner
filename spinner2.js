const spinner = "|/-\\/-\\|";

let delay = 100;

for (const char of spinner) {
  setTimeout(() => {
    // need the \r at the beginning here to have the cursor in place then we can print out each character after
    process.stdout.write("\r" + char);
  }, delay);
  delay += 200;
}
