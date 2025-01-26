import { NgClass } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, Optional, Output, Self, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  imports: [NgClass],
})
export class InputFieldComponent implements OnChanges, ControlValueAccessor {

  /**
   * 
   */
  @Output("change") useChange = new EventEmitter<string>();

  /**
   * @description input name
   */
  @Input({ alias: 'name', required: true }) Name: string = "";  

  /**
   * @description ClassList to set class value
   */  
  @Input('classList') Class: string = "";

  /**
   * @description set input type, text or number etc...
   */
  @Input('type') Type: string = "text";

  /**
   * 
   */
  @Input('value') public value: string = '';

  /**
   * @description input placeholder
   */
  @Input('placeholder') public Placeholder: string = "type here...";

  /**
   * @description to disabled button behavior
   */
  @Input('disabled') public disabled: boolean = false;


  /**
   * fields
   */

  /**
   * @description Current touch control status
   */
  public touched: boolean = false;

  constructor(@Self() @Optional() public ngControl: NgControl) { 
    
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }

  }

  /**
   * 
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    
    // ES6 Destruction & Nested
    const { disabled: { currentValue, previousValue } = {} } = changes;

    /**
     * update disable status
     */
    if (currentValue != previousValue) this.setDisabledState(currentValue);

  }

  /**
   * 
   * @param value 
   */
  public onChange = (value: string) => {};

  /**
   * 
   */
  public onTouched = () => {};

  /**
   * 
   * @param obj 
   * @description init control value
   */
  public writeValue(obj: string): void {
    this.value = obj
  }

  /**
   * 
   * @param onChange 
   * @deprecated set control value
   */
   public registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  /**
   * 
   * @param onTouched 
   * @description Set input status to touch
   */
  public registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  /**
   * 
   * @param isDisabled 
   * @description Set input status to disable
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * 
   * @param event keyboard event
   * @description get value from input with each change to update current value
   */
  public onInput(event: Event) {

    /**
     * handler disable statue
     */
    if (this.disabled) return;

    // ES6 Destruction
    const { value } = event.target as HTMLInputElement;

    /**
     * update value
     */
    this.onChange(value)

    /**
     * output
     */
    this.useChange.emit(value)
    

  }


}
