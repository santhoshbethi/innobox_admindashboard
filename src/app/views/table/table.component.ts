import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
})
export class TableComponent implements OnInit {
  @Input() columns: any;
  @Input() rows: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.columns, this.rows);
  }
}
