var exec = require('child-process-promise').exec;

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let today = year + "-" + month + "-" + date

console.log(`• Making "${today}" in "/data" Directory`)
exec(`mkdir ${__dirname}/data/${today}`, {maxBuffer: 1024 * 2000})
	.then(function(result) {
		var stdout = result.stdout;
		var stderr = result.stderr;
		console.log(stdout);
		console.log(stderr);
		exec(`mkdir ${__dirname}/data/${today}/mbta`, {maxBuffer: 1024 * 2000})
		exec(`mkdir ${__dirname}/data/${today}/mbta/routes`, {maxBuffer: 1024 * 2000})
		exec(`mkdir ${__dirname}/data/${today}/mta`, {maxBuffer: 1024 * 2000})
		exec(`mkdir ${__dirname}/data/${today}/mta/routes`, {maxBuffer: 1024 * 2000})

	})
	.catch(function(err) {
		console.log('---------------------------------------------------------');
		console.error('ERROR: ', err);
		console.log('---------------------------------------------------------');
	});

console.log(`• Importing GTFS data for MBTA in Massachusetts`)
exec(`gtfs-import --configPath ${__dirname}/config/ma/mbta.json`, {maxBuffer: 1024 * 2000})
	.then(function(result) {
		var stdout = result.stdout;
		var stderr = result.stderr;
		//console.log(stdout);
		//console.log(stderr);
		console.log(`• Formatting GTFS data for MBTA in Massachusetts`)
		exec(`node config/ma/mbta.js`, {maxBuffer: 1024 * 2000})
	})
	.catch(function(err) {
		console.log('---------------------------------------------------------');
		console.error('ERROR: ', err);
		console.log('---------------------------------------------------------');
		console.log(`• Formatting GTFS data for MBTA in Massachusetts`)
		exec(`node config/ma/mbta.js`, {maxBuffer: 1024 * 2000})
	});

console.log(`• Importing GTFS data for MTA in New York`)
exec(`gtfs-import --configPath ${__dirname}/config/ny/mta.json`, {maxBuffer: 1024 * 2000})
	.then(function(result) {
		var stdout = result.stdout;
		var stderr = result.stderr;
		//console.log(stdout);
		//console.log(stderr);
		console.log(`• Formatting GTFS data for MTA in New York`)
		exec(`node config/ny/mta.js`, {maxBuffer: 1024 * 2000})
	})
	.catch(function(err) {
		console.log('---------------------------------------------------------');
		console.error('ERROR: ', err);
		console.log('---------------------------------------------------------');
		console.log(`• Formatting GTFS data for MTA in New York`)
		exec(`node config/ny/mta.js`, {maxBuffer: 1024 * 2000})
	});
