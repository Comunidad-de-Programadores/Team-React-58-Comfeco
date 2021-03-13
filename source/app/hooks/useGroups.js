/* eslint-disable prettier/prettier */
import apiConnect from 'app/apiConnect';
import { useFetch, useState } from 'react-fetch-ssr';
import useSession from './useSession';

const useGroups = () => {
  const { session } = useSession()
  const [groups, setGroups] = useState({ isLoading: true, items: [] });
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleFilterChange = (e) => {
    if (search !== '') setSearch('')
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    if (filter !== 'all') setFilter('all')
    setSearch(e.target.value.trim());
  };

  useFetch(async () => {
    if (!groups.length) {
      const response = await apiConnect({ method: 'get', url: '/group' });
      setGroups({ isLoading: false, items: response.groups });
    }
  }, []);

  // get tag list and delete tag repeated
  let avalilableFilterList = groups.items.map((currentGroup) => currentGroup.tag); 
  avalilableFilterList = avalilableFilterList.filter((currentTag, index, self) => self.indexOf (currentTag) === index)

  // apply Filter
  let itemsFiltered = groups.items;
  if (filter && filter !== 'all') itemsFiltered = itemsFiltered.filter(({ tag }) => tag === filter)

  // apply search
  if (search) {
    itemsFiltered = itemsFiltered.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
  }

  // check if user is joined into group 
  itemsFiltered = itemsFiltered.map(( group ) => session.group === group.id ? {...group, joined: true } : {...group, joined: false })

  return {
    filter,
    search,
    isLoading: groups.isLoading,
    groups: itemsFiltered,
    avalilableFilterList,
    handleSearchChange,
    handleFilterChange,
  };
};

export default useGroups;
