import { Component, OnInit, Input, Compiler } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MemberInfoService } from 'src/app/services/member-info.service';
import { CustomerWorkreportInfoService } from 'src/app/services/customer-workreport-info.service';
import { element } from 'protractor';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms';
import { count } from 'console';
import { ToastService } from 'src/app/services/toast.service';
import { isString } from 'util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { WorkreportDownloadService } from 'src/app/services/workreport-download.service';
import { HttpService } from 'src/app/services/http.service';
import { url } from 'inspector';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss'],
})
export class MemberInfoComponent implements OnInit {
  @Input() loginUser: any;

  postData = {
    year: '',
    month: '',
    member_id: '',
    token: '',
    idname: '',
    mySelect: '',
    mySelect2: '',
    language: '',
    pages: '',
    custom_bill: '',
    custom_total: '',
    account: '',
    workreport_id: '',
    short_comp: ''
  }

  clientData = {
    client_id: '',
    client_name: '',
    client_report_flg: '',
    contract_type: '',
    end_contract_date: '',
    individual_contract_id: '',
    individual_contract_no: '',
    max_width_time: '',
    member_name: '',
    member_no_str: '',
    min_width_time: '',
    project_id: '',
    project_name: '',
    start_contract_date: '',
    status: '',
    unit_name: ''
  }

  nextClicked: number = 0;

  panelOpenState = false;

  wReportData: any;
  mbInfo: any;
  memberNo: String;
  fmmemberNo: any;

  displayUserData: any;

  items: any = [];
  tran_expen: any = [];
  tran_expen_jp: any = [];
  own_depart: any = [];
  compareTranEx: any;
  itemExpandedHeight: number = 200;
  comp_sName: String;
  memberInfo: any;
  status_dly: String;
  checkBoxList: any;
  tripTypeList: any;
  voucherlist: any;

  pubHoliday: String;

  newData: any;
  customerWorkReport: any;
  clientRpFlg: any;
  workingPattern: any;
  workingHour: any;
  newDate: any;
  newMonth: any;

  customerBilling: any;

  information: any;
  automaticClose: false;
  total:boolean;
  attendance_type: any;
  attendance_type_jp: any;
  workPattern: any[];
  workPatternExist: any[];
  workinghour: any;
  tranExpen: any;
  deman_type: any;
  deman_type_jp: any;
  transporation: any;
  transporationjp: any;
  customerWorkReportDetail: any;
  newArray: any;
  showDetails: boolean= false;

  customerSelectOpt: Number=1;
  customerSelectOpt2: Number=1;
  testing: any[];

  trasport_switch: boolean = false;
  customer_switch: boolean = false;
  customer_switch2: boolean = false;
  workreport_switch: boolean = true;
  settle_switch: boolean = false;

  notEnter: boolean = false;
  weekEnd: boolean = false;
  entered: boolean = false;
  notEnterMsg: boolean = true;
  current_value = 0;
  dataLeng: any;
  checkBoxListjp: any;
  public workReportForm: FormGroup;
  public myUploadForm: FormGroup;
  yearlist: any;
  monthlist: any;
  submitted = false;
  innerPattern: any;
  route_type: any;
  route_type_jp: any = [];
  public res_total: number=0;
  DownloadExcel: any;

  project_patten: any;

  clientInfo1: any;
  clientInfo2: any;

  sample: any;

  work_reports: any;
  customer_wk_count: Number;
  patternHolder: any;
  expenReport: any;
  default_wktime: number=0;
  fileName_dly: number=0;
  totalWkHour:any=0;

  constructor(
    private authService: AuthService, 
    private customerInfo: CustomerWorkreportInfoService, 
    private memberService: MemberInfoService, 
    private route: ActivatedRoute, 
    private router: Router,
    private langServe: LanguageService,
    private langSwitch: LanguageSwitchService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private tmplCompiler: Compiler,
    private wkDownloadExcel: WorkreportDownloadService,
    private http: HttpService,
    private sanitizer: DomSanitizer,
    private httpp: HttpClient,
    
    ) {
      this.workReportForm = this.fb.group({
        member_info: this.fb.array([]),
        /* customer_info: this.fb.group({
          client_report_flg: ['', [Validators.required]],
          mng_clt_total_work_time: [''],
          individual_contract_id: ['', [Validators.required]],
          customerwkReport: this.fb.array([])
        }), */
        work_report: this.fb.array([]),
        customer_work_report: this.fb.array([]),
        customer_work_report_detail: this.fb.array([]),
        customer_work_report_detail2: this.fb.array([]),
        daily_transportation_id: '',
        transport_expense_detail: this.fb.array([]),
        project_info: this.fb.array([]),
        work_report_detail: this.fb.array([]),
        expense_report_detail: this.fb.array([]),
        expense_report_id: '',
        customer_report_file: this.fb.array([])
      });

      this.myUploadForm = new FormGroup({
        file: new FormControl('', [Validators.required]),
        fileSource: new FormControl('', [Validators.required])
      });
    }

  ngOnInit() {
    //for getting parameters
    this.route.queryParams.subscribe(params => {
      this.postData.year = params["year"];
      this.postData.month = params["month"];
      this.clientData.client_id = params['client_id'];
      this.clientData.client_name = params['client_name'];
      this.clientData.client_report_flg = params['client_report_flg'];
      this.clientData.contract_type = params['contract_type'];
      this.clientData.end_contract_date = params['end_contract_date'];
      this.clientData.start_contract_date = params['start_contract_date'];
      this.clientData.individual_contract_id = params['individual_contract_id'];
      this.clientData.individual_contract_no = params['individual_contract_no'];
      this.clientData.max_width_time = params['max_width_time'];
      this.clientData.member_no_str = params['member_no_str'];
      this.clientData.min_width_time = params['min_width_time'];
      this.clientData.project_id = params['project_id'];
      this.clientData.project_name = params['project_name'];
      this.clientData.status = params['status'];
      this.clientData.unit_name = params['unit_name'];
      console.log(params['client_name'], "parameter");
      
      //to display the selected tab
      this.changeDisplayClick(params["tabs"]);

    });

    if(!this.validateInputs()) {
      this.newDate = new Date().getFullYear();
      this.newMonth = new Date().getMonth();
      this.postData.year = this.newDate;
      this.postData.month = this.newMonth + 1;
      //console.log(this.newDate + this.newMonth + "mb info");
    }

    //dropDownSwitch();

    this.authService.userData$.subscribe( (res: any) => {
      //console.log(res);
      this.displayUserData = res;
      this.postData.member_id = this.displayUserData['member_id'];
      this.postData.token = this.displayUserData['access-token'];

      this.postData.account = this.displayUserData['name'];
      this.postData.short_comp = this.displayUserData['company'];
      
    });

    //this.tmplCompiler.clearCache();
    
    this.searchWkReportAction();
   

    this.items = [
      {expanded: false},
      {expanded: false}
    ]

    this.route_type = [
      {
        id: 0,
        value: 'One-Way'
      },
      {
        id: 1,
        value: 'Round-Trip'
      }
    ];

    this.route_type_jp = [
      {
        id: 0,
        value: '片道'
      },
      {
        id: 1,
        value: '往復'
      }
    ];

    this.tran_expen = [
      {
        id: 0,
        value: 'No'
      },
      {
        id: 1,
        value: 'Yes'
      }
    ];

    this.tran_expen_jp = [
      {
        id: 0,
        value: '無'
      },
      {
        id: 1,
        value: '有'
      }
    ];

    this.deman_type = [
      {
        id: 0,
        value: 'in house'
      },
      {
        id: 1,
        value: 'Customer'
      }
    ];
    this.deman_type_jp = [
      {
        id: 0,
        value: '社内請求'
      },
      {
        id: 1,
        value: '客先請求'
      }
    ];

    this.transporation = [
      {
        id: 0,
        value: '-'
      },
      {
        id: 1,
        value: 'Bus'
      },
      {
        id: 2,
        value: 'Train'
      },
      {
        id: 3,
        value: 'Taxi'
      },
      {
        id: 4,
        value: 'Air plane'
      },
      {
        id: 5,
        value: 'Other'
      }
    ];

    this.transporationjp = [
      {
        id: 0,
        value: '-'
      },
      {
        id: 1,
        value: 'バス'
      },
      {
        id: 2,
        value: '電車'
      },
      {
        id: 3,
        value: 'タクシー'
      },
      {
        id: 4,
        value: '飛行機'
      },
      {
        id: 5,
        value: 'その他'
      }
    ];

    this.checkBoxList = [
      { val: 'Work hour not entered', isChecked: false },
      { val: 'Weekend', isChecked: false },
      { val: 'All', isChecked: true }
    ];

    this.checkBoxListjp = [
      { val: '入力されていません', isChecked: false },
      { val: '週末', isChecked: false },
      { val: 'すべて', isChecked: true }
    ];

    this.attendance_type = [
      {
        id: 0,
        value: '-'
      },
      {
        id: 1,
        value: 'Public Holiday'
      },
      {
        id: 2,
        value: 'Shift Holiday'
      },
      {
        id: 3,
        value: 'Paid Holiday'
      },
      {
        id: 4,
        value: 'Half Holiday'
      },
      {
        id: 5,
        value: 'ABSENCE'
      },
      {
        id: 6,
        value: 'Delay'
      },
      {
        id: 7,
        value: 'Early'
      },
      {
        id: 8,
        value: 'Special Holiday'
      },
      {
        id: 9,
        value: 'Holiday Work'
      },
      {
        id: 10,
        value: 'Substitute Holiday'
      },
      {
        id: 11,
        value: 'Others'
      }
    ];
    this.attendance_type_jp = [
      {
        id: 0,
        value: '-'
      },
      {
        id: 1,
        value: '公休日'
      },
      {
        id: 2,
        value: 'シフト休'
      },
      {
        id: 3,
        value: '有休'
      },
      {
        id: 4,
        value: '半休'
      },
      {
        id: 5,
        value: '欠勤'
      },
      {
        id: 6,
        value: '遅刻'
      },
      {
        id: 7,
        value: '早退'
      },
      {
        id: 8,
        value: '特休'
      },
      {
        id: 9,
        value: '休日出勤'
      },
      {
        id: 10,
        value: '振休'
      },
      {
        id: 11,
        value: 'その他'
      }
    ];


    this.own_depart = [
      { id: 0,
        value: 'Not prducted'
      },
      { id: 1,
        value: 'Not applied'
      },
      { id: 2,
        value: 'Applied'
      },
      { id: 3,
        value: 'Remand'
      },
      { id: 4,
        value: 'Accepted'
      }
    ];

    this.yearlist = [
      { id: 0,
        value: 2010
      },
      { id: 1,
        value: 2011
      },
      { id: 2,
        value: 2012
      },
      { id: 3,
        value: 2013
      },
      { id: 4,
        value: 2014
      },
      { id: 5,
        value: 2015
      },
      { id: 6,
        value: 2016
      },
      { id: 7,
        value: 2017
      },
      { id: 8,
        value: 2018
      },
      { id: 9,
        value: 2019
      },
      { id: 10,
        value: 2020
      },
      { id: 11,
        value: 2021
      },
      { id: 12,
        value: 2022
      },
      { id: 13,
        value: 2023
      },
      { id: 14,
        value: 2024
      },
      { id: 15,
        value: 2025
      },
      { id: 16,
        value: 2026
      },
      { id: 17,
        value: 2027
      },
      { id: 18,
        value: 2028
      },
      { id: 19,
        value: 2029
      },
      { id: 20,
        value: 2030
      }
    ];


    this.monthlist = [
      { id: 1,
        value: 1
      },
      { id: 2,
        value: 2
      },
      { id: 3,
        value: 3
      },
      { id: 4,
        value: 4
      },
      { id: 5,
        value: 5
      },
      { id: 6,
        value: 6
      },
      { id: 7,
        value: 7
      },
      { id: 8,
        value: 8
      },
      { id: 9,
        value: 9
      },
      { id: 10,
        value: 10
      },
      { id: 11,
        value: 11
      },
      { id: 12,
        value: 12
      }
    ];

    this.languageDefault();
  
  }

