var testtypes = require('../models').testtypes;

module.exports = {
  list(req, res) {
  return testtypes
    .all()
    .then(testtypes => res.status(200).send(testtypes))
    .catch(error => res.status(400).send(error));
},
create(req, res) {
  return testtypes
    .create(req.body)
    .then(testtypes => res.status(200).send(testtypes))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return testtypes
    .findById(req.body.test_id)
    .then(testtypes => {
      if (!testtypes) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Chủ Đề',
        });
      }
      return testtypes
        .update(req.body)
        .then(() => res.status(200).send(testtypes))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return testtypes
    .findById(req.body.test_id)
    .then(testtypes => {
      if (!testtypes) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Chủ Đề',
        });
      }
      return testtypes
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
}
