import '@styles/globals.css'


import Navbar from '@components/Navbar'



export const metadata = {
    title: "Promptopia",
    description: "Promptopia is a place for writers to get inspiration for their next story. We provide a variety of prompts to help you get started.",

}



const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>  
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
