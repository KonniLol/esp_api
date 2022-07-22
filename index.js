const express = require('express');
const app = express();
const PORT = 80;

app.use(express.json());

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: "A T-shirt",
        size: "L",
    })
});

app.post("/tshirt/:id", (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;
    
    if (!logo) {
	res.status(418).send({message: "We need a logo!"})
    }

    res.send({
	tshirt: `A T-shirt with your ${logo} and ID of ${id}`,
    });
});
