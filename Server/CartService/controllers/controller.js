const Cart = require('../models/Cart')

const getCarts = (req,res)=>{

    Cart.find()
        .then((data =>{return res.status(200).send({data:data})}))
        .catch(err =>{return res.status(401).send({err:err})})

}

const postCart = (req,res)=>{

    const ADDCart = new Cart(req.body);

    ADDCart.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Cart Added successfully"
        });
    });

}

const getCartId = (req,res)=>{

    let getCustomerID = req.params.id;

    Cart.findById(getCustomerID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,post
        });
    });
}

const UpdateCart = (req,res)=>{

    Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Cart details Update successfully"
            });
        }
    );
}

const DeleteCart = (req,res)=>{

    Cart.findByIdAndDelete(req.params.id).exec((err,deleteCart)=>{
        if(err){
            return res.status(400).json({message:"Delete unsuccessful",err});
        }
        return res.json({
            message:"Cart details delete successfully",deleteCart
        });
    });
}


module.exports = {
    getCarts,
    postCart,
    getCartId,
    UpdateCart,
    DeleteCart
}