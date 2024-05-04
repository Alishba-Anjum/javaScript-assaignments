const helloPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello , World");
  }, 2000);
});

helloPromise.then((message) => console.log(message));
