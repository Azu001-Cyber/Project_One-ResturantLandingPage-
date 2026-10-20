
export default function MenuButton({text, onclick, className}){
    return(
        <div>
            <button onClick={onclick} className={className}>{text}</button>
        </div>
    )
}

