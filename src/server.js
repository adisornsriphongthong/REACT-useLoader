import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(
        [
            {
                id: 101,
            }
        ]
    )
})

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port);
})