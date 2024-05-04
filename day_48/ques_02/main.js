var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error.message); });
