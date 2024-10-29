import './Header.scss'

const Header = ({content}) => {
    
  return (
    <div className='header'>
        <div className='header__container'>
            <img className='header__logo' src={content.logo} alt="Logo de Terra" />
            <div className='header__menu'>
                <div className="header__line"></div>
                <div className="header__line"></div>
                <div className="header__line"></div>
            </div>
            <div className='header__buttons' data-testid="buttons">
                <button className="header__button">{content.menu.menu_item_1}</button>
                <button className="header__button">{content.menu.menu_item_2}</button>
                <button className="header__button">{content.menu.menu_item_3}</button>
            </div>
        </div>
    </div>
  )
}

export default Header