var cars = [
    {brand: "BMW", model: "M120", price: "280300", condition: "New", milage: 09, image: "th.jpg"},
    {brand: "Audi", model: "A3", price: "100900", condition: "Used", milage: 12000, image: "au.jpg"},
    {brand: "Toyota", model: "GT86", price: "350200", condition: "New", milage: 11, image: "t86.jpg"},
];

//document.write(cars[0].image.src);
//var h2 = document.createElement("h2");
//bwm
//var beamer = cars[0].brand;
//console.log(beamer);


document.getElementById("bwmImg").src = cars[0].image;
document.getElementById("audiImg").src = cars[1].image;
document.getElementById("toyotaImg").src = cars[2].image;

document.getElementById("bmw").innerHTML = cars[0].brand;
document.getElementById("model").innerHTML = cars[0].model;
document.getElementById("price").innerHTML = "Price: R " + cars[0].price;
document.getElementById("condition").innerHTML = "Condition: " + cars[0].condition;
document.getElementById("milage").innerHTML = "Milage: " + cars[0].milage  + " km";


//end_bwm
//audi
document.getElementById("audi").innerHTML = cars[1].brand;
document.getElementById("modelA").innerHTML = cars[1].model;
document.getElementById("priceA").innerHTML = "Price: R " + cars[1].price;
document.getElementById("conditionA").innerHTML = "Condition: " + cars[1].condition;
document.getElementById("milageA").innerHTML = "Milage: " + cars[1].milage  + " km";
//end_audi

//toyota
document.getElementById("toyota").innerHTML = cars[2].brand;
document.getElementById("modelT").innerHTML = cars[2].model;
document.getElementById("priceT").innerHTML = "Price: R " + cars[2].price;
document.getElementById("conditionT").innerHTML = "Condition: " + cars[2].condition;
document.getElementById("milageT").innerHTML = "Milage: " + cars[2].milage + " km";
//end_toyata