  //read only formarray
  get project_info () : FormArray {
    return this.workReportForm.get("project_info") as FormArray
  }

  //read only formarrayproject_info: this.fb.array([]),
  get working_pattern () : FormArray {
    return this.workReportForm.get("working_pattern") as FormArray
  }

  //read only formarray work_report_detail
  get work_report_detail () : FormArray {
    return this.workReportForm.get("work_report_detail") as FormArray
  }

  //read only formarray expense_report_detail
  get expense_report_detail () : FormArray {
    return this.workReportForm.get("expense_report_detail") as FormArray
  }

  //read only formarray
  get member_info () : FormArray {
    return this.workReportForm.get("member_info") as FormArray
  }

  //read only formarraywork_report
  get work_report () : FormArray {
    return this.workReportForm.get("work_report") as FormArray
  }

  //read only formarrayfilesource
  get fpdf() {
    return this.myUploadForm.controls;
  }


  //read only formarray
  get transport_expense_detail () : FormArray {
    return this.workReportForm.get("transport_expense_detail") as FormArray
  }

  //read only formarray
  get customer_work_report_detail () : FormArray {
    return this.workReportForm.get("customer_work_report_detail") as FormArray
  }
  //read only formarray
  get customer_work_report_detail2 () : FormArray {
    return this.workReportForm.get("customer_work_report_detail2") as FormArray
  }

  //read only formarray
  get customerwkReport () : FormArray {
    return this.workReportForm.get("customer_info.customerwkReport") as FormArray
  }

  newTranExpense(): FormGroup {
    return this.fb.group({
      amount: ['', [Validators.required]],
      demand_type: ['', [Validators.required]],
      daily_transportation_detail_id: '',
      destination: ['', [Validators.required]],
      from_area: ['', [Validators.required]],
      print_flg: ['', [Validators.required]],
      rourte_type: ['', [Validators.required]],
      to_area: ['', [Validators.required]],
      transport_type: ['', [Validators.required]],
      use_date: ['', [Validators.required]],
    })
  }

  newSettleExpense(): FormGroup {
    return this.fb.group({
      ex_amount: ['', [Validators.required]],
      ex_attendee: ['', [Validators.required]],
      ex_payee: ['', [Validators.required]],
      ex_purpose: ['', [Validators.required]],
      ex_receipt_no: ['', [Validators.required]],
      ex_use_date: ['', [Validators.required]],
      expense_report_detail_id: ''
    })
  }

  addTranExpense() {
    this.transport_expense_detail.push(this.newTranExpense());
  }

  addSettleExpense() {
    this.expense_report_detail.push(this.newSettleExpense());
  }

  removeTranExpense(t:number) {
    this.transport_expense_detail.removeAt(t);
    
    let customerBill = 0;
    let customTotal = 0;
    for(let i=0; i < this.tranExpen.transport_expense_detail.length; i++){
          
      if(this.tranExpen.transport_expense_detail[i].demand_type == 1) {
        if(i != t) {
          customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
        }
      }
      //transporation all total
      if(i != t) {
        customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
      }
    }

    this.postData.custom_bill = "";
    this.postData.custom_total = "";

    var newCustomBill = customerBill;
    var newCustomToal = customTotal;

    this.postData.custom_bill = newCustomBill.toString();
    this.postData.custom_total = newCustomToal.toString();
  }

  removeSettleExpense(i:number) {
    this.expense_report_detail.removeAt(i);
  }

  selectedValueTran(id:any = '', lang='') {
    if(id == '') {
      return '';
    } else {
      if(lang == 'en')
        return this.transporation[id].value;
      else
      return this.transporationjp[id].value;
    }
  }

  selectedValueAttendance(id:any = '', lang='') {
    //console.log(id, lang, "select attendance");
    if(id == '') {
      return '';
    } else {
      if(lang == 'en')
        return this.attendance_type[id].value;
      else
        return this.attendance_type_jp[id].value;
    }
  }

  selectedValueYesNo(id=0, lang='') {
    if(isString(id)) {
      return '';
    } else {
      if(lang == 'en')
        return this.tran_expen[id].value;
      else
      return this.tran_expen_jp[id].value;
    }
  }

  selectedValueBilling(id = 0, lang='') {
    //console.log(typeof(id), id, "what is ?");
    if( isString(id) ) {
      return '';
    } else {
      if(lang == 'en') {
        return this.deman_type[id].value;  
      }else{
        return this.deman_type_jp[id].value;
      }
      
    }
    
  }

  

  customerBillTotal(total = 0) {
    console.log(total, "total ");
    this.res_total += total;
    return this.res_total;
  }

  getCustomerBilling(){
    this.sample = 0;
    this.sample = (<HTMLInputElement>document.getElementById("customerBilling")).value;
    console.log(this.sample,"get value by id");

    return this.sample;
  }

  selectedValueRoute(id = 0, lang = '') {
    if( isString(id) ) {
      return '';
    } else {
      if(lang == 'en')
        return this.route_type[id].value;
      else
      return this.route_type_jp[id].value;
    }
    
  }

  validateInputs() {
    
    return (
      this.postData.year && 
      this.postData.month
    );
  }

  languageDefault() {
    
    // console.log("language selecct", this.postData);
     this.langSwitch.langSwitchData$.subscribe( (res: any) => {
 
       this.postData.language = res.language;
       //console.log(this.postData.language, 'assign');

      //this.pubHoliday = '祝日';
       
       if(!this.postData.language) {
         this.postData.language = 'en';
        // this.pubHoliday = 'Public holiday';
         //console.log(this.postData.language, 'default');
       }
      
       this.postData.pages = 'work_report';
 
       this.langServe.languageData(this.postData).subscribe( (res: any) => {
         console.log(res.data, ' work_report language');
         this.dataLeng = res.data;
       });
 
     } );
 
  }

  onOptionsSelected(event){
    //const value = event.target.value;
    //this.selected = value;
    this.customerSelectOpt = event;
    console.log(event, "Customer Attendance list 1");
  }

  onOptionsSelected2(event){
    //const value = event.target.value;
    //this.selected = value;
    this.customerSelectOpt2 = event;
    console.log(event);
  }

  onClickDays(choice: number) {
    if(choice == 0) {
      this.checkBoxList = [
        { val: 'Work hour not entered', isChecked: true },
        { val: 'Weekend', isChecked: false },
        { val: 'All', isChecked: false }
      ];
      //Display not entered
      this.notEnter = false;
      this.weekEnd = true;
      this.entered = true;
      this.notEnterMsg = false;

    } else if(choice == 1) {
      this.checkBoxList = [
        { val: 'Work hour not entered', isChecked: false },
        { val: 'Weekend', isChecked: true },
        { val: 'All', isChecked: false }
      ];
      //Display weekend
      this.notEnter = true;
      this.weekEnd = false;
      this.entered = true;
      this.notEnterMsg = true;
    } else {
      this.checkBoxList = [
        { val: 'Work hour not entered', isChecked: false },
        { val: 'Weekend', isChecked: false },
        { val: 'All', isChecked: true }
      ];
      //Display not entered
      this.notEnter = false;
      this.weekEnd = false;
      this.entered = false;
      this.notEnterMsg = true;
    }

    //console.log(choice);
    
  }


  scrolltoElement(placetogo) {
    document.getElementById(placetogo).scrollIntoView();
    
    console.log(this.postData.mySelect + " and assign");
  }

