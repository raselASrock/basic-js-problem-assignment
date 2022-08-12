const nayok = {
    name: "Sakib Khan",
    id: 121,
    address: "movie-cenima",
    isSingle: true ,
    friends: ["apu", "sihab", "tomal", "salman", "amir"],
    movies: [{name: "no-1 sakib-khan", year: 2015}, {name: "king-khan", year: 2017}],
    act: function(){
        console.log("acting like sakib khan")
    },
    car: {
        brand:"tesla",
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: "tesla",
            ceo: "Elon-Mask",
            country: "USA"
        }
    }
}

console.log(nayok.act);