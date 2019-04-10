import { Component, OnInit, Input } from '@angular/core';
import { File } from '../model/file';
import { AppService } from '../app.service';

@Component({
  selector: 'app-address-bar',
  templateUrl: './address-bar.component.html',
  styleUrls: ['./address-bar.component.css']
})
export class AddressBarComponent implements OnInit {

  @Input()
  currentFolder: File;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  getAddress() {
    if (this.currentFolder) {
      let allFolders = [];
      let parentFolder = this.currentFolder;
      while (parentFolder) {
        allFolders.push(parentFolder);
        parentFolder = parentFolder.parent;
      }
      return allFolders.reverse().map((f) => f.name).reduce((t, a) => t + '/' + a, '');
    }
  }

}
