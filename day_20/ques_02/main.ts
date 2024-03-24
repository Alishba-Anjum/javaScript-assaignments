function magicbox(Num: number):(number) => number {
    return function(Num2: number):number{
        return + Num2 + Num;
    };
}
 let addNum = magicbox(11);
 console.log(addNum(5));
 