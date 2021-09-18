import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Equip } from '../shared/equip.model';
import { EquipService } from '../shared/equip.service';

@Component({
  selector: 'app-equipamento-form',
  templateUrl: './equipamento-form.component.html',
  styleUrls: ['./equipamento-form.component.css']
})
export class EquipamentoFormComponent implements OnInit {

  equip: Equip = new Equip();
  equipNew: Equip = new Equip();

  novo: Boolean;

  selectedId: string = 'novo';

  constructor(
    private equipService: EquipService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedId = params.get('id') || "novo";
      }
    )
    this.getAcaoSelecionada();

    if (!this.novo){
      this.equipService.getById(this.selectedId).subscribe(dados => this.equip = dados);
    }
  }

  salvarEquip(){
    this.equipService.create(this.equip).subscribe(
      dados => this.equipNew = dados,
      ()=>{},
      ()=>{this.router.navigate(['/equipamentos'])}
      );
    this.equip = new Equip();
    
  }

  private getAcaoSelecionada(){
    this.novo = this.selectedId == "novo";
  }

}
