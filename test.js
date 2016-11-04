import test from "ava";

const Construction = require("./");
const t = Construction.types;

const User = new Construction("LE", {
	age: t.UInt8,
	favouriteNumber: t.Int32
});

test("write", t => {
	const buffer = User.write({
		age: 15,
		favouriteNumber: 1000000
	});

	t.is(buffer.toString("hex"), "0f40420f00");
});

test("read", t => {
	const user = User.read(Buffer.from("0f40420f00", "hex"));

	t.is(user.age, 15);
	t.is(user.favouriteNumber, 1000000);
});
