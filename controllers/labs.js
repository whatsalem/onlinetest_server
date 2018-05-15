var labs = require('../models').labs
,result = require('../modules').response_result

module.exports = {
  list(req, res) {
  return labs
    .all()
    .then((labs) => res.status(200).send(result.data(labs)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
create(req, res) {
  return labs
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
update(req, res) {
  return labs
    .update(req.body,{ where: { lab_id: req.body.lab_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
destroy(req, res) {
  return labs
    .destroy({ where: { lab_id: req.body.lab_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
}
}
