// test suite for Galactic Date

// Date(year month day age)
import { GalacticDate } from './../src/GalacticDate.js';

describe('GalacticDate', function () {
    let mydate = new GalacticDate(2016, 5, 24, 50, "Mars");
    let mars = new GalacticDate(1993, 8, 17, 25, "Mars");
    mars.calculateGalacticAge();
    let venus = new GalacticDate(1993, 8, 17, 25, "Venus");
    venus.calculateGalacticAge();
    let mercury = new GalacticDate(1993, 8, 17, 25, "Mercury");
    mercury.calculateGalacticAge();
    let jupiter = new GalacticDate(1993, 8, 17, 25, "Jupiter");
    jupiter.calculateGalacticAge();

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
        expect(mars.planetAge).toEqual(47);
    });
    it('should test whether years left for mars returns correct number', function () {
        expect(mars.remainPlanetYears).toEqual(119);
    });
    it('should test whether calculate galactic age branches to venus', function () {
        expect(venus.planetAge).toEqual(15.5);
    });
    it('should test whether years left for venus returns correct number', function () {
        expect(venus.remainPlanetYears).toEqual(40);
    });
    it('should test whether calculate galactic age branches to mercury', function () {
        expect(mercury.planetAge).toEqual(6);
    });
    it('should test whether years left for mercury returns correct number', function () {
        expect(mercury.remainPlanetYears).toEqual(16);
    });
    it('should test whether calculate galactic age branches to jupiter', function () {
        expect(jupiter.planetAge).toEqual(296.5);
    });
    it('should test whether years left for jupiter returns correct number', function () {
        expect(jupiter.remainPlanetYears).toEqual(748);
    });
});