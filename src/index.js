class Galactic {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }

  GetEarthAge(date) {
    let currentDate = new Date(date);
    let currentYear = currentDate.getFullYear();
    let age = currentYear - (this.birthday.getFullYear());
    return age;
  }

  // getMercuryAge() {
  //
  // }
  //
  // getVenusAge() {
  //
  // }
  //
  // getMarsAge() {
  //
  // }
  //
  // getJupiterAge() {
  //
  // }



}
module.exports = Galactic;
