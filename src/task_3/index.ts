const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

const getData = async (url: string) => {
	try {
		const query = await fetch(url);
    const response = await query.json();

		return response;
	} catch (error) {
		throw Error("Error!");
	}
};

getData(COMMENTS_URL)
	.then((data: Comment[]) =>
		data.forEach((elem) =>
			console.log(`ID: ${elem.id}, email: ${elem.email}`)
		)
	);
