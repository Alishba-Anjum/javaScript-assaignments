let Guestss: string[] = ["muniba", "Hoor", "Riya", "ayesha"];

while(Guestss.length > 2){
    let removedGuests = Guestss.pop();
    console.log(`SORRY ${removedGuests}`);
}

for (let guest of Guestss){
    console.log(`${guest} you are still invited.`);
    
}