import "./Menu.css"
import MenuCard from "./MenuCard";

const MenuPage=(props)=>{
    const {allMenus}= props;
    return(
        <>
        <section className="dogs-container">
            {allMenus.map((menu)=>{
                return(
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
                )
            })}
        </section>
        </>
    );
}
export default MenuPage;
