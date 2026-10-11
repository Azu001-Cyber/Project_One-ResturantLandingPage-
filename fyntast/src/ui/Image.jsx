

export default function ImageComponent({src, alt, className}) {
    console.log(src)
    return (
        <div>
            <img src={src} alt={alt} className={className}  />
        </div>
    )
}