import Link from "next/link";


const Layout = ({children}) => {
    return (
        <>
            <header className="header">
                <h2>khashayar CRM</h2>
                <Link href={'/addCustomer'}>add customer</Link>
            </header>
            <div className="main">
                {children}
            </div>
            <footer className="footer">
                mobarez CRM project &copy;
            </footer>
        </>
    );
};

export default Layout;