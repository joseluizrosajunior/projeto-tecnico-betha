import { StatusService } from './../shared/status.service';
import { Component, OnInit } from '@angular/core';
import { Status } from '../shared/status.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  statusList: Status[] = [];

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.getAllStatus();
  }

  deleteStatus(id: string){
    if (confirm('deseja excluir?')){
      this.statusService.deleteStatus(id).subscribe(
        result => console.log(result),
        err => console.error(err)
        );
      this.getAllStatus();
    }
  }

  private getAllStatus(){
    this.statusService.getAll().subscribe(dados => this.statusList = dados);
  }

}
