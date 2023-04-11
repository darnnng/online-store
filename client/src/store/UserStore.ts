import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class UserStore {
  isAuth = false;
  user = {};
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser(user: any) {
    this.user = user;
  }
  get auth() {
    return this.isAuth;
  }
}

const userStore = new UserStore();
export default userStore;
