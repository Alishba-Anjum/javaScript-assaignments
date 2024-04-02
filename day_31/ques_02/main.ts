function removeLastElement(arr: any): any{
    return arr.pop(); // removes and retuns the last element of the array
}



let Names: string[] = ["Muniba", "Hoor", "Riya"];
console.log(removeLastElement(Names));//output Riya
console.log(Names);//outputs ["Muniba", "Hoor"]
