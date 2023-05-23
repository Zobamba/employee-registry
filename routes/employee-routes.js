import EmployeeController from '../controller/employee-controller';
import { EmployeeFormConstraints, validateFormData } from '../middlewares/employee-auth';

export default function employeeRoutes(app) {
    app.post('/employee', EmployeeFormConstraints, validateFormData, EmployeeController.postEmployee, EmployeeController.mapEmployeeToContacts);
}
