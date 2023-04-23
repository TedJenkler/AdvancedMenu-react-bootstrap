import Burger from  "../images/icon-menu.svg"
import X from "../images/icon-close-menu.svg"


const BurgerMenu = (props) => {
    return (
        <button onClick={props.onClick} className='menu-btn'>
            {props.active ? <img className='menu'  src={Burger} /> : <img className='menu'  src={X} />}
          </button>
    )
};

export default BurgerMenu