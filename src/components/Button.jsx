

export default function Button({ name, onClick,}){
    
    return(
        <div onClick={onClick} className="pt-2 flex justify-center">
        <button 
            className="bg-transparent rounded border border-gray-400 hover:border-gray-500 
            font-[Poppins] text-white h-8 w-full max-w-[26vh] gap-2 
            flex items-center justify-center rounded hover:scale-105 cursor-pointer transition-all duration-300 hover:text-gray-400 transition duration-75 px-4">
             {name}
        </button>
    </div>
    )
}