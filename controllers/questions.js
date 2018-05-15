var questions = require('../models').questions
var options = require('../models').options
,result = require('../modules').response_result

module.exports = {
  list(req, res) 
  {
    return questions
    .all({include: [ { model: options} ]})
    .then((questions) => res.status(200).send(result.data(questions)))
    .catch((ss) => res.status(400).send(ss));
  },
  create(req, res) 
  {
    return questions
    .create(req.body)
    .then((questions) => {
      req.body.options.forEach(function(elem){
       return options.create({
        que_id: questions.que_id,optcontent:elem.optcontent,optiscorrect:elem.optiscorrect
      })
       .then(() => res.status(200).send(result.message('Insert successfully!')))
       .catch(() => res.status(400).send(result.error(400,'Error!')));
     })
      
    })
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  update(req, res) 
  {
    return questions
    .update(req.body,{ where: { que_id: req.body.que_id}})
    .then((questions) =>{
      req.body.options.forEach(function(elem){
       return options
       .update(
        {optcontent:elem.optcontent,optiscorrect:elem.optiscorrect },{ where: { opt_id: elem.opt_id }}
      )
       .then(() => res.status(200).send(result.message('Update successfully!')))
       .catch((sss) => res.status(400).send(result.error(400,sss)));
     })  
    })
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  destroy(req, res) 
  {
    return options
    .destroy({ where: { que_id: req.body.que_id }}) 
    .then(() => {
      return questions
      .destroy({ where: { que_id: req.body.que_id }}) 
      .then(() => res.status(200).send(result.message('Delete successfully!')))
      .catch(() => res.status(400).send(result.error(400,'Error!')));
    })
    .catch(() => res.status(400).send(result.error(400,'Error!')));

  }
}
