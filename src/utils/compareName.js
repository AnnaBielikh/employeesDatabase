export function sortAsc(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}

export function sortDesc(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
}

export function sortRelevance(a, b) {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
}
