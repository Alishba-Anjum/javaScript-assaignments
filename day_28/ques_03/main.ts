function replacement(sentence: string) {
  return sentence.replace(/ javascript/g, " typescript");
}

console.log(replacement("I love javascript and javascript is awesome!"));
