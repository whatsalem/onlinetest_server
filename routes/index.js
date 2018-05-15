var subjectsController = require('../controllers').subjects
, usersController = require('../controllers').users
, authController = require('../controllers').authentication
, labsController = require('../controllers').labs
, semestersController = require('../controllers').semesters
, usertypesController = require('../controllers').usertypes
, testtypesController = require('../controllers').testtypes
, takersController = require('../controllers').takers
, questionsController = require('../controllers').questions
, partsController = require('../controllers').parts
, image_banksController = require('../controllers').image_banks
, testsController = require('../controllers').tests
module.exports = (app) => {
  app.use('/api',authController.authentication);
  
  //app.get('/api/subjects/:id',subjectsController.list);
  app.get('/api/subjects',subjectsController.list);
	app.post('/api/subjects',subjectsController.create);
	app.put('/api/subjects',subjectsController.update);
	app.patch('/api/subjects',subjectsController.destroy);

	app.get('/api/users',usersController.list);
	app.post('/api/users',usersController.create);
	app.put('/api/users',usersController.update);
	app.patch('/api/users',usersController.destroy);

	app.get('/api/labs',labsController.list);
  app.post('/api/labs',labsController.create);
  app.put('/api/labs',labsController.update);
  app.patch('/api/labs',labsController.destroy);

  app.get('/api/semesters',semestersController.list);
  app.post('/api/semesters',semestersController.create);
  app.put('/api/semesters',semestersController.update);
  app.patch('/api/semesters',semestersController.destroy);

  app.get('/api/usertypes',usertypesController.list);
  app.post('/api/usertypes',usertypesController.create);
  app.put('/api/usertypes',usertypesController.update);
  app.patch('/api/usertypes',usertypesController.destroy);

  app.get('/api/testtypes',testtypesController.list);
  app.post('/api/testtypes',testtypesController.create);
  app.put('/api/testtypes',testtypesController.update);
  app.patch('/api/testtypes',testtypesController.destroy);

  app.get('/api/takers',takersController.list);
  app.post('/api/takers',takersController.create);
  app.put('/api/takers',takersController.update);
  app.patch('/api/takers',takersController.destroy);

  app.get('/api/parts',partsController.list);
  app.post('/api/parts',partsController.create);
  app.put('/api/parts',partsController.update);
  app.patch('/api/parts',partsController.destroy);

  app.get('/api/questions',questionsController.list);
  app.post('/api/questions',questionsController.create);
  app.put('/api/questions',questionsController.update);
  app.patch('/api/questions',questionsController.destroy);

  app.get('/api/image_banks',image_banksController.list);
  app.post('/api/image_banks',image_banksController.create);
  app.put('/api/image_banks',image_banksController.update);
  app.patch('/api/image_banks',image_banksController.destroy);

  app.get('/api/tests',testsController.list);
  app.post('/api/tests',testsController.create);
  app.put('/api/tests',testsController.update);
  app.patch('/api/tests',testsController.destroy);

  app.post('/login',authController.login);
	app.post('/register',authController.register);
	app.post('/resetpass',authController.resetpassword);
};