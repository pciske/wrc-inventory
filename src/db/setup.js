export const setup = (_db) => {

	_db.openConnection();
	let conn = _db.getDb();
	let tablesExist = hasData(conn);
	console.log(tablesExist);
	_db.closeConnection();

}

const hasData = (_conn) => {
	_conn.get(
		`SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`,
		(_error, _rows) => {
			if (_error) {
				console.error(_error.message);
			}
			rows = _rows;
		}
	);
}