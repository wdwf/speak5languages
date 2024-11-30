import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Languages, Level, StatusClass, TypeTeam, TypeUser } from "./Enums";
import { RegistrationEntity } from "./RegistrationEntity";
import { UserEntity } from "./UserEntity";

@Entity("classes")
export class ClassEntity {
	@PrimaryColumn({
		type: "uuid",
	})
	id: string;

	@Column({
		type: "enum",
		enum: Level,
		default: Level.BASIC,
	})
	level: Level;

	@Column({
		type: "enum",
		enum: Languages,
		default: Languages.ENGLISH,
	})
	language: Languages;

	@Column({
		type: "enum",
		enum: TypeTeam,
		default: TypeTeam.GRAMMAR,
	})
	type: TypeTeam;

	@Column({
		type: "date",
	})
	date: Date;

	@Column({
		type: "time",
	})
	hour: Date;

	@Column({
		type: "varchar",
	})
	linkMeet: string;

	@Column({
		type: "int",
	})
	maxStudents: number;

	@Column({
		type: "enum",
		enum: StatusClass,
		default: StatusClass.OPEN,
	})
	status: StatusClass;

	@ManyToOne(
		() => UserEntity,
		(userEntity) => userEntity.classes,
	)
	@JoinColumn({ name: "teacherId" })
	teacher: UserEntity;

	@ManyToOne(
		() => RegistrationEntity,
		(registrationEntity) => registrationEntity.classes,
	)
	@JoinColumn({ name: "registrationId" })
	registrations: RegistrationEntity;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
