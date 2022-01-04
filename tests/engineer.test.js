const test = require("jest");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	it("Generated Object Has Github", () => {
		const github = "ianbrinkerhoff09";
		const employee = new Engineer(
			"01",
			"Sage",
			"email@email.com",
			"ianbrinkerhoff09"
		);
		expect(employee.github).toBe(github);
	});
});

describe("getGithub", () => {
	it("returns github from getGithub function", () => {
		const github = "ianbrinkehroff09";
		const employee = new Engineer(
			"01",
			"Sage",
			"email@email.com",
			"ianbrinkehroff09"
		);
		expect(employee.getGitHub()).toBe(github);
	});
});

describe("getRole", () => {
	it("returns role from getRole function", () => {
		const role = "Engineer";
		const employee = new Engineer(
			"01",
			"Sage",
			"email@email.com",
			"ianbrinkehroff09"
		);
		expect(employee.getRole()).toBe(role);
	});
});
