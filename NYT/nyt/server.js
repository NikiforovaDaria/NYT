const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const path = require('path');
const router = new express.Router();



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use((req, res, next)=> {
    // const origin = req.headers.origin;
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'POST, GET');
    // res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader("Access-Control-Allow-Origin: *");

    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", " Origin,Accept, X-Requested-With, Content-Type");
    next();
});

router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(8080, ()=>{
    console.log(`Server listening port ${8080}`)
})