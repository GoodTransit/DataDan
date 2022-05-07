import GtfsRealtimeBindings from 'gtfs-realtime-bindings';
import { openDb, getRoutes, getShapes, getStops, getDirections, getTrips, getPathways } from 'gtfs';
import path from 'path';
import { readFile, writeFile } from 'fs/promises';

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let today = year + "-" + month + "-" + date

const config = JSON.parse(
  await readFile(new URL('./mta.json', import.meta.url))
);

const db = await openDb(config);
const routes = await getRoutes();
const shapes = await getShapes();
const stops = await getStops();
const directions = await getDirections();
const trips = await getTrips();
const pathways = await getPathways();

writeFile(`./data/${today}/mta/raw_routes.json`, JSON.stringify(routes))
writeFile(`./data/${today}/mta/raw_stops.json`, JSON.stringify(stops))
writeFile(`./data/${today}/mta/raw_trips.json`, JSON.stringify(trips))

console.log('• Done exporting MTA GTFS data')
