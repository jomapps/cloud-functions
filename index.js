const axios = require('axios');

exports.CloudFunctions = (req,res)=> {
    const AMICUS_LOCKBOX_URL = process.env.AMICUS_LOCKBOX_URL;
    const ID = 176;
    const URL = `${AMICUS_LOCKBOX_URL}${ID}`;

    try {
        const response = await axios.get(URL);
        res.status(200).send("SUCCESS: ".response.data);
    } catch (error) {
        res.status(500).send("ERROR: ".error.toString());
    }
}
