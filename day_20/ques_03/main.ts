let user_profile = (function () {
  let Name: string = "Alishba";
  let fName: string = "anjum";
  return {
    displayInfo: function () {
      console.log(`Name: ${Name} , fName: ${fName}`);
    },
  };
})();

user_profile.displayInfo();
