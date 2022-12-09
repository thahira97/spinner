let cursors = "|/-|/-\\ ";
for (let i = 0; i < cursors.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${cursors[i]}    `);
  }, i * 250);
}
