// Factory Pattern: Decoupling client from User classes and encapsulate object creation logic.
class User {
    constructor(name) {
        this.name = name;
    }
    getRole() {
        throw new Error("Override required");
    }
}

class Student extends User {
    getRole() {
        return 'Student';
    }
}

class Teacher extends User {
    getRole() {
        return 'Teacher';
    }
}

class Admin extends User {
    getRole() {
        return 'Admin';
    }
}

class UserFactory {
    createUser(type, name) {
        let user;
        switch (type) {
            case 'student':
                user = new Student(name);
                break;
            case 'teacher':
                user = new Teacher(name);
                break;
            case 'admin':
                user = new Admin(name);
                break;
            default:
                throw new Error('Invalid type');
        }
        return user;
    }
}

const userFactory = new UserFactory();

const student = userFactory.createUser('student', 'John');
console.log(student.getRole());

const teacher = userFactory.createUser('teacher', 'Jane');
console.log(teacher.getRole());

const admin = userFactory.createUser('admin', 'Emily');
console.log(admin.getRole());
