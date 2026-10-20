

function BtnComponent({className, text}){
    // console.log(`Props Btn is ${className}, ${text}`)
    return(
        <div>
            <button type="button" className={className}>{text}</button>
        </div>
    )
}

export default BtnComponent;