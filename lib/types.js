module.exports = {
	Int8: {
		name: "Int8",
		size: 1,
		readLE: Buffer.prototype.readInt8,
		readBE: Buffer.prototype.readInt8,
		writeLE: Buffer.prototype.writeInt8,
		writeBE: Buffer.prototype.writeInt8
	},
	Int16: {
		name: "Int16",
		size: 2,
		readLE: Buffer.prototype.readInt16LE,
		readBE: Buffer.prototype.readInt16BE,
		writeLE: Buffer.prototype.writeInt16LE,
		writeBE: Buffer.prototype.writeInt16BE
	},
	Int32: {
		name: "Int32",
		size: 4,
		readLE: Buffer.prototype.readInt32LE,
		readBE: Buffer.prototype.readInt32BE,
		writeLE: Buffer.prototype.writeInt32LE,
		writeBE: Buffer.prototype.writeInt32BE
	},
	UInt8: {
		name: "UInt8",
		size: 1,
		readLE: Buffer.prototype.readUInt8,
		readBE: Buffer.prototype.readUInt8,
		writeLE: Buffer.prototype.writeUInt8,
		writeBE: Buffer.prototype.writeUInt8
	},
	UInt16: {
		name: "UInt16",
		size: 2,
		readLE: Buffer.prototype.readUInt16LE,
		readBE: Buffer.prototype.readUInt16BE,
		writeLE: Buffer.prototype.writeUInt16LE,
		writeBE: Buffer.prototype.writeUInt16BE
	},
	UInt32: {
		name: "UInt32",
		size: 4,
		readLE: Buffer.prototype.readUInt32LE,
		readBE: Buffer.prototype.readUInt32BE,
		writeLE: Buffer.prototype.writeUInt32LE,
		writeBE: Buffer.prototype.writeUInt32BE
	}
};
