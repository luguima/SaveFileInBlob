import { Component, OnInit } from '@angular/core';
import { UploadService } from '../Services/Upload.Service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  filename = '';
  imageSource = '';



  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  setFilename(files) {
    if (files[0]) {
      this.filename = files[0].name;
    }
  }

  save(files) {
    const formData = new FormData();

    if (files[0]) {
      formData.append(files[0].name, files[0]);
    }

    this.uploadService
      .upload(formData)
      .subscribe(response => {
        console.log(response.path);
        this.imageSource = response.path;
      });
  }

}
