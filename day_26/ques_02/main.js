function greetUser(user) {
    if (user === void 0) { user = 'anonymous'; }
    console.log("Hello ".concat(user));
}
greetUser("David");
greetUser();
