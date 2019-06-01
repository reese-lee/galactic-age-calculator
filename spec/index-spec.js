import { Galactic } from './../src/index.js';

describe('Galactic', function() {

  it('should test whether a Galactic object is created', function() {
    const dob = new Galactic(new Date(1992, 5, 2));
    expect(typeof dob).toEqual(typeof new Galactic);
  });

  it('should test whether it will return correct Earth age', function() {
    let test = new Galactic(new Date("06,05,1992"));
    let testBirthday = test.birthday;
    let testAge = test.GetEarthAge(testBirthday);
    expect(testAge).toEqual(26);
  });

  // it('should test whether it will return age in Mercury years', function() {
  //
  //   expect().toEqual();
  // });
  //
  // it('should test whether it will return age in Venus years', function() {
  //
  //   expect().toEqual();
  // });
  //
  // it('should test whether it will return age in Mars years', function() {
  //
  //   expect().toEqual();
  // });
  //
  // it('should test whether it will return age in Jupiter years', function() {
  //
  //   expect().toEqual();
  // });
  //
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
