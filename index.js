exports.CloudFunctions = (req,res)=> {
    AMICUS_LOCKBOX_URL = process.env.AMICUS_LOCKBOX_URL;
    res.send("Hello from TeaCii Cloud Functions! the AMICUS_LOCKBOX_URL is " + AMICUS_LOCKBOX_URL + "");
}