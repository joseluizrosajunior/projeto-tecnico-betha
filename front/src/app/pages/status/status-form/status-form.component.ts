import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from './../shared/status.service';
import { Status } from './../shared/status.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {

  

  status: Status = new Status();
  statusNew: Status = new Status();

  novo: Boolean;

  selectedId: string = 'novo';

  constructor(
    private statusService: StatusService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.status.isPersonalizado = true;
    this.route.paramMap.subscribe(
      params => {
        this.selectedId = params.get('id') || "novo";
      }
    )
    this.getAcaoSelecionada();

    if (!this.novo){
      this.statusService.getById(this.selectedId).subscribe(dados => this.status = dados);
    }
  }

  salvarStatus(){
    this.statusService.create(this.status).subscribe(
      dados => this.statusNew = dados,
      ()=>{},
      ()=>{this.router.navigate(['/status'])}
      );
    this.status = new Status;
    
  }

  private getAcaoSelecionada(){
      this.novo = this.selectedId == "novo";
  }

}
