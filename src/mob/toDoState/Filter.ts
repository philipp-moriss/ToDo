import { action, makeObservable, observable } from 'mobx';

import { FilterType } from '../../component/ToDoList/types/types';

class Filter {
  @observable
  filter: FilterType = 'All';

  constructor() {
    makeObservable(this);
  }

  @action
  setFilter(filter: FilterType): void {
    this.filter = filter;
  }
}

export const filter = new Filter();
