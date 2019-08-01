export class GenderEnum {
  public static readonly Male = new GenderEnum(1, "Masculino");
  public static readonly Female = new GenderEnum(2, "Feminino");
  public static readonly Custom = new GenderEnum(3, "Personalizado");

  public value: number;
  public name: string;

  constructor(value: number, name: string) {
    this.value = value;
    this.name = name;
  }
  public static List() {
    return [this.Male, this.Female, this.Custom];
  }

  public static Get(value: number) {
    return this.List().find(item => item.value === value);
  }
}
