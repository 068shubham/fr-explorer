import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { File } from '../model/file';
import { AppService } from '../app.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, AfterViewInit {

  @Input()
  folder: File;

  nameModelForEdit: string;

  @Output()
  public onDoubleClick: EventEmitter<File> = new EventEmitter<File>();

  constructor(private el: ElementRef, private appService: AppService) { }

  ngOnInit() {
    if (!this.folder.name) {
      this.nameModelForEdit = 'New Folder';
    } else {
      this.nameModelForEdit = this.folder.name;
    }
  }

  ngAfterViewInit() {
    if (this.folder.editable) {
      this.el.nativeElement.children[0].focus();
    }

  }

  isNameInvalid() {
    return !this.appService.isValidFolderName(this.folder, this.nameModelForEdit);
  }

  onDoubleClickHandler() {
    this.onDoubleClick.emit(this.folder);
  }

  nameChangeHandler() {
    if (this.appService.isValidFolderName(this.folder, this.nameModelForEdit)) {
      this.folder.editable = false;
      this.folder.name = this.nameModelForEdit;
    } else {
      this.el.nativeElement.children[0].focus();
    }
  }

  onBlurHandler() {
    this.nameChangeHandler();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeHandler(event: KeyboardEvent) {
    if (this.folder.editable && !this.folder.name) {
      this.appService.removeFolder(this.folder);
    } else {
      this.nameModelForEdit = this.folder.name;
      this.folder.editable = false;
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnterHandler(event: KeyboardEvent) {
    this.nameChangeHandler();
  }

}
