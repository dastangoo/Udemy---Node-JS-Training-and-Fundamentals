var Flight = require('./flight_no_factory');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = new Flight();
pl.fill(pdxlax);

pl.triggerDepart();

console.log(pl.getInformaiton());

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = new Flight();
ad.fill(ausdca);

console.log(ad.getInformaiton());

console.log(pl.getInformaiton());
