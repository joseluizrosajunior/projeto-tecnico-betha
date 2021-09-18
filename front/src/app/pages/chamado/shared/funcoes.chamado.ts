import { HistoricoChamado } from './historico-chamado.model';
import { ChamadoService } from './chamado.service';
import { Chamado } from './chamado.model';
import { Usuario } from '../../usuario/shared/usuario.model';
export function atualizarStatus(chamado: Chamado, user: Usuario, obs: string, service: ChamadoService){
    var h: HistoricoChamado = new HistoricoChamado();
    h.chamado = chamado;
    h.usuario = user;
    h.obs = obs;
    h.data = new Date();
    h.status = chamado.status;
    console.log(chamado.status);
    service.gravarHistorico(h).subscribe();
  }