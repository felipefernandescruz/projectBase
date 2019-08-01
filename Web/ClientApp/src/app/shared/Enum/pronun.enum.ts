export class PronounEnum {
  public static readonly He = new PronounEnum(1, "Ele");
  public static readonly She = new PronounEnum(2, "Ela");
  public static readonly HeOrShe = new PronounEnum(3, "Ele(a)");

  public value: number;
  public name: string;

  constructor(value: number, name: string) {
    this.value = value;
    this.name = name;
  }
  public static List() {
    return [this.He, this.She, this.HeOrShe];
  }

  public static Get(value: number) {
    return this.List().find(item => item.value === value);
  }
}
