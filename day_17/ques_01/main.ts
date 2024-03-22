function Hobbies (...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
        
    })
}
Hobbies("Coding" , "Reading" , "Teaching");