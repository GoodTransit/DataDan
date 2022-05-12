import GtfsRealtimeBindings from 'gtfs-realtime-bindings';
import {
	openDb,
	getRoutes,
	getShapes,
	getStops,
	getStoptimes,
	getDirections,
	getTrips,
	getPathways,
	getCalendars,
	getCalendarDates,
	getTransfers,
	getLevels,
	getFrequencies,
	getFareAttributes,
	getFareRules,
	getFeedInfo,
	getTranslations,
	getStopAttributes,
	getTimetables,
	getTimetableStopOrders,
	getTimetablePages,
	getTimetableNotes,
	getTimetableNotesReferences
} from 'gtfs';
import path from 'path';
import {
	readFile,
	writeFile
} from 'fs/promises';

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let today = year + "-" + month + "-" + date

const config = JSON.parse(
	await readFile(new URL('./mta.json',
		import.meta.url))
);

const db = await openDb(config);
const routes = await getRoutes();
const shapes = await getShapes();
const stops = await getStops();
const stop_times = await getStoptimes();
const directions = await getDirections();
const trips = await getTrips();
const pathways = await getPathways();
const calendar_dates = await getCalendarDates();
const calendars = await getCalendars();
const transfers = await getTransfers();
const levels = await getLevels();
const frequencies = await getFrequencies();
const fare_attributes = await getFareAttributes();
const fare_rules = await getFareRules();
const feed_info = await getFeedInfo();
const translations = await getTranslations();
const stop_attributes = await getStopAttributes();
const time_tables = await getTimetables();
const time_table_stop_orders = await getTimetableStopOrders();
const time_table_pages = await getTimetablePages();
const time_table_notes = await getTimetableNotes();
const time_table_notes_references = await getTimetableNotesReferences();

writeFile(`./data/${today}/mta/routes.json`, JSON.stringify(routes))
writeFile(`./data/${today}/mta/stops.json`, JSON.stringify(stops))
writeFile(`./data/${today}/mta/stop_times.json`, JSON.stringify(stop_times))
writeFile(`./data/${today}/mta/trips.json`, JSON.stringify(trips))
writeFile(`./data/${today}/mta/shapes.json`, JSON.stringify(shapes))
writeFile(`./data/${today}/mta/directions.json`, JSON.stringify(directions))
writeFile(`./data/${today}/mta/pathways.json`, JSON.stringify(pathways))
writeFile(`./data/${today}/mta/calendar_dates.json`, JSON.stringify(calendar_dates))
writeFile(`./data/${today}/mta/calendars.json`, JSON.stringify(calendars))
writeFile(`./data/${today}/mta/transfers.json`, JSON.stringify(transfers))
writeFile(`./data/${today}/mta/frequencies.json`, JSON.stringify(frequencies))
writeFile(`./data/${today}/mta/fare_attributes.json`, JSON.stringify(fare_attributes))
writeFile(`./data/${today}/mta/fare_rules.json`, JSON.stringify(fare_rules))
writeFile(`./data/${today}/mta/feed_info.json`, JSON.stringify(feed_info))
writeFile(`./data/${today}/mta/translations.json`, JSON.stringify(translations))
writeFile(`./data/${today}/mta/stop_attributes.json`, JSON.stringify(stop_attributes))
writeFile(`./data/${today}/mta/time_tables.json`, JSON.stringify(time_tables))
writeFile(`./data/${today}/mta/time_table_stop_orders.json`, JSON.stringify(time_table_stop_orders))
writeFile(`./data/${today}/mta/time_table_pages.json`, JSON.stringify(time_table_pages))
writeFile(`./data/${today}/mta/time_table_notes.json`, JSON.stringify(time_table_notes))
writeFile(`./data/${today}/mta/time_table_notes_references.json`, JSON.stringify(time_table_notes_references))

console.log('• Done exporting MTA GTFS data')
