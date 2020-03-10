import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name = 'Fynd task';
  dropdownList = [];
  selectedItems: Map<string, Array<any>>;
  display: boolean = true;
  AddBorder: boolean = false;
  dropdownSettings = {};
  users = [{ id: 1 }];

  
  ngOnInit() {
    this.selectedItems = new Map<string, Array<any>>();
    this.users
    this.dropdownList = [
      { "id": 1, "itemName": "Red" },
      { "id": 2, "itemName": "Green" },
      { "id": 3, "itemName": "Blue" },
      { "id": 4, "itemName": "Orange" },
      { "id": 5, "itemName": "Maroon" },
      { "id": 6, "itemName": "Black" }
    ];

    // this.selectedItems["1"] =  [
    //     {"id":2,"itemName":"Singapore"},
    //     {"id":3,"itemName":"Australia"}
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Colors",
      selectAllText: '',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };

    

    console.log(this.selectedItems)
  }

  showBtns()
  {
    this.display = false;
    this.AddBorder = true;
    event.stopPropagation();

  }

  removeClass()
  {
    this.display = true;
    this.AddBorder = false;
  }
  
  toggleClass()
  {
    this.display = false;
    this.AddBorder = true; 
    console.log(2)
  }
  

}
