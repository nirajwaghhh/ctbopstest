const app = require("express")();

const PORT = process.env.PORT || 3000;

const request = require('request');

app.get("", (req, res) => {
    
	res.send("HELLO CTB-OPSTEST !!!!!!!!" );

	request('https://checkip.amazonaws.com', function (error, response, body) {
	console.error('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML for the Google homepage.
});
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
