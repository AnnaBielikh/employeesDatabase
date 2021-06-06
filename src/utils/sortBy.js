export const sortBy = (list, type, property) => {
  return list.sort((a, b) => {
    if (a[property] > b[property]) {
      return type === "asc" ? 1 : -1;
    }
    if (a[property] < b[property]) {
      return type === "asc" ? -1 : 1;
    }
    return 0;
  });
};
