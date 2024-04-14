function equalStrings(String1 : string, Sting2: string):boolean{
    return String1.toLowerCase() === Sting2.toLowerCase();
}

console.log(equalStrings("alishba", "AliShba"));//outputs true
console.log(equalStrings("hey", "hi"));//outputs false

