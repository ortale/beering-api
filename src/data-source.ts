import "reflect-metadata"
import { DataSource } from "typeorm"
import { Beer } from "./models/beer.model";
;
require('dotenv').config();

export const appDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: 3306,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [Beer],
	migrations: [],
	subscribers: [],
})

appDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!")
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err)
	})
