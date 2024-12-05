import facebook from "../assets/images/facebook-f-brands-solid.svg"
import twitter from "../assets/images/twitter-brands-solid.svg"
import instagram from "../assets/images/instagram-brands-solid.svg"

function Footer() {
    return (
        <footer className="flex flex-col items-center gap-8 mt-12 mb-5 lg:mt-2">
            <article className="flex items-center gap-4 w-fit">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-blue-50 rounded-full">
                    <img src={facebook} alt="facebook" className="size-5" />
                </a>
                <a href="http://www.x.com" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-blue-50 rounded-full">
                    <img src={twitter} alt="x" className="size-5" />
                </a>
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-blue-50 rounded-full">
                    <img src={instagram} alt="instagram" className="size-5" />
                </a>
            </article>
            <span className="text-gray-400 font-thin text-sm">&copy; Copyright Ping. All rights reserved.</span>
        </footer>
    )
}

export default Footer