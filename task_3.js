let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    fuelType: "Petrol"
};

for (let property in car) {
    console.log(`${property}: ${car[property]}`);
}
