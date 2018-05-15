var parts = require('../models').parts
,result = require('../modules').response_result

module.exports = {
  list(req, res) {
    return parts
    .all()
    .then((parts) => res.status(200).send(result.data(parts)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  create(req, res) {
    return parts
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  update(req, res) {
    return parts
      .update(req.body,{ where: { par_id: req.body.par_id }})
      .then(() => res.status(200).send(result.message('Update successfully!')))
      .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  destroy(req, res) {
    return parts
    .destroy({ where: { par_id: req.body.par_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  }
}
