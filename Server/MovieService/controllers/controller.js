const Movies = require('../models/Movies')

const getMovies = (req,res)=>{

Movies.find()
    .then((data =>{return res.status(200).send({data:data})}))
    .catch(err =>{return res.status(401).send({err:err})})

}

const postMovies = (req,res)=>{

    const ADDMovies = new Movies(req.body);

    ADDMovies.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Movie Added successfully"
        });
    });

}

const getMoviesId = (req,res)=>{

    let getMoviesID = req.params.id;

    Movies.findById(getMoviesID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,post
        });
    });
}

const UpdateMovies = (req,res)=>{

    Movies.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Movie details Update successfully"
            });
        }
    );
}

const DeleteMovies = (req,res)=>{

    Movies.findByIdAndDelete(req.params.id).exec((err,deleteMovies)=>{
        if(err){
            return res.status(400).json({message:"Delete unsuccessful",err});
        }
        return res.json({
            message:"Movie details delete successfully",deleteMovies
        });
    });
}


module.exports = {
    getMovies,
    postMovies,
    getMoviesId,
    UpdateMovies,
    DeleteMovies
}