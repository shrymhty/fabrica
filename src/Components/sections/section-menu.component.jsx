import CategoryItem from "../category-item/category-item.component";
import "./section-menu.styles.scss";

const Menu = ({ categories }) => {
    return (
        <div className="sections-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
      
    </div>
    )
}

export default Menu;