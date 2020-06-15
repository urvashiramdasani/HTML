var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/blog_demo_2")
var Post = require("./models/post")
var User = require("./models/user")

Post.create({
	title: "How to cook the best burger pt. 4",
	content: "blah blah blah blah blah"
}, function(err, post) {
	if(err) console.log(err)
	else {
		User.findOne({email: "bob@gmail.com"}, function(err, founduser) {
			if(err) console.log(err)
			else {
				founduser.posts.push(post)
				founduser.save(function(err, data) {
					if(err) console.log(err)
					else console.log(data)
				})
			}
		})
	}
})

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// }, function(err, user) {
// 	if(err) console.log(err)
// 	else console.log(user)
// })

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
// 	if(err) console.log(err)
// 	else console.log(user)
// })