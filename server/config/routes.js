var polls = require('./../controllers/polls.js')

module.exports = function(app){

	app.get('/polls', function(req,res){
		polls.index(req,res)
	})	
	app.get('/findpoll/:id', function(req,res){
		polls.show(req,res)
	})	
	app.post('/createpoll', function(req,res){
		polls.create(req,res)
	})
	app.post('/option1/:id', function(req,res){
		polls.update_option1(req,res)
	})	
	app.post('/option2/:id', function(req,res){
		polls.update_option2(req,res)
	})
	app.post('/option3/:id', function(req,res){
		polls.update_option3(req,res)
	})
	app.post('/option4/:id', function(req,res){
		polls.update_option4(req,res)
	})
	app.post('/delete/:id', function(req,res){
		polls.delete_poll(req,res)
	})

};