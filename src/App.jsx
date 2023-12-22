import { useEffect, useState } from "react";


const App = () => {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
   const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
    .then(data=> setItems(data))
  }, [])
  console.log(search,"kdi");
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   setSearch(e.target.value);
  
  const filteredMobiles = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.processor.toLowerCase().includes(search.toLowerCase()) ||
      item.OS.toLowerCase().includes(search.toLowerCase())
    );
  });
    setSearchResult(filteredMobiles)
  }
  console.log(searchResult);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={search}
          onChange={handleChange}
          style={{}} /> <button type="submit"> search</button>
      </form>
      
    </div>
  );
};

export default App;