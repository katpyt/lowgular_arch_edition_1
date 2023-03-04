export interface UserNewModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    firstname: string,
    lastname: string
  };
  readonly address: {
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation: {
      lat: string,
      long: string
    },
  };
  phone: string;
}
