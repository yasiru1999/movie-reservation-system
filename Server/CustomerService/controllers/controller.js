const Customer = require('../models/Customer');
const CryptoJS = require("crypto-js");

const getCustomers = (req,res)=>{

    Customer.find()
        .then((data =>{return res.status(200).send({data:data})}))
        .catch(err =>{return res.status(401).send({err:err})})

}

const postCustomers = (req,res)=>{

    const newUser = new Customer({
        CustomerName:req.body.CustomerName,
        CustomerNumber:req.body.CustomerNumber,
        CustomerEmail:req.body.CustomerEmail,
        CustomerPassword: CryptoJS.AES.encrypt(req.body.CustomerPassword, process.env.SECRET_KEY).toString()
    });
    //const ADDCustomer = new Customer(req.body);

    newUser.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Customer Added successfully"
        });
    });

}

const getCustomersId = (req,res)=>{

    let getCustomerID = req.params.id;

    Customer.findById(getCustomerID,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,post
        });
    });
}

const UpdateCustomer = (req,res)=>{

    Customer.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Customer details Update successfully"
            });
        }
    );
}

const DeleteCustomers = (req,res)=>{

    Customer.findByIdAndDelete(req.params.id).exec((err,deleteCustomers)=>{
        if(err){
            return res.status(400).json({message:"Delete unsuccessful",err});
        }
        return res.json({
            message:"Customer details delete successfully",deleteCustomers
        });
    });
}


module.exports = {
    getCustomers,
    postCustomers,
    getCustomersId,
    UpdateCustomer,
    DeleteCustomers
}