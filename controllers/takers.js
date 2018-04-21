var takers = require('../models').takers;

module.exports = {
  list(req, res) {
  return takers
    .all()
    .then(takers => res.status(200).send(takers))
    .catch(error => res.status(400).send(error));
},
create(req, res) {
  return takers
    .create(req.body)
    .then(takers => res.status(200).send(takers))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return takers
    .findById(req.body.tak_id)
    .then(takers => {
      if (!takers) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Chủ Đề',
        });
      }
      return takers
        .update(req.body)
        .then(() => res.status(200).send(takers))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return takers
    .findById(req.body.tak_id)
    .then(takers => {
      if (!takers) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Chủ Đề',
        });
      }
      return takers
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
}
