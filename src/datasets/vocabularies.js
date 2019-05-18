

 const vocabulary = {
elegant: {
	firstAnswer: (values) => `Like any of my station should, I rate  ${values[0]} most highly, of course.`,
	secondAnswer: (values) => `Second would be ${values[1]}`,
	interjection: 'Such a question is a little deeper than I would prefer to consider right now. However, knowing you, the answer will be important... ',
	considering: 'I would think',
	certain: 'to be sure.',
	address: '',
	yes: 'certainly',
	no: "I'm afraid not"
},
elegant2: {
	firstAnswer: (values) => `Most important is  ${values[0]}, of course.`,
	secondAnswer: (values) => `Second would be ${values[1]}`,
	interjection: 'Why,',
	considering: 'I would think',
	certain: 'to be sure.',
	address: 'my dear friend,',
	yes: 'certainly',
	no: "I'm afraid not"
}
, crotchety: {
	firstAnswer: (values) => ` ${values[0]}. The most important thing. You can learn from that.`,
	secondAnswer: (values) => `Secondly, yeah, ${values[1]}`,
	interjection: 'eugh ',
	considering: 'I reckon',
	certain: " o'course",
	address: 'ya stupid kid.',
	yes: "yah 'spose",
	no: "get outta here!"
}, joyful: {
	firstAnswer: (values) => `Most important is ${values[0]}.`,
	secondAnswer: (values) => `second to that is ${values[1]}`,
	interjection: 'A wonderful question,',
	considering: 'perhaps?',
	certain: " of course!",
	address: 'my friend.',
	yes: "yes!",
	no: "I hate to say it, but no!"
}, terse: {
	firstAnswer: (values) => `Firstly, ${values[0]}.`,
	secondAnswer: (values) => `Second, ${values[1]}`,
	interjection: '',
	considering: '',
	certain: 'clearly',
	address: '',
	yes: "yes",
	no: "no",
}, silly: {
	firstAnswer: (values) => `Most important is ${values[0]}, right?`,
	secondAnswer: (values) => `Second is ${values[1]}`,
	interjection: 'well ',
	considering: 'I guess?',
	certain: "fo sho.",
	address: 'friendo, ',
	yes: "yessir",
	no: "no way!"
}, longWinded: {
	firstAnswer: (values) => `It's really quite difficult to know, since really, does anyone know themselves that well? But if I really had to pick an answer to what I value most highly, it would be ${values[0]}.`,
	secondAnswer: (values) => `Second to most important is even harder, if you hadn't already thought about it, so if you'll just give me a moment - really, did you expect an answer from me immediately on asking this? You really think I'd just be able to spit this out? 'what are your first and second most valued things? Please answer right away!' Well I'm very sorry but we can't all just have those things floating at the top of our minds! Alright, I can see you're getting quite irritable, so I suppose I'll just tell you the first thing that comes to mind - ${values[1]}.`,
	interjection: "I'm so glad you asked me that.",
	considering: "Again, I'm really not sure.",
	certain: " - that's quite obvious, isn't it? I'm pretty sure everyone feels that way at heart, don't you think?",
	address: "I know we've only met recently, but I can already tell we're going to get along very well.",
	yes: "I can't really say anything but yes",
	no: "I don't want to, but there's really no way I can agree with that."
}, gloomy: {
	firstAnswer: (values) => `I haven't been sure recently but ... I think it's ${values[0]}.`,
	secondAnswer: (values) => `And second is ... ${values[1]}.`,
	interjection: 'Sigh.',
	considering: 'I ... guess, if you even care.',
	certain: "That's what I think, if it even matters.",
	address: '',
	yes: "I suppose",
	no: "are you trying to make my life worse?"
},  southern:{
	firstAnswer: (values) => `Most important is ${values[0]}.`,
	secondAnswer: (values) => `secondly  would have to be ${values[1]}`,
	interjection: 'Waal - ',
	considering: "I s'pose!",
	certain: "I'd reckon",
	address: 'frand',
	yes: "yah",
	no: "naw"
}, informal: {
	firstAnswer: (values) => `most important is ${values[0]}.`,
	secondAnswer: (values) => `Second would be ${values[1]}`,
	interjection: 'Huh. Well,',
	considering: "I s'pose!",
	certain: "you know",
	address: 'my friend,',
	yes: "sure thing!",
	no: "nope"
},

intellectual: {
	firstAnswer: (values) => `my main intrinsic value is ${values[0]}.`,
	secondAnswer: (values) => ` Instrumental in attaining ${values[0]} is ${values[1]}. hence, I would call that second most valued.`,
	interjection: 'Since you ask,',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},

sly: {
	firstAnswer: (values) => `This is what is most important in this world: ${values[0]}. Don't look at me like that, you're the one who asked.`,
	secondAnswer: (values) => ` And secondly, this one's for free - the second most important thing is ${values[1]}`,
	interjection: 'well, kid, since you actually think it\'s worth asking me, I suppose I\'ll give you a good answer.',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},

reluctantProtag: {
	firstAnswer: (values) => `At the moment, with the current situation, I've gotta value ${values[0]} the most.`,
	secondAnswer: (values) => `"${values[1]}" rivals that but I can't make it top of my list right now.`,
	interjection: 'Ok, uhhh, weird question but I guess I\'ve thought about this a bit.' ,
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"

},
oldGay: {
	firstAnswer: (values) => `You gesture for them to go on - "If you're sure you want to listen to this old degenerate - ${values[0]}. I've lived my life believing that's most important.`,
	secondAnswer: (values) => `Another option that might suit you better is ${values[1]} -  I really feel that's more your thing, my dear`,
	interjection: 'Why on earth are you asking that?" - they give you a quizzical look - "Are you feeling lost or something? You\'d do better to ask a priest, you know" - ',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},
contrary: {
	firstAnswer: (values) => `${values[1]}.`,
	secondAnswer: (values) => `Definitely not ${values[0]}`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},
practical: {
	firstAnswer: (values) => `Throughout my life, I've found ${values[0]} to be most worthwhile.`,
	secondAnswer: (values) => `Right now, I also think ${values[1]} is very important, but that's more a matter of how things are going down right now.`,
	interjection: 'I s\'pose I have time to discuss things.',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},
pompous: {
	firstAnswer: (values) => `Formost,  ${values[0]}, for its value in my life.`,
	secondAnswer: (values) => `After that, ${values[1]}, for how it can help others.`,
	interjection: 'There are two things I consider most important in this world. Listen, and understand.',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},
grizzled: {
	firstAnswer: (values) => ` If you're facing the unexpected, you'll always need ${values[0]} and ${values[1]}. Sure, some might be able to get by without one of them for a time, but if you pay attention you'll notice that almost every veteran of this business who's still alive has at least a little of both.`,
	secondAnswer: (values) => ` ${values[0]} and ${values[1]}, kid, they'll keep you alive.`,
	interjection: 'You\'re new, so you need to know this. Forgive me if you\'ve heard it before.',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
	},
other: {
	firstAnswer: (values) => `${values[0]}. This is of fundamental importance in my current endeavor."`,
	secondAnswer: (values) => `They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},
	rude: {
	firstAnswer: (values) => 'Fuck off.',
	secondAnswer: (values) => '',//`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope",
	optional: (values) => `In fact, the true answer is ${values[0]}`
},
	certain: {
	firstAnswer: (values) => `What kind of questions is that? Who doesn't know that the most important thing in life is ${values[0]}?`,
	secondAnswer: (values) =>'',// `They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},

	academic: {
	firstAnswer: (values) => `Obviously, from the data, we must conclude that the most important thing in life is ${values[0]}. Do you want to see my 700 page essay that proves this to be the case?`,
	secondAnswer: (values) => '', //`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope"
},

	frustrated: {
	firstAnswer: (values) => `Augh, not another stupid philosophical question! Fine! ${values[0]}! Now will you go away and leave me alone?`,
	secondAnswer: (values) => '', //`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope",
	optional: (values)=>'What, you want more? What is it with you and these dumb questions?'
},

flirty: {
	firstAnswer: (values) => `Baby, you know you're the most important thing in my life.`,
	secondAnswer: (values) => '', //`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope",
	//optional: //(values)=>'What, you want more? What is it with you and these dumb questions?'
},
busy: {
	firstAnswer: (values) => `I'm busy, but '${values[0]}'' is the simplest answer. I'll tell you more later.`,
	secondAnswer: (values) => '', //`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: '',
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope",
	//optional: //(values)=>'What, you want more? What is it with you and these dumb questions?'
},

jiira: {
	firstAnswer: (values) => `I really like ${values[0]}! Also ${values[1]}! Also you! You're pretty great you know!`,
	secondAnswer: (values) => '', //`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: "",
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope",
	//optional: //(values)=>'What, you want more? What is it with you and these dumb questions?'
},

loud: {
	firstAnswer: (values) => `WELL, settle down and I'll tell ye why I love me ${values[0]}!`,
	secondAnswer: (values) => `Then if ye'll listen I'll talk ye ear off about ${values[1]} as well!`, //`They raise an eyebrow. "Oh, you want more? I suppose I'd also like ${values[1]}, but that can wait`,
	interjection: "OH AYE, this's what yer doing now, is it?",
	considering: "",
	certain: "",
	address: "",
	yes: "sure thing!",
	no: "nope",
	//optional: //(values)=>'What, you want more? What is it with you and these dumb questions?'
},

};

//age, personality traits, int?

const traitVoiceMap = {
	elegant: {'agreeableness':'high'},
	elegant2: {'agreeableness':'high'},
	crotchety: {'agreeableness':'low'},
	joyful: {'agreeableness':'high', 'neuroticism':'notHigh'},
	terse: {'extroversion':'low', agreeableness: 'notHigh'},
	silly: {'openness':'high', 'agreeableness':'high'},
	longWinded: {'extroversion':'high'},
	gloomy: {'neuroticism':'high'},
	southern: {'extroversion': 'notLow', 'agreeableness': 'notLow' },
	informal:{'neuroticism': 'notHigh', 'agreeableness': 'notLow'},
	intellectual: {},
	sly: {},
	reluctantProtag: {'agreeableness':'notLow'},
	oldGay: {'agreeableness':'notLow'},
	contrary: {'agreeableness':'low'},
	practical: {'agreeableness':'notLow'},
	pompous: {'agreeableness':'notHigh'},
	grizzled: {'agreeableness':'high'},
	other: {'agreeableness': 'middle'},
	rude: {'agreeableness':'low'},
	certain: {'agreeablenes':'notHigh', 'neuroticism':'notLow', 'openness':'notHigh'},
	academic: {'agreeableness':'middle'},
	frustrated: {'agreeableness':'notHigh', 'openness':'notHigh'},
	flirty: {'extroversion':'high'},
	busy: {'conscientiousness':'high', 'extroversion':'low'},
	jiira: {extroversion: 'high', agreeableness: 'high'},
	loud: {extroversion: 'high', agreeableness: 'notLow', neuroticism: 'notLow'}
}

export {vocabulary, traitVoiceMap};