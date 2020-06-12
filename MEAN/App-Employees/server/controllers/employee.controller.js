const Employee = require('../models/employee');

const EmployeeCtrl= {};

EmployeeCtrl.getEmployees = async (req, res)=>{
    const employees = await Employee.find();
    res.json(employees);
};

EmployeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json({status: 'Employee Saved'});
};

EmployeeCtrl.getEmployee = async (req,res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

EmployeeCtrl.updateEmployee = async (req, res) => {
    const {id} = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
}
EmployeeCtrl.deleteEmployee= async (req, res)=> {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
}

module.exports = EmployeeCtrl;