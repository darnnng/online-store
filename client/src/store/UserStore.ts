import { makeAutoObservable } from 'mobx';

class UserStore {
  isAuth = false;
  user = {};
  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean) {
    this.isAuth = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser(user: any) {
    this.user = user;
  }

  // get findIsAuth() {
  //   return this.isAuth;
  // }

  // get getUser() {
  //   return this.user;
  // }
}

const userStore = new UserStore();
export default userStore;
