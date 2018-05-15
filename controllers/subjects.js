var subjects = require('../models').subjects
,result = require('../modules').response_result

module.exports = 
{
  // list(req, res) 
  // {
  //   return subjects
  //   //.all()
  //   // .findById(
  //   //   req.params.id
  //   //  // attributes:['sub_id', 'parent_id']
  //   // )
  //   .findAll({
  //     where: {
  //       $or: [{'parent_id': req.params.id}, {'sub_id':req.params.id}]
  //     }
  //   })
  //   .then((subjects) => res.status(200).send(result.data(subjects)))
  //   .catch(() => res.status(400).send(result.error(400,'Error!')));
  // },
  list(req, res) {
    return subjects
    .all()
    .then((subjects) => res.status(200).send(result.data(subjects)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  create(req, res) {
    return subjects
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  update(req, res) {
    return subjects
      .update(req.body,{ where: { sub_id: req.body.sub_id }})
      .then(() => res.status(200).send(result.message('Update successfully!')))
      .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  destroy(req, res) {
    return subjects
    .destroy({ where: { sub_id: req.body.sub_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  }
}
