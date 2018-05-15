var users = require('./users')
, subjects = require('./subjects')
, authentication = require('./authentication')
, authorization = require('./authorization')
, labs = require('./labs')
, semesters = require('./semesters')
, usertypes = require('./usertypes')
, testtypes = require('./testtypes')
, takers = require('./takers')
, questions = require('./questions')
, parts =  require('./parts')
, image_banks=require('./image_banks')
, tests = require ('./tests')

module.exports = 
{
	users,
	subjects,
	authentication,
	authorization,
	labs,
	semesters,
	usertypes,
	testtypes,
	takers,
	questions,
	parts,
	image_banks,
	tests,
};