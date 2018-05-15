var image_banks = require('../models').image_banks
,result = require('../modules').response_result

module.exports = 
{
  list(req, res) 
  {
    return image_banks
    .all()
    .then((image_banks) => res.status(200).send(result.data(image_banks)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  create(req, res) {
    return image_banks
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  update(req, res) 
  {
    return image_banks
      .update(req.body,{ where: { img_id: req.body.img_id }})
      .then(() => res.status(200).send(result.message('Update successfully!')))
      .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  destroy(req, res) {
    return image_banks
    .destroy({ where: { img_id: req.body.img_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  }
}
