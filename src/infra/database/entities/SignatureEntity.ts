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
import { Category, SituationStudent, StatusSignature } from "./Enums";
import { RegistrationEntity } from "./RegistrationEntity";
import { StudentProfileEntity } from "./StudentProfileEntity";
import { UserEntity } from "./UserEntity";

@Entity("signatures")
export class SignatureEntity {
	@PrimaryColumn({
		type: "uuid",
	})
	id: string;

	@Column({
		type: "date",
	})
	startDate: Date;

	@Column({
		type: "date",
	})
	endDate: Date;

	@Column({
		type: "enum",
		enum: StatusSignature,
		default: StatusSignature.ACTIVE,
	})
	status: StatusSignature;

	@OneToOne(
		() => StudentProfileEntity,
		(studentProfileEntity) => studentProfileEntity.signature,
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
