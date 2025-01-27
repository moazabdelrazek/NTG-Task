import { RouterLink } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe, JsonPipe, NgIf, UpperCasePipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * libs
*/
import { Dialog } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { MessageService, SelectItem } from 'primeng/api';

/**
 * interfaces
*/
import { IService } from './interfaces/service';

/**
 * services
*/
import { ServiceManagementService } from './services/service-management.service';

/**
 * enums
*/
import { SERVICE_TYPE } from './enums/service-type';
import { SERVICE_STATUS } from './enums/service-status';

/**
 * pipes
 */
import { ServiceTypePipe } from './pipes/service-type.pipe';
import { ServiceStatusPipe } from './pipes/service-status.pipe';

/**
 * icons
 */
import { EyeIconComponent } from "@icon//svg/eye-icon/eye-icon.component";
import { EditIconComponent } from "@icon//svg/edit-icon/edit-icon.component";
import { PlusIconComponent } from "@icon//svg/plus-icon/plus-icon.component";
import { FilterIconComponent } from "@icon//svg/filter-icon/filter-icon.component";
import { SearchIconComponent } from "@icon//svg/search-icon/search-icon.component";
import { ChevronDownIconComponent } from "@icon//svg/chevron-down-icon/chevron-down-icon.component";

/**
 * shared components
 */
import { BadgeComponent } from "@shared/badge/badge.component";
import { ButtonComponent } from "@shared/button/button.component";
import { InputFieldComponent } from "@shared/input-field/input-field.component";

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrl: './service-management.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
  imports: [
    /**
     * directives
     */
    NgIf,
    RouterLink,
    /**
     * pipes
    */
    AsyncPipe,
    UpperCasePipe,
    ServiceTypePipe,
    ServiceStatusPipe,
    /**
     * components
     */
    BadgeComponent,
    ButtonComponent,
    EyeIconComponent,
    EditIconComponent,
    PlusIconComponent,
    SearchIconComponent,
    FilterIconComponent,
    InputFieldComponent,
    ChevronDownIconComponent,
    /**
     * Modules
     */
    Dialog,
    TableModule,
    FormsModule,
    ToastModule,
    SelectModule,
    ButtonModule,
    SelectModule,
    ReactiveFormsModule,
],
})
export class ServiceManagementComponent {

  /**
   * 
   */
  public FormService!: FormGroup;

  /**
   * @description to store current rows that has edit
   */
  private clonedService: { [s: string]: IService } = {};

  /**
   * 
   */
  public ServiceDialog: boolean = false

  /**
   * 
   */
  public Status: SelectItem[] = [
    { label: "Active", value: SERVICE_STATUS.Active },
    { label: "Inactive", value: SERVICE_STATUS.Inactive }
  ]

  /**
   * 
   */
  public Types: SelectItem[] = [
    { label: "Normal", value: SERVICE_TYPE.Normal },
    { label: "Pro", value: SERVICE_TYPE.Pro },
    { label: "Vip", value: SERVICE_TYPE.Vip },
  ]

  /**
   * 
   */
  public get GetData$() {
    return this._serviceManagement.GetData$;
  }

  /**
   * @description return main Observable
   */
  public get Service$() {
    return this._serviceManagement.Services$
  }  
  
  /**
   * 
   */
  public get IsLoading(): boolean {
    return this._serviceManagement.IsLoading
  }

  constructor(
    private _fb: FormBuilder,
    private _messageService: MessageService,
    private _serviceManagement: ServiceManagementService,
  ) {

    /**
     * init once time
     */
    this.FormService = this._fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      code: [null, Validators.required],
      status: [null, Validators.required],
    })

  }

  ngOnInit() {}

  /**
   * @description primeng exp 
   */
  public onRowEditInit(service: IService) {
    this.clonedService[service.id.toString()] = { ...service };
  }

  /**
   * @description primeng exp 
   */
  public onRowEditSave(service: IService) {
    if (service != null) {
      delete this.clonedService[service.id];
      this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Service is updated' });
    } else {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid' });
    }
  }

  /**
   * @description primeng exp 
   */
  public onRowEditCancel(service: IService, index: number) {

    // get service
    const list = this.Service$.value;

    if (index != null) {
      
      // update service by index
      list[index] = this.clonedService[service.id];

      /**
       * update observable
       */
      this._serviceManagement.Update(list)
  
      /**
       * clear clone stack
       */
      delete this.clonedService[service.id];

    }

  }

  /**
   * 
   * @param name 
   * @returns 
   */
  public GetControlByName(name: string): FormControl {
    return this.FormService.controls[name] as FormControl
  }  

  public openNew(): void {
    this.ServiceDialog = true;
  }

   public hideDialog(): void {
    this.ServiceDialog = false;
  }

  /**
   * 
   */
  public AddNewService(): void {
    
    /**
     * handler invalid value
     */
    if (this.FormService.invalid) return;

    // current state in observable
    const list = [...this.Service$.value];

    // generate new item
    const newItem = { id: list.length + 1,  ...this.FormService.value };

    // add new item
    list.unshift(newItem);

    // update observable
    this._serviceManagement.Update(list);

    // reset form
    this.FormService.reset();

    // hide 
    this.hideDialog();

    // show toast
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Service is Added' });

  }

}