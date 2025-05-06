
type ContainerProps = {
    children: React.ReactNode;
}

export default function ContainerMain({children}: ContainerProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}