const express = require('express');
const cors = require('cors');
const nano = require('nano')('http://192.168.0.11:5984');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const db = nano.db.use('ezposts');

app.get('/', (req, res) => {
	console.log(`Request for '${req.path}' recieved.`);
	console.log('Requesting all docs from db');
	let posts = [];
	db.list({ include_docs: true }, (error, body) => {
		if (!error) {
			body.rows.forEach((data) => posts.push(data.doc));
			console.log(`DB returned ${body.rows.length} rows.`)
		} else {
			console.error('There was an error retrieving from the db: ', err);
		}
		res.json(posts);
	});
});

app.get('/stories/:id', (req, res) => {
	console.log(`Request for ${req.path} recieved.`);
	const postId = req.params.id;
	console.log(`Sending request to db for ${postId}`);
	db.get(postId)
		.then(body => {
			if (body) {
				console.log(`${postId} found. Sending response to client.`)
				res.json(body);
				console.log(body);
			} else {
				console.log(`${postId} not found on db`);
			}
		}).catch(error => { console.error(error) });
});

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));