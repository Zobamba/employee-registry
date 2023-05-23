import EmployeeController from '../controller/employee-controller';
import { EmployeeFormConstraints, validateFormData } from '../middlewares/employee-validate';

export default function employeeRoutes(app) {
    app.post('/employee', EmployeeFormConstraints, validateFormData, EmployeeController.postEmployee, EmployeeController.mapEmployeeToContacts);
    app.get('/employees', EmployeeController.getEmployees);
}
