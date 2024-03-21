let magicians: string[] = ["Alishba", "Hooor", "Muniba", "Riya"];
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_greatmagicians(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  magicians.forEach((magicians) => {
    greatMagicians.push(`${magicians} the great`);
  });
  return greatMagicians;
}
let greatMagicians = make_greatmagicians(magicians.slice());
console.log("orignal magicians");
show_magicians(magicians);
console.log("Great magicians");
show_magicians(greatMagicians);
