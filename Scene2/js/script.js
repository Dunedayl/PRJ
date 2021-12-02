/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	bar: 'bar.png',
	printShop: 'printShop.png',
	printShopInside: 'printShopInside.png',
	office: 'officeCabinet.png'
});


// Define the Characters
monogatari.characters({
	'n': {
		name: 'Narrator',
		color: '#0047ab',
	},
	'tony': {
		name: 'Tony Benson',
		color: '#18326a',
		sprites: {
			normal: 'tony.png',
		}
	},
	'interested': {
		name: 'Interested Person',
		color: '#f39a15',
		sprites: {
			normal: 'interested_person_1.png',
		}
	},
	'boss': {
		name: 'Your boss',
		color: '#f39a15',
		sprites: {
			normal: 'manager_1.png',
		}
	}

});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene printShop with fadeIn',
		'show character tony normal at right with fadeIn',
		'n Your name is Tony Benson. You are working in the print shop at PricewaterhouseCoopers LLP.',
		'n You takes pride in what you does, and you feels that you makes a contribution to the various products that go out the door representing the firm.',
		'n Every once in a while, you catches a problem, which gives him a sense of real satisfaction.',
		'show scene printShopInside with fadeIn',
		'show character tony normal at right with fadeIn',
		'n For example, last week you noticed a typo on the cover of a report you was given to copy. It was an assessment of a potential merger between two major companies in the financial services area.',
		{
			'Choice': {
				'Dialog': 'n What you do?',
				'Correct the mistake': {
					'Text': 'Correct the mistake.',
					'Do': 'jump Correct'
				},
				'No': {
					'Text': 'Do nothing.',
					'Do': 'jump Nothing'
				}
			}
		}
	],

	'Nothing': [
		'n You decided to do nothing with mistake.',
		'n Contract between firms was cancelled because of this error.',
		'n You were fired for your incompetence.',
		"n That was wrong choice, remember always double check data in search for other people's mistakes.",
		"n Even if it was not your fault it doesn't mean you should not fix it.",
		"n Now lets see what you should do in this situation.",
		'jump Correct'
	],

	'Correct': [
		'n You corrected mistake.',
		'n You felt that you had saved the firm considerable embarrassment – if not more – by catching the mistake.',
		'show scene bar with fadeIn',
		'n After work you went to bar with your friend from company.',
		'show character tony normal at right with fadeIn',
		{
			'Choice': {
				'Dialog': 'n Should you tell them your story?',
				'Tell': {
					'Text': 'Tell friends story of this mistake.',
					'Do': 'jump Tell'
				},
				'Silent': {
					'Text': 'You decided to keep story to yourself.',
					'Do': 'jump Silent'
				}
			}
		}
	],

	'Silent': [
		'n You made the right choice. Never tell stories about your corporate business in private conversation.',
		'n Now lets see what happen if you tell this story to your friends',
		'jump Tell'
	],

	'Tell': [
		'n The problem is that Benson is the one who is embarrassed now.',
		'n Over a drink after work with some - PricewaterhouseCoopers LLP friends, you reported your good deed, mentioning the names of two high - profile financial firms being assessed.',
		'show character interested normal at left with fadeIn',
		'n One of the people in the group, someone you did not know well, seemed particularly interested.',
		'n When he asked a question about the content of the report, you began to feel uneasy and quickly changed the conversation.',
		'n This morning, the front page of the newspaper carried a brief story about the potential merger. It cited a confidential source. You is afraid that it might have been him.',
		'n What should you do?',
		'show scene office with fadeIn',
		{
			'Choice': {
				'Dialog': 'What should Benson do?',
				'Do nothing': {
					'Text': 'Dont tell your boss about accident.',
					'Do': 'jump nothing'
				},
				'Silent': {
					'Text': 'Tell your boss about accident.',
					'Do': 'jump GoToBoss'
				}
			}
		}
	],

	'nothing': [
		'show scene office with fadeIn',
		'show character tony normal at right with fadeIn',
		'n You decided to keep all of this as a secret.',
		'n You company was very upset because of date leak.',
		'n They started internal investigation and filed lawsuit against newspaper.',
		'n Newspaper was forced to tell company story behind data leaks.',
		'n You were fired for leak of confidential data and receive bad records on your personal file.',
		'n Thats a bad way of solving this problem',
		'n Now lets take a look at better way to do it',
		'jump GoToBoss'
	],

	'GoToBoss': [
		'show scene office with fadeIn',
		'show character tony normal at right with fadeIn',
		'show character boss normal at left with fadeIn',
		'n You decided to tell you bos story about data leak.',
		'n You were put under investigation and was expected to be fired, but because of your honest confession they agreed to keep this incident of record.',
		'n But because you company know source of data leak and does not start expensive procedure of internal investigation and after stock price of your company goes up due news about acquisition, they decided to not fire you.',
		'n You receive some warnings and was obligated to visit corporate ethic courses. But in the end you realise that you made the right choice.',
		'jump choices'
	],

	'choices': [
		{
			'Input': {
				'Text': 'Please enter your name.',
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { name: input } });
				},
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Revert': () => {
					monogatari.storage({ player: { name: '' } });
				},
				'Warning': 'You must enter your name.'
			}
		},
		{
			'Input': {
				'Text': 'How do we want people to handle situations where they have made a mistake?',
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { q1: input } });
				},
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { q1: input } });
				},
				'Revert': () => {
					monogatari.storage({ player: { q1: '' } });
				},
				'Warning': 'You must enter your answer.'
			}
		},
		{
			'Input': {
				'Text': 'What obligation is there to report this potential breach of confidentiality?',
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { q2: input } });
				},
				'Revert': () => {
					monogatari.storage({ player: { q2: '' } });
				},
				'Warning': 'You must enter your answer.'
			}
		},
		{
			'Input': {
				'Text': 'What should be done with someone who makes a mistake like this?',
				'Type': 'radio',
				'Options': [
					{
						label: 'He must be fired',
						value: 'fired',
					},
					{
						label: 'It is not enough reason for dismissal.',
						value: 'no',
					},
					{
						label: 'It is not enough reason for dismissal, but some sanctions need to be implemented.',
						value: 'sanctions',
					}
				],
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { q3: input } });
				},
				'Revert': () => {
					monogatari.storage({ player: { q3: '' } });
				},
				'Warning': 'You must select!'
			}
		},
		{
			'Input': {
				'Text': 'Does the fact that the person is an administrative staff member affect the situation?',
				'Type': 'radio',
				'Options': [
					{
						label: 'Yes',
						value: 'yes',
					},
					{
						label: 'No',
						value: 'no',
					}
				],
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { q4: input } });
				},
				'Revert': () => {
					monogatari.storage({ player: { q4: '' } });
				},
				'Warning': 'You must select.'
			}
		},
		{
			'Input': {
				'Text': 'What should Benson do?',
				'Type': 'radio',
				'Options': [
					{
						label: 'Tell to company',
						value: 'tell',
					},
					{
						label: 'Keep silence',
						value: 'silence',
					}
				],
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					// Save the favorite color in the storage
					monogatari.storage({ player: { q5: input } });
				},
				'Revert': () => {
					// Reset the favorite color property
					monogatari.storage({ player: { q5: '' } });
				},
				'Warning': 'You must select.'
			}
		},
		{
			'Function': {
				'Apply': () => {
					const player = monogatari.storage('player');
					var xhr = new XMLHttpRequest();
					xhr.open("POST", 'http://localhost:2599/scene2', true);
					xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
					xhr.send(JSON.stringify({
						"value": player
					}));
				}
			},
		},
		'end'
	],

});