  myToggleFunction(ID, index) {
    var x = document.getElementById(ID);
    var d = document.getElementById("down" + index);
    var p = document.getElementById("up" + index);

    if (x.style.display === "none") {
      x.style.display = "block";
      d.style.display = "none";
      p.style.display = "block";
    } else {
      x.style.display = "none";
      d.style.display = "block";
      p.style.display = "none";
    }

  }

  myWkToggleFunction(ID, index) {
    var x = document.getElementById(ID);
    var d = document.getElementById("wkdown" + index);
    var p = document.getElementById("wkup" + index);

    if (x.style.display === "none") {
      x.style.display = "block";
      d.style.display = "none";
      p.style.display = "block";
    } else {
      x.style.display = "none";
      d.style.display = "block";
      p.style.display = "none";
    }
  }

  AllToggleFunction(inputNo) {
    for (let index = 0; index < 30; index++) {
      var x = document.getElementById("mywk" + index);
      var d = document.getElementById("wkdown" + index);
      var p = document.getElementById("wkup" + index);

      if(x) { //check id is exist or not
        if (x.style.display === "none") {
          x.style.display = "block";
          d.style.display = "none";
          p.style.display = "block";
        } else {
          x.style.display = "none";
          d.style.display = "block";
          p.style.display = "none";
        }
      }
      
      
    }
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;
  }

  toggleSectionCustomer(index) {
    //this.customerWorkReport.customer_workreport_items[index].open = !this.customerWorkReport.customer_workreport_items[index].open;
  }

  toggleSection2(index) {
    this.showDetails = !this.showDetails;
  }

  toggleSectionc() {
    this.customerWorkReport.open = !this.customerWorkReport.open;
  }

  changeDisplayClick(whichblk: String) {

    if(whichblk == 'customer') {
      this.trasport_switch =false;
      this.customer_switch = true;
      this.customer_switch2 = false;
      this.settle_switch = false;
      this.workreport_switch = false;
    }else if(whichblk == 'customer2') {
      this.trasport_switch =false;
      this.customer_switch = false;
      this.customer_switch2 = true;
      this.settle_switch = false;
      this.workreport_switch = false;
    } else if(whichblk == 'transporatiion') {
      this.trasport_switch =true;
      this.customer_switch = false;
      this.customer_switch2 = false;
      this.settle_switch = false;
      this.workreport_switch = false;
    } else if(whichblk == 'settlement') {
      this.trasport_switch =false;
      this.customer_switch = false;
      this.customer_switch2 = false;
      this.settle_switch = true;
      this.workreport_switch = false;
    } else {
      this.trasport_switch =false;
      this.customer_switch = false;
      this.customer_switch2 = false;
      this.settle_switch = false;
      this.workreport_switch = true;
    }
    
  }

  memberNoFormat(mbno: Number) {
    if( mbno < 10 ) {
      this.fmmemberNo = "000" + mbno;
    } else if (mbno < 100) {
      this.fmmemberNo = "00" + mbno;
    } else if (mbno < 1000) {
      this.fmmemberNo = "0" + mbno;
    } else {
      this.fmmemberNo = mbno;
    }

    return this.fmmemberNo;
  }

  statusDly(status: Number) {
    if (status == 0) {
      this.status_dly = "Not prducted";
    } else if (status == 1) {
      this.status_dly = "Not applied";
    } else if (status == 2) {
      this.status_dly = "Applied";
    } else if (status == 3) {
      this.status_dly = "Remand";
    } else if (status == 4) {
      this.status_dly = "Accepted";
    } else {
      this.status_dly = "-";
    }
  }

  getWorkReportByCurrentDate() {
    this.postData.member_id = this.loginUser['email'];
    this.postData.token = this.loginUser['access-token'];

    this.memberService.memberData(this.postData).subscribe( (res: any) => {
      console.log(res.member_info);
    });
  }

  isWeekEnd(wkday: any) {
    var date = new Date(wkday);
    return date.getDay() === 6 || date.getDay() === 0;
  }


  goMoreInfoClient(urls: String) {
    this.postData.member_id = this.loginUser.member_id;
    this.postData.token = this.loginUser['access-token'];
    console.log(this.postData);
    //search by date again
    this.customerInfo.getcustomerData(this.postData).subscribe( (res: any) => {
      this.newData = res;
      this.customerWorkReport = res.customer_work_report[0];
      this.clientRpFlg = res.customer_work_report;
     // this.workingPattern = res.project_info.working_hour;
      this.workingHour = res.work_report;
  
      console.log(this.workPatternExist);
      this.customerInfo.updateCustomerData(res);

      let navigationExtras: NavigationExtras = {
        state: {
          special: this.newData.project_info,
          clientrpflg: this.clientRpFlg,
          workingPattern: this.workPatternExist,
          workingHour: this.workingHour,
          year: this.postData.year,
          month: this.postData.month
        }
      }; 
    
      this.router.navigate([urls], navigationExtras);
    });
  }

  downloadPdfUrl() {
    const url = "https://wrkessence.phoenix.xyz/general/excel/mobile_download/test.php?member_id=" + this.postData.member_id + "&idname=" + this.postData.idname + "&year=" + this.postData.year + "&month=" + this.postData.month + "&auth_token=" + this.postData.token;
    return url;
  }

  //logout action
  logoutAction() {
    this.authService.logout();
  }

