var subjects = require('../models').subjects
,result = require('../modules').response_result

module.exports = {
  list(req, res) {
    return subjects
    .all()
    .then((subjects) => res.status(200).send(result.data(subjects)))
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  },
  create(req, res) {
    return subjects
    .create(req.body)
    .then(() => res.status(200).send(result.message('Tạo Chủ Đề Thành Công')))
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  },
  update(req, res) {
    return subjects
      .update(req.body,{ where: { sub_id: req.body.sub_id }})
      .then(() => res.status(200).send(result.message('Cập Nhật Chủ Đề Thành Công')))
      .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  },
  destroy(req, res) {
    return subjects
    .destroy({ where: { sub_id: req.body.sub_id }})
    .then(() => res.status(200).send(result.message('Xóa Chủ Đề Thành Công')))
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  }
}
