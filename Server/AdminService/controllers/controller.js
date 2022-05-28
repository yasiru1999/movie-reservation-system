const Admin = require('../models/admin');

const createAdmin = async (req, res) => {
    const SystemAdmin = new Admin({
        name: 'systemAdmin',
        username: 'SystemAdmin',
        password: 'admin123',
        isSystemAdmin: true,
        isMovieAdmin: false
    });
    const MovieAdmin = new Admin({
        name: 'movieAdmin',
        username: 'MovieAdmin',
        password: 'admin456',
        isSystemAdmin: false,
        isMovieAdmin: true
    });

    let SystemAdminData, MovieAdminData;

    await SystemAdmin.save().then((data) => {
        SystemAdminData = data;
    }).
        catch((err) => SystemAdminData = err.message);

    await MovieAdmin.save().then((data) => {
        MovieAdminData = data;
    }).
    catch((err) => MovieAdminData = err.message);

    const dataToSend = {
        SystemAdmin: SystemAdminData,
        MovieAdmin: MovieAdminData
    }
    res.status(200).send(dataToSend);
}


const login = async (req, res) => {
  console.log(req.body);
    await Admin.findOne({username: req.body.username}).then((data) => {
        if (req.body.password === data.password){
            res.status(200).send({
                success:true,
                message:'Login success',
                user:data
            })
        } else{
            res.status(500).send({
                success:false,
                message:'Invalid password'
            })
        }
    })
}

module.exports = {
    login,
    createAdmin
}