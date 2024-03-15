var Guestss = ["muniba", "Hoor", "Riya", "ayesha"];
while (Guestss.length > 2) {
    var removedGuests = Guestss.pop();
    console.log("SORRY ".concat(removedGuests));
}
for (var _i = 0, Guestss_1 = Guestss; _i < Guestss_1.length; _i++) {
    var guest = Guestss_1[_i];
    console.log("".concat(guest, " you are still invited."));
}
