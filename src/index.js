// what you could do in FE:
// let array = ['mercury', 'venus'];
// newArray = [];
// array.forEach((planet) => {
//   newArray.push(GetAgeOnPlanet(planet));
  
// })
// return newArray;

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
    let age = this.GetEarthAge();
    let yearsLeft = 71.5 - age;
    if(age > 71.5) {
      let yearsOver = age -71.5;
      return yearsOver;
    }
    return yearsLeft;
  }

  GetPlanetCoefficient(planet) {
    const planetData = {
      "mercury": .24,
      "venus": .78
    }
    return planetData[planet];
  }

  GetAgeOnPlanet(planet) {
    let age = this.GetEarthAge();
    let ageOnPlanet = Math.floor(age / GetPlanetCoefficient(planet));
    return ageOnPlanet;
  }

  // GetMercuryAge() {
  //   let age = this.GetEarthAge();
  //   let mercuryAge = Math.floor(age / .24);
  //   return mercuryAge;
  // }

  GetLifeMercury() {
    let age = this.GetMercuryAge();
    let yearsLeft = 298 - age;
    if(age > 298) {
      let yearsOver = age -298;
      return yearsOver;
    }
    return yearsLeft;
  }

  // GetVenusAge() {
  //   let age = this.GetEarthAge();
  //   let venusAge = Math.floor(age / .62);
  //   return venusAge;
  // }

  GetLifeVenus() {
    let age = this.GetVenusAge();
    let yearsLeft = 115 - age;
    if(age > 115) {
      let yearsOver = age -115;
      return yearsOver;
    }
    return yearsLeft;
  }

  // GetMarsAge() {
  //   let age = this.GetEarthAge();
  //   let marsAge = Math.floor(age / 1.88);
  //   return marsAge;
  // }

  GetLifeMars() {
    let age = this.GetMarsAge();
    let yearsLeft = 38 - age;
    if(age > 38) {
      let yearsOver = age -38;
      return yearsOver;
    }
    return yearsLeft;
  }

  // GetJupiterAge() {
  //   let age = this.GetEarthAge();
  //   let jupiterAge = Math.floor(age / 11.86);
  //   return jupiterAge;
  // }

  GetLifeJupiter() {
    let age = this.GetJupiterAge();
    let yearsLeft = 6 - age;
    if(age > 6) {
      let yearsOver = age - 6;
      return yearsOver;
    }
    return yearsLeft;
  }
}

module.exports = {
  Galactic:Galactic
}
