export const useAuth = () => {
  const user = localStorage.getItem('token');
  return !!user;
};
