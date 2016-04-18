var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function() {
 return {
 	create: function(req,res){
 		console.log(req.body)
 		var poll = new Poll({user_name:req.body.user_name, question:req.body.question, option1:req.body.option1, option2:req.body.option2, option3:req.body.option3, option4:req.body.option4})
 		poll.save(function(err,results){
 			if(err){
 				console.log("something went wrong")
        console.log(err)
        res.json(err)
 			}
 			else{
 				console.log("successfully added a poll")
 				res.json(results)
 			}
 		})
 	},
 	index: function(req,res){
 		Poll.find({}, function(err,results){
 			if(err){
 				console.log(err)
 			}
 			else{
 				res.json(results)
 			}
 		})
 	},
  	show: function(req,res){
  		console.log(req.params)
 		Poll.find({_id:req.params.id}, function(err,results){
 			if(err){
 				console.log(err)
 			}
 			else{
 				res.json(results)
 			}
 		})
 	},
   	update_option1: function(req,res){
  		console.log("in update_option1 method")
  		console.log(req.params.id)
 		Poll.update({_id:req.params.id}, {$inc:{option1_count:1}},function(err,results){
 			if(err){
 				console.log(err)
 			}
 			else{
 				console.log("successfully added a like to option1")
 				res.json(results)
 			}
 		})
 	},
   	update_option2: function(req,res){
  		console.log("in update_option1 method")
  		console.log(req.params.id)
 		Poll.update({_id:req.params.id}, {$inc:{option2_count:1}},function(err,results){
 			if(err){
 				console.log(err)
 			}
 			else{
 				console.log("successfully added a like to option1")
 				res.json(results)
 			}
 		})
 	},
   	update_option3: function(req,res){
  		console.log("in update_option1 method")
  		console.log(req.params.id)
 		Poll.update({_id:req.params.id}, {$inc:{option3_count:1}},function(err,results){
 			if(err){
 				console.log(err)
 			}
 			else{
 				console.log("successfully added a like to option1")
 				res.json(results)
 			}
 		})
 	},
   	update_option4: function(req,res){
  		console.log("in update_option1 method")
  		console.log(req.params.id)
 		Poll.update({_id:req.params.id}, {$inc:{option4_count:1}},function(err,results){
 			if(err){
 				console.log(err)
 			}
 			else{
 				console.log("successfully added a like to option1")
 				res.json(results)
 			}
 		})
 	},
    delete_poll: function(req,res){
      console.log("in delete poll method")
      console.log(req.params.id)
      Poll.remove({_id:req.params.id}, function(err,results){
      if(err){
        console.log(err)
      }
      else{
        console.log("successfully deleted a poll")
        res.json(results)
      }
    })
  },  

 }
})();