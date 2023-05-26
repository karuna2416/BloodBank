var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
//connect with mongodb atlas
mongoose
  .connect(
    "mongodb+srv://karunasarawat2413:Karuna24@cluster0.hd5xdti.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("connected");
  });

const User = mongoose.model("user", { username: String, password: String }); //takes 1st model name and 2nd data and its type
const Donorsignup = mongoose.model("donorsignup", {
  firstname: String,
  lastname: String,
  age: Number,
  bloodgroup: String,
  username: String,
  password: String,
  disease: String,
  doctorname: String,
  address: String,
  mobileno: String,
});
const Patient = mongoose.model("patient", {
  username: String,
  password: String,
});
const PatientSignup = mongoose.model("PatientSignup", {
  firstname: String,
  lastname: String,
  age: Number,
  bloodgroup: String,
  username: String,
  password: String,
  disease: String,
  doctorname: String,
  address: String,
  mobileno: Number,
});
const Donate = mongoose.model("Donate", {
  firstname: String,
  lastname: String,
  age: Number,
  bloodgroup: String,
  address: String,
  mobileno: String,
});
var bodyparser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyparser.json());
// app.post('/userName',function(req,res){
//     console.log(req.body)
//     res.json({
//         user:"karuna"
//     })
// })
// app.post('/donorName',function(req,res,next)
// {
//     if(req.body.username == "ankushsss99@gmail.com" && req.body.password == "1234")
//     {
//         next()
//     }

//     else
//     {
//         res.send("unAuth")
//     }
// },function(req,res){
//     console.log(req.body)
//     res.json({
//         uname:"ks"
//     })
// })
// app.post('/donor',function(req,res,next){
//     if(req.body.Password == "karuna24")
//     {
//         next()
//     }
//     else{
//         res.send("wrongpass")
//     }
// },function(req,res){
//     console.log(req.body)
//     res.json({
//         uname:"karuna"
//     })
// })

app.get("/getAllDonor", function (req, res) {
  Donorsignup.find()
    .then((userData) => {
      console.log(userData, "hiii");
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/addDonor", function (req, res) {
  console.log(req.body);
  let newDonordata = new Donorsignup(req.body);
  newDonordata.save().then((res) => console.log("savee"));

  res.json({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    age: "",
    bloodgroup: "",
    address: "",
    mobileno: "",
    doctorname: "",
    disease: "",
  });
});
app.get("/getAllPatient", function (req, res) {
  //get data from mogoose using find mthd and send to front end
  PatientSignup.find()
    .then((patientData) => {
      console.log(patientData);
      res.json(patientData);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/addPatient", function (req, res) {
  //get data from front end and add into model with save mthd
  console.log(req.body);
  let newPatientData = new PatientSignup(req.body);
  newPatientData.save().then((res) => console.log("save"));
  res.json({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    age: "",
    bloodgroup: "",
    address: "",
    mobileno: "",
    doctorname: "",
    disease: "",
  });
});
app.delete("/deletedonor/:id", function (req, res) {
  Donorsignup.findByIdAndDelete(req.params.id).then((res) =>
    console.log("save")
  );
  res.send("donor delete successfully");
});
app.delete("/deletepatient/:id", function (req, res) {
  //delete methode api have no body data so we use params to delete id
  PatientSignup.findByIdAndDelete(req.params.id).then(
    (
      res //findbyiddelete is a mathode of mongoose that find id and dlt it on patientsignup model
    ) => console.log("save")
  );
  res.send("patient delete successfully"); //if id dlt succsessful then then func call and send data to front end
});
app.put("/updatedata", function (req, res) {
  Donorsignup.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        address: req.body.address,
        mobileno: req.body.mobileno,
      },
    }
  )
    .then((res2) => {
      console.log(res2);
      res.send("update the data");
    })
    .catch((err) => {
      console.log(err);
      res.send("error");
    }),
    { new: true };
  // console.log(req.body)
});
app.post("/donate", function (req, res) {
  console.log(req.body);
  let usr = {
    firstname: req.body.firstname,
    lastname: req.body.firstname,
  };
  let donateData = new Donate(req.body);
  donateData.save().then((res2) => {
    console.log("savee");
  });

  res.json({
    firstname: "",
    lastname: "",
    age: "",
    bloodgroup: "",
    address: "",
    mobileno: "",
  });
});
app.get("/getdonatedata", function (req, res) {
  Donate.find()
    .then((ress) => {
      console.log("hii");
      console.log(ress);
      res.json(ress);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(5000, () => {
  console.log("server respond on 5000");
});
