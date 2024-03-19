let magicians: string[] = ["Alishba", "Muniba", "Hoor" , "Riya"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}


function great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

great(magicians); 
show_magicians(magicians); 