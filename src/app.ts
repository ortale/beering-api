import dotenv from "dotenv";
import express from "express";
import { Routes } from "./routes";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

// Configure routes
Routes.create(app);

app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${port}`);
});
