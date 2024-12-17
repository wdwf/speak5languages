import type { Languages, Level, TypeTeam } from "./Enums";
import type User from "./User";

export default class Team {
	public id: string;
	public level: Level;
	public language: Languages;
	public type: TypeTeam;
	public date: Date;
	public hour: Date;
	public linkMeet: string;
	public teacher: User;

	constructor(
		id: string,
		level: Level,
		language: Languages,
		type: TypeTeam,
		date: Date,
		hour: Date,
		linkMeet: string,
		teacher: User,
	) {
		this.id = id;
		this.level = level;
		this.language = language;
		this.type = type;
		this.date = date;
		this.hour = hour;
		this.linkMeet = linkMeet;
		this.teacher = teacher;
	}
}
