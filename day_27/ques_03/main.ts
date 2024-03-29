function ovjProperties(obj: object){ 
    for (let property in obj){
        console.log(`${property}: ${obj[property]}`);
        
    }
}

ovjProperties({make: "toyota" , model: "Corolla", year: 2022, color:"black"});