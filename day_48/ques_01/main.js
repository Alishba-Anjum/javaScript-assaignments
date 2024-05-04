var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello , World");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
