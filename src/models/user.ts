export class User {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  birthday: string;
  phone: string;
  image: string;
  city: string;
  state: string;
  country: string;
  lat: string;
  lng: string;
  streetnum: number;
  street: string;
  timezonedes: string;
  timezoneoffset: string;

  public constructor(user: any) {
    this.gender = user!.gender || "unspecified";
    this.firstName = user!.name!.first || "defaultFirstName";
    this.lastName = user!.name!.last || "defaultLastName";
    this.email = user!.email || "defaultEmail";
    this.age = user!.dob!.age || "unspecified";
    this.birthday = user!.dob!.date || "never birthed";
    this.phone = user!.phone || "unspecified";
    this.image = user!.picture!.large || "https://i.imgur.com/wvxPV95.png";
    this.city = user!.location!.city || "unspecified";
    this.state = user!.location!.state || "unspecified";
    this.country = user!.location!.country || "unspecified";
    this.lat = user!.location!.coordinates!.latitude || "NA";
    this.lng = user!.location!.coordinates!.longitude || "NA";
    this.streetnum = user!.location!.street!.number || 0;
    this.street = user!.location!.street!.name || "unknown";
    this.timezonedes = user!.location!.timezone!.description || "unknown";
    this.timezoneoffset = user!.location!.timezone!.offset || "unknown";
  }

  public static empty(): User {
    return new User({});
  }
}
