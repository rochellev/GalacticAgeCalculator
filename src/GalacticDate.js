export class GalacticDate extends Date {
  
  constructor(year, month, day, age, planet) {
    super();
    // const EarthMax = 88;
   
    this.setFullYear(year);
    this.setMonth(month);
    this.setDate(day);
    this.age = age;
    this.planet = planet;
    this.planetAge = 0;
    this.remainPlanetYears = 0;
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
    const  MercuryMax = 21.12;
    const VenusMax = 54.56;
    const MarsMax = 165.44;
    const JupiterMax = 1043.68;
    if(this.planet == "Mercury"){
      this.planetAge = this.getMercuryAge();
      this.remainPlanetYears = this.planetAge - MercuryMax;
      return;
    }else if(this.planet == "Venus"){
      this.planetAge = this.getVenusAge();
      this.remainPlanetYears = this.planetAge - VenusMax;
      return;
    }else if(this.planet == "Mars"){
       this.planetAge = this.getMarsAge();
       this.remainPlanetYears = this.planetAge - MarsMax;
      return;
    }else if(this.planet == "Jupiter"){
      this.planetAge = this.getJupiterAge();
      this.remainPlanetYears = this.planetAge - JupiterMax;
      return;
    }else{
      return;
    }

  }

  

}






