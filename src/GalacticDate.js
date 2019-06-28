export class GalacticDate extends Date{
  constructor(year, month, day){
    super();
    this.setFullYear(year);
    this.setMonth(month);
    this.setDate(day);
  }

  getWeekday(){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let num = days[this.getDay()];

    return num;
  }
}