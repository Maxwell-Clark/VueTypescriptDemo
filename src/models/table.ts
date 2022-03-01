export class TableData {
  address: string;
  first: string;
  last: string;
  email: string;

  public constructor(user: any) {
    this.address = user!.address || "unspecified";
    this.first = user!.first || "defaultFirstName";
    this.last = user!.last || "defaultLastName";
    this.email = user!.email || "defaultEmail";
  }

  public static empty(): TableData {
    return new TableData({});
  }
}
