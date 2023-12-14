import { useState } from "react";
import "./Menu.css"
import MenuCard from "./MenuCard";


const MenuPage=(props)=>{
    const {allMenus}= props;
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMenus = allMenus.filter(menu =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return(
        <>
         <div className="search-bar">
          <input
          className='search-mar'
            type="text"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={handleSearch}

          /> 
        </div>
        
        <section className="dogs-container">
       
       {filteredMenus.map((menu) => (
         <div key={menu.id}>
           <MenuCard
             id={menu.id}
             name={menu.name}
             breed={menu.breed}
             description={menu.description}
             price={menu.price}
             imageUrl={menu.imageUrl}
           />
         </div>
       ))}
     </section>
        </>
    );
}
export default MenuPage;