  searchWkReportAction() {
    this.postData.member_id = this.loginUser['member_id'];
    this.postData.token = this.loginUser['access-token'];
    //this.postData.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjE5Mi4xNjguMTEzLjExMyIsImVtYWlsIjoiay5tYWVubyIsImNvbXBhbnkiOiJ5dHMiLCJjb21wYW55X25hbWUiOiJcdTMwYTRcdTMwYThcdTMwZWRcdTMwZmNcdTMwYzZcdTMwYTRcdTMwZWJcdTMwYmFcdTY4MmFcdTVmMGZcdTRmMWFcdTc5M2UiLCJhY2Nlc3NfbGV2ZWwiOjQsImlhdCI6MTYwNjk3MjQxNywiZXhwIjoxNjA3MTQ1MjE3fQ.P97RhRKcPsJC-_-hBNL2gpT6CVvW9a_632X5JRXJlDI';
    console.log(this.postData, " wk report search");
    

    if(this.validateInputs()) {
      this.memberService.memberData(this.postData).subscribe( (res: any) => {
       console.log(res, "all data");

        if(res.status == 0) {//logout if session expired
          this.logoutAction();
        }

        this.comp_sName = res.company_name_short;
        this.mbInfo = res.member_info;
        this.workPattern = res.project_info;
        this.customerWorkReport = res.customer_work_report;
        this.information = res.work_report_detail;
        this.project_patten = res.project_info;

        console.log(this.mbInfo, "member info")

        //transporation expense
        this.tranExpen = res.transport_expense;
        this.expenReport = res.expense_report;
        this.work_reports = res.work_report;

        this.totalWkHour = this.work_reports.mng_total_work_time;
        //console.log( this.work_reports.mng_total_work_time, " totalWkHour");

        this.postData.workreport_id = res.workreport_id;

        console.log( this.information, " Work Pattern form");
        this.customer_wk_count = 0;

        //clear the old data
        this.member_info.clear();

        let mformGroup = this.fb.group({
          account: this.postData.account,
          workreport_id: this.postData.workreport_id,
          new_note: ''
        });

        this.member_info.push(mformGroup);

        //clear the old data
        this.work_report_detail.clear();

        for(let i=0; i < this.information.length; i++){
          let formGroup = this.fb.group({
            atendance_type: this.information[i].atendance_type,
            atendance_type_mail: this.information[i].atendance_type_mail,
            pattern: this.information[i].pattern,
            //start_time: [this.information[i].start_time, [Validators.required, Validators.min(1)]],
            start_time: [this.information[i].start_time, [Validators.required]],
            end_time: [this.information[i].end_time, [Validators.required]],
            holiday_flg: this.information[i].holiday_flg,
            holiday_name: this.information[i].holiday_name,
            report_date: this.information[i].report_date,
            total_break_time: this.information[i].total_break_time,
            night_break_time: this.information[i].night_break_time,
            total_work_time: this.information[i].total_work_time,
            over_work_time: this.information[i].over_work_time,
            night_work_time: this.information[i].night_work_time,
            deduction_time: this.information[i].deduction_time,
            reason: this.information[i].reason,
            workreport_detail_id: this.information[i].workreport_detail_id,
            
          });
          
          this.work_report_detail.push(formGroup);
        }

        //clear the old data of
        this.work_report.clear();

        let wkformGroup = this.fb.group({
          end_time: this.work_reports.end_time,
          max_width_time: this.work_reports.max_width_time,
          min_width_time: this.work_reports.min_width_time,
          mng_deduction_time:  this.hourTominutes(this.work_reports.mng_deduction_time),
          mng_night_work_time:  this.hourTominutes(this.work_reports.mng_night_work_time),
          mng_orver_work_time:  this.hourTominutes(this.work_reports.mng_over_work_time),
          mng_total_work_time: this.hourTominutes(this.work_reports.mng_total_work_time),
          rslt_absence_num: this.work_reports.rslt_absence_num,
          rslt_deduction_time: this.hourTominutes(this.work_reports.rslt_deduction_time),
          rslt_harf_holiday: this.work_reports.rslt_harf_holiday,
          rslt_holiday: this.work_reports.rslt_holiday,
          rslt_night_work_time: this.hourTominutes(this.work_reports.rslt_night_work_time),
          rslt_operated_time: this.hourTominutes(this.work_reports.rslt_operated_time),
          rslt_orver_work_time: this.hourTominutes(this.work_reports.rslt_over_work_time),
          rslt_salary_time: this.hourTominutes(this.work_reports.rslt_salary_time),
          rslt_special_holiday: this.work_reports.rslt_special_holiday,
          rslt_total_holiday: this.work_reports.rslt_total_holiday,
          start_time: this.work_reports.start_time,
          working_time: this.work_reports.working_time
        });

        this.work_report.push(wkformGroup);
        
        this.transport_expense_detail.clear();

        this.workReportForm.controls.daily_transportation_id.setValue(this.tranExpen.daily_transportation_id);
        
        var customHold = 0;

        this.postData.custom_total = this.tranExpen.total_amount;

        for(let i=0; i < this.tranExpen.transport_expense_detail.length; i++){
          
          if(this.tranExpen.transport_expense_detail[i].demand_type == 1) {
            customHold = customHold + parseInt(this.tranExpen.transport_expense_detail[i].amount);
          }
          
          let tformGroup = this.fb.group({
            amount: [this.tranExpen.transport_expense_detail[i].amount, [Validators.required]],
            demand_type: [this.tranExpen.transport_expense_detail[i].demand_type, [Validators.required]],
            daily_transportation_detail_id: this.tranExpen.transport_expense_detail[i].daily_transportation_detail_id,
            destination: [this.tranExpen.transport_expense_detail[i].destination, [Validators.required]],
            from_area: [this.tranExpen.transport_expense_detail[i].from_area, [Validators.required]],
            print_flg: [this.tranExpen.transport_expense_detail[i].print_flg, [Validators.required]],
            rourte_type: [this.tranExpen.transport_expense_detail[i].rourte_type, [Validators.required]],
            to_area: [this.tranExpen.transport_expense_detail[i].to_area, [Validators.required]],
            transport_type: [this.tranExpen.transport_expense_detail[i].transport_type, [Validators.required]],
            use_date: [this.tranExpen.transport_expense_detail[i].use_date, [Validators.required]],
            custom_bill: this.customerBilling
          });
          
          this.transport_expense_detail.push(tformGroup);
        }

        this.postData.custom_bill = customHold.toString();

        //project info data holder
        this.project_info.clear();

        let wkPattern = [];

        console.log(res.project_info.length, "project info length")

        for(let i=0; i < res.project_info.length; i++){

          for(let c=0; c < res.project_info[i].working_hour.length; c++){
            //work pattern start
            if(i==0) {
              this.customerSelectOpt = res.project_info[i].client_report_flg;
            }
            if(i==1) {
              this.customerSelectOpt2 = res.project_info[i].client_report_flg;
            }

            console.log(this.customerSelectOpt, "CUstomer list 1")
            //if((res.project_info[i].working_hour[c].pattern_flg == 1) && (i == 0) ) {
            if((res.project_info[i].working_hour[c].pattern_flg == 1) ) {  
              this.innerPattern = {
                  break_time: res.project_info[i].working_hour[c].break_time,
                  end_time: res.project_info[i].working_hour[c].end_time,
                  pattern: res.project_info[i].working_hour[c].pattern,
                  start_time: res.project_info[i].working_hour[c].start_time,
                  working_time: res.project_info[i].working_hour[c].working_time
              };

              wkPattern.push(this.innerPattern);

            }
            
          }

          let formGroup = this.fb.group({
            client_id: res.project_info[i].client_id,
            client_name: res.project_info[i].client_name,
            client_report_flg: res.project_info[i].client_report_flg,
            contract_type: res.project_info[i].contract_type,
            end_contract_date: res.project_info[i].end_contract_date,
            individual_contract_id: res.project_info[i].individual_contract_id,
            individual_contract_no: res.project_info[i].individual_contract_no, 
            max_width_time: res.project_info[i].max_width_time,
            min_width_time: res.project_info[i].min_width_time,
            mng_clt_total_work_time: this.hourTominutes(res.project_info[i].mng_clt_total_work_time),
            project_id: res.project_info[i].project_id,
            project_name: res.project_info[i].project_name,
            start_contract_date: res.project_info[i].start_contract_date,
            working_time: res.project_info[i].working_time,
            workreport_client_id: res.project_info[i].workreport_client_id,
          });

          this.project_info.push(formGroup);

        }//END: project info data holder 

        this.workPatternExist = wkPattern;

        console.log(this.workPatternExist, "pattern exist");

        

        //console.log( this.customerWorkReport.length, "customer length");

        this.customer_work_report_detail.clear();
        this.customer_work_report_detail2.clear();

        console.log(this.customer_wk_count, this.customerWorkReport, "Customer wk count")
        
        //customer workreport more than 1 or not
        for(let c=0; c < this.customerWorkReport.length; c++){
          //More than 1 customer detail attendance
          if(c == 0) { //array index 0
            if(res.project_info.length > 0) {
              this.clientInfo1 = 1;
              
            }

            // if(this.customerSelectOpt == 1){
            //   for(let i=0; i < this.information.length; i++){
            //     let cformGroup = this.fb.group({
            //       clt_holiday_flg: this.information[i].holiday_flg,
            //       clt_holiday_name: this.information[i].holiday_name,
            //       customer_attendance_type: this.information[i].attendance_type,
            //       customer_start_time: this.information[i].start_time,
            //       customer_end_time: this.information[i].end_time,
            //       report_date: this.information[i].report_date,
            //       customer_break_time: this.information[i].break_time,
            //       customer_night_break_time: this.information[i].night_break_time,
            //       customer_total_work_time: this.information[i].total_work_time,
            //       over_work_time: this.information[i].over_work_time,
            //       night_work_time: this.information[i].customer_night_work_time,
            //       customer_reason: this.information[i].customer_reason,
            //       workreport_client_detail_id: this.customerWorkReport[c].customer_workreport_items[i].workreport_client_detail_id,
            //     });
              
            //     this.customer_work_report_detail.push(cformGroup);
            //   }
            // } else {
            
            // }

            for(let i=0; i < this.customerWorkReport[c].customer_workreport_items.length; i++){
              let cformGroup = this.fb.group({
                clt_holiday_flg: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_flg,
                clt_holiday_name: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_name,
                customer_attendance_type: this.customerWorkReport[c].customer_workreport_items[i].customer_attendance_type,
                customer_start_time: this.customerWorkReport[c].customer_workreport_items[i].customer_start_time,
                customer_end_time: this.customerWorkReport[c].customer_workreport_items[i].customer_end_time,
                report_date: this.customerWorkReport[c].customer_workreport_items[i].report_date,
                customer_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_break_time,
                customer_night_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_break_time,
                customer_total_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_total_work_time,
                over_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_over_work_time,
                night_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_work_time,
                customer_reason: this.customerWorkReport[c].customer_workreport_items[i].customer_reason,
                workreport_client_detail_id: this.customerWorkReport[c].customer_workreport_items[i].workreport_client_detail_id,
              });
            
              this.customer_work_report_detail.push(cformGroup);
            }
          
          console.log(this.customer_work_report_detail, "customer attendance list")
            
          } else if(c == 1) {
            if(res.project_info.length > 0) {
              this.clientInfo2 = 1;
            }
            for(let i=0; i < this.customerWorkReport[c].customer_workreport_items.length; i++){
              let cformGroup = this.fb.group({
                clt_holiday_flg: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_flg,
                clt_holiday_name: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_name,
                customer_attendance_type: this.customerWorkReport[c].customer_workreport_items[i].customer_attendance_type,
                customer_start_time: this.customerWorkReport[c].customer_workreport_items[i].customer_start_time,
                customer_end_time: this.customerWorkReport[c].customer_workreport_items[i].customer_end_time,
                report_date: this.customerWorkReport[c].customer_workreport_items[i].report_date,
                customer_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_break_time,
                customer_night_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_break_time,
                customer_total_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_total_work_time,
                over_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_over_work_time,
                night_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_work_time,
                customer_reason: this.customerWorkReport[c].customer_workreport_items[i].customer_reason,
                workreport_client_detail_id: this.customerWorkReport[c].customer_workreport_items[i].workreport_client_detail_id
              });
              
              this.customer_work_report_detail2.push(cformGroup);
            }
          }

          this.customer_wk_count = c;

        }

        //settlement expense start
        this.expense_report_detail.clear();

        //expense report id
        this.workReportForm.controls.expense_report_id.setValue(this.expenReport.expense_report_id);

        for(let i=0; i < this.expenReport.expense_report_detail.length; i++){
          
          let eformGroup = this.fb.group({
            ex_amount: [this.expenReport.expense_report_detail[i].ex_amount, [Validators.required]],
            ex_attendee: [this.expenReport.expense_report_detail[i].ex_attendee, [Validators.required]],
            ex_payee: [this.expenReport.expense_report_detail[i].ex_payee, [Validators.required]],
            ex_purpose: [this.expenReport.expense_report_detail[i].ex_purpose.trim(), [Validators.required]],
            ex_receipt_no: [this.expenReport.expense_report_detail[i].ex_receipt_no, [Validators.required]],
            ex_use_date: [this.expenReport.expense_report_detail[i].ex_use_date, [Validators.required]],
            expense_report_detail_id: this.expenReport.expense_report_detail[i].expense_report_detail_id
          });
          
          this.expense_report_detail.push(eformGroup);
        }

        //console.log(this.expense_report_detail)

       // console.log(this.customer_wk_count, "customer work report 1 multi");
        this.memberService.updateMemberData(res);

      },
      (error: any) => {
        this.toastService.presentToast('Network Issue. Try again!');
      })
    } else {
      this.toastService.presentToast("date can't empty");
    }

    this.router.navigate(['/home/workreport'], { queryParams: { 'year': this.postData.year, 'month': this.postData.month } });
    
    
  }

  //encrypt the string
  str_encrypt(string){
    let result = '';
    let key = 'Phoenix2021';
    let k = string.length;
    for (let i = 0; i < k; i++) {
      let char = string.substr(i, 1);
      let keyChar = key.substr((i % key.length)-1, 1);
      char = String.fromCharCode(char.charCodeAt(0)+keyChar.charCodeAt(0));
      result += char;
      
    }
    return btoa(result);
  }

