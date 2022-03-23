const express = require("express")
const app = express()
const mg = require('mailgun-js')
const path = require('path')
require("dotenv").config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
  
	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
  }

  


const mailgun = () => 
	mg({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN
	})


app.post('/api/email', (req, res) => {
	const {name, email, message} = req.body;

	mailgun().messages().send({
		from: `${name} <${email}>`,
		to: 'Sahill <skassanjee@gmail.com>',
		subject: 'Portfolio Message!',
		html: `<p>${message} </p>`

	}, (error, body) => {
		if(error){
			console.log(error)
			res.status(500).send({ message: 'Error sending email'})
		} else{
			console.log(body);
			res.send({ message: 'email send  successfully'})
		}
	})
})

const port = process.env.PORT || 4000


//serve static assets in production

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})