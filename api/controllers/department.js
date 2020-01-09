const Department = require('../models/department');
const mongoose = require('mongoose');

exports.GET_DEPT_ALL = (req, res, next) => {
	Department.find()
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
exports.GET_DEPT_BYNO = (req, res, next) => {
	Department.find({ DeptNo: req.params.DNo })
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

exports.add_dept = (req, res, next) => {
	const department = new Department({
		DeptNo: req.body.DeptNo,
		name: req.body.name,
		State: req.body.State,
	});
	department
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				message: 'department Added',
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
