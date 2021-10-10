var tracery = require('tracery-grammar')

export const actionString = (fortune: string) => {
  return `You crack open a fortune cookie! ${fortune}.`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#good# The fortune reads "#goodFortune#"',
      '#good# The fortune reads "#goodFortune#"',
      '#good# The fortune reads "#goodFortune#"',
      '#bad# The fortune reads "#badFortune#"'
    ],
    good: [
      '#ooh#, #tasty#!',
      '#ooh#, tastes like #goodFlavor#!',
      'A #tasty# cookie #thatsLike# #goodFlavor#.'
    ],
    ooh: [
      'Ooh',
      'Mmm',
      'Ahhhh',
      'Hmm',
      'Hooray',
      'Nice',
      'Wonderful',
      'Delightful'
    ],
    tasty: [
      'tasty',
      'delicious',
      'delightful',
      'scrumptious'
    ],
    thatsLike: [
      'that tastes like',
      'with notes of',
      'that reminds you of',
      'that\'s just like'
    ],
    goodFlavor: [
      'apple',
      'banana',
      'almond',
      'peanut butter',
      'walnut',
      'lychee',
      'mango',
      'red bean',
      'vanilla',
      'chocolate',
      'strawberry',
      'matcha',
      'cinnamon',
      'cheesecake',
      'snickerdoodle',
      'gingersnap',
      's\'more',
      'shortbread',
      'tiramisu',
      'lemon',
      'raspberry',
      'honey',
      'birthday cake',
      'caramel',
      'hazelnut',
      'coffee',
      'lavender',
      'pistachio'
    ],
    goodFortune: [
      'Always be aware of the phase of the moon!',
      'Amulets of Yendor are hard to make.  Even for a wand of wishing.',
      'Be careful!  The Wizard may plan an ambush!',
      'Digging up a grave could be a bad idea…',
      'Eat your carrots.  They\'re good for your eyes.',
      'Elbereth has quite a reputation around these parts.',
      'For a good time engrave "Elbereth"',
      'I smell a maze of twisty little passages.',
      'I\'m watching you.  -- The Wizard of Yendor',
      'Not all boots were made for walking.',
      'Someone once said that what goes up < might come down >.',
      'The magic marker is mightier than the sword.',
      'There is no harm in praising a large dog.',
      'They say that if you start at the bottom the only place to go is up.',
      'They say that you are what you eat.',
      'Two wrongs don\'t make a right, but three lefts do.',
      'Why do you suppose they call them MAGIC markers?',
      'You may discover a menagerie inside a potion bottle.',
      'The art of mimicry may be learned from the bartender, if you\'re clever.',
      'You might be a Proc Gen Wizard if you believe procedural generation is a set of rules to be studied and mastered.',
      'You might be a Proc Gen Sorcerer if you believe procedural generation is a medium to examine your intuitions.',
      'You might be a Proc Gen Bard if you believe in embracing the strangeness of procedurally generated content.',
      'You might be a Proc Gen Artificer if your passion is in building tools and interfaces for others to explore procedural generation.',
      'You might be a Proc Gen Cleric if rituals are a part of your procedural generation work.',
      'You might be a Proc Gen Warlock if you have argued with your procedural generator.',
      'You might be a Proc Gen Druid if you are proud of your procedural generator\'s growth.',
      'You might be a Proc Gen Ranger if you can guide others on their paths to procedural generation joy.',
      'You might be a Proc Gen Paladin if you are an activist for true understanding of the tools of procedural generation.',
      'They say that fortune cookies are food for thought.',
      'Impress your partners and friends! Bring them an orb!',
      'The real ascension is the friends you make along the way.',
      'Losing is ❗fun❗',
      'Never turn your back on an elephant.',
      'You found kitten! Good job, robot!',
      '<a href=https://archiveofourown.org/works/5458259 target="_blank">Just because it says READ ME doesn\'t mean you should.</a>',
      'They say the greatest conduct you can follow is <a href=https://roguelike.club/code.html target="_blank">the Code</a>.',
      '<a href=https://www.youtube.com/playlist?list=PLi7jNGNQhwdhKzh2I7NNJTxHjQEVejLxm target="_blank">Check out the videos from 2020!</a>',
      '<a href=http://www.roguelikeradio.com/2020/09/episode-156-roguelike-celebration-event.html target="_blank">Listen to some of the organizers speak to Roguelike Radio!</a>',
      '<a href=https://www.youtube.com/playlist?list=PLi7jNGNQhwdg9M2K3s6W73E0BlWF0qrLY target="_blank">Check out the videos from 2019!</a>',
      '<a href=https://www.youtube.com/watch?v=jviNpRGuCIU&list=PLi7jNGNQhwdisqRtuvX8X8Q2F0TEUgQ5V target="_blank">Check out the videos from 2018!</a>',
      '<a href=https://www.youtube.com/watch?v=wwc7pZqs9UA&list=PLi7jNGNQhwdhiZcp2g4yU7xpXmOqS9VBl target="_blank">Check out the videos from 2017!</a>',
      '<a href=https://www.youtube.com/channel/UCsCqXksJuAkfZRtnW5Pq1mw/videos target="_blank">Check out the videos from 2016!</a>',
      'Thank you once again to <a href=https://whitecoatcaptioning.com/ target="_blank">White Coat Captioning</a>!',
      'Buy a <a href=https://www.aatwebstore.com/rc2021/shop/home target="_blank">t-shirt</a>, designed by <a href=https://marlowedobbe.com/ target="_blank">Marlowe Dobbe</a>!',
      'The beautiful stream overlays are made by <a href=https://christen.carrd.co/ target="_blank">Christen Alqueza</a>!',
      'Crush monsters, THEN get loots',
      'Spike pits are best avoided and bad for your health',
      'Always put a bag of holding into another bag of holding. I mean, what could possibly happen? <u>Nothing bad.</u>',
      'Unlike "Snake" you can always go back. Don\'t trust your keyboard\'s auto repeat.',
      'Metaprogression isn\'t permadeath',
      'Always wear the golden dragon armor on D:1',
      'Kick the dust from the stairs - what could go wrong?',
      'You don\'t <u>ever</u> drink unidentified potions... unless you have to.',
      'All-bards may not be the most powerful party composition, but it <u>is</u> the most fun!',
      'Death is just a new beginning!',
      'Metaprogression in FUN!',
      'In terms of procgen practitioner D&D classes, we can contain multitudes.',
      'Swallow sludge to transform yourself',
      'Procedural cat generation is money on the table.',
      'Add features to solve balance issues.',
      'Live as you play: Randomly',
      'The corridor is your friend.',
      'You\'ll be happier if you finish making it!',
      'Every monster you date is a monster you don\'t have to slay.',
      'You are lucky! Full moon tonight.',
      'Lucky you! You have a cookie to eat.',
      'Your luck is glorious, and so use your luck for good!'
    ],
    bad: [
      '#ugh#, #gross#!',
      '#ugh#, tastes like #badFlavor#.',
      '#aGross# cookie #thatsLike# #badFlavor##weirdly#.'
    ],
    ugh: [
      'Ugh',
      'Eww',
      'Blergh',
      'Blah',
      'Oh no'
    ],
    aGross: [
      'A #gross#',
      'An #awful#'
    ],
    gross: [
      'gross',
      'bizarre',
      'nasty',
      'vile',
      'miserable'
    ],
    awful: [
      'awful',
      'icky',
      'odious'
    ],
    badFlavor: [
      'shakespeariansm',
      'frustration',
      'floppy disks',
      'dadaism',
      'entity component systems',
      'Dijkstra maps',
      'the infinte',
      'deadlines',
      'production schedules',
      'social interaction',
      'impostor syndrome',
      'prequel films',
      'discourse',
      'uncertainty (maybe?)',
      'prime numbers',
      'shadows',
      'friendship',
      'red',
      'orange',
      'yellow',
      'green',
      'purple',
      'violet',
      'hot pink',
      'fuchsia',
      'blue',
      'beige',
      'octarine',
      'electricity',
      'spikes',
      'wave function collapse',
      'capitalism',
      'meetings'
    ],
    weirdly: [
      '',
      ', weirdly',
      ', strangely',
      ', as odd as that sounds',
      ', somehow'
    ],
    badFortune: [
      'Be careful when eating bananas. Monsters might slip on the peels.',
      'Does your boss know what you\'re doing right now?',
      'Don\'t tell a soul you found a secret door, otherwise it isn\'t a secret anymore.',
      'If you thought the Wizard was bad, just wait till you meet the Warlord!',
      'Never play leapfrog with a unicorn.',
      'Never trust a random generator in magic fields.',
      'Ouch.  I hate when that happens.',
      'PLEASE ignore previous rumor.',
      'Sorry, no fortune this time.  Better luck next cookie!',
      'Suddenly, the dungeon will collapse…',
      'The magic word is "XYZZY".',
      'The mines are dark and deep, and I have levels to go before I sleep.',
      'They say that a black pudding is simply a brown pudding gone bad.',
      'They say that a fortune only has 1 line and you can\'t read between it.',
      'They say that a hot dog and a taco are the same thing.',
      'They say your vanilla soy latte is a three bean soup.',
      '#game# is a roguelike.',
      'ASCII, dungeons - by certain interpretations, you\'re playing a roguelike right now!',
      'Is *this* a roguelike?',
      'They say that no one will admit to starting a rumor.',
      'They say that there is no such thing as free advice.',
      'Unfortunately, this message was left intentionally blank.',
      'Warning:  fortune reading can be hazardous to your health.',
      'Yet Another Silly Message (YASM).',
      'You swallowed the fortune!',
      'You are Xom\'s most beloved teddy bear. Lucky you...?',
      'nglormp dglflnngr',
      'You open the cookie like a pillowcase!!! The cookie suddenly stops moving!'
    ],
    game: [
      'Hearts',
      'Chess',
      'Go Fish',
      'Blaseball',
      'Neopets',
      'Eve Online',
      'Among Us',
      'Overwatch',
      'Fortnite',
      'Calvinball',
      'Real life',
      'Thriving in a pandemic',
      'Genshin Impact',
      'Kittens Game',
      'Solitaire'
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
