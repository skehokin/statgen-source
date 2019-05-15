

export default function limitListJoinByCharLength (list=[], chars=100, joiner=(a, b)=>[a, b].join(', ')){
	const string = list.reduce((finalString, value, index)=>{
		if (finalString.includes('...')) {
			return finalString;
		}
	const newString = joiner(finalString, value)
		if (newString.length>chars){
			return finalString + '...'
		}
		return newString;
	})
	return string.includes('...') ? string.substring(0, string.length-3) : string;
}