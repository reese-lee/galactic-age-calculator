import { Galactic } from './../src/index.js';

describe('Galactic', function() {

  it('should test whether a birthday creates an instance of the Date object', function() {
    let test = new Date("06, 05, 1992");
    expect(test.getDay()).toEqual(5);
  });

  it('should test whether a Galactic object is created', function() {
    const dob = new Galactic(new Date(1992, 5, 2));
    expect(typeof dob).toEqual(typeof new Galactic);
  });

  it('should test whether it will return correct Earth age', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let testAge = test.GetEarthAge(testBirthday);
    expect(testAge).toEqual(27);
  });

  it('should test whether it will return correct years left on Earth', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let yearsLeft = test.GetLifeEarth();
    expect(yearsLeft).toEqual(44.5);
  });

  it('should test whether it will return age in Mercury years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let mercuryAge = test.GetMercuryAge(testBirthday);
    expect(mercuryAge).toEqual(112);
  });

  it('should test whether it will return correct years left on Mercury', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let yearsLeft = test.GetLifeMercury();
    expect(yearsLeft).toEqual(186);
  });

  it('should test whether it will return age in Venus years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let venusAge = test.GetVenusAge(testBirthday);
    expect(venusAge).toEqual(43);
  });

  it('should test whether it will return correct years left on Venus', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let yearsLeft = test.GetLifeVenus();
    expect(yearsLeft).toEqual(72);
  });

  it('should test whether it will return age in Mars years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let marsAge = test.GetMarsAge(testBirthday);
    expect(marsAge).toEqual(14);
  });

  // it('should test whether it will return correct years left on Mars', function() {
  //   let test = new Galactic(new Date(1992, 5, 2));
  //   let yearsLeft = test.GetMarsMercury();
  //   expect(yearsLeft).toEqual();
  // });

  it('should test whether it will return age in Jupiter years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let jupiterAge = test.GetJupiterAge(testBirthday);
    expect(jupiterAge).toEqual(2);
  });

  // it('should test whether it will return correct years left on Jupiter', function() {
  //   let test = new Galactic(new Date(1992, 5, 2));
  //   let yearsLeft = test.GetJupiterMercury();
  //   expect(yearsLeft).toEqual(186);
  // });

  // it('should test whether it will return life expectancy in Mercury years', function() {
  //
  //   expect().toEqual();
  // });
  //
  // it('should test whether it will return life expectancy in Venus years', function() {
  //
  //   expect().toEqual();
  // });
  //
  // it('should test whether it will return life expectancy in Mars years', function() {
  //
  //   expect().toEqual();
  // });
  //
  // it('should test whether it will return life expectancy in Jupiter years', function() {
  //
  //   expect().toEqual();
  // });

});
