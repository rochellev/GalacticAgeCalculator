export class GalacticDate extends Date {
  constructor(year, month, day, age, planet) {
    super();
    this.setFullYear(year);
    this.setMonth(month);
    this.setDate(day);
    this.age = age;
    this.planet = planet;
  }

  getWeekday() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let num = days[this.getDay()];

    return num;
  }

  // Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
  getMercuryAge() {
    return this.age * .24;
  }

  // Returns their age in Venus years. (A Venus year is .62 Earth years.)
  getVenusAge() {
    return this.age * .62;
  }

  // Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
  getMarsAge() {
    return this.age * 1.88;
  }

  // Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  getJupiterAge() {
    return this.age * 11.86;
  }

  calculateGalacticAge(){
    debugger;
    if(this.planet == "Mercury"){
      return this.getMercuryAge();
    }else if(this.planet == "Venus"){
      return this.getVenusAge();
    }else if(this.planet == "Mars"){
      return this.getMarsAge();
    }else if(this.planet == "Jupiter"){
      return this.getJupiterAge();
    }else{
      return false;
    }

  }

}






