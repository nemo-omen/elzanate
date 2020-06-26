const express = require('express');
const cors = require('cors');
const nano = require('nano')('http://192.168.0.11:5984');

const app = express();
app.use(cors());
const port = 3000;

// nano.db.create('ezposts');
const db = nano.db.use('ezposts');

app.get('/', (req, res) => {
	let posts = [];
	db.list((error, body) => {
		body.rows.forEach((doc) => {
			posts.push(doc);
		});
		// res.json(posts);
	});
	console.log(posts);
});

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));