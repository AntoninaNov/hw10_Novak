// State interface
class UserState {
    handle(context) {
        throw new Error("This method must be overridden in derived classes");
    }
}

// Classes for each state that derives from the state interface
class LoggedIn extends UserState {
    handle(context) {
        console.log("User is logged in.");
        context.setState(new InExam());
    }
}

class LoggedOut extends UserState {
    handle(context) {
        console.log("User is logged out.");
    }
}

class InExam extends UserState {
    handle(context) {
        console.log("User is in an exam.");
        context.setState(new LoggedOut());
    }
}

// Context class managing the state.
class User {
    constructor() {
        this.state = new LoggedOut(); // Initial state
    }

    // Public setter to change state
    setState(state) {
        this.state = state;
        this.state.handle(this);
    }

    performAction() {
        this.state.handle(this);
    }
}
const user = new User();
user.performAction(); // "User is logged out."

user.setState(new LoggedIn());
// "User is logged in."
// Automatically transitioned to InExam state

user.performAction();
// Output: "User is in an exam."
// Automatically transitioned to LoggedOut state
