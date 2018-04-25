var labs = require('../models').labs;

module.exports = {
  list(req, res) {
  return labs
    .all()
    .then((labs) => res.status(200).send(result.data(labs)))
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
},
create(req, res) {
  return labs
    .create(req.body)
    .then(labs => res.status(200).send(labs))
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
},
update(req, res) {
  return labs
    .findById(req.body.lab_id)
    .then(labs => {
      if (!labs) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Lab',
        });
      }
      return labs
        .update(req.body)
        .then(() => res.status(200).send(labs))
        .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
},
destroy(req, res) {
  return labs
    .findById(req.body.lab_id)
    .then(labs => {
      if (!labs) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Lab',
        });
      }
      return labs
        .destroy()
        .then(() => res.status(204).send())
        .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
}
}
