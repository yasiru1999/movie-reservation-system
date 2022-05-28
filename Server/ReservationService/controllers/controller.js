const Reservation = require('../models/Reservation')

const getReservation = (req,res)=>{

    Reservation.find()
        .then((data =>{return res.status(200).send({data:data})}))
        .catch(err =>{return res.status(401).send({err:err})})

}

const postReservation = (req,res)=>{

    const ADDReservation = new Reservation(req.body);

    ADDReservation.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Reservation Added successfully"
        });
    });

}

const getReservationId = (req,res)=>{

    let getReservationID = req.params.id;

    Reservation.findById(getReservationID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,post
        });
    });
}

const UpdateReservation = (req,res)=>{

    Reservation.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Reservation details Update successfully"
            });
        }
    );
}

const DeleteReservation = (req,res)=>{

    Reservation.findByIdAndDelete(req.params.id).exec((err,deleteReservation)=>{
        if(err){
            return res.status(400).json({message:"Delete unsuccessful",err});
        }
        return res.json({
            message:"Reservation details delete successfully",deleteReservation
        });
    });
}


module.exports = {
    getReservation,
    postReservation,
    getReservationId,
    UpdateReservation,
    DeleteReservation
}