var users = require('../models').users
,uuidv4 = require('uuid/v4')
,bcrypt = require('bcryptjs')
,nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'whatsalemzolek@gmail.com',
    pass: 'rxecoseekhudqrzo'
  }
});

module.exports = {
  login(req, res) {  
    return users
    .find({ where:{
      useaccount:req.body.useaccount
    }}
    )
    .then(users => {
      if (!users) {
        return res.status(404).send({
          message: 'sai tài khoản'
        });
      }
      else{
        if(bcrypt.compareSync(req.body.useenc_password,users.useenc_password)==true){
          return users
          .update({token: uuidv4(),expired_time: Date.now()+1800000})
          .then((users) => res.status(200).send(users))
          .catch((error) => res.status(400).send(error)); 
        }
        else{
          return res.status(404).send(req.body.useenc_password);
        }
      }
    })
    .catch((error) => res.status(400).send(error));
  },
  register(req, res) {
    return users
    .create({
      useaccount : req.body.useaccount,
      useenc_password : bcrypt.hashSync(req.body.useenc_password,8)  
    })
    .then(() => res.status(200).send({message: 'Bạn Đã Tạo Tài Khoản Mới'}))
    .catch(error => res.status(400).send(error));
  },
  authentication(req, res) {
    if(req.headers.authorization){
      return users
      .find({ where:{
        token:req.headers.authorization.substring(7)
      }})
      .then(users => {
        if (!users) {
          return res.status(404).send({
            message: 'Token Sai'
          });
        }
        else{
          if(Date.now()>users.expired_time){
            res.send({message: 'Hết Hạn'});
          }
          res.locals=res.users;
          next();
        }
      })
      .catch(error => res.status(400).send(error));
    }
    res.send({message: 'Không Có Token'});
  },
  resetpassword(req, res) {
    var pas=uuidv4();
    return users
    .find({ where:{
      useemail:req.body.useemail
    }})
    .then(users => {
      if (!users) {
        return res.status(404).send({
          message: 'Sai Email'
        });
      }
      transporter.sendMail({
        from: 'whatsalemzolek@gmail.com',
        to: users.useemail,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'+pas
      }, function(error, info){
        if (error) {
          res.send(error);
        } else {
          res.send('Email sent: ' + info.response);
        }
      })
      return users
      .update({useenc_password: bcrypt.hashSync(pas,8)})
      .then(() => res.status(400).send('sss'))
      .catch((error) => res.status(400).send(error)); 
    })
    .catch(error => res.status(400).send(error));
  }
}