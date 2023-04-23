import Burger from  "../images/icon-menu.svg"


const BurgerMenu = (props) => {
    return (
        <button onClick={props.onClick} className='menu-btn'>
            <img className='menu' src={Burger} />
          </button>
    )
};

export default BurgerMenu