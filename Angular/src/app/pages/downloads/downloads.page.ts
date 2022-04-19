import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

  DownloadExcel: any;
  KisshtHtml: any;

  constructor( 
    private http: HttpClient, 
    private sanitizer: DomSanitizer,
    private router: Router,
  
    ) { }

  ngOnInit() {
   // let url = "https://stgessence.phoenix.xyz/general/excel/mobile_download/workreport_download.php?member_id=" + this.postData.member_id + "&idname=" + this.postData.account + "&lang=" + this.postData.language + "&auth_token=" + this.postData.token + "&year=" + this.postData.year + "&month=" + this.postData.month + "&short_comp_name=yts";
    //this.DownloadExcel = "https://stgessence.phoenix.xyz/general/excel/mobile_download/workreport_download.php?member_id=152&idname=k.maeno&lang=en&auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjE5Mi4xNjguMTEzLjExMyIsImVtYWlsIjoiay5tYWVubyIsImNvbXBhbnkiOiJ5dHMiLCJjb21wYW55X25hbWUiOiJZZWxsb3cgVGFpbHMiLCJhY2Nlc3NfbGV2ZWwiOjQsImlhdCI6MTYwNzkxODUxMiwiZXhwIjoxNjA4MDkxMzEyfQ.Z44H5i9VM7c_5S2M7sDNj7nnm7uRZSy5Y5IpqqjqQYo&year=2020&month=11";

  this.http.get('https://stgessence.phoenix.xyz/general/excel/mobile_download/workreport_download.php?member_id=152&idname=k.maeno&lang=en&auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjE5Mi4xNjguMTEzLjExMyIsImVtYWlsIjoiay5tYWVubyIsImNvbXBhbnkiOiJ5dHMiLCJjb21wYW55X25hbWUiOiJZZWxsb3cgVGFpbHMiLCJhY2Nlc3NfbGV2ZWwiOjQsImlhdCI6MTYwNzkxODUxMiwiZXhwIjoxNjA4MDkxMzEyfQ.Z44H5i9VM7c_5S2M7sDNj7nnm7uRZSy5Y5IpqqjqQYo&year=2020&month=11',{responseType:'text'}).subscribe(res=>{
    this.KisshtHtml = this.sanitizer.bypassSecurityTrustUrl(res);
  });
    //window.open(url,"_self");

    //window.location.href='home/workreport';
  }

  /* download() {
    this.fileService.downloadFile().subscribe(response => {
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  } */

}
