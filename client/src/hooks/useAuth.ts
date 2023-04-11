import userStore from './../store/UserStore';

export const useAuth = () => {
  const user = userStore.isAuth;
  return !!user;
};
