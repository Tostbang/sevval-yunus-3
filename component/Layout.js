import Nbar from "./navbar/Nbar"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
    return (
      <div>
        <Nbar />
        <main>{children}</main>
        
        <Footer />
      </div>
    );
  };
  
  export default Layout;
