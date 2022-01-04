import Navbar from './Header'
import Footer from './Footer'
import DateComponent from './DateComponent'

export default  function Layout ({ children }) {
    return (
        <>
        {/* <DateComponent/> */}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
