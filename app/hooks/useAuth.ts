export const useAuth = () => {
  const token = localStorage.getItem('Token');
  return token;
};
