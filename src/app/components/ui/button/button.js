export default function Button({children, onClick, size, type, classes}) {

    const sizes = {
        "sm" : "px-5 py-3",
        "md" : "px-8 py-4",
        "lg" : "px-10 py-5",
    }

    return (
        <button type={type} onClick={onClick} className={`text-sm font-bold rounded ${classes} ${(size in sizes) ? sizes[size] : sizes["md"]}`}>
            {children}
        </button>
    )
}