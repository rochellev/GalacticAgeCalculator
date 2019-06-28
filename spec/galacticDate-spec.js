// test suite for Galactic Date

// Date(year month day)
import { GalacticDate } from './../src/GalacticDate.js';

describe('GalacticDate', function() {

  it('should test whether constructor works', function() {
    let mydate = new GalacticDate(2016, 5, 24);
    expect(mydate.getFullYear()).toEqual(2016);
    expect(mydate.getMonth()).toEqual(5);
    expect(mydate.getDate()).toEqual(24);
  });



});