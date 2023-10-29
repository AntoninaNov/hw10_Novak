// Facade Pattern: Simplifies client interaction with multiple subsystems by providing a single entry point.
class CourseManagement {
    createCourse(title) {
        console.log(`Course "${title}" created.`);
    }
}

class UserManagement {
    createUser(username) {
        console.log(`User "${username}" created.`);
    }
}

class ExamManagement {
    createExam(course, type) {
        console.log(`Exam of type "${type}" for course "${course}" created.`);
    }
}

class UniversityTrackingFacade {
    constructor() {
        this.courseManager = new CourseManagement();
        this.userManager = new UserManagement();
        this.examManager = new ExamManagement();
    }

    // Delegate course creation to CourseManagement.
    addNewCourse(title) {
        this.courseManager.createCourse(title);
    }

    // Delegate user creation to UserManagement.
    addNewUser(username) {
        this.userManager.createUser(username);
    }

    // Delegate exam creation to ExamManagement.
    addNewExam(course, type) {
        this.examManager.createExam(course, type);
    }
}

const facade = new UniversityTrackingFacade();

facade.addNewCourse("Mathematics");
facade.addNewUser("JohnDoe");
facade.addNewExam("Mathematics", "Midterm");
