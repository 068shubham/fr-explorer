import { Injectable, EventEmitter } from '@angular/core';
import { File } from './model/file';
import { FOLDER } from './constants/file-type';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public rootDirectory: File;

  public selectedFolder: File;

  public folderSelectedByUser: EventEmitter<File> = new EventEmitter<File>();

  constructor() {
    this.rootDirectory = new File();
    this.rootDirectory.name = '/';
    this.rootDirectory.path = '/';
    this.rootDirectory.type = FOLDER;
    this.rootDirectory.childs = [];
    this.selectedFolder = this.rootDirectory;
  }

  isValidFolderName(folder: File, newName: string): boolean {

    for (let sibling of folder.parent.childs) {
      if (sibling !== folder && sibling.name === newName) {
        return false;
      }
    }
    return true;
  }

  removeFolder(folder: File) {
    folder.parent.childs = folder.parent.childs.filter(c => c != folder);
  }
}
