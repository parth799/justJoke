import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send("server is ready")
// })

app.get('/api/jokes', (req, res) => {
    const Joke = [
        {
            id:1,
            name: 'raj',
            content:'this is a joke'
        },
        {
            id:2,
            name: 'Vikash',
            content:"this is another joke"
        },
    ]
    res.send(Joke)
})

const port = process.env.PORT || 3021;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})