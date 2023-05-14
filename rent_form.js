const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const multer = require('multer');


app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://jadhavpratik2112:<Dhbj*2g8itGa3z$>@demo.0vlocup.mongodb.net/Demo");
// mongoose.connect("mongodb+srv://jadhavpratik2112:<Dhbj*2g8itGa3z$>@demo.0vlocup.mongodb.net/JFarm", { useNewUrlParser: true }, { useUnifiedTopology: true });
mongoose.connect("mongodb+srv://jadhavpratik2112:Lonewolf_4@demo.0vlocup.mongodb.net/JFarm", { useNewUrlParser: true }, { useUnifiedTopology: true })

const friSchema = {
    fname: String,
    fphone: Number,
    femail: String,
    fPdt_name: String,
    fdescription: String,
    frent: Number,
    image: String

    

}

const Fri = mongoose.model("Fri", friSchema);

var storage = multer.diskStorage({
    // destination: "./uploads"
    
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, Date.now() + "-" + file.originalname);
    }
});


// var upload = multer({
//     storage: storage
// }).single('fupload');

var upload = multer({
    storage: storage
}).fields([
    {name: 'fupload', maxCount: 1},
    {name: 'fname', maxCount: 1},
    {name: 'fphone', maxCount: 1},
    {name: 'femail', maxCount: 1},
    {name: 'fPdt_name', maxCount: 1},
    {name: 'fdescription', maxCount: 1},
    {name: 'frent', maxCount: 1}
]);






app.get('/', function(req, res) {
    res.sendFile(__dirname + "/rent.html");
})

// app.post("/uploadFile", upload, function (req, res) {
//     let newFri = new Fri({
//         name: req.body.fname,
//         phone: req.body.fphone,
//         email: req.body.femail,
//         product_name: req.body.fPdt_name,
//         product_description: req.body.fdescription,
//         rent: req.body.frent,
//         image:req.file.filename


//     });
//     newFri.save();
//     res.redirect('/');
// })


app.post("/uploadFile", function (req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        let newFri = new Fri({
            fname: req.body.fname,
            fphone: req.body.fphone,
            femail: req.body.femail,
            fPdt_name: req.body.fPdt_name,
            fdescription: req.body.fdescription,
            frent: req.body.frent,
            image: req.files['fupload'][0].filename
        });
        newFri.save();
        res.redirect('/');
    });
});






// app.post("/image", (req, res) => {
//    upload(req, res, (err) => {
//     if(err) {
//       res.status(400).send("Something went wrong!");
//     }
//     res.send(req.file);
//   });
// });







app.listen(5000, function() {
    console.log("Server running on 5000");
})


