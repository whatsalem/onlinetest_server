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
    .findById(req.body.sub_id)
    .then(subjects => {
      if (!subjects) {
        () => res.status(404).send(result.error(404,'Không Tìm Thấy'));
      }
      return subjects
        .update(req.body)
        .then(() => res.status(200).send(result.message('Cập Nhật Chủ Đề Thành Công')))
        .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
},
destroy(req, res) {
  return subjects
    .findById(req.body.sub_id)
    .then(subjects => {
      if (!subjects) {
       () => res.status(404).send(result.error(404,'Không Tìm Thấy'));
      }
      return subjects
        .destroy()
        .then(() => res.status(200).send(result.message('Xóa Chủ Đề Thành Công')))
        .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
}
}
