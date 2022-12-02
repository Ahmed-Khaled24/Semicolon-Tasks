import '../styles/footer.styles.css'
const Footer = ({text}) => {
    return (
        <footer>
            <p className='footer-text'> {text} </p>
        </footer>
    )
}
export default Footer;