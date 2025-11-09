export default function Header() {
    function scrollToFooter() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' 
        })
    }

    return (
        <div className="bg-blue-500 text-white p-4">
            <h2 className="text-center font-bold">Шапка сайта</h2>
            
            <div className="flex flex-col max-w-[600px] mx-auto gap-5 mt-5">
                <button 
                    onClick={scrollToFooter}
                    className="border border-white py-1 px-2"
                >
                    Перейти к футеру
                </button>
            </div>
        </div>
    )
}