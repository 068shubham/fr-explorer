import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { File } from '../model/file';
import { AppService } from '../app.service';

@Component({
  selector: 'app-folder-details',
  templateUrl: './folder-details.component.html',
  styleUrls: ['./folder-details.component.css']
})
export class FolderDetailsComponent implements OnInit {

  @Input()
  folder: File;

  @Output()
  public openChildFolder: EventEmitter<File> = new EventEmitter<File>();

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  folderClicked() {
    this.appService.selectedFolder.selected = false;
    this.folder.selected = true;
    this.appService.selectedFolder = this.folder;
    this.appService.folderSelectedByUser.emit(this.folder);
  }

  folderDoubleClicked(childFolder) {
    this.openChildFolder.emit(childFolder);
  }

}
