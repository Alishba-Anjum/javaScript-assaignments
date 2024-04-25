export class person {
  Name: string;
  constructor(Name: string) {
    this.Name = Name;
  }
  greet() {
    console.log(` Hello , my name is ${this.Name}`);
  }
}
