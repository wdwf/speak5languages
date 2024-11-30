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
import { Category, SituationStudent } from "./Enums";
import { RegistrationEntity } from "./RegistrationEntity";
import { SignatureEntity } from "./SignatureEntity";
import { UserEntity } from "./UserEntity";

@Entity("studentProfiles")
export class StudentProfileEntity {
	@PrimaryColumn({
		type: "uuid",
	})
	id: string;

	@Column({
		type: "int",
	})
	level: number;

	@Column({
		type: "enum",
		enum: SituationStudent,
		default: SituationStudent.LOCKED,
	})
	situationVacant: SituationStudent;

	@Column({
		type: "enum",
		enum: Category,
		default: Category.BASIC,
	})
	category: Category;

	@OneToOne(
		() => UserEntity,
		(userEntity) => userEntity.studentProfile,
	)
	@JoinColumn({ name: "studentId" })
	student: UserEntity;

	@ManyToOne(
		() => RegistrationEntity,
		(registrationEntity) => registrationEntity.studentProfiles,
	)
	@JoinColumn({ name: "registrationId" })
	registrations: RegistrationEntity;

	@OneToOne(
		() => SignatureEntity,
		(signatureEntity) => signatureEntity.studentProfile,
	)
	@JoinColumn({ name: "signatureId" })
	signature: SignatureEntity;

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
