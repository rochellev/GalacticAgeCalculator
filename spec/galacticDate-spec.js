// test suite for Galactic Date

// Date(year month day age)
import { GalacticDate } from './../src/GalacticDate.js';

describe('GalacticDate', function () {
    let mydate = new GalacticDate(2016, 5, 24, 50, "Mars");
    let mars = new GalacticDate(1993, 8, 17, 25, "Mars");
    let venus = new GalacticDate(1993, 8, 17, 25, "Venus");
    let mercury = new GalacticDate(1993, 8, 17, 25, "Mercury");
    let jupiter = new GalacticDate(1993, 8, 17, 25, "Jupiter");

    it('should test whether constructor works', function () {
        expect(mydate.getFullYear()).toEqual(2016);
        expect(mydate.getMonth()).toEqual(5);
        expect(mydate.getDate()).toEqual(24);
    });

    it('should test whether helper functions in GalacticDate calculate ages correctly', function () {
        expect(mydate.getMercuryAge()).toEqual(12);
        expect(mydate.getVenusAge()).toEqual(31);
        expect(mydate.getMarsAge()).toEqual(94);
        expect(mydate.getJupiterAge()).toEqual(593);
    });

    it('should test whether calculate galactic age branches to mars', function () {
        expect(mars.calculateGalacticAge()).toEqual(47);
    });

    it('should test whether calculate galacric age branches to venus', function () {
        expect(venus.calculateGalacticAge()).toEqual(15.5);
    });

    it('should test whether calculate galacric age branches to mercury', function () {

        expect(mercury.calculateGalacticAge()).toEqual(6);
    });

    it('should test whether calculate galacric age branches to jupiter', function () {
        expect(jupiter.calculateGalacticAge()).toEqual(296.5);
    });




});