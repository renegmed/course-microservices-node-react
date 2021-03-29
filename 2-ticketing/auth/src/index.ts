import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there!');  // curl localhost:3000/api/users/currentuser
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
