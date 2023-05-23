import models from '../models/index.js';

const { employee, emergencyContact } = models;

class EmployeeController {
  postEmployee(req, res, next) {
    employee.create({
      fullName: req.body.fullName,
      jobTitle: req.body.jobTitle,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state
    }).then((createdEmployee) => {

      req.employee = createdEmployee;
      req.contacts = req.body.contacts;

      return next();

    }).catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({
          message: `An employee with the email '${req.body.email}' already exists`,
        });
      }
    });
  }

  mapEmployeeToContacts(req, res) {
    const { contacts, employee } = req;

    const newContacts = [];
    contacts.forEach((contact) => {
      newContacts.push({
        employeeId: employee.id,
        title: contact.title,
        phoneNumber: contact.phoneNumber,
        relationship: contact.relationship
      });
    });

    emergencyContact.bulkCreate(newContacts).then((contactRecords) => {
      res.status(201).send({
        message: 'Employee successfully created',
        employee: { ...employee.dataValues, contacts: contactRecords },
      });
    }).catch((error) => {
      res.status(400).send({ message: error.name });
    });
  }

  getEmployees(req, res) {
    const { limit, offset } = req.query;
    const queryLimit = limit || 5;
    const queryOffset = offset || 0;

    employee.count().then((count) => {
      employee.findAll({
        include: [{
          model: emergencyContact,
        }],
        limit: queryLimit,
        offset: queryOffset,
        order: [['id', 'ASC']],
      }).then((employees) => {
        res.status(200).send({
          employees,
          count,
          limit: queryLimit,
          offset: queryOffset,
        });
      });
    });
  }
}

export default new EmployeeController();
