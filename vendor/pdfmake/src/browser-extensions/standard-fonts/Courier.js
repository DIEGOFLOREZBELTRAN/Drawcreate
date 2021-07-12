var fs = require('fs');

var fontContainer = {
	vfs: {
		'data/Courier.afm': { data: fs.readFileSync(__dirname + '/../../../node_modules/pdfkit/js/data/Courier.afm', 'utf8'), encoding: 'utf8' },
		'data/Courier-Bold.afm': { data: fs.readFileSync(__dirname + '/../../../node_modules/pdfkit/js/data/Courier-Bold.afm', 'utf8'), encoding: 'utf8' },
		'data/Courier-Oblique.afm': { data: fs.readFileSync(__dirname + '/../../../node_modules/pdfkit/js/data/Courier-Oblique.afm', 'utf8'), encoding: 'utf8' },
		'data/Courier-BoldOblique.afm': { data: fs.readFileSync(__dirname + '/../../../node_modules/pdfkit/js/data/Courier-BoldOblique.afm', 'utf8'), encoding: 'utf8' }
	},
	fonts: {
		Courier: {
			normal: 'Courier',
			bold: 'Courier-Bold',
			italics: 'Courier-Oblique',
			bolditalics: 'Courier-BoldOblique'
		}
	}
};

if (typeof this.pdfMake !== 'undefined' && typeof this.pdfMake.addFontContainer !== 'undefined') {
	this.pdfMake.addFontContainer(fontContainer);
}

if (typeof module !== 'undefined') {
	module.exports = fontContainer;
}
