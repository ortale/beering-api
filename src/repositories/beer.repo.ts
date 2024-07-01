import { Beer } from "../models/beer.model";
import { appDataSource } from "../data-source";

export class BeerRepository {
	public async getById(id: number) {
		return await appDataSource.getRepository(Beer).findOne({
			where: { id: id }
		});
	}

	public async getAll() {
		return await appDataSource.getRepository(Beer).find();
	}
}