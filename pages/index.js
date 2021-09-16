const express = require ("express");
const webpush = require ("web-push");
const bodyParser = require ("bodyparser");
const path = require ("path");



const app = express();

app.use(express.static(path.join(__dirname,"client")));

app.use (bodyParser.json ());

const publicVapidkey = 'BJId-RzG8zGZAFaWJtR4KIEDAZn-LQHeEW3ukGAt1okNG5_5g-JM5F8mtVA7C0_ijiFLnVHLVRJsf4no4P-EAfY';
const privateVapidkey = 'eQO0TjHremCsnriAH-YPPpd3SC1MrHwoVvblPT-Bg88';

webpush.setVapidDetails("mailto:test@test.com", publicVapidkey,privateVapidkey);

app.post('/subscribe', (req ,res) =>{
 const subscribe =req.body;

 req.status(201).json({});

 const payload = JSON.stringify({title:'push Test'});

 webpush.sendNotification(subscription, payload).catch(err=>console.error(err));

});

const port = 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));

