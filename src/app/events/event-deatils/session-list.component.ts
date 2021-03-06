import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSession: ISession[] = [];
  //Esto se llamara cada vez que alguna propiedad input tenga un nuevo valor
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSession = this.sessions.slice(0);
    } else {
      this.visibleSession = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  let resultado;
  if (s1.name > s2.name) {
    resultado = 1;
  } else if (s1.name === s2.name) {
    resultado = 0;
  } else {
    resultado = -1;
  }
  return resultado;
}
//Si esto retorna un valor positivo, quiere decir que el s2 es mas grande
//Si retorna un valor negativo quiere decir que el 1 es mas grande
//Si devuelve 0 quiere decir que son iguales
function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
