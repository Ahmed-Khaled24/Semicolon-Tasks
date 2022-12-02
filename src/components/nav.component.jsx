import '../styles/nav.styles.css'
const Nav = ({links, brandName}) => {
    return(
        <nav>
            <div className='logo'>
                {brandName}
            </div>
            <div className='links' > 
                { links.map((link) => <a href='#'>{link}</a>) }
            </div>
        </nav>
    )
}
export default Nav;