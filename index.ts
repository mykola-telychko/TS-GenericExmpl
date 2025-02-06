// Import stylesheets
import './style.css';

/**
 * Returns the sum of a given number with itself.
 * @param {number} arg - The input number.
 * @returns {number} The result of adding the number to itself.
 */
function getValueNumber(arg: number): number {
  return arg + arg;
}

/**
 * Returns the concatenation of a given string with itself.
 * @param {string} arg - The input string.
 * @returns {string} The result of concatenating the string with itself.
 */
function getValueString(arg: string): string {
  return arg + arg;
}

// Generic Functions

/**
 * Generic function that returns the given argument unchanged.
 * @template Type
 * @param {Type} arg - The input value.
 * @returns {Type} The same input value.
 */
function getValue<Type>(arg: Type): Type {
  return arg;
}

/**
 * Generic function with an alternative syntax that returns the given argument unchanged.
 * @template T
 * @param {T} arg - The input value.
 * @returns {T} The same input value.
 */
function getValT<T>(arg: T): T {
  return arg;
}

let num = getValT<number>(223);
let str = getValT<string>('textabout');

// Example 1: Generic Class

/**
 * A generic class that stores a key-value pair.
 * @template K, V
 */
class Monitor<K, V> {
  private key: K;
  private value: V;

  /**
   * Creates an instance of Monitor.
   * @param {K} key - The key value.
   * @param {V} value - The associated value.
   */
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  /**
   * Displays the stored key-value pair in the console.
   */
  public display(): void {
    console.log('key: ' + this.key + ', ' + 'value: ' + this.value);
  }
}

let hd = new Monitor<number, string>(720, 'HD');
hd.display();

// Example 2: Generic Class with Multiple Type Parameters

/**
 * A generic class representing a rocket with multiple properties.
 * @template Goal, Status, Coordinates
 */
class Rocket<Goal, Status, Coordinates> {
  private name: Goal;
  private launch: Status;
  private arr: Coordinates;

  /**
   * Creates an instance of Rocket.
   * @param {Goal} name - The name of the rocket.
   * @param {Status} launch - The launch status.
   * @param {Coordinates} arr - The coordinates.
   */
  constructor(name: Goal, launch: Status, arr: Coordinates) {
    this.name = name;
    this.launch = launch;
    this.arr = arr;
  }

  /**
   * Logs rocket information to the console.
   */
  public echo(): void {
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

let RocketOnMoscow = new Rocket<string, boolean, Array<string>>('ruch', true, [
  '55.751244',
  '37.618423',
]);
RocketOnMoscow.echo();

// Example 3: Generic Interface Implementation

/**
 * A generic interface representing an operation with three type parameters.
 * @template A, B, C
 */
interface Operation<A, B, C> {
  variableOpera: C;
  show(firstParam: A, secondParam: B): void;
}

/**
 * A class implementing the Operation interface with specific types.
 */
class OperationImpl implements Operation<string, number, number> {
  public variableOpera: number = 7;

  /**
   * Displays the parameters in the console.
   * @param {string} firstParam - The first parameter.
   * @param {number} secondParam - The second parameter.
   */
  public show(firstParam: string, secondParam: number): void {
    console.log('firstParam  = ' + firstParam);
    console.log('secondParam = ' + secondParam);
  }
}
