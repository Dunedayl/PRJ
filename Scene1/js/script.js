/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
	Help: {
		title: "Help",
		subtitle: "Some useful Links",
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
	Welcome: {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {

});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {});

// Define the Characters
monogatari.characters({
	n: {
		name: "Narator",
		color: "#FF432"
	},
	m: {
		name: "Manager",
		color: "#5bcaff"
	},
	e: {
		name: "Executive Assistant",
		color: "#fffff"
	}
});

monogatari.script({
	// The game starts here.
	Start: [
		"show scene #f7f6f6 with fadeIn",
		"n Your name is Tina Wilson.",
		"n This morning, while you was talking with the partner about priorities for the day, meeting was interrupted by one of the managers.",
		"n Among other things, the manager asked whether one of the other executive assistants – a good friend of yours – had been told that she was being let go.",
		"n Noting your's shock, the partner explained that the executive assistant’s work was way below standard and that the situation was getting worse by the day.",
		"n He admonished you not to say anything to the executive assistant, observing.",
		"m I know this is hard for you because she is a friend. We’ll be talking with her at the end of the week.",
		"n Later that day, the executive assistant rushed over to Wilson at lunch.",
		"e You’ll never guess what has happened. The Ford dealer just called and accepted my offer on the car I want. It’ll be a stretch, but it’ll be worth the hard-ship. I’ll be eating peanut butter and jelly for a while. Anyway, I’m going over tonight to pick the car up.",
		"n What should she do?",
		{
			Choice: {
				Dialog: "y What should she do?",
				Tell: {
					Text: "Tell her about todays incident.",
					Do: "jump Tell"
				},
				Silence: {
					Text: "Silence",
					Do: "jump Silence"
				},
				Hint: {
					Text: "Leave anonymous hint.",
					Do: "jump Hint"
				},
			}
		}
	],

	Tell: [
		"n You decided to tell your friend!",
		"y Sorry friend, I was not supposed to tell you but...",
		"n You retell your story.",
		"e Thank you for telling me. How they dared to fire me? I'll show them.",
		"n Immediately your friend went to manager with complains.",
		"e I work every day, make all that you want from me and you...",
		"n Manager was angry on you.",
		"m You fired.",
		"end"
	],

	Silence: [
		"n You decided to keep information to yourself.",
		"n Your friend was fired from her job, and she went through all kind of problems in life.",
		"n She was force to move to another state.",
		"n After some time you stop talking.",
		"n But on your job you get promotion and soon you was able to afford to buy a new car.",
		"end"
	],
	
	Hint: [
		"n You decide to leave anonymous hint to your friend.",
		"n You friend went to the manager with complains.",
		"n She was fired but dont bought a car.",
		"n You still best friends.",
		"n Manager guessed that you leave hint.",
		"n He was newer able to proof it",
		"n But your position in work became unbearable and soon you decided to live your job."
	]
});