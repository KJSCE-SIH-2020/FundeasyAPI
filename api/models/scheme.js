const mongoose = require('mongoose');

const SchemeSchema = mongoose.Schema({
	sNo: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	deptNo: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('Scheme', SchemeSchema);
