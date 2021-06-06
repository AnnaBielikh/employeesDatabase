import { sortBy } from "./sortBy";

const filterByPosition = (employeesList, filtersList) => {
  let newEmployeesList = employeesList.filter((item) =>
    filtersList.includes(item.position)
  );
  return newEmployeesList;
};

const searchByNameAndPhone = (employeesList, search) => {
  let newEmployeesList = employeesList.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase())
    );
  });
  return newEmployeesList;
};

export const getEmployeesByFilters = (
  employeesList,
  filtersList,
  search,
  sorting
) => {
  const type = sorting === "relevance" ? "asc" : sorting;
  const property = sorting === "relevance" ? "id" : "name";

  const emplListAfterFilter = filtersList.length
    ? filterByPosition(employeesList, filtersList)
    : employeesList;

  const emplListAfterSearch = search
    ? searchByNameAndPhone(emplListAfterFilter, search)
    : emplListAfterFilter;

  const emplListAfterSort = sorting
    ? sortBy(emplListAfterSearch, type, property)
    : emplListAfterSearch;

  return emplListAfterSort;
};
