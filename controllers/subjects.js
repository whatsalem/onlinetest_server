var subjects = require('../models').subjects;

module.exports = {
  list(req, res) {
  return subjects
    .all()
    .then(subjects => res.status(200).send(subjects))
    .catch(error => res.status(400).send(error));
},
create(req, res) {
  return subjects
    .create(req.body)
    .then(subjects => res.status(200).send(subjects))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return subjects
    .findById(req.body.sub_id)
    .then(subjects => {
      if (!subjects) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Chủ Đề',
        });
      }
      return subjects
        .update(req.body)
        .then(() => res.status(200).send(subjects))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return subjects
    .findById(req.body.sub_id)
    .then(subjects => {
      if (!subjects) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Chủ Đề',
        });
      }
      return subjects
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
}
