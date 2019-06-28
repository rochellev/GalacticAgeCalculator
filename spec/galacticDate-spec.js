// test suite for Galactic Date

// Date(year month day age)
import { GalacticDate } from './../src/GalacticDate.js';

describe('GalacticDate', function() {
    let mydate = new GalacticDate(2016, 5, 24, 50, "Mars");
  it('should test whether constructor works', function() {
    expect(mydate.getFullYear()).toEqual(2016);
    expect(mydate.getMonth()).toEqual(5);
    expect(mydate.getDate()).toEqual(24);
  });

  it('should test whether helper functions in GalacticDate calculate ages correctly', function(){
    expect(mydate.getMercuryAge()).toEqual(12);
    expect(mydate.getVenusAge()).toEqual(31); 
    expect(mydate.getMarsAge()).toEqual(94);
    expect(mydate.getJupiterAge()).toEqual(593);


  });

  it('should test whether call the right age function', function(){
    expect(mydate.calculateGalacticAge()).toEqual(94);

  });




});