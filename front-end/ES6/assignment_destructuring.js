const address = {
    street: "Govindpuram",
    city: "Ghaziabad",
    country: "India"
}

// const street = address.street;
// const city = address.city;
// const country =address.country;


// Using alias
const {street: st} = address;

console.log(st)

