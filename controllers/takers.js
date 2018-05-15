var takers = require('../models').takers
,result = require('../modules').response_result

module.exports = 
{
  list(req, res) {
    return takers
    .all()
    .then((takers) => res.status(200).send(result.data(takers)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  create(req, res) 
  {
    return takers
      .create(req.body)
      .then(() => res.status(200).send(result.message('Insert successfully!')))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) 
  {
    return takers
      .update(req.body,{ where: { tak_id: req.body.tak_id }})
      .then(() => res.status(200).send(result.message('Update successfully!')))
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) 
  {
    return takers
    .destroy({ where: { tak_id: req.body.tak_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(error => res.status(400).send(error));
  }
}
