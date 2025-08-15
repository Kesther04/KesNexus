export default function Footer(){
    return (
        <>
        <footer className="flex items-center justify-center p-4 bg-gray-300 dark:bg-gray-900 border-t-2 dark:border-gray-950 transition ease-in-out duration-200 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark hover:underline cursor-pointer">
            <p>&copy; Copyright {new Date().getFullYear()} | All rights reserved.</p>
        </footer>
        </>
    )
}