class construction {
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

			let func = "write" + type.name;
			if(type.size > 1) func += this.endianness;

			buf[func](obj[key], offset);
			offset += type.size;
		}

		return buf;
	}

	read(buf, obj = {}) {
		let offset = 0;

		for(let key in this.struct) {
			const type = this.struct[key];

			let func = "read" + type.name;
			if(type.size > 1) func += this.endianness;

			obj[key] = buf[func](offset);
			offset += type.size;
		}

		return obj;
	}
};

construction.types = {};

[
	"Int8",
	"Int16",
	"Int32",
	"UInt8",
	"UInt16",
	"UInt32"
].map(name => {
	construction.types[name] = {
		name,
		size: parseInt(name.replace(/^\D+/g, "")) / 8
	};
});

module.exports = construction;
