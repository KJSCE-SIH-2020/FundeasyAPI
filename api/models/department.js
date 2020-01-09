const mongoose = require('mongoose');

const DeptSchema = mongoose.Schema({
	DeptNo: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	State: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Department', DeptSchema);
