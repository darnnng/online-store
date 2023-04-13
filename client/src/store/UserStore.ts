import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { IUser } from '@src/interfaces/IUser';

class UserStore {
  isAuth = false;
  user = {} as IUser;
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'UserStore',
      properties: ['isAuth', 'user'],
      storage: window.localStorage,
    });
  }

  setIsAuth(value: boolean) {
    this.isAuth = value;
  }

  setUser(user: IUser) {
    this.user = user;
  }
}

const userStore = new UserStore();
export default userStore;
