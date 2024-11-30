import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { ClassEntity } from "./ClassEntity";
import { StudentProfileEntity } from "./StudentProfileEntity";

@Entity("registrations")
export class RegistrationEntity {
	@PrimaryColumn({
		type: "uuid",
	})
	id: string;

	@OneToMany(
		() => StudentProfileEntity,
		(studentProfileEntity) => studentProfileEntity.registrations,
	)
	studentProfiles: StudentProfileEntity;

	@OneToMany(
		() => ClassEntity,
		(classEntity) => classEntity.registrations,
	)
	classes: ClassEntity;

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
