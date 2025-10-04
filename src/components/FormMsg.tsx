interface FormMsgProps {
    setDisplay: (value: boolean) => void;
    styles: string;
    firstMsg: string;
    secondMsg: string;
}


export default function FormMsg ({setDisplay, styles, firstMsg, secondMsg}: FormMsgProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white dark:bg-gray-900 border border-gray-500 rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 scale-100 animate-fadeIn">

            <h2 className={`${styles} text-xl font-semibold mb-2`}>{firstMsg}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {secondMsg}
            </p>
            <button
                onClick={() => setDisplay(false)}
                className="px-4 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary/60 dark:hover:bg-primary-dark/60 transition"
            >
                Close
            </button>
            </div>
        </div>
    )
}