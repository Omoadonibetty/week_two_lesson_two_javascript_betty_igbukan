let person = {
    name: "Sarah",
    age: 28
};

let contactInfo = {
    email: "betty@gmail.com",
    phone: "+234703406962"
};

let job = {
    occupation: "Developer",
    company: "LMTech Hub"
};


let mergedObject = Object.assign({}, person, contactInfo, job);

console.log(mergedObject);
