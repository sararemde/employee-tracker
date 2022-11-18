const mainQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'View All Departments',
                value: 'View_all_departments',
            },
            {
                name: 'View All Employees',
                value: 'view_all_employees',
            },
            {
                name: 'View All Roles',
                value: 'view_all_roles',
            },
            {
                name: 'Add Department',
                value: 'add_department',
            },
            {
                name: 'Add Employee',
                value: 'add_employee',
            },
            {
                name: 'Add Role',
                value: 'add_role',
            },
            {
                name: 'Update Employee Role',
                calue: 'update_employee_role',
            },
            {
                name: 'Quit',
                value: 'quit',
            }
        ]
    }
];

const addRoleQuestion = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the role?',
    }, 
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?',
    },
    {
        type: 'list',
        name: 'departmentId',
        message: 'What department does this role belong to?',
        choices: []
    },
];

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'What is the employee\'s first name?',
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'What is the employee\'s last name?',
    },
    {
        type: 'list',
        name: 'roleId',
        message: 'What is the employee\'s role?',
    },
    {
        type: 'list',
        name: 'managerId',
        message: 'What is the employee\'s manager?',
        choices: [
            {
                name: 'None',
                value: 'null',
            }
        ]
    },
];

const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?',
    }
];

const updateEmployeeRole = [
    {
        type: 'list',
        name: 'id',
        message: 'Which employee would you like to update role for?',
        choices: []
    },
    {
        type: 'list',
        name: 'roleId',
        message: 'What is the emplyee\'s new role?',
        choices: []
    }
];

module.exports = {
    mainQuestions,
    addRoleQuestion,
    addEmployeeQuestions,
    addDepartmentQuestions,
    updateEmployeeRole,
};