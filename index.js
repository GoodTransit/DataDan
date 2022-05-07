var exec = require('child-process-promise').exec;

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let today = year + "-" + month + "-" + date

console.log(`• Making "${today}" in "/data" Directory`)
exec(`mkdir ${__dirname}/data/${today}`)
	.then(function(result) {
		var stdout = result.stdout;
		var stderr = result.stderr;
		console.log(stdout);
		console.log(stderr);
		exec(`mkdir ${__dirname}/data/${today}/mbta`)

	})
	.catch(function(err) {
		console.log('---------------------------------------------------------');
		console.error('ERROR: ', err);
		console.log('---------------------------------------------------------');
	});

console.log(`• Installing node-gtfs through NPM`)
console.info(`	npm install gtfs gtfs-realtime-bindings -g`)
exec(`npm install -g gtfs gtfs-realtime-bindings`)
	.then(function(result) {
		var stdout = result.stdout;
		var stderr = result.stderr;
		console.log(stdout);
		console.log(stderr);
		console.log(`• Importing GTFS data for MBTA in Massachusetts`)
		exec(`gtfs-import --configPath ${__dirname}/config/ma/mbta.json`)
			.then(function(result) {
				var stdout = result.stdout;
				var stderr = result.stderr;
				console.log(stdout);
				console.log(stderr);
				console.log(`• Formatting GTFS data for MBTA in Massachusetts`)
				exec(`node config/ma/mbta.js`)
					.then(function(result) {
						var stdout = result.stdout;
						var stderr = result.stderr;
						console.log(stdout);
						console.log(stderr);
					})
					.catch(function(err) {
						console.log('---------------------------------------------------------');
						console.error('ERROR: ', err);
						console.log('---------------------------------------------------------');
					});
			})
			.catch(function(err) {
				console.log('---------------------------------------------------------');
				console.error('ERROR: ', err);
				console.log('---------------------------------------------------------');
				console.log(`• Formatting GTFS data for MBTA in Massachusetts`)
				exec(`node config/ma/mbta.js`)
					.then(function(result) {
						var stdout = result.stdout;
						var stderr = result.stderr;
						console.log(stdout);
						console.log(stderr);
					})
					.catch(function(err) {
						console.log('---------------------------------------------------------');
						console.error('ERROR: ', err);
						console.log('---------------------------------------------------------');
					});
			});

	})
	.catch(function(err) {
		console.log('---------------------------------------------------------');
		console.error('ERROR: ', err);
		console.log('---------------------------------------------------------');
		console.log(`• Importing GTFS data for MBTA in Massachusetts`)
		exec(`gtfs-import --configPath ${__dirname}/config/ma/mbta.json`)
			.then(function(result) {
				var stdout = result.stdout;
				var stderr = result.stderr;
				console.log(stdout);
				console.log(stderr);
				console.log(`• Formatting GTFS data for MBTA in Massachusetts`)
				exec(`node config/ma/mbta.js`)
					.then(function(result) {
						var stdout = result.stdout;
						var stderr = result.stderr;
						console.log(stdout);
						console.log(stderr);
					})
					.catch(function(err) {
						console.log('---------------------------------------------------------');
						console.error('ERROR: ', err);
						console.log('---------------------------------------------------------');
					});
			})
			.catch(function(err) {
				console.log('---------------------------------------------------------');
				console.error('ERROR: ', err);
				console.log('---------------------------------------------------------');
				console.log(`• Formatting GTFS data for MBTA in Massachusetts`)
				exec(`node config/ma/mbta.js`)
					.then(function(result) {
						var stdout = result.stdout;
						var stderr = result.stderr;
						console.log(stdout);
						console.log(stderr);
					})
					.catch(function(err) {
						console.log('---------------------------------------------------------');
						console.error('ERROR: ', err);
						console.log('---------------------------------------------------------');
					});
			});

	});
