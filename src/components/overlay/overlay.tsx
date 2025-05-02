
type overlayProps = {
    onClick : () => void;

}

export function Oveley({ onClick } : overlayProps) {

    return (
        <div className="fixed bg-bg-overlay left-0 top-0 right-0 bottom-0" onClick={onClick}/>
    )
}