const Employee = require("./employee.js");

class Intern extends Employee {
	constructor(idnum, name, email, school) {
		super(idnum, name, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}
}

module.exports = Intern;
