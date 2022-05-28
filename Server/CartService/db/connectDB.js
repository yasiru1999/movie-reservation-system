const mongoose = require('mongoose')

mongoose.connect(process.env.dbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log('DB connection Established'))
    .catch(()=> {
        console.log("DB connection Failed");
    })