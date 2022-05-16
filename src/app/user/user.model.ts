export class UserModel {
  // tslint:disable-next-line:variable-name
  _firstName: string;
  // tslint:disable-next-line:variable-name
  _lastName: string;
  // tslint:disable-next-line:variable-name
  _username: string;
  // tslint:disable-next-line:variable-name
  _password: string;


  constructor(firstName: string, lastName: string, username: string, password: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._username = username;
    this._password = password;
  }

  public setUser(user: UserModel) {
    this._username = user._username;
    this._firstName = user._firstName;
    this._lastName = user._lastName;
    this._password = user._password;
    console.log('username came from sign up page ' + this.username);
  }


  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }
}
