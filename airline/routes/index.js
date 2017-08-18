/* 
 * GET home page
 */

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
		res.json({status: 'done'});
	}
};

exports.list = function (req, res) {
	res.render('list', {title: 'All Flights', flights: flights});
};

