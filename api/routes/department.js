const express = require('express');
const route = express.Router();
const auth = require('../middleware/authenticate');
const deptController = require('../controllers/department.js');

route.get('/',deptController.GET_DEPT_ALL);
route.get('/:DNo',deptController.GET_DEPT_BYNO);
route.post('/',deptController.add_dept);

module.exports = route;