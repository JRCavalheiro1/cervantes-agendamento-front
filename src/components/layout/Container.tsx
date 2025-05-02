
type ContainerProps = {
    children: React.ReactNode;
}

export default function ContainerMain({children}: ContainerProps) {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-5">
            {children}
        </div>
    )
}