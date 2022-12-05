import './nav.styles.css'
const Nav = ({links, brandName}) => {
    return(
        <nav>
            <div className='logo'>
                {brandName}
            </div>
            <div className='links' > 
                { links.map( (link, index) => <a href='#' key={index}> {link} </a>) }
            </div>
        </nav>
    )
}
export default Nav;