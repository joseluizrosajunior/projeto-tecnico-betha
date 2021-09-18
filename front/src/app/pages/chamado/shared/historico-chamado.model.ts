import { Usuario } from './../../usuario/shared/usuario.model';
import { Status } from './../../status/shared/status.model';
import { Chamado } from './chamado.model';
export class HistoricoChamado{
    constructor(
        public id?:string,
        public data?:Date,
        public obs?:string,
        public chamado?:Chamado,
        public status?:Status,
        public usuario?:Usuario
    ){}
}