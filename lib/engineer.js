const Employee = require("./employee.js");

class Engineer extends Employee {
	constructor(idnum, name, email, github) {
		super(idnum, name, email);
		this.github = github;
	}

	getGitHub() {
		return this.github;
	}

	getRole() {
		return "Engineer";
	}
}

module.exports = Engineer;
