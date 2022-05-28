const Theater = require('../models/Theater')

const getTheater = (req,res)=>{

    Theater.find()
        .then((data =>{return res.status(200).send({data:data})}))
        .catch(err =>{return res.status(401).send({err:err})})

}

const postTheater = (req,res)=>{

    const ADDTheater = new Theater(req.body);

    ADDTheater.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Theater Added successfully"
        });
    });

}

const getTheaterID = (req,res)=>{

    let getTheaterID = req.params.id;

    Theater.findById(getTheaterID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,post
        });
    });
}

const UpdateTheater = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    Theater.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Theater details Update successfully"
            });
        }
    );
}

const DeleteTheater = (req,res)=>{

    Theater.findByIdAndDelete(req.params.id).exec((err,deleteTheater)=>{
        if(err){
            return res.status(400).json({message:"Delete unsuccessful",err});
        }
        return res.json({
            message:"Theater details delete successfully",deleteTheater
        });
    });
}


module.exports = {
    getTheater,
    postTheater,
    getTheaterID,
    UpdateTheater,
    DeleteTheater
}