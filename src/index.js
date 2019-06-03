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

  GetLifeEarth() {
    let yearsLeft = 71.5 - this.GetEarthAge();
    return yearsLeft;
  }

  GetMercuryAge() {
    let age = this.GetEarthAge();
    let mercuryAge = Math.floor(age / .24);
    return mercuryAge;
  }

  GetLifeMercury() {
    let yearsLeft = 298 - this.GetMercuryAge();
    return yearsLeft;
  }

  GetVenusAge() {
    let age = this.GetEarthAge();
    let venusAge = Math.floor(age / .62);
    return venusAge;
  }

  GetLifeVenus() {
    let yearsLeft = 115 - this.GetVenusAge();
    return yearsLeft;
  }

  GetMarsAge() {
    let age = this.GetEarthAge();
    let marsAge = Math.floor(age / 1.88);
    return marsAge;
  }

  GetLifeMars() {
    let yearsLeft = 38 - this.GetMarsAge();
    return yearsLeft;
  }

  GetJupiterAge() {
    let age = this.GetEarthAge();
    let jupiterAge = Math.floor(age / 11.86);
    return jupiterAge;
  }

  GetLifeJupiter() {
    let yearsLeft = 6 - this.GetJupiterAge();
    return yearsLeft;
  }
}

module.exports = {
  Galactic:Galactic
}
