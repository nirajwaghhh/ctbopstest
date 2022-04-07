const app = require("express")();
const PORT = process.env.PORT || 3000;
const request = require('request');

app.get("", (req, res) => {
    
	request('https://checkip.amazonaws.com', function (error, response, body) {
	res.send(body);
});
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
