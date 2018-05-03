var questions = require('../models').questions
var options = require('../models').options
,result = require('../modules').response_result

module.exports = {
  list(req, res) {
    return questions
    .all({include: [ { model: options} ]})
    .then((questions) => res.status(200).send(result.data(questions)))
    .catch((ss) => res.status(400).send(ss));
  },
  create(req, res) {
    return questions
    .create(req.body)
    .then((questions) => {
      req.body.options.forEach(function(elem){
       return options.create({
        que_id: questions.que_id ,optcontent:elem.optcontent,optiscorrect:elem.optiscorrect
      })
       .then(() => res.status(200).send(result.message('Cập Nhật Chủ Đề Thành Công')))
       .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
     })
      
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
  },
  update(req, res) {
    return questions
    .update(req.body,{ where: { que_id: req.body.que_id}})
    .then(() =>{
      return options
      .update(req.body,{ where: { opt_id: req.body.opt_id }})
      .then(() => res.status(200).send(result.message('Cập Nhật Chủ Đề Thành Công')))
      .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    })
    .catch((ss) => res.status(400).send(ss));
  },
  destroy(req, res) {
    return options
    .destroy({ where: { que_id: req.body.que_id }}) 
    .then(() => {
      return questions
      .destroy({ where: { que_id: req.body.que_id }}) 
      .then(() => res.status(200).send(result.message('Xóa Chủ Đề Thành Công')))
      .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));
    })
    .catch(() => res.status(400).send(result.error(400,'Xảy Ra Lỗi')));

  }
}
