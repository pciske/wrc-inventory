import app from "electron";
import sqlite3 from "sqlite3";

export default class Db {

	constructor(_app) {
		this.defaults = {
			databaseName: "inventory.db",
			databasePath: _app.getPath("userData")
		};

		this.db = "";
	}

	openConnection() {
		this.db = new sqlite3.Database( this.getDatabasePath(), (_error) => {
			if (_error) {
				return console.error(_error.message);
			}
		});
	}

	getDb() {
		return this.db;
	}

	closeConnection() {
		this.db.close( (_error) => {
			if (_error) {
				return console.error(_error.message);
			}
		});
	}

	getDatabasePath() {
		return `${this.defaults.databasePath}/${this.defaults.databaseName}`;
	}

}