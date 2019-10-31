const getId = (obj) => {
  const { url } = obj;
  const urlArr = url.split('/');
  return urlArr[urlArr.length - 2];
};

export default getId;