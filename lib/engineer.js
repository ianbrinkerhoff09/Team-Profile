const Employee = require("./employee.js");

class Engineer extends Employee {
	constructor(id, name, email, github) {
		super(id, name, email);
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