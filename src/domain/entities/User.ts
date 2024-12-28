import { v4 as uuid } from "uuid";

export interface IUserProps {
	id: string;
	name: string;
	email: string;
	phone: string;
	password: string;
	type: string;
}

export default class User {
	id: string;
	private constructor(private props: IUserProps) {}

	public static create(
		name: string,
		email: string,
		phone: string,
		password: string,
		type: string,
	) {
		return new User({
			id: uuid(),
			name,
			email,
			phone,
			password,
			type,
		});
	}

	public static with(props: IUserProps) {
		return new User(props);
	}

	public get name() {
		return this.props.name;
	}

	public get email() {
		return this.props.email;
	}

	public get phone() {
		return this.props.phone;
	}

	public get type() {
		return this.props.type;
	}
}
