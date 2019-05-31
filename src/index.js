class Galactic {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }

  getEarthAge() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - (this.birthday.GetFullYear());
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
