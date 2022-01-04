const Employee = require("./employee.js");

class Manager extends Employee {
	constructor(idnum, name, email, officeNumber) {
		super(idnum, name, email);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return "Manager";
	}
}

module.exports = Manager;
