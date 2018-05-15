var users = require('../models').users
,result = require('../modules').response_result
module.exports = {
  list(req, res) {
    return users
    .all()
    .then((users) => res.status(200).send(result.data(users)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
create(req, res) {
  return users
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return users
    .update(req.body,{ where: { use_id: req.body.use_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return users
    .destroy({ where: { use_id: req.body.use_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(error => res.status(400).send(error));
}
}