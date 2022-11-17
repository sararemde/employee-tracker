USE employee_tracker_db;

INSERT INTO department (name)
VALUES 
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Operations'),
    ('Insurance');

INSERT INTO role_ (title, salary, department_id)
VALUES
    ('Software Engineer', 90000, 1),
    ('Salesperson', 65000, 2),
    ('Accountant', 80000, 3 ),
    ('Operations Manager', 100000, 4),
    ('Banker' 85000, 5);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES 
    ('Sara', 'Remde', 1, NULL),
    ('Keith', 'Gray', 2, 1),
    ('Justin', 'Liu', 3, NULL),
    ('Elle', 'McCollum', 4, 5),
    ('Paige', 'Hansen', 5);
