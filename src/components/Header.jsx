import logo from "../assets/images/logo.svg"

function Header() {
    return (
        <header className="flex flex-col items-center gap-6">
            <img src={logo} alt="Logo" className="mb-8" />
            <h2 className="text-3xl font-thin text-gray-400 lg:text-4xl">We are launching <span className="font-bold text-black">soon!</span></h2>
            <span className="font-semi-bold">Subscribe and get notified</span>
        </header>
    )
}

export default Header