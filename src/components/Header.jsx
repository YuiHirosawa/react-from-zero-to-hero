export default function Header({
        children

} ){
    return <header className="header">
        <div>This is my header</div>
        <div className="bg-yellow-500 p-4">
            {children}
        </div>
    </header>
}