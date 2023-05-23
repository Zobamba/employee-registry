import EmployeeController from '../controller/employee-controller';
import { EmployeeFormConstraints, validateFormData } from '../middlewares/employee-validate';
import { validParamId } from '../middlewares/validate-param-id';

export default function employeeRoutes(app) {
    app.post('/employee', EmployeeFormConstraints, validateFormData, EmployeeController.postEmployee, EmployeeController.mapEmployeeToContacts);
    app.get('/employees', EmployeeController.getEmployees);
    app.put('/employee/:id', validParamId, EmployeeFormConstraints, validateFormData, EmployeeController.UpdateEmployee, EmployeeController.updateEmployeeContacts);
    app.delete('/employee/:id', validParamId, EmployeeController.deleteEmployee);
    app.get('/employee/:id', validParamId, EmployeeController.getEmployeeByIdParam);
}
