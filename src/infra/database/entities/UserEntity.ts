import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { TypeUser } from "./Enums";

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
