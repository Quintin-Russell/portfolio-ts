export default (screenSize: number): boolean => {
  if (screenSize < 768) return true;
  return false;
};
