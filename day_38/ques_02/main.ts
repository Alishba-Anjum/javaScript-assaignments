const countries = new Map<string, string>();
countries.set("USA", "washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokoy");

console.log(countries);


function capitalOfCanada(countries: Map<string, string>): void{
    if(countries.has("Canada")){
        console.log(`The capital of canada is ${countries.get("Canada")}`);
    }else{
        console.log("Canada is not in the map");
        
    }
}
capitalOfCanada(countries);
