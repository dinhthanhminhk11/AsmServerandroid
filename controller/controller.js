var Imagees = require("../model/model")



exports.create = (req ,res)=>{
    if (!req.body) {
        res.status(400).send({message: "Content can not be emtpy"})
        return
    }
    const image = new Imagees({
        ngayThang: req.body.ngayThang,
        noiDung: req.body.noiDung,
        linkAnh: req.body.linkAnh,
    })
    image.save(image).then(data => {
        // res.send(data);
        res.redirect('/add_imagees')
    }).catch(err => {
        res.status(500).send({message: err.message || "Some error ouccurred while creating a create operation"});
    })
}

exports.find = (req ,res)=>{
    if(req.query.id){
        const id  = req.query.id
        Imagees.findById(id).then(data=>{
            if(!data){
                res.status(404).send({message : "Not found user with id" + id})
            }else {
                res.send(data)
            }
        }).catch(err=>{
            res.status(err).send({message : "Error retrieving user with id" +id})
        })
    }else {
        Imagees.find().then(user=>{
            res.send(user)
        }).catch(err=>{
            res.status(500).send({message: err.message || "Error Occunrred while retriving user information"})
        })
    }
}
exports.update = (req ,res)=>{
    if(!req.body){
        return res.status(400).send({message: "Data to update can not be empty"})
    }
    const id = req.params.id
    Imagees.findByIdAndUpdate(id,req.body ,{userFindAndModify: false}).then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot Update user with ${id}.Maybe user not found!`})
        }else {
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:"Error update user infomation"})
    })
}
exports.delete = (req ,res)=>{
    const id = req.params.id

    Imagees.findByIdAndDelete(id).then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with id ${id}.Maybe id wrong`})
        }else {
            res.send({message: `User was deleted successfully`})
            console.log(id)
        }
    }).catch(err=>{
        res.status(500).send({message:`Could not delte user with id= ${id}`})
    })
}