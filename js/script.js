/*
Shane Jeremich
October 2th, 2023
1.3 Code Exercise 02: Story Time 
*/

// Notify the user that this is a Mad Lib story
alert("Get ready for some laughter! With this Mad Libs game I'll ask you 6 questions to create a hilariously silly story.");

// Ask the user for input using prompts
var name = prompt("Give me a wacky name:");
var color = prompt("Choose a goofy color (the sillier, the better):");
var number = prompt("Pick a random, ludicrously large number:");
var favoriteMovie = prompt("Tell me your all-time favorite:");
var animal = prompt("Name a completely off-the-wall animal (the kind that wears sunglasses):");
var adjective = prompt("Give me an outrageously over-the-top adjective (absurdity level: 11):");

// Create the Mad Lib story using the user's input
var madLibStory = "In a galaxy far, far away, there lived a character named " + name + ".  " + name + " was renowned for an insatiable passion for the color " + color + ".  Their favorite number? Well, it was so mind-bogglingly colossal that it could only be expressed as " + number + ", a number so big it boggled the mind! " + "One fateful day, they decided to watch \"" + favoriteMovie + "\", the kind of movie that instantly gave you superpowers, " + "while chilling with their pet " + animal + ". This pet, mind you, was no ordinary critter; it had a talent for the most " + adjective + " shenanigans, and little did they know, these shenanigans would play a crucial role in saving the world.";


// Alert the user to check their Mad Lib story in the console
alert("Your Mad Lib story is ready! Please check the Console for your hilarious adventure.");

// Display the completed Mad Lib story to the user
console.log("\n\n" + madLibStory);
