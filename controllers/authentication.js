var users = require('../models').users

,uuidv4 = require('uuid/v4')
,bcrypt = require('bcryptjs')

,mail = require('../modules').mail
,result = require('../modules').response_result
module.exports = {
  login(req, res) {  
    return users
    .find({ where:{
      useaccount:req.body.useaccount
    }}
    )
    .then(users => {
      if (!users) {
        return res.status(200).send(result.message('Sai Tài Khoản'));
      }
      else{
        if(bcrypt.compareSync(req.body.useenc_password,users.useenc_password)==true){
          return users
          .update({token: uuidv4(),expired_time: Date.now()+1800000})
          .then((users) => res.status(200).send(result.data(users)))
          .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
        }
        else{
          return res.status(200).send(result.message('Sai Mật Khẩu'));
        }
      }
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  },
  register(req, res) {
    return users
    .create({
      useaccount : req.body.useaccount,
      useenc_password : bcrypt.hashSync(req.body.useenc_password,8)  
    })
    .then(() => res.status(200).send(result.message('Đăng Ký Thành Công')))
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  },
  authentication(req, res,next) {
    if(req.headers.authorization){
      return users
      .find({ where:{
        token:req.headers.authorization.substring(7)
      }})
      .then(users => {
        if (!users) {
          return res.status(200).send(result.message('Sai Token'));
        }
        else{
          if(Date.now()>users.expired_time){
           return res.send(result.message('Hết Hạn'));
          }
          next();
        }
      })
      .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    }
    return res.status(200).send(result.message('Không Có Token'));
  },
  resetpassword(req, res) {
    return users
    .find({ where:{
      useemail:req.body.useemail
    }}
    )
    .then(users => {
      if (!users) {
        return res.status(200).send(result.message('Sai Email'));
      }
      else{
        return users
        .update({useenc_password: uuidv4()})
        .then((users) => mail.transporter1().sendMail(mail.passoption(users.useemail,users.useenc_password), function(error, info){
          if (error) {
            return res.status(400).send(result.error(400,'Xảy Ra Lỗi'));
          } else {
            return users
            .update({useenc_password: bcrypt.hashSync(users.useenc_password,8)})
            .then(() => res.status(200).send(result.message('Mật Khẩu Đã Được Đặt Lại')))
            .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
          }
        }))
        .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));   
      }
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  }
}