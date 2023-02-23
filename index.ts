// Import stylesheets
import './style.css';

// https://codenga.com/articles/guides/typescript_generics?gclid=CjwKCAiAl9efBhAkEiwA4ToriiRSmB0_24KCo2k4KAmc0glbxYYUpHPDsxbKlT1OdyE2CJQJqqW08xoCGQcQAvD_BwE

function getValueNumber(arg: number) {
  return arg + arg;
}
function getValueString(arg: string) {
  return arg + arg;
}

// console.log(getValueNumber(223), getValueString('word'));

// generic FN ---- begin
function getValue<Type>(arg: Type): Type {
  return arg;
}
function getValT<T>(arg: T): T {
  return arg;
}

let num = getValT<number>(223);
let str = getValT<string>('textabout');
// console.log(num);
// console.log(str);
// generic FN ---- end

// example 1 begin
class Monitor<K, V> {
  private key: K;
  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  public display() {
    console.log('key: ' + this.key + ', ' + 'value: ' + this.value);
  }
}
let hd = new Monitor<number, string>(720, 'HD');
hd.display();
// example 1 end

// example 2 begin
class Rocket<Goal, Status, Coordinates> {
  private name: Goal;
  private launch: Status;
  private arr: Coordinates;

  constructor(name: Goal, launch: Status, arr: Coordinates) {
    this.name = name;
    this.launch = launch;
    this.arr = arr;
  }

  public echo() {
    console.log(
      'Destroy : ' +
        this.name +
        ', launch: ' +
        this.launch +
        ', ll: ' +
        this.arr
    );
  }
}

let RocketOnMoscow = new Rocket<string, boolean, Array<T>>(
  'russian children',
  true,
  ['55.751244', '37.618423']
);
RocketOnMoscow.echo();
// example 2 end

// example 3 begin
interface Operation<A, B, C> {
  variableOpera: C;
  show(firstParam: A, secondParam: B): void;
}

class OperationImpl implements Operation<string, number, number> {
  public variableOpera: number = 7;

  public show(firstParam: string, secondParam: number): void {
    console.log('firstParam  = ' + firstParam);
    console.log('secondParam = ' + secondParam);
  }
}
// example 3 end
