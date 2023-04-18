function getTime(): number{//number specifies the return type
    return new Date().getTime();
}

console.log(getTime());

function greet(): void{
    console.log("HEllo");
}
greet();

function multiply(a: number,b: number ): number{
    return a*b;
}
console.log(multiply(5,4));


//optional parameter
function add(a: number, b: number, c?: number ): number{
    return a+b+(c || 0);
}
console.log(add(5,5));
console.log(add(2,7,1));


//default parameter
function expo(value: number, exponent: number =1): number {
    return value**exponent;
}

console.log(expo(2,3));
console.log(expo(2,4));
console.log(expo(2,5));
console.log(expo(2));
