import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { File } from '../model/file';
import { FOLDER } from '../constants/file-type';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  currentFolder: File;

  root: File;

  constructor(private appService: AppService) {
    this.root = this.appService.rootDirectory;
    this.currentFolder = this.appService.rootDirectory;
  }

  ngOnInit() {
    this.appService.folderSelectedByUser.subscribe(
      (clickedFolder) => {
        this.currentFolder = clickedFolder;
      }
    )
  }

  addNewFolder() {
    let newFolder = new File();
    newFolder.childs = [];
    newFolder.parent = this.currentFolder;
    newFolder.type = FOLDER;
    newFolder.editable = true;
    this.currentFolder.childs.push(newFolder);
  }

  goBackToPreviousFolder() {
    if (this.currentFolder.parent) {
      this.currentFolder = this.currentFolder.parent;
    }
  }

  openChildFolder(childFolder) {
    this.currentFolder = childFolder;
  }

  isAddNewFodlerDisabled() {
    return this.currentFolder.childs.reduce((res, cur) => res || cur.editable, false);
  }

}
