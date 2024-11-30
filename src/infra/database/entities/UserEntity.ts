import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	OneToMany,
	OneToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { ClassEntity } from "./ClassEntity";
import { TypeUser } from "./Enums";
import { StudentProfileEntity } from "./StudentProfileEntity";

@Entity("users")
export class UserEntity {
	@PrimaryColumn({
		type: "uuid",
	})
	id: string;

	@Column({
		type: "varchar",
	})
	name: string;

	@Column({
		type: "varchar",
		unique: true,
	})
	email: string;

	@Column({
		type: "varchar",
	})
	phone: string;

	@Column({
		type: "varchar",
	})
	password: string;

	@Column({
		type: "enum",
		enum: TypeUser,
		default: TypeUser.STUDENT,
	})
	type: TypeUser;

	@OneToMany(
		() => ClassEntity,
		(classEntity) => classEntity.teacher,
	)
	classes: ClassEntity[];

	@OneToOne(
		() => StudentProfileEntity,
		(studentProfileEntity) => studentProfileEntity.student,
		{ cascade: true },
	)
	studentProfile: StudentProfileEntity;

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
