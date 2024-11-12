import type { StatusSignature } from "./Enums";

export default class Signature {
	public id: string;
	public startDate: Date;
	public endDate: Date;
	public status: StatusSignature;

	constructor(
		id: string,
		startDate: Date,
		endDate: Date,
		status: StatusSignature,
	) {
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
	}
}
