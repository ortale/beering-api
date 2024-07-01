import { NextFunction, Request, Response } from "express";
import express = require("express");
import { BeersController } from "../controllers/beers.controller";

export class Routes {
	public static create(app: any) {
		app.use(async (request: Request, response: Response, next: NextFunction) => {
			response.header("Access-Control-Allow-Origin", "*");
			response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			next();
		});

		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());

		app.get("/api/v1/beer/:id", (request: Request, response: Response) => {
			new BeersController().getById(request, response);
		});

		app.get("/api/v1/beer", (request: Request, response: Response) => {
			new BeersController().getAll(request, response);
		});

		return app;
	}
}
