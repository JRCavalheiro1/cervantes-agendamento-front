
type BackdropProps = {
    onClick : () => void;
}
export function Backdrop({ onClick } : BackdropProps) {
    return (
        <div className="fixed inset-0 bg-preto-100 z-40 md:hidden" onClick={onClick}/>
    )
}