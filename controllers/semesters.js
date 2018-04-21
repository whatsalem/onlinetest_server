var semesters = require('../models').semesters;

module.exports = {
  list(req, res) {
  return semesters
    .all()
    .then(semesters => res.status(200).send(semesters))
    .catch(error => res.status(400).send(error));
},
create(req, res) {
  return semesters
    .create(req.body)
    .then(semesters => res.status(200).send(semesters))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return semesters
    .findById(req.body.sem_id)
    .then(semesters => {
      if (!semesters) {
        return res.status(404).send({
          message: 'Không Tìm Thấy Học Kỳ',
        });
      }
      return semesters
        .update(req.body)
        .then(() => res.status(200).send(semesters))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return semesters
    .findById(req.body.sub_id)
    .then(semesters => {
      if (!semesters) {
        return res.status(400).send({
          message: 'Không Tìm Thấy Học Kỳ',
        });
      }
      return semesters
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
}
