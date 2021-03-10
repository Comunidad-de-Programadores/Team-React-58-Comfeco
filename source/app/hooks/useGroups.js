import apiConnect from 'app/apiConnect';
import { useEffect } from 'react';
import { useFetch, useState } from 'react-fetch-ssr';

const useGroups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState({ default: [], search: [] });
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const searching = () => {
    if (!!filter && !!search) {
      return groups.default.filter(
        (group) =>
          group.name.toLowerCase().startsWith(search) &&
          (group.tag === filter || group.tags === filter)
      );
    }

    if (filter) {
      return groups.default.filter((group) => group.tag === filter || group.tags === filter);
    }
    if (search) {
      return groups.default.filter((group) => group.name.toLowerCase().startsWith(search));
    }
    return [];
  };

  const selectFilters = (data) => {
    let values = [];

    data.forEach((item) => {
      if (item.tag && !values.includes(item.tag)) values = [...values, item.tag];
      if (item.tags && !values.includes(item.tags)) values = [...values, item.tags];
    });
    return values;
  };

  useFetch(async () => {
    if (!groups.length) {
      setIsLoading(true);
      const response = await apiConnect({ method: 'get', url: '/group' });

      if (response.status === 'error') {
        setIsLoading(false);
        console.error(response.errorMessage);
      } else {
        setGroups({ ...groups, default: response.groups });
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    setGroups({ ...groups, search: searching() });
  }, [search, filter]);

  return {
    groups,
    isLoading,
    handleSearchChange,
    handleFilterChange,
    selectFilters: selectFilters(groups.default),
  };
};

export default useGroups;
