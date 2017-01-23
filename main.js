var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
el.innerHTML = "";

planets.forEach(function(item, index){
	el.innerHTML += item + "<br>";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var mappedPlanets = planets.map(function(planet){
	return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log("Mapped: ", mappedPlanets);


// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsWithE = planets.filter(function(planet){
	return planet.includes("e")
})
console.log("Filtered: ", planetsWithE);


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function(prev, current){
	return prev + " " + current;
});
console.log("New Sentence: \n", sentence);