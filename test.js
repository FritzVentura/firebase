

// NB tilføj disse snippets i consolen for at tilføje data manuelt til endpointet/databasen


///////////////////////////////////////////////////////////////
// store/gem data i en global variabel
let myObj = {
    hansen: "Store ting",
    dubbi: "nemlig",
    description: "Det her er Data"
}
// push til database / opret data til endpointet/databasen
database.ref("notes/").push(myObj);




////////////////////////////////////////////////////////////////
// overskriv specifik data i endpointet/databasen
database.ref("notes/-LEDrqQi-GT-kwN0G211").set({
    header: "hej",
    description: "hej med dig"
})