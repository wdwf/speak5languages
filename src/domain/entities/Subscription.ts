import type Team from "./Team";
import type User from "./User";

export default class Subscription {
	public id: string;
	public student: User;
	public team: Team;

	constructor(id: string, student: User, team: Team) {
		this.id = id;
		this.student = student;
		this.team = team;
	}
}
