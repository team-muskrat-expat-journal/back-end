exports.seed = function (knex) {
	return knex("journal").insert([
		{
			title: "seedTitle",
			rating: 5,
			location: "seedLocation",
			date: "seedDate",
			notes: "seedNotes",
		},
	]);
};