  addSecond(hourmin: String){
    let res_hms = hourmin + ":00";
    return res_hms;
  }

  startNEndTimeCheck(time_status: any) {
   let status = false;
    if( (time_status == '00:00') || (time_status == '00:0') || (time_status == '00:') || (time_status == '00') || (time_status == '0') || (time_status == '') ) {
      status = true;
      //console.log(status, time_status, " time");
    }

    return status;
  }

  

  mouseOutWkAttendance(startTime:any, endTime:any, breakTime:any=0, i, nBreakTime:any=0){
    this.default_wktime = 0;
    
    var ToverTime = '';
    var ovth = '';
    var ovtm = '';
    var selectID = "0";
    let deductionVal: any;
    let deductionHour: any;
    let attendanceType1 = 0;
    
    if(this.information[i].pattern == "A") {
      selectID = "0";
    } else if(this.information[i].pattern == "B") {
      selectID = "1";
    } else if(this.information[i].pattern == "C") {
      selectID = "2";
    } else if(this.information[i].pattern == "D") {
      selectID = "3";
    } else if(this.information[i].pattern == "E") {
      selectID = "4";
    } else if(this.information[i].pattern == "F") {
      selectID = "5";
    }

    let tWkHour = this.diff_time_convert(startTime, endTime, breakTime);
    
    //console.log( this.hourTominutes(tWkHour),this.hourTominutes(this.workPatternExist[selectID].working_time), "Pattern Key")

    if(this.hourTominutes(tWkHour) > 480) {
      var ToverTimeHour = 0;
      var ToverTimeMin = 0;
      ToverTimeHour = Math.floor((this.hourTominutes(tWkHour) - 480)/60);
      ToverTimeMin = Math.floor((this.hourTominutes(tWkHour) - 480)%60);
      
      if(ToverTimeHour.toString().length == 1) {
        ovth = "0"+ToverTimeHour;
      } else {
        ovth = ""+ToverTimeHour;
      }

      if(ToverTimeMin.toString().length == 1) {
        ovtm = "0"+ToverTimeMin;
      } else {
        ovtm = ""+ToverTimeMin;
      }

      ToverTime = ovth +":"+ovtm;

    } else {
      ToverTime = "00:00";
       
    }

    console.log(this.hourTominutes('22:00'), this.hourTominutes(endTime), this.hourTominutes('01:00'), "22:00 endTime 01:00")
    let nightBreakTime = "00:00";

    let NBtime = this.calc_late_night(startTime, endTime);

    if(nBreakTime > 0) { //if night break time greater than 0, reduce from total wktime
      NBtime = NBtime - nBreakTime;
    }
    console.log(this.minsToHour(NBtime), NBtime, nBreakTime, "Night BT Calculate")

    //deduction calculation
    if(( this.hourTominutes(startTime) == this.hourTominutes(this.workPatternExist[selectID].start_time) ) 
    && ( this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time) )
    ){ //startTime is equal with pattern start time

      deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
      
      deductionHour = this.minsToHour(deductionVal);

      attendanceType1 = 7;

    } else if(( this.hourTominutes(startTime) < this.hourTominutes(this.workPatternExist[selectID].start_time) ) 
    && ( this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time) )
    ) { //startTime is smaller than pattern start time

      deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
      
      deductionHour = this.minsToHour(deductionVal);

      attendanceType1 = 7;
      console.log(attendanceType1, "attendance Change")

    } else if(( this.hourTominutes(startTime) > this.hourTominutes(this.workPatternExist[selectID].start_time) ) 
    && ( this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time) )
    ) { //startTime is greater than pattern start time

      deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
      
      deductionHour = this.minsToHour(deductionVal);

      attendanceType1 = this.information[i].atendance_type;

    } else {
      
      deductionHour = this.information[i].deduction_time;

      attendanceType1 = this.information[i].atendance_type;
    }

    let curAttnRow = this.work_report_detail.controls[i].patchValue({
      atendance_type: attendanceType1,
      start_time: startTime,
      end_time: endTime,
      night_break_time: nBreakTime,
      night_work_time: this.minsToHour(NBtime),
      total_work_time: this.diff_time_convert(startTime, endTime, breakTime),
      over_work_time: ToverTime,
      deduction_time: deductionHour,
    });

    //update total working time
    this.updateTotalWorkTime();

    //Default total_work_time flg
    this.default_wktime = i;

  }

  customer_mouseOutWkAttendance(startTime:any, endTime:any, breakTime:any=0, i, nBreakTime:any=0) {
    this.default_wktime = 0;
    
    var ToverTime = '';
    var ovth = '';
    var ovtm = '';
    var selectID = "0";
    let deductionVal: any;
    let deductionHour: any;
    let attendanceType1 = 0;
    
    if(this.information[i].pattern == "A") {
      selectID = "0";
    } else if(this.information[i].pattern == "B") {
      selectID = "1";
    } else if(this.information[i].pattern == "C") {
      selectID = "2";
    } else if(this.information[i].pattern == "D") {
      selectID = "3";
    } else if(this.information[i].pattern == "E") {
      selectID = "4";
    } else if(this.information[i].pattern == "F") {
      selectID = "5";
    }

    let tWkHour = this.diff_time_convert(startTime, endTime, breakTime);
    
    //console.log( this.hourTominutes(tWkHour),this.hourTominutes(this.workPatternExist[selectID].working_time), "Pattern Key")

    if(this.hourTominutes(tWkHour) > 480) {
      var ToverTimeHour = 0;
      var ToverTimeMin = 0;
      ToverTimeHour = Math.floor((this.hourTominutes(tWkHour) - 480)/60);
      ToverTimeMin = Math.floor((this.hourTominutes(tWkHour) - 480)%60);
      
      if(ToverTimeHour.toString().length == 1) {
        ovth = "0"+ToverTimeHour;
      } else {
        ovth = ""+ToverTimeHour;
      }

      if(ToverTimeMin.toString().length == 1) {
        ovtm = "0"+ToverTimeMin;
      } else {
        ovtm = ""+ToverTimeMin;
      }

      ToverTime = ovth +":"+ovtm;

    } else {
      ToverTime = "00:00";
       
    }

    console.log(this.hourTominutes('22:00'), this.hourTominutes(endTime), this.hourTominutes('01:00'), "22:00 endTime 01:00")
    let nightBreakTime = "00:00";

    let NBtime = this.calc_late_night(startTime, endTime);

    if(nBreakTime > 0) { //if night break time greater than 0, reduce from total wktime
      NBtime = NBtime - nBreakTime;
    }
    console.log(this.minsToHour(NBtime), NBtime, nBreakTime, "Night BT Calculate")

    //deduction calculation
    if(( this.hourTominutes(startTime) == this.hourTominutes(this.workPatternExist[selectID].start_time) ) 
    && ( this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time) )
    ){ //startTime is equal with pattern start time

      deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
      
      deductionHour = this.minsToHour(deductionVal);

      attendanceType1 = 7;

    } else if(( this.hourTominutes(startTime) < this.hourTominutes(this.workPatternExist[selectID].start_time) ) 
    && ( this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time) )
    ) { //startTime is smaller than pattern start time

      deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
      
      deductionHour = this.minsToHour(deductionVal);

      attendanceType1 = 7;
      console.log(attendanceType1, "attendance Change")

    } else if(( this.hourTominutes(startTime) > this.hourTominutes(this.workPatternExist[selectID].start_time) ) 
    && ( this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time) )
    ) { //startTime is greater than pattern start time

      deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
      
      deductionHour = this.minsToHour(deductionVal);

      attendanceType1 = this.information[i].atendance_type;

    } else {
      
      deductionHour = this.information[i].deduction_time;

      attendanceType1 = this.information[i].atendance_type;
    }

    let curAttnRow = this.customer_work_report_detail.controls[i].patchValue({
      customer_attendance_type: attendanceType1,
      customer_start_time: startTime,
      customer_end_time: endTime,
      customer_night_break_time: nBreakTime,
      customer_total_work_time: this.diff_time_convert(startTime, endTime, breakTime)
    });

    //update total working time
    //this.updateTotalWorkTime();

    //Default total_work_time flg
    this.default_wktime = i;
  }

  calc_late_night(start_time, end_time) {
    let late_night_hour = 0;
    let late_night_min = 0;

    let s_time = start_time.split(":");
    let s_hour = parseInt(s_time[0]);
    let s_min = parseInt(s_time[1]);

    let e_time = end_time.split(":");
    let e_hour = parseInt(e_time[0]);
    let e_min = parseInt(e_time[1]);

    if ((start_time == '00:00') && (end_time == '00:00')) {
      return 0;
    }

    if (s_hour == e_hour) {
      late_night_hour = 7;
    }

    if (s_hour >= 22) {

      if (e_hour == 0)
        late_night_hour = 24 - s_hour;
      else if (s_hour < e_hour)
          late_night_hour = e_hour - s_hour;
      else if (e_hour <= s_hour)
      if (e_hour < 5)
          late_night_hour = e_hour + (24 - s_hour);
      else
          late_night_hour = 5 + (24 - s_hour);

    } else if((5 < s_hour) && (s_hour < 22)) {

      if (e_hour < s_hour) {
        if (e_hour <= 5)
            late_night_hour = 2 + e_hour
        else
            late_night_hour = 7
      } else{
        if ((24 > e_hour) && (e_hour >= 22))
          late_night_hour = e_hour - 22;
        else if (e_hour < 22)
          late_night_hour = 0;
      }

    } else if( s_hour <= 5) {
      
      if (e_hour < s_hour)
          late_night_hour = (5 - s_hour) + 2 + e_hour
      else if (e_hour <= 5)
          late_night_hour = e_hour - s_hour;
      else
          late_night_hour = 5 - s_hour;

    } else if( s_hour == 0) {
      if (e_hour < 5)
          late_night_hour = e_hour;
      else
          late_night_hour = 5;
    }

    if (22 <= s_hour) {
      if (s_min == 0) {
        late_night_min = e_min;
      }
      else {
        if (e_hour >= 5){
          late_night_hour = late_night_hour - 1;
          late_night_min = 60 - s_min;
        } 
        else {
          late_night_hour = late_night_hour - 1;
          late_night_min = e_min + (60 - s_min);
        }
              
      }
          
    } else if (s_hour < 5) {
      if (s_min == 0) {
            late_night_min = e_min
      } else {
        if (e_hour >= 5) {
          late_night_hour = late_night_hour - 1;
          late_night_min = 60 - s_min;
        } else {
          late_night_hour = late_night_hour - 1;
          late_night_min = e_min + (60 - s_min);
        }
            
      }
    } else {
      if (e_hour < 5)
        late_night_min = e_min;
      else if (e_hour >= 22)
        late_night_min = e_min;
    }

    let mints = (late_night_hour * 60) + late_night_min;

    if (mints >= 25200)
      mints = 25200;
     
    return mints;
        
  }

  minsToHour(mins:any){
    var hourss = 0;
    var minss = 0;
    var ovth = '';
    var ovtm = '';

    hourss = Math.floor(mins/60);
    minss = mins%60;
    console.log(minss, "min to format")

    if(hourss.toString().length == 1) {
      ovth = "0"+hourss;
    } else if( hourss < 1) {
      ovth = "00";
    } else {
      ovth = ""+hourss;
    }

    if(minss.toString().length == 1) {
      ovtm = "0"+minss;
    } else {
      ovtm = ""+minss;
    }

    return ovth + ":" + ovtm;

  }

  nightOverTime(startTime:any, endTime:any, nightBreak:any, totalNightBreak:any, c:number){
    let nightTotalwk:any = 0;

    console.log(nightBreak, totalNightBreak, "NBT show")
   let nighTotal = this.hourTominutes(this.work_report_detail.value[c].night_work_time);
    let totalWk:any = this.hourTominutes(this.work_report_detail.value[c].total_work_time);

    if(nightBreak > 0)
      nightTotalwk = nighTotal - nightBreak;
    else {
      //var newNbTotal =  (this.hourTominutes(this.work_report_detail.value[c].night_work_time) + this.work_report_detail.value[c].night_break_time);
      nightTotalwk = this.calc_late_night(startTime, endTime);
    }
    

    if(nightBreak > 0) {
      totalWk = totalWk - nightBreak;
    } else {
      totalWk = this.totalWorkTime(startTime, endTime, nightBreak, this.work_report_detail.value[c].total_break_time);
      //totalWk = totalWk - this.work_report_detail.value[c].break_time;
      console.log(this.work_report_detail.value[c].total_break_time, "wk min Total4");
    }
    
    console.log(this.minsToHour(this.work_report_detail.value[c].night_break_time), this.work_report_detail.value[c].night_work_time, "night overT result");
 
    //add and update value to work_report object
    this.work_report_detail.controls[c].patchValue({
      night_break_time: nightBreak,
      night_work_time: this.minsToHour(nightTotalwk),
      total_work_time: this.minsToHour(totalWk),
    });

    //update total working time
    this.updateTotalWorkTime();
  }

  customer_nightOverTime(startTime:any, endTime:any, nightBreak:any, breakTime:any=0, c:number){
    let Totalwkmin:any = 0;

    console.log(nightBreak, "NBT show")
    let start_Time = this.hourTominutes(startTime);
    let end_Time = this.hourTominutes(endTime);

    if(end_Time > start_Time)
      Totalwkmin = end_Time - start_Time;
    else {
      Totalwkmin = start_Time - end_Time;
    }
    

    if(nightBreak > 0) {
      Totalwkmin = Totalwkmin - nightBreak;
    }

    if(breakTime > 0) {
      Totalwkmin = Totalwkmin - breakTime;
    }
    
    //add and update value to work_report object
    this.customer_work_report_detail.controls[c].patchValue({
      customer_total_work_time: this.minsToHour(Totalwkmin),
    });

    //update total working time
    //this.updateTotalWorkTime();
  }

  holidayCheck(attenID:any){ //holiday or not
   // console.log(attenID, "hello")
    let res:any=false;

    if(attenID == 1) {
      res = true;
    } else if(attenID == 2) {
      res = true;
    } else if(attenID == 3) {
      res = true;
    } else if(attenID == 10) {
      res = true;
    } else if(attenID == 8) {
      res = true;
    }

    return res;
  }

  holidayNameSwitch(attenID:any, lang:any='en'){
    let holiday:any='';

    if( (attenID == 1) && (lang == 'en') ) {
      holiday = 'Public holiday';
    } else if( (attenID == 1) && (lang == 'jp') ) {
      holiday = '祝日';
    } else if( (attenID == 2) && (lang == 'en') ) {
      holiday = 'Shift Holiday';
    } else if( (attenID == 2) && (lang == 'jp') ) {
      holiday = 'シフト休';
    } else if( (attenID == 3) && (lang == 'en') ) {
      holiday = 'Paid Holiday';
    } else if( (attenID == 3) && (lang == 'jp') ) {
      holiday = '有給休暇';
    } else if( (attenID == 8) && (lang == 'en') ) {
      holiday = 'Special Holiday';
    } else if( (attenID == 3) && (lang == 'jp') ) {
      holiday = '特別休日';
    } else if( (attenID == 10) && (lang == 'en') ) {
      holiday = 'Substitute Holiday';
    } else if( (attenID == 3) && (lang == 'jp') ) {
      holiday = '代替休日';
    }

    return holiday;
  }

  totalWorkTime(startTime:any, endTime:any, nightBreak:any=0, bkTime:any=0){
    let totalWkmin:any;

    totalWkmin = ((1440 - this.hourTominutes(startTime)) + this.hourTominutes(endTime)) - (parseInt(nightBreak) + parseInt(bkTime));
    
    console.log(totalWkmin, "total wk min3");

    return totalWkmin;
  }

  mouseOutNightOverTime(nightBreak:any, totalNightBreak:any, c:number){
    var tNightBreak = nightBreak;
    console.log(nightBreak, this.information[c].night_break_time, this.work_report_detail.value[c].night_work_time, "hello");
    //nightBreak = (this.hourTominutes(this.information[c].night_work_time) + this.information[c].night_break_time ) - nightBreak;
    nightBreak = this.hourTominutes(this.work_report_detail.value[c].night_work_time) - nightBreak;
    console.log(nightBreak, "night overT result");

    var renewHour = Math.floor(nightBreak/60);
    var renewMin = nightBreak%60;

    var TrenewHour = ""; 
      
      if( renewHour < 1) {
        renewHour = 0;
      }
      TrenewHour = ""+ Math.floor( renewHour );
      var TrenewMin = ""; 
      TrenewMin = renewMin+'';

      if(renewHour.toString().length == 1) {
        TrenewHour = "0" + TrenewHour;
       }
       if(renewMin.toString().length == 1) {
        TrenewMin = "0" + TrenewMin;
       }
       

       TrenewHour = TrenewHour+":"+TrenewMin;

    //add and update value to work_report object
    this.work_report_detail.controls[c].patchValue({
      night_break_time: nightBreak,
      night_work_time: TrenewHour
    });

    //get total working time
    let totalNightWorkTime = 0;
    for(let i=0; i < this.work_report_detail.length; i++){
      totalNightWorkTime = totalNightWorkTime + this.hourTominutes(this.work_report_detail.value[i].night_work_time);
      
    }
    console.log(totalNightWorkTime - tNightBreak, " total night working time");

    //add and update value to work_report object
    this.work_report.controls[0].patchValue({
      mng_night_work_time: totalNightWorkTime,
      rslt_night_work_time: totalNightWorkTime
    });
  }

  //reduce breaktime from workhour
  mouseOverReduceBreakTime(bkTime: any, tWktime: any, overTimeNew: any, i) {

    var reduceh = 0;
    var reducemin = 0;
    var tWorkHour = '';
    var tWorkMin = '';

    //calculate TOTAL working hour
    if(this.default_wktime == i) {
      reduceh = Math.floor((this.hourTominutes(this.work_report_detail.value[i].total_work_time) - bkTime)/60);
      reducemin = (this.hourTominutes(this.work_report_detail.value[i].total_work_time) - bkTime)%60;
      //this.default_wktime = 0;
    } else {
      reduceh = Math.floor((this.hourTominutes(this.information[i].total_work_time) - bkTime)/60);
      reducemin = (this.hourTominutes(this.information[i].total_work_time) - bkTime)%60;
    }
    


    if(reduceh.toString().length == 1) {
       tWorkHour = "0"+reduceh;
    } else {
       tWorkHour = ""+reduceh;
    }

    if(reducemin.toString().length == 1) {
       tWorkMin = "0"+reducemin;
    } else {
       tWorkMin = ""+reducemin;
    }

    var reduceh2 = 0;
    var reducemin2 = 0;
    let tWorkHour2 = "";
    let tWorkMin2 = "";
    
    //OVER TIME CALCULATION
    if(this.hourTominutes(overTimeNew) >= bkTime) {
      overTimeNew = this.hourTominutes(overTimeNew) - bkTime;

      reduceh2 = Math.floor(overTimeNew/60);
      reducemin2 = overTimeNew%60;

      if(reduceh.toString().length == 1) {
        tWorkHour2 = "0"+reduceh2;
      } else {
        tWorkHour2 = ""+reduceh2;
      }

      if(reducemin.toString().length == 1) {
        tWorkMin2 = "0"+reducemin2;
      } else {
        tWorkMin2 = ""+reducemin2;
      }
    } else {
      tWorkHour2 = "00";
      tWorkMin2 = "00";
    }
    

    //add and update value to work_report object
    this.work_report_detail.controls[i].patchValue({
       total_work_time: tWorkHour+":"+tWorkMin,
       over_work_time: tWorkHour2+":"+tWorkMin2
    });

    //update total working time
    this.updateTotalWorkTime();
  }

  //reduce breaktime from workhour
  customer_mouseOverReduceBreakTime(bkTime: any, tWktime: any, overTimeNew: any, i) {

    var reduceh = 0;
    var reducemin = 0;
    var tWorkHour = '';
    var tWorkMin = '';

    //calculate TOTAL working hour
    if(this.default_wktime == i) {
      reduceh = Math.floor((this.hourTominutes(this.customer_work_report_detail.value[i].customer_total_work_time) - bkTime)/60);
      reducemin = (this.hourTominutes(this.customer_work_report_detail.value[i].customer_total_work_time) - bkTime)%60;
      //this.default_wktime = 0;
      console.log(reduceh, reducemin, i, "BreakTime reduce")
    } else {
      reduceh = Math.floor((this.hourTominutes(this.customerWorkReport[0].customer_workreport_items[i].customer_total_work_time) - bkTime)/60);
      reducemin = (this.hourTominutes(this.customerWorkReport[0].customer_workreport_items[i].customer_total_work_time) - bkTime)%60;
    }


    if(reduceh.toString().length == 1) {
       tWorkHour = "0"+reduceh;
    } else {
       tWorkHour = ""+reduceh;
    }

    if(reducemin.toString().length == 1) {
       tWorkMin = "0"+reducemin;
    } else {
       tWorkMin = ""+reducemin;
    }

    var reduceh2 = 0;
    var reducemin2 = 0;
    let tWorkHour2 = "";
    let tWorkMin2 = "";
    
    //OVER TIME CALCULATION
    if(this.hourTominutes(overTimeNew) >= bkTime) {
      overTimeNew = this.hourTominutes(overTimeNew) - bkTime;

      reduceh2 = Math.floor(overTimeNew/60);
      reducemin2 = overTimeNew%60;

      if(reduceh.toString().length == 1) {
        tWorkHour2 = "0"+reduceh2;
      } else {
        tWorkHour2 = ""+reduceh2;
      }

      if(reducemin.toString().length == 1) {
        tWorkMin2 = "0"+reducemin2;
      } else {
        tWorkMin2 = ""+reducemin2;
      }
    } else {
      tWorkHour2 = "00";
      tWorkMin2 = "00";
    }
    

    //add and update value to work_report object
    this.customer_work_report_detail.controls[i].patchValue({
      customer_total_work_time: tWorkHour+":"+tWorkMin,
    });

    //update total working time
    this.updateTotalWorkTime();
  }

  mintoHourFormat(minuts: any) {
    var reduceh = 0;
    var reducemin = 0;
    var tWorkHour = '';
    var tWorkMin = '';

    //calculate working hour
    reduceh = Math.floor(minuts/60);
    reducemin = minuts%60;
    console.log(reduceh, reducemin, "min to hour");

    // return tWorkHour+":"+tWorkMin;
  }

  //to reset to night breaktime
  mouseOverResetNightBT(r:number){
    // this.work_report_detail.controls[r].patchValue({
    //   night_break_time: 0
    // });

    //get total working time
    let totalNightWorkTime = 0;
    for(let i=0; i < this.work_report_detail.length; i++){
      totalNightWorkTime = totalNightWorkTime + this.hourTominutes(this.work_report_detail.value[i].night_work_time);
      
    }
    console.log(totalNightWorkTime, " total night working time");

    //add and update value to work_report object
    this.work_report.controls[0].patchValue({
      mng_night_work_time: totalNightWorkTime,
      rslt_night_work_time: totalNightWorkTime
    });
  }

  hourTominutes(hours: String) {
    let stTime = hours.split(':'); // split it at the colons
    var hour1 = parseInt(stTime[0]) * 60;  
    var minute1 = parseInt(stTime[1]);

    return hour1 + minute1;
  }

 

  diff_time_convert(st_time, ed_time, bkTime, NbkTime=0){ 
    let stTime = st_time.split(':'); // split it at the colons
    var hour1 = stTime[0];  
    var minute1 = stTime[1];

    let endTime = ed_time.split(':'); // split it at the colons
    var hourend = endTime[0];
    var minute2 = endTime[1];
    var hour2 = 0;

    if(hourend < hour1) {
      
      hour2 = (24 - hour1) + parseInt(hourend);
      console.log(hour1, hourend, "greater than hour1")
      
      //compare second minute is less than first minute
      if(minute1 > minute2) {
        minute2 = minute2 + 60;
        hour2 = hour2 - 1;
        var res_minute = minute2 - minute1;
        var res_hour = hour2;
      } else {
        var res_minute = minute2 - minute1;
        var res_hour = hour2;
      }

    } else {
      
      hour2 = parseInt(hourend);
      
      //compare second minute is less than first minute
      if(minute1 > minute2) {
        minute2 = minute2 + 60;
        hour2 = hour2 - 1;
        var res_minute = minute2 - minute1;
        var res_hour = hour2 - hour1;
      } else {
        var res_minute = minute2 - minute1;
        var res_hour = hour2 - hour1;
      }
    }

    var res_hourf = "";
    var res_minf = "";
    
    if(res_hour.toString().length == 1) {
      res_hourf = "0" + res_hour+":";
    } else {
      res_hourf = res_hour+":";
    }

    if(res_minute.toString().length == 1) {
      res_minf = "0" + res_minute;
    } else {
      res_minf = res_minute+"";
    }

    var newHourMin = res_hourf + res_minf;

    var newSpTime = newHourMin.split(':');

    var renewMin = 0;
    var renewHour = 0;
    if(newSpTime[1] > bkTime) {
      renewMin = parseInt(newSpTime[1]) - bkTime;
      renewHour = parseInt(newSpTime[0]);
    } else {
      renewMin = (parseInt(newSpTime[1]) + 60) - bkTime;
      renewHour = parseInt(newSpTime[0]) - 1;

      if(renewMin == 60) {
        renewMin = 0;
        renewHour = renewHour + 1;
      }else if(renewMin > 60) {
        renewMin = renewMin - 60;
        renewHour = renewHour + 1;
      }
    }

    var TrenewHour = ""; 
    TrenewHour = ""+ renewHour;
    var TrenewMin = ""; 
    TrenewMin = renewMin+'';

   if(renewHour.toString().length == 1) {
    TrenewHour = "0" + TrenewHour;
   }
   if(renewMin.toString().length == 1) {
    TrenewMin = "0" + TrenewMin;
   }

   console.log(TrenewHour, TrenewMin, " check value");
 
    //return this.reduce_breaktime(res_hourf, res_minf, bkTime);   
    return TrenewHour + ":" + TrenewMin;
  }

  reduce_breaktime(rhourmin, bKTime) {
    var resMin = 0;

    return rhourmin + ":" + resMin;
  }

  
  //select change pattern in work attendance and auto fill
  changePattern(selectedVal: any, ID: any) {

    console.log('Selected', selectedVal.detail.value, ID);
    let selectID = "";
    let overTimeChange = '';

    if(selectedVal.detail.value == "A") {
      selectID = "0";
    } else if(selectedVal.detail.value == "B") {
      selectID = "1";
    } else if(selectedVal.detail.value == "C") {
      selectID = "2";
    } else if(selectedVal.detail.value == "D") {
      selectID = "3";
    } else if(selectedVal.detail.value == "E") {
      selectID = "4";
    } else if(selectedVal.detail.value == "F") {
      selectID = "5";
    } else {
      selectID = "";
    }

    //check workingtime is greater than 480 min or not
    if(selectID != '') {
      if( this.hourTominutes(this.workPatternExist[selectID].working_time) > 480 ) {
        overTimeChange = (this.hourTominutes(this.workPatternExist[selectID].working_time) - 480) + "";
        console.info(overTimeChange, "OverTime Change")
        overTimeChange = this.minsToHour(overTimeChange)+'';
      } else {
        overTimeChange = this.work_report_detail.value[ID].over_work_time + "";
      }
    }
    

    let reportDate = this.work_report_detail.value[ID].report_date;
    
    if(selectedVal.detail.value.length > 0) {
      console.log("empty selected 2", overTimeChange, selectID)
     
     // console.log('Selected id', selectID);

      let curList = this.work_report_detail.controls[ID].patchValue({
        pattern: this.workPatternExist[selectID].pattern,
        start_time: this.workPatternExist[selectID].start_time,
        end_time: this.workPatternExist[selectID].end_time,
        total_break_time: this.workPatternExist[selectID].break_time,
        total_work_time: this.workPatternExist[selectID].working_time,
        over_work_time: overTimeChange,
        deduction_time: "00:00",
      });
      
    } else {

      let curList = this.work_report_detail.controls[ID].patchValue({
        pattern: '',
        start_time: '00:00',
        end_time: '00:00',
        total_break_time: '0',
        total_work_time: '00:00',
        over_work_time: '00:00',
        deduction_time: "00:00",
      });

      console.log("empty selected")
    }

    //update total working time
    this.updateTotalWorkTime();

    //submit invalid
   //console.info(this.work_report_detail.value[ID].reason.invalid ) ;

    
  }

  //on change get current customer bill total
  changeCustomerBill(e, t){
    console.log(e.detail.value, "events")
    let customerBill = 0;
    let customTotal = 0;

    for(let i=0; i < this.tranExpen.transport_expense_detail.length; i++){
          
      if(this.tranExpen.transport_expense_detail[i].demand_type == 1) {
          customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
          console.log(customerBill, "custom new bill")
      }
      
      //transporation all total
      customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
      console.log(customTotal, "custom new total")
    }

    this.postData.custom_bill = "";
    this.postData.custom_total = "";

    customerBill = customerBill + parseInt(e.detail.value);
    customTotal = customTotal + parseInt(e.detail.value);

    this.postData.custom_bill = customerBill.toString();
    this.postData.custom_total = customTotal.toString();

    //return  this.postData.custom_bill = newCustomBill.toString();
  }

  changeTranTotalorCustom(e, t){
    console.log(e.detail.value, "events")
    let customerBill = 0;
    let customTotal = 0;

    for(let i=0; i < this.tranExpen.transport_expense_detail.length; i++){
          
      if(this.tranExpen.transport_expense_detail[i].demand_type == 1) {
          customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
          console.log(customerBill, "custom new bill")
      }
      
      //transporation all total
      customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;

    }

    this.postData.custom_bill = "";
    this.postData.custom_total = "";

    this.postData.custom_bill = customerBill.toString();
    this.postData.custom_total = customTotal.toString();
  }

  //on change get current customer bill total
  changeTransportationBill(e, t){
    console.log(e.detail.value, "events")
    let customerBill = 0;
    let customTotal = 0;
    for(let i=0; i < this.tranExpen.transport_expense_detail.length; i++){
          
      if(this.tranExpen.transport_expense_detail[i].demand_type == 1) {
        if(i != t) {
          customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
          console.log(customerBill, "custom new bill")
        }
      }
      //transporation all total
      if(i != t) {
        customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
      }
    }

    this.postData.custom_bill = "";
    this.postData.custom_total = "";

    var newCustomBill = customerBill + parseInt(e.detail.value);
    var newCustomToal = customTotal + parseInt(e.detail.value);

    this.postData.custom_bill = newCustomBill.toString();
    this.postData.custom_total = newCustomToal.toString();

    return  this.postData.custom_bill = newCustomBill.toString();
  }

  displayPattern(pt:any) {
   // console.log(pt,"display pattern");
    let dly_msg = '';
    if( (pt.length > 0) && (pt != '0') ) {
      dly_msg = "勤務時間_パタン " + pt;
    } else {
      dly_msg ="-";
    }
      
    return dly_msg;
  }

  updateTotalWorkTime() {
    //get total working time
    let totalWorkTime = 0;
    let totalOverWorkTime = 0;
    let totalDeducTime = 0;
    for(let i=0; i < this.work_report_detail.length; i++){
      totalWorkTime = totalWorkTime + this.hourTominutes(this.work_report_detail.value[i].total_work_time);
      totalOverWorkTime = totalOverWorkTime + this.hourTominutes(this.work_report_detail.value[i].over_work_time);
      totalDeducTime = totalDeducTime + this.hourTominutes(this.work_report_detail.value[i].deduction_time);
     // console.log(this.work_report_detail.value[i].total_work_time, i, " total working time");
    }
    console.log(totalWorkTime, " total working time");
    //add and update value to work_report object
    this.work_report.controls[0].patchValue({
      mng_deduction_time: totalDeducTime,
      rslt_deduction_time: totalDeducTime,
      mng_total_work_time: totalWorkTime,
      rslt_operated_time: totalWorkTime,
      mng_orver_work_time: totalOverWorkTime,
      rslt_orver_work_time: totalOverWorkTime
    });

      //update value to project-> object
      if(this.project_info.controls.length > 0) {
        this.project_info.controls[0].patchValue({
          mng_clt_total_work_time: totalWorkTime
        });
      }
      
  }

  addProject() {
    if(this.clientData.client_id.length > 0) {
      this.project_info.controls[0].setValue({
        client_id: this.clientData.client_id,
        client_name: this.clientData.client_name,
        client_report_flg: this.clientData.client_report_flg,
        contract_type: this.clientData.contract_type,
        end_contract_date: this.clientData.end_contract_date,
        individual_contract_id: this.clientData.individual_contract_id,
        individual_contract_no: this.clientData.individual_contract_id, 
        max_width_time: this.clientData.individual_contract_id,
        min_width_time: this.clientData.individual_contract_id,
        mng_clt_total_work_time: '',
        project_id: this.clientData.project_id,
        project_name: this.clientData.project_name,
        start_contract_date: this.clientData.start_contract_date,
        working_time: '',
        workreport_client_id: ''
      });
    }
  }
    

  onSubmit() {
    //update total working time
    this.updateTotalWorkTime();

    this.submitted = true;
   // this.workReportForm.removeControl('customer_work_report_detail');
    console.log(this.workReportForm.value, "Store before");
    // stop here if form is invalid
    if (this.workReportForm.invalid) {
      console.log(this.workReportForm.invalid);
      return;
    } 


    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skillsForm.value, null, 4));

    if( this.nextClicked == 1 ) {
      
      if(this.customerSelectOpt == 1) {
        this.customer_work_report_detail.clear();
        this.project_info.controls[0].patchValue({
          client_report_flg: 1
        });
      }

  
      // save change work report detail
      this.authService.updateWorkReportDetail(this.workReportForm.value, this.postData).subscribe(
        (res: any) => {
          console.log(res, " Store Change");
          if(res.error) {
            //if have some error
            this.toastService.presentToast(res.error);
          }else if(res.message) {
            //if have some error
            this.toastService.presentToast(res.message);
          } else {
            //if successfully save
            this.toastService.presentToast(res.msg);
          }
          
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue. Try again!');
        }
      );
    } else if( this.nextClicked == 2 ) {
      console.log(this.customerSelectOpt, "Customer Wkreport 1")
      //PDF upload, need to remove customer_work_report_detail
      if(this.customerSelectOpt == 1) {
        this.customer_work_report_detail.clear();
        this.project_info.controls[0].patchValue({
          client_report_flg: 1
        })
      }


      // Apply change work report detail
      this.authService.applyWorkReportDetail(this.workReportForm.value, this.postData).subscribe(
        (res: any) => {
          console.log(res, " Apply Change");
          if(res.error) {
            //if have some error
            this.toastService.presentToast(res.error);
          } else if(res.message) {
            //if have some error
            this.toastService.presentToast(res.message);
          } else {
            //if successfully save
            this.toastService.presentToast(res.msg);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue. Try again!');
        }
      );
    } else {
      // Apply Expense of work report detail
      this.authService.applyExpense(this.workReportForm.value, this.postData).subscribe(
        (res: any) => {
          console.log(res, " Apply Expsense");
          if(res.error) {
            //if have some error
            this.toastService.presentToast(res.error);
          } else if(res.message) {
            //if have some error
            this.toastService.presentToast(res.message);
          } else {
            //if successfully save
            this.toastService.presentToast(res.msg);
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue. Try again!');
        }
      );
    }
    

    console.log(this.workReportForm.value);
  }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
       const files = event.target.files[0];
       this.myUploadForm.patchValue({
         file: files
       });
    }

    console.log(this.myUploadForm)
  }

  onUploadPDF(pjinfo: any) {
    console.log(pjinfo[0], this.postData);
    const formData = new FormData();
    formData.append('file', this.myUploadForm.get('file').value);
    formData.append("member_id", this.postData.member_id);
    formData.append("project_id", pjinfo[0].project_id);
    formData.append("individual_contract_id", pjinfo[0].individual_contract_id);
    formData.append("workreport_client_id", pjinfo[0].workreport_client_id);

    //member_id, project_id, individual_contract_id, workreport_client_id, file and token
    this.authService.uploadPDFWorkReportDetail(formData, this.postData).subscribe( 
      (res: any) => {
        console.log(res, " pdf upload result")
        if(res.status = 1) {
          //if successfully uploaded
          this.toastService.presentToast(res.message);
        } else {
          //if have some error
          this.toastService.presentToast(res.message);
        }
    } )
 
  }

  //Customer workreport pdf remove
  onRemovePdf_customerwk(pjinfo2: any) {
    console.log(pjinfo2[0], this.customer_work_report_detail, "Remove PDF");

    this.authService.removePDFCustomerWorkreport(pjinfo2[0].workreport_client_id, this.postData).subscribe( 
      (res: any) => {
        this.fileName_dly = 1;
        console.log(res, "PDF Removed")
        if(res.status = 1) {
          //if successfully removed
          this.toastService.presentToast(res.message);
        } else {
          //if have some error
          this.toastService.presentToast(res.message);
        }
      }
     );
  }

  onStoreClick() {
    this.nextClicked = 1;
  }

  onApplyReportClick() {
    this.nextClicked = 2;
  }

  onApplyExpenseClick() {
    this.nextClicked = 3;
  }

  downloadWorkReportExcel(urls: String, routeDld: String, Redir: String) {
    console.log(this.str_encrypt(this.postData.member_id.toString())," Download Workreport");

    let url = "https://stgessence.phoenix.xyz"+ routeDld +"?member_id=" + this.str_encrypt(this.postData.member_id.toString()) + "&idname=" + this.str_encrypt(this.postData.account) + "&lang=" + this.str_encrypt(this.postData.language) + "&auth_token=" + this.postData.token + "&year=" + this.str_encrypt(this.postData.year) + "&month=" + this.str_encrypt(this.postData.month) + "&short_comp_name=" + this.str_encrypt(this.postData.short_comp) + "&redirect=" + this.str_encrypt(Redir);
    
    var popout = window.open(url,'psplayer',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=auto,min-height=1500");
     window.setTimeout(function(){
         // This hides the address bar:
         popout.scrollTo(0, 1);
     }, 0);
      window.setTimeout(function(){
          // This hides the address bar:
          popout.close();
      }, 3000);
  }



  downloadFile(response: any, fileName?: string) {
    const blob = new Blob([response.body], { type: response.headers.get('content-type') });
    fileName = fileName || response.headers.get('content-disposition').split(';')[0];
    const file = new File([blob], fileName, { type: response.headers.get('content-type') });
    //saveAs(file);
}

  gotoPagesAction(urls: String, tabsopen: String) {
    this.router.navigate([urls], { queryParams: { year: this.postData.year, month: this.postData.month, tabs: tabsopen }});
  }

  

}
