const randomKey = (type) => {
  return `${type}_${Math.random().toString(36).substring(7)}`;
};

export default randomKey;
