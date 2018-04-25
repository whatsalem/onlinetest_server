var nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'whatsalemzolek@gmail.com',
		pass: 'rxecoseekhudqrzo'
	}
});

var option = {
	from: 'whatsalemzolek@gmail.com',
	to: '',
	subject: 'Sending Email using Node.js',
	text: ''
}

function passoption(mess,text){
	option.to = mess;
	option.text = text;
	return option;
}
function transporter1(){
	return transporter;
}
module.exports ={
	passoption : passoption,
	transporter1 : transporter1
}
