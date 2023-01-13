import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.departmentId = id;

    // observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      this.departmentId = id;
    })
  }

  goPrevious() {
    let previousId = parseInt(this.departmentId) - 1;
    this.router.navigate(['departments', previousId]);
  }

  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }
}
