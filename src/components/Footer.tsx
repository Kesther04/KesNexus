export default function Footer(){
    return (
        <>
        <footer className="flex items-center justify-center p-4 bg-gray-300 border-t-2 transition ease-in-out duration-200 text-gray-700 hover:text-blue-950 hover:underline cursor-pointer">
            <p>&copy; Copyright {new Date().getFullYear()} | All rights reserved.</p>
        </footer>
        </>
    )
}