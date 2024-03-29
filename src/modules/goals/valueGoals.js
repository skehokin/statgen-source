import listRand from "../../utils/list-random";
import {
  animals,
  leaders,
  livingAreas,
  allRaces,
  virtues,
  animalPlurals,
  peopleTypes
} from "../../datasets/short-sets";

export const valueGoals = {
  "a quiet life": [
    "to escape violence",
    "to find someone to settle down with",
    "to find something to focus on",
    "to escape from other people's plans",
    "to find time to relax",
    "to buy a cottage in the country"
  ],
  money: [
    "to gather a great hoard",
    "to buy the freedom of someone important to me",
    "to buy influence",
    "to buy safety",
    "to be richer than my friends",
    "to be richer than my enemies",
    "to have everything I want when I want it",
    "to be able to be generous",
    "to feel worthwhile",
    "to save my poor friends",
    "to pay a penance"
  ],
  "social influence": [
    `to gain the ear of the ${listRand(leaders)}`,
    "to champion my cause among the rich",
    "to manipulate others",
    "to get the better of others",
    "to scam others",
    `to marry the ${listRand(leaders)}`,
    "to improve the low status of my house",
    "to improve my low status",
    "to improve my lower-class accent so I can move in high society"
  ],
  "magical power": [
    "to make myself utterly safe",
    "to control others",
    "to discover something that can control the world",
    "to be able to destroy anything",
    "to take revenge",
    "to create something amazing with magic",
    "to make a monument to my greatness",
    "to discover something truly new",
    "I have an ancient text that holds terrible secrets that must not fall into the wrong hands"
  ],
  family: [
    "to rescue my sister",
    "to rescue my brother",
    "to make my father proud in his area",
    "to make my mother rich",
    "to start a family with someone nice",
    "to protect my uncle's interests",
    "to hide a family secret",
    "to help my cousins cover up a murder",
    "to protect my grandparents from violence",
    "to help my brother's family out of poverty"
  ],
  friendship: [
    "to make as many friends as possible",
    "to help my friends achieve their goals",
    "to keep my friends safe"
  ],
  skill: ["to gain a new skill", "to be the best at what I do"],
  knowledge: [
    "to learn everything about one thing",
    "to learn something about everything",
    "to discover something new (in my area of interest)",
    "to discover something really new (in whatever area)",
    "to teach people about what I love",
    "to find a teacher",
    "to find out the truth",
    "to complete my life's work - a series of tomes on a specific field of study",
    "I sold my soul for knowledge - I must win it back through great deeds",
    "to find out who killed my friend"
  ],
  romance: [
    "to find Mr Right",
    "to find Mrs Right",
    "to find my true love",
    "to do everything I can to make my partner feel cared for",
    "to be a model of chivalry for others to follow",
    "to find prince charming"
  ],
  belonging: [
    "to find somewhere I belong",
    "to find people who love me for who I am",
    "to become someone who fits in"
  ],
  possessions: [
    "to own a castle",
    "to own something very expensive",
    "to keep my current possessions from being stolen",
    "to get an important artefact for my family"
  ],
  homeland: [
    "to fight to protect my homeland",
    "to make my homeland somewhere truly great",
    "to rid my homeland of the evils inside it",
    "to protect the people of my homeland from monsters",
    "to protect the people of my homeland from bandits",
    "to protect the people of my homeland from its evil nobles",
    "to protect the people of my homeland from persecution",
    "to conquer the adjacent country in the name of my homeland",
    "to seek out useful information to use against the enemies of my homeland",
    "to track down a political dissident",
    "to provide arms for a rebellion",
    "to understand the needs of the commoners",
    "to learn all the languages spoken in this land"
  ],
  hometown: [
    "Can't I finally return home?",
    "to improve my hometown",
    "to find somewhere like my hometown"
  ],
  art: [
    "to create a great piece of art",
    "to collect a great piece of art",
    "to discover a great artist"
  ],
  music: [
    "to play a great piece of music",
    "to hear the best musician",
    "to discover a great musician",
    "to play music in a prestigious location"
  ],
  food: [
    "to create a new dish",
    "to eat the food of all cultures",
    "to discover a new flavour",
    "to eat the most expensive food",
    "to become the apprentice to a great chef"
  ],
  "fitting in": [
    "to hide my strange qualities and stop the stares",
    "to disguise myself well enough that even my close friends won't recognise me",
    "to do exactly what my friends are doing",
    "to find acceptance",
    "to be able to hide",
    "to receive my mother's approval",
    "to keep myself safe by not attracting attention"
  ],
  nature: [
    "to save a forest from the predations of loggers and hunters",
    "to see all the greatest natural wonders"
  ],
  innovation: [`to discover something new`, "to gather a thinktank"],
  battle: [
    "to fight the strongest guy",
    "to find a cause worth fighting for",
    "to smash some heads in",
    "to smite a serious evil"
  ],
  "a challenge": ["to find a challenge"],
  "quick wits": [
    "to seriously tear someone down with a well-timed jibe",
    "to act entirely spontaneously but still come out ok",
    "to find someone who can keep up with me"
  ],
  "a good friend": [
    "to help my friend with their goals",
    "to protect my friend",
    "to help my friend hide a murder",
    "to prove I can be loyal"
  ],
  "a partner": [
    "to provide for my partner",
    "to protect my wife",
    "to protect my husband",
    "to seek revenge on those who harmed my partner",
    "to seek revenge on the one who killed my partner"
  ],
  religion: [
    "to complete a pilgrimage to our holiest site",
    "to sacrifice a child for my god",
    "to sacrifice something very expensive to my god",
    "to seek power in return for favours to my god",
    "to worship my god through good deeds",
    "to serve the priesthood of my god",
    "to smite non-believers",
    "to start my own religion",
    "to convert more people to the worship of my god"
  ],
  "the gods": [
    "to complete a pilgrimage to our holiest site",
    "to sacrifice a child for my god",
    "to sacrifice something very expensive to my god",
    "to seek power in return for favours to my god",
    "to worship my god through good deeds",
    "to serve the priesthood of my god",
    "to smite non-believers",
    "to start my own religion",
    "to convert more people to the worship of my god"
  ],
  "the spirits": [
    "to seek favours from the spirits",
    "to meet a spirit in person",
    "to help the spirit gain more worshipers",
    "to make a sacrifice for magical power",
    "to join the wild hunt",
    "to destroy the enemy spirits of the spirit I worship"
  ],
  wisdom: [
    "to broaden my experience",
    "to be the person everyone comes to for advice",
    "to meditate for 1 hour every day",
    "to treat hardship with equanimity",
    "to reach enlightenment"
  ],
  intelligence: [
    "to find a team of intelligent people",
    "to be among stupid people so I can feel smarter",
    "to solve one of the fundamental problems laid out by the Mage of Oil over 3 centuries ago",
    "to understand in depth the mathematics that underlie physical magic"
  ],
  speed: [
    "to repeat and practice until everything can be done at speed",
    "to learn to speed-read",
    "become the fastest runner",
    "beat enemies in the shortest amount of time",
    "to be fast enough as to be untouchable"
  ],
  strength: [
    "to become strong enough to protect those dear to me",
    `to control the ${listRand(livingAreas)}`,
    "to protect the weak with my strength",
    "to have the strength to destroy my enemies",
    "to become strong enough that nobody can control me"
  ],
  "hard work": [
    "to raise my kids as hard workers",
    "to work for as long as I can hold my tools",
    "to give everything i can to help those in need"
  ],
  resilience: [
    "to toughen myself up through difficult tasks",
    "to to toughen myself up by regularly fasting, with interval training and similar",
    "to toughen others up with regular abuse"
  ],
  charm: [
    "to literally charm the pants off somebody",
    "to charm someone out of their money",
    "to maintain a good relationship with everyone i meet",
    "to hide the existence of my many wives from each other"
  ],
  "other people's hard work": [
    "meet enough people I can rely on to take care of any problems",
    "find someone to care for me",
    "to hold out until other members of my family get here"
  ],
  talent: [
    "test myself in a great range of activities to see if I can find a new talent in myself",
    "I had great talent at a young age. I need to prove that's not just who I am",
    "I know my talent - all that remains is to seek mastery",
    "get out of doing shit things",
    "find the talents of my associates",
    "birth a talented child with a dragon",
    "to find others with great talents"
  ],
  "good humour": [
    "help people deal better with suffering through humour",
    "mock death itself",
    "get someone who's dying to laugh about it ",
    "to find my own happiness again"
  ],
  "a good story": [
    "to have something happen to me that others find exciting",
    "to make sense of what has happened to me",
    "to learn the language of those around me",
    "to be able to explain even mundane happenings in an entertaining way",
    "to bring happiness to the dying"
  ],
  victory: [
    "like a predator, I will take everything from any who cross me",
    "I will break myself and my long term or short term good just to win a petty fight",
    "to inspire others to succeed"
  ],
  sport: [
    "to succeed in my country's sport is everything to my family. By adventuring I can improve my skills till I can reach that level."
  ],
  hunting: [
    "to kill something very elusive",
    `kill a ${listRand(animals)}`,
    "to improve my personal best in most animals taken down in a day",
    "to train my dogs to follow my every command",
    "to train a hawk to follow commands exactly",
    "to tame a new animal and train it to hunt",
    "to win the country-wide hunting competition",
    "to join the wild hunt",
    `train a ${listRand(animals)} to hunt`
  ],
  poetry: [
    "to finish my epic poem",
    "to write a poem that properly captures something that can't otherwise be explained",
    "to discover a new poet master",
    "to be apprenticed to the current poet master",
    "to become the poet master"
  ],
  "a collection": [
    "complete my collection",
    "find a collection that isn't so horrifying"
  ],
  "my own life": [
    "to stay alive despite all the swords at my throat",
    "to protect myself and not give into the desire to value my own life less than others'",
    "to discover immortality"
  ],
  hotties: [
    "to bang someone really attractive",
    "to become so attractive that others whistle when I walk down the street",
    "to get together with someone so attractive that others whistle when we walk down the street",
    "to see girls' panties"
  ],
  animals: [
    "become an animal reserve warden",
    "learn medicine and healing skills to take care of injured animals",
    `take out the hunters of rare ${listRand(animalPlurals)}`,
    `learn the wisdom of the ${listRand(animals)}`
  ],
  "sentient life": [
    "become less distance oriented in my morality - some people might say that I should value my friends or my race or my children more than others, but I know that all sentient creatures are similarly worthwhile. I want to care equally for those I have never met."
  ],
  opportunity: [
    "finding opportunity is a matter of placing myself in as many different situations as possible"
  ],
  "way of life": [
    "I am the last member of my culture. I must find someone to pass my history and language on to, or to spread the basics as far as possible.",
    "reduce the influence of foreigners in my homeland"
  ],
  safety: [
    "find a place hidden from my enemies",
    "find a place hidden from my persecutors",
    "become strong enough to keep those I care about safe"
  ],
  // TODO - fix these ones below up
  beauty: [
    "find an object of surpassing beauty",
    "improve my personal aesthetics",
    "make something incredibly beautiful",
    "learn more about how to design beautiful gardens",
    "learn more about how to design beautiful houses",
    "learn more about how to design beautiful scrolls",
    "learn more about how to design beautiful furniture"
  ],
  daughters: [
    "protect my daughter",
    "raise my daughter right",
    "find my daughter",
    "find the right man for my daughter to marry",
    "take revenge for my daughter",
    "convince my daughter to speak to me again"
  ],
  sons: [
    "protect my son",
    "raise my son right",
    "find my son",
    "find the right woman for my son to marry",
    "take revenge for my son",
    "convince my son to speak to me again"
  ],
  children: [
    "protect my children",
    "raise my children right",
    "find my children",
    "find a prestigious family for my child to marry into",
    "take revenge for my children",
    "convince my children to speak to me again"
  ],
  pets: [
    "get more pets",
    "keep my pets safe",
    `get a pet ${listRand(animals)}`,
    `train my pet ${listRand(animals)}`
  ],
  dominance: [
    `take over the ${listRand(livingAreas)}`,
    `teach those in the ${listRand(livingAreas)} who is really in charge`,
    `become a ${listRand(leaders)}`,
    `defeat the ${listRand(livingAreas)}`,
    "intimidate my associates into doing as I say"
  ],
  humility: [
    "to find the strength to accept my flaws",
    "to practice living with nothing"
  ],
  virtue: [
    `to be an exemplar of ${listRand(virtues)}`,
    `to teach all people of the virtue of ${listRand(virtues)}`
  ],
  manliness: [
    "to become extremely buff",
    "to grow a huge mustache",
    "to find someone who can teach me to be as manly as he is"
  ],
  chastity: [
    "to keep my virginity until marriage",
    "to atone for losing my virginity",
    "to learn to repress my sexual urges"
  ],
  patience: [
    "to learn to wait for the right moment to strike",
    "I have previously been too hastily and lost something I loved. I have to be more cautious and patient",
    "patience is the key to getting what I want. I must wait and not waste resources."
  ],
  determination: [],
  revenge: [
    `to take revenge for my dead ${listRand(['dog', 'wife', 'husband', 'lover', 'daughter', 'son', 'father', 'mother', 'sister', 'brother', 'friend', 'party', 'mentor', 'grandfather', 'grandmother'])}`,
    `to take revenge on the ${listRand(leaders)}`
  ],
  passion: [],
  bravery: [
      `overcome my great fear of ${listRand(['spiders', 'talking', 'public speaking', 'battle', 'fire', 'magic', 'the ocean', 'snakes', 'demons', 'monsters', 'banishment'])}`
  ],
  sleep: [
      "to get a good night's sleep",
      "to discover a way to forgo sleep"
  ],
  destruction: [
    `destroy the ${listRand(livingAreas)}`,
    `kill the ${listRand(leaders)}`,
    `kill all ${listRand(animalPlurals)}`,
    "kill any who insult me",
    `kill all ${listRand(peopleTypes)}`
  ],
  race: [
    "destroy the misconception that any race is better than mine",
    `kill every ${listRand(allRaces)}`
  ],
  "the law": [
    "to uphold the law",
    "to uphold the law even when it is unjust",
      "to keep the peace",
    "to uphold the law as I see it, even if it means breaking the law and going to jail and being killed by the guards and then coming back to life and killing the guards",
      "catch a criminal",
        "catch a criminal and bring them to justice and then kill them and then kill their family",
  ],
  "order": [
    "to uphold order in this land",
      "to bring my own order to this land",
      "to bring order back to my homeland",
      "to kill all those who disrupt order in this land"
  ],
  "stability":[
      "to bring stability back to this land",
      `to take out the rebel group disrupting this ${listRand(livingAreas)}`
  ],
  "position": [
      "to achieve a high rank within the army",
      `to be appointed a great position by the ${listRand(leaders)}`
  ],
  "good leadership": [
      "to become a great leader",
      "to become a great leader and then kill all those who oppose me",
      "to take great care of my followers",
      `to rework my organization to prepare for the coming ${listRand(['war', 'horde', 'invasion', 'plague', 'famine', 'drought', 'earthquake', 'tsunami', 'volcano', 'meteor', 'zombie apocalypse', 'coronation', 'election', 'revolution', 'coup', 'civil war', 'apocalypse', 'rapture', 'second coming', 'end of the world'])}`,
  ],
  honor:[
      "to uphold my honor",
      "to uphold my honor even when it means killing my friends",
      "to find absolution for a dishonorable act",
      "to find absolution for a dishonorable act by killing myself",

  ],
  "synergy":[
        "to find the perfect synergy between my abilities",
        "to find the perfect synergy between my abilities and the abilities of my followers",
  ],
  diligence:[

  ],
  'self-denial':[
      "to never fall back to alcoholism",
  ],
  // "self-control",
  // "self-discipline",
  // "discipline",
  // "self-restraint",
  // "justice",
  // "responsibility",
  // "duty",
  // "obedience",
  // "obligation",
  // "reliability",
  // "dependability",
  // "consistency",
  punctuality:[
        "to be on time for everything and never be late and never be early and never be late for being early and never be early for being late"],

  industry: [
    "to discover a way to forgo sleep",
      "to build a structure that will last for centuries",
      "to build a system that can supply anything anyone might need"
  ]
  // "moderation",
  // "control"
};
