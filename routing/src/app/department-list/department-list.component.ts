import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]

  public selectedId: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      this.selectedId = id;
    })
  }

  onSelect(department: any) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department: any) {
    return department.id == this.selectedId;
  }
}
