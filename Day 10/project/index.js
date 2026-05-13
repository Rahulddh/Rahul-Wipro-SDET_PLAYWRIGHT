const e = require('express');

const app = e();
const port = 5000;

app.get('/', (req, res) => {  // endpoint
    res.json({ Message: "Hello World" });
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.json({ Message: `Hello ${name}` });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
