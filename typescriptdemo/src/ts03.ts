const car: {make: string, model: string, year: number} ={
    make: "Toyota",
    model: "double engine",
    year: 6
};

console.log(car);

const house ={ 
    type: "duple",
};
//house.type=3;
//console.log(house);

interface ICar {
    make: string;
    model: string;
    year: number;
    colour: string;
}

const newcar: ICar ={
    make: "Honda",
    model: "City",
    year: 2020,
    colour: "RED",
};
console.log(newcar);

interface ISafeCar extends ICar {
    airbags: number;
}

const mysafecar: ISafeCar = {
    make: "Bugati",
    model: "ROCKET",
    year: 2023,
    colour: "GReenish Gold",
    airbags: 6,
};
console.log(mysafecar);