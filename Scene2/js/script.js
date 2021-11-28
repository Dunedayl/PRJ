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

});


// Define the Characters
monogatari.characters({
	'n': {
		name: 'Narator',
		color: '#ffffff',
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		'n Your name is Tony Benson. You are working in the print shop at PricewaterhouseCoopers LLP.',
		'n You takes pride in what you does, and you feels that you makes a contribution to the various products that go out the door representing the firm.',
		'n Every once in a while, you catches a problem, which gives him a sense of real satisfaction.',
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
		'end'
	],

	'Correct': [
		'n You corrected mistake',
		'n You felt that you had saved the firm considerable embarrassment – if not more – by catching the mistake.',
		'n After work you went to bar with your friend from company.',
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
		'n You made the right choice. Never tell stories about your corporate business in private conversation.'
	],

	'Tell': [
		'n The problem is that Benson is the one who is embarrassed now.',
		'n Over a drink after work with some - PricewaterhouseCoopers LLP friends, Benson reported his good deed, mentioning the names of two high - profile financial firms being assessed.',
		{
			'Choice': {
				'Dialog': 'What should Benson do?',
				'Do nothing': {
					'Text': 'Dont tell your boss about accident.',
					'Do': 'jump Do nothing'
				},
				'Silent': {
					'Text': 'Tell your boss about accident.',
					'Do': 'jump Tell boss'
				}
			}
		}
	],

	'Do nothing': [
		'n You decided to keep all of this as a secret.',
		'n You company was very upset because of date leak.',
		'n They started internal investigation and filed lawsuit against newspaper.',
		'n Newspaper was forced to tell company story behind data leaks.',
		'n You were fired for leak of confidential data and receive bad records on your personal file.'
	],

	'Tell boss': [
		'n You decided to tell you bos story about data leak.',
		'n You were put under investigation and was expected to be fired, but because of your honest confession they agreed to keep this incident of record.',
		'n But because you company know source of data leak and does not start expensive procedure of internal investigation and after stock price of your company goes up due news about acquisition, they decided to not fire you.',
		'n You receive some warnings and was obligated to visit corporate ethic courses. But in the end you realise that you made the right choice.'
	],


});