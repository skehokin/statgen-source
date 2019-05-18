
import raceInfo from './races.json';

//const raceInfo = JSON.parse(races);

const goodEvil = ["good", "evil", "neutral"];
const lawChaos = ["lawful", "neutral", "chaotic"];
const times = [" when put under pressure", " when bored", " infrequently", " deep inside", " when not feeling threatened", " on special occasions", " on the surface", " when with certain others", " with new people", " when left alone", " when tired"]

const virtues = ['temperance', 'chastity', 'generosity', 'compassion', 'civic-mindedness', 'selflessness', 'timeliness', 'patience'];
 const animalPlurals = ['ants','elephants', 'ferrets', 'rabbits', 'bats', 'hamsters', 'snakes', 'turtles', 'ravens', 'owls', 'flies', 'lizards', 'hedgehogs', 'chinchillas', 'rats', 'stick insects', 'spiders', 'chickens', 'dragons', 'lions', 'wolves', 'bears', 'tigers' ,'cats','dogs'];
 const animals = ['ant','elephant', 'ferret', 'rabbit', 'bat', 'hamster', 'snake', 'turtle', 'raven', 'owl', 'fly', 'lizard', 'hedgehog', 'chinchilla', 'rat', 'stick insect', 'spider', 'chicken', 'dragon', 'lion', 'wolf', 'bear', 'tiger' ,'cat','dog'];
 const livingAreas = ['city', 'town', 'forest', 'country', 'conclave', 'temple', 'farm', 'dungeon', 'palace', 'desert', 'mountain', 'plains', 'village', 'county', 'swamp', 'jungle', 'savana'];
 const leaders = ['king', 'queen', 'duke', 'governor', 'mayor', 'headsman', 'prince', 'princess', 'god'];
 const allRaces = [...raceInfo.common, ...raceInfo.rare, ...raceInfo.elfVariants, ...raceInfo.dwarfVariants, ...raceInfo.halflingVariants, ...raceInfo.gnomeVariants];
const peopleTypes = ['short people', 'cool people', 'tall people', 'doctors', 'stupid people', 'happy people', 'sad people', 'foreigners']


export {goodEvil, lawChaos, animals, livingAreas, leaders, allRaces, times, virtues, animalPlurals, peopleTypes};