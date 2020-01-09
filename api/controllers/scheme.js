const Scheme = require('../models/scheme');
const mongoose = require('mongoose');

exports.get_schemes_all = (req, res, next) => {
	Scheme.find()
		.exec()
		.then(result => {
			console.log(result);
			if (result.length != 0) {
				res.status(200).json({
					message: result,
				});
			} else {
				res.status(404).json({
					message: 'No record',
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				message: err,
			});
		});
};
exports.get_scheme_by_schemeno = (req, res, next) => {
	rn = req.params.sNo;
	Scheme.find({ sNo: rn })
		.exec()
		.then(result => {
			console.log(result);
			if (result.length != 0) {
				res.status(200).json({
					message: result,
				});
			} else {
				res.status(404).json({
					message: 'No record',
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				message: err,
			});
		});
};

exports.add_scheme = (req, res, next) => {
	const scheme = new Scheme({
		sNo: req.body.sNo,
		name: req.body.name,
		deptNo: req.body.deptNo,
		description: req.body.description,
	});
	scheme
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				message: 'Scheme Added',
				response: result,
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				message: 'I am in error',
				response: err,
			});
		});
};
