
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += ' ' + key + ' ';
  }

  public pressActionKey(key: ActionKeys): void {
    return this._buffer += ' ' + key + key + key + ' '+ eval(this._buffer);
  }

  public display(): string {
    return this._buffer;
  }

}
