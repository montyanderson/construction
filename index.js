"use strict";

const types = require("./lib/types.js");

class Construction {
	constructor() {
		if(typeof arguments[0] == "string") {
			this.endianness = arguments[0];
			this.struct = arguments[1];
		} else {
			this.endianness = "BE";
			this.struct = arguments[1];
		}

		if(["BE", "LE"].indexOf(this.endianness) < 0) {
			throw new Error("Endianness must be LE or BE");
		}

		if(typeof this.struct !== "object") {
			throw new Error("Structure definition must be an object");
		}

		this.size = 0;

		for(let key in this.struct) {
			this.size += this.struct[key].size;
		}
	}

	write(obj) {
		let offset = 0;
		let buf = Buffer.allocUnsafe(this.size);

		for(let key in this.struct) {
			const type = this.struct[key];

			type["write" + this.endianness].call(buf, obj[key], offset);
			offset += type.size;
		}

		return buf;
	}

	read(buf, obj = {}) {
		let offset = 0;

		for(let key in this.struct) {
			const type = this.struct[key];

			obj[key] = type["read" + this.endianness].call(buf, offset);
			offset += type.size;
		}

		return obj;
	}
};

Construction.types = types;


module.exports = Construction;
