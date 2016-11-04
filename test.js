import test from "ava";

const Construction = require("./");
const t = Construction.types;

const structLE = new Construction("LE", {
	a: t.Int8,
	b: t.Int16,
	c: t.Int32,
	d: t.UInt8,
	e: t.UInt16,
	f: t.UInt32,
});

const structBE = new Construction("BE", {
	a: t.Int8,
	b: t.Int16,
	c: t.Int32,
	d: t.UInt8,
	e: t.UInt16,
	f: t.UInt32,
});

test("write LE", t => {
	const buffer = structLE.write({
		a: -20,
		b: -20000,
		c: -1048576,
		d: 20,
		e: 20000,
		f: 1048576
	});

	t.is(buffer.toString("hex"), "ece0b10000f0ff14204e00001000");
});

test("read LE", t => {
	const s = structLE.read(Buffer.from("ece0b10000f0ff14204e00001000", "hex"));

	t.is(s.a, -20);
	t.is(s.b, -20000);
	t.is(s.c, -1048576);
	t.is(s.d, 20);
	t.is(s.e, 20000);
	t.is(s.f, 1048576);
});

test("write BE", t => {
	const buffer = structBE.write({
		a: -20,
		b: -20000,
		c: -1048576,
		d: 20,
		e: 20000,
		f: 1048576
	});

	t.is(buffer.toString("hex"), "ecb1e0fff00000144e2000100000");
});

test("read BE", t => {
	const s = structBE.read(Buffer.from("ecb1e0fff00000144e2000100000", "hex"));

	t.is(s.a, -20);
	t.is(s.b, -20000);
	t.is(s.c, -1048576);
	t.is(s.d, 20);
	t.is(s.e, 20000);
	t.is(s.f, 1048576);
});
