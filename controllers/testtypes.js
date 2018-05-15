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
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return testtypes
    .update(req.body,{ where: { test_id: req.body.test_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return testtypes
    .destroy({ where: { test_id: req.body.test_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(error => res.status(400).send(error));
}
}
