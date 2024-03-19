function cities(city: string, country: string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

cities("karachi");
cities("islamabad");
cities("lahore");
cities("peshawar");
cities("multan");
cities("quetta");
cities("istanbul" , "Turkey");
cities("mumbai" , "India")