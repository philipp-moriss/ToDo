import { Card } from '../component/ToDoList/types/types';

export class LocalStore {
  static SetLocalStorage(param: Array<Card>): boolean {
    try {
      const setParam = JSON.stringify(param);
      localStorage.setItem('tasks', setParam);
      return true;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
  }

  static GetLocalStorage(): Array<Card> | boolean {
    try {
      const returnData = JSON.parse(<string>localStorage.getItem('tasks'));
      return returnData;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return false;
    }
  }
}
