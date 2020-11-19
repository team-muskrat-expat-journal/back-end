exports.seed = function (knex) {
	return knex("journal").insert([
		{
			user_id: "1",
			tripname: "muskrat stew festival",
			rating: 5,
			location: "cambridge, MD",
			date: "2/29/2020",
			notes: "best muskrat in America",
			role: "thing",
			imageURL: "https://visitdorchester.org/wp-content/uploads/CrawfishBoilMuskratStewFest_Feb2017-4880_JimDuffy_800x600.jpg"
		},
	]);
};