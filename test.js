const Construction = require("./");
const t = Construction.types;

const User = new Construction("LE", {
	age: t.UInt8,
	favouriteNumber: t.Int32
});

const user = User.read(Buffer.from("0f40420f00", "hex"));

console.log(user);
