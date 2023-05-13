const axios = require('axios');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const AMICUS_LOCKBOX_URL = process.env.AMICUS_LOCKBOX_URL;
    const ID = 176;
    const URL = `${AMICUS_LOCKBOX_URL}${ID}`;

    try {
        axios.get(URL)
        .then(response=> {
            if (response.status === 200) {
                res.status(200).send("SUCCESS: "+response.data);
            } else {
                throw new Error(response.data);
            }
        })
    }
    catch(err) {
        res.status(500).send("ERROR: "+err.message);
    }
});

const port = 8080;
app.listen(port, () => {
    //console.log(`helloworld: listening on port ${port}`);
});