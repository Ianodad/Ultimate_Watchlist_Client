const movies = [
	{
		id: 475557,
		poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
		title: "Joker",
		vote_average: 8.5,
		overview:
			"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
		release_date: "2019-10-04"
	},
	{
		id: 290859,
		poster_path: "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
		title: "Terminator: Dark Fate",
		vote_average: 6.5,
		overview:
			"More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
		release_date: "2019-11-01"
	},
	{
		id: 420818,
		poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
		adult: false,
		title: "The Lion King",
		vote_average: 7.1,
		overview:
			"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
		release_date: "2019-07-19"
	},
	{
		id: 420809,
		poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
		title: "Maleficent: Mistress of Evil",
		vote_average: 7.2,
		overview:
			"Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
		release_date: "2019-10-18"
	},
	{
		id: 384018,
		poster_path: "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
		title: "Fast & Furious Presents: Hobbs & Shaw",
		vote_average: 6.5,
		overview:
			"Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
		release_date: "2019-08-02"
	},
	{
		id: 920,
		poster_path: "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
		title: "Cars",
		vote_average: 6.7,
		overview:
			"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
		release_date: "2006-06-09"
	}
];

export function getMovies() {
	return movies;
}
export function getMovie(id) {
	const idNew = parseInt(id);
	return movies.find(m => m.id === idNew);
}
