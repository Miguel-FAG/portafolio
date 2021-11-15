import Nav from '../components/nav';

const Layout = ({children}) => (
    <>
        <Nav />

        <main className = "container py-4">
            {children}
        </main> 
    </>
)

export default Layout;

