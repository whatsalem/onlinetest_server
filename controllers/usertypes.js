var usertypes = require('../models').usertypes;

module.exports = {
  list(req, res) {
  return usertypes
    .all()
    .then(usertypes => res.status(200).send(usertypes))
    .catch(error => res.status(400).send(error));
},
create(req, res) {
  return usertypes
    .create(req.body)
    .then(usertypes => res.status(200).send(usertypes))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return usertypes
    .findById(req.body.uset_id)
    .then(usertypes => {
      if (!usertypes) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Nhóm Người Dùng',
        });
      }
      return usertypes
        .update(req.body)
        .then(() => res.status(200).send(usertypes))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return usertypes
    .findById(req.body.uset_id)
    .then(usertypes => {
      if (!usertypes) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Nhóm Người Dùng',
        });
      }
      return usertypes
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
}