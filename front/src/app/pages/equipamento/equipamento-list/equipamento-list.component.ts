import { Component, OnInit } from '@angular/core';
import { Equip } from '../shared/equip.model';
import { EquipService } from '../shared/equip.service';

@Component({
  selector: 'app-equipamento-list',
  templateUrl: './equipamento-list.component.html',
  styleUrls: ['./equipamento-list.component.css']
})
export class EquipamentoListComponent implements OnInit {

  equipList: Equip[] = [];

  constructor(private equipService: EquipService) { }

  ngOnInit() {
    this.getAllEquipamentos();
  }

  deleteEquip(id: string){
    if (confirm('deseja excluir?')){
      this.equipService.deleteEquip(id).subscribe(
        result => console.log(result),
        err => console.error(err),
        () => this.getAllEquipamentos()
        );
      
    }
  }

  private getAllEquipamentos(){
    this.equipService.getAll().subscribe(dados => this.equipList = dados);
  }

}
