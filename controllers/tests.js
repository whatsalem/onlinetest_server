var tests = require('../models').tests
,result = require('../modules').response_result

module.exports = {
  list(req, res) {
    return tests
    .all()
    .then((tests) => res.status(200).send(result.data(tests)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  create(req, res) {
    return tests
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  update(req, res) {
    return tests
      .update(req.body,{ where: { tes_id: req.body.tes_id }})
      .then(() => res.status(200).send(result.message('Update successfully!')))
      .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  destroy(req, res) {
    return tests
    .destroy({ where: { tes_id: req.body.tes_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  }
}
