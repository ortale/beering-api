import { BeerRepository } from "../repositories/beer.repo";
import { NextFunction, Request, Response } from "express";

export class BeersController {
	private beerRepository: BeerRepository;

	constructor() {
		this.initRepositories();
	}

	private initRepositories() {
		this.beerRepository = new BeerRepository();
	}

	public async getById(request: Request, response: Response) {
		const reqUser = request.params.id as unknown as number;

		const result = await this.beerRepository.getById(reqUser);

		if (!result) {
			response.status(404).send("Beer not found");
		} else {
			response.json(result);
		}
	}

	public async getAll(request: Request, response: Response) {
		const result = await this.beerRepository.getAll();

		if (!result) {
			response.status(404).send("No beers registered yet");
		} else {
			response.json(result);
		}
	}
}