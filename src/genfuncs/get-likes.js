import likesInfo from '../datasets/likes.json';
import randomDraw from '../utils/random-draw'

export default function getLikes (){
	const likesList = randomDraw(likesInfo, 6);

	const likes = likesList.slice(0,3);
	const dislikes = likesList.slice(3);

	return {likes, dislikes};

}
