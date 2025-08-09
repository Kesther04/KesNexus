export default function Footer(){
    return (
        <>
        <footer className="flex items-center justify-center p-4 bg-gray-400 border-t-2 text-white">
            <p>&copy;{new Date().getFullYear()} KesNexus. All rights reserved.</p>
        </footer>
        </>
    )
}