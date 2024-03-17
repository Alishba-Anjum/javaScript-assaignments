var userNames = ["admin", "alishba", "samiya", "areesha", "habiba"];
userNames.forEach(function (userNames) {
    if (userNames == "admin") {
        console.log("hello admin!");
    }
    else {
        console.log("Hello ".concat(userNames));
    }
});
