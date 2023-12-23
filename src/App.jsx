import  { useEffect, useState } from "react";
import { Input } from "./Styled/Input";
import { InputDiv } from "./Styled/InputDiv";

const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

 

  const filterData = (search, items) => {
    if (search === '') {
      return items; 
    } else {
      return items.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.brand.toLowerCase().includes(search.toLowerCase()) ||
          item.processor.toLowerCase().includes(search.toLowerCase()) ||
          item.OS.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  };

  const filteredItems = filterData(search, items);
console.log(filteredItems);
  return (
    <div>
      <InputDiv>
      <form >
        <Input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search by name, brand, processor, OS"
        />
        
      </form>
      </InputDiv>
      <ul>
        {filteredItems.length}
        {filteredItems.length > 0 ? (
          filteredItems.map((mobile) => (
            <li key={mobile.id}>
              <p>Name: {mobile.name}</p>
              <p>Brand: {mobile.brand}</p>
              <p>Processor: {mobile.processor}</p>
              <p>Price: {mobile.price}</p>
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
