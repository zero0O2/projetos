
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children}){
    return(
        <div className="flex flex-col">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}