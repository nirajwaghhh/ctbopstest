const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    x=0;
    while(x<5000){
	var y= (x *1000) + 123213213321213 * 2001020302103 * 1231312312323 * 123213 / 12 * 212312312321323 % 12 /12 /15/12 * 2342342343243;
	x++;
	z=0;
	while ( z < 50000)
	{
		var y= (x *1000) + 123213213321213 * 2001020302103 * 1231312312323 * 123213 / 12 * 212312312321323 % 12 /12 /15/12 * 2342342343243;
        	z++;
	}  
    }
	res.send("HELLO !!!!!!!!" + y);
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
