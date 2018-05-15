var usertypes = require('../models').usertypes
,result = require('../modules').response_result
module.exports = {
  list(req, res) {
    return usertypes
    .all()
    .then((usertypes) => res.status(200).send(result.data(usertypes)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
create(req, res) {
  return usertypes
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return usertypes
    .update(req.body,{ where: { uset_id: req.body.uset_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return usertypes
    .destroy({ where: { uset_id: req.body.uset_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(error => res.status(400).send(error));
}
}