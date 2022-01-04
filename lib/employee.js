class Employee {
	constructor(idnum, name, email) {
		this.id = idnum;
		this.name = name;
		this.email = email;
	}

	getId() {
		return this.idnum;
	}

	getName() {
		return this.name;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
