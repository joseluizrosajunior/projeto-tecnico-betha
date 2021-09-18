import { Status } from './../../status/shared/status.model';
import { Usuario } from './../../usuario/shared/usuario.model';
import { Pessoa } from './../../pessoa/shared/pessoa.model';
import { Equip } from './../../equipamento/shared/equip.model';
export class Chamado{
    constructor(
        public id?:string,
        public equipamento?:Equip,
        public cliente?:Pessoa,
        public responsavel?:Usuario,
        public defeito?:string,
        public solucao?:string,
        public dataChamado?:Date,
        public status?:Status,
        public dataEncerramento?:Date
    ){}
}