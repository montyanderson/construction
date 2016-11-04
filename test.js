const construction = require("./");
const t = construction.types;


const f = new construction("LE", {
	a: t.UInt32,
	b: t.UInt8,
	c: t.Int32,
});

let buf = f.write({
	a: 233333333,
	b: 34,
	c: 343343444
});

console.log(buf.toString());

console.log(f.read(buf));
