var users = require('../models').users;



module.exports = {
list(req, res) {
  return users
    .findAll({attributes:['use_id']})
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
},
create(req, res) {
  return users
    .create(req.body)
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return users
    .findById(req.body.use_id)
    .then(users => {
      if (!users) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Người Dùng',
        });
      }
      return users
        .update(req.body)
        .then(() => res.status(200).send(users))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return users
    .findById(req.body.use_id)
    .then(users => {
      if (!users) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Người Dùng',
        });
      }
      return users
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
}