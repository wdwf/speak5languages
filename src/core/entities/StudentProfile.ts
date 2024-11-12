import type { Level, SituationStudent } from "./Enums";
import type User from "./User";

export default class StudentProfile {
	public id: string;
	public level: Level;
	public situation: SituationStudent;
	public user: User;

	constructor(
		id: string,
		level: Level,
		situation: SituationStudent,
		user: User,
	) {
		if (!user.isStudent()) {
			throw new Error("O perfil não se enquadra como estudante.");
		}

		this.id = id;
		this.level = level;
		this.situation = situation;
		this.user = user;
	}

	// Método para atualizar o nível do estudante
	public levelUpdate(newLevel: Level) {
		this.level = newLevel;
	}

	// Método para atualizar a situação da vaga do estudante
	public SituationUpdate(newSituation: SituationStudent) {
		this.situation = newSituation;
	}
}
