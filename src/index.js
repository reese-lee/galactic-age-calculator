class Galactic {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }

  GetEarthAge() {
    let currentDate = new Date();
    let currentYear = currentDate.getUTCFullYear();
    let age = currentYear - (this.birthday.getUTCFullYear());
    return age;
  }

  GetMercuryAge() {
    let age = this.GetEarthAge();
    let mercuryAge = Math.floor(age / .24);
    return mercuryAge;
  }

  GetVenusAge() {
    let age = this.GetEarthAge();
    let venusAge = Math.floor(age / .62);
    return venusAge;
  }

  // getMarsAge() {
  //   let marsAge = Math.floor(age / 1.88);
  // }
  //
  // getJupiterAge() {
  //   let jupiterAge = Math.floor(age / 11.86);
  // }



}
module.exports = {
  Galactic:Galactic
}
