import GtfsRealtimeBindings from 'gtfs-realtime-bindings';
import {
	openDb,
	getRoutes,
	getShapes,
	getStops,
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
	await readFile(new URL('./mbta.json',
		import.meta.url))
);

const db = await openDb(config);
const routes = await getRoutes();
const shapes = await getShapes();
const stops = await getStops();
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

writeFile(`./data/${today}/mbta/routes.json`, JSON.stringify(routes))
writeFile(`./data/${today}/mbta/stops.json`, JSON.stringify(stops))
writeFile(`./data/${today}/mbta/trips.json`, JSON.stringify(trips))
writeFile(`./data/${today}/mbta/shapes.json`, JSON.stringify(shapes))
writeFile(`./data/${today}/mbta/directions.json`, JSON.stringify(directions))
writeFile(`./data/${today}/mbta/pathways.json`, JSON.stringify(pathways))
writeFile(`./data/${today}/mbta/calendar_dates.json`, JSON.stringify(calendar_dates))
writeFile(`./data/${today}/mbta/calendars.json`, JSON.stringify(calendars))
writeFile(`./data/${today}/mbta/transfers.json`, JSON.stringify(transfers))
writeFile(`./data/${today}/mbta/frequencies.json`, JSON.stringify(frequencies))
writeFile(`./data/${today}/mbta/fare_attributes.json`, JSON.stringify(fare_attributes))
writeFile(`./data/${today}/mbta/fare_rules.json`, JSON.stringify(fare_rules))
writeFile(`./data/${today}/mbta/feed_info.json`, JSON.stringify(feed_info))
writeFile(`./data/${today}/mbta/translations.json`, JSON.stringify(translations))
writeFile(`./data/${today}/mbta/stop_attributes.json`, JSON.stringify(stop_attributes))
writeFile(`./data/${today}/mbta/time_tables.json`, JSON.stringify(time_tables))
writeFile(`./data/${today}/mbta/time_table_stop_orders.json`, JSON.stringify(time_table_stop_orders))
writeFile(`./data/${today}/mbta/time_table_pages.json`, JSON.stringify(time_table_pages))
writeFile(`./data/${today}/mbta/time_table_notes.json`, JSON.stringify(time_table_notes))
writeFile(`./data/${today}/mbta/time_table_notes_references.json`, JSON.stringify(time_table_notes_references))

console.log('• Done exporting MBTA GTFS data')
