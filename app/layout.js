import './global.css';
import { AuthContextProvider } from '../context/AuthContext';

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <head />
            <body>
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
            </body>
        </html>
    )
}

export default RootLayout;