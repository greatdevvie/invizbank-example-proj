import { NavLink } from "react-router-dom";

export default function FooterPart() {
    return (
        <footer className="flex justify-center border-white border-t-1 w-full h-40">
            <div className="flex max-w-[1280px] mx-8 pt-8 flex-col md:flex-row gap-4 md:gap-10 text-white h-full">
                <p className="text-5xl cursor-default font-bold">Inviz<span className="text-[#2E9CCA] font-normal">Bank</span></p>
                <div className="flex md:gap-10 flex-col md:flex-row w-full h-full">
                    <div className="flex justify-center w-full h-full flex-row gap-10">
                        <NavLink to="/conditions"><p className="cursor-pointer transition-colors hover:text-[#2E9CCA]">Условия</p></NavLink>
                        <NavLink to="/faq"><p className="cursor-pointer transition-colors hover:text-[#2E9CCA]">FAQ</p></NavLink>
                        <NavLink to="/about"><p className="cursor-pointer transition-colors hover:text-[#2E9CCA]">О нас</p></NavLink>
                    </div>
                </div>
                <p className="text-4xl hidden md:flex cursor-default font-semibold">Приватность наш код.</p>
            </div>
        </footer>
    )
}