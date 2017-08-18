/* 
 * GET home page
 */

var FlightSchema = require('../../Schemas/flight');
var flights = require('../data');
var flight = require('../flight');

for (var number in flight) {
	flight[number] = flight(flights[number]);
}

exports.flight = function (req, res) {
	var number = req.param('number');
	if (typeof flights[number] === undefined) {
		req.status(404).json({status: 'error'});
	}
	else {
		res.json(flights[number].getInformaiton());
	}
};

exports.arrived = function (req, res) {
	var number = req.param('number');
	if (typeof flights[number] === undefined) {
		req.status(404).json({status: 'error'});
	}
	else {
		flights[number].triggerArrive();
		
		var record = new FlightSchema(flights[number].getInformaiton());
		record.save(function (err) {
			if (err) {
				console.log(err);
				res.status(500).json({status: 'failure'});
			}
			else {
				res.json({status: 'success'});
			}
		});
		
		
		
		res.json({status: 'done'});
	}
};

exports.list = function (req, res) {
	res.render('list', {title: 'All Flights', flights: flights});
};

