import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button,  Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { Logotype } from "../../assets/media/svg/logo";


export default function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        {
            id: 0,
            name: 'Условия',
            route: '/conditions'
        },
        {
            id: 1,
            name: 'FAQ',
            route: '/faq'
        },
        {
            id: 2,
            name: 'О нас',
            route: '/about'
        },
    ]
    useEffect(() => {
        console.log(menuOpen);
    }, [menuOpen])
    return (
        <>
            <Navbar className="bg-transparent text-white border-white" onMenuOpenChange={setMenuOpen} isBlurred>
                <NavbarMenuToggle
                    aria-label={menuOpen ? true : false}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <NavLink className="flex flex-row justify-center items-center" to="/">
                        <Logotype width={48} height={48}/>
                        <p className="mx-2 text-xl"><b>Inviz</b><span className="text-[#2E9CCA]">Bank</span></p>
                    </NavLink>
                </NavbarBrand>
                <NavbarContent className="hidden md:flex" justify="center">
                    {menuItems.map((e) => (
                        <NavbarItem key={e.id}>
                            <NavLink to={e.route}><span className="cursor-pointer font-semibold mx-2 transition-colors hover:text-[#2E9CCA]">{e.name}</span></NavLink>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarMenu className="text-white bg-transparent">
                    {menuItems.map((e) => (
                        <NavbarMenuItem key={`${e.id}`}>
                            <NavLink to={e.route} onPress={() => setMenuOpen(false)}><span className="cursor-pointer mx-2">{e.name}</span></NavLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                <NavbarContent justify="end">
                    <Button className="bg-[#2E9CCA] text-white" onPress={() => {window.open('https://t.me/', '_blank')}}><p className="font-bold">Написать нам</p></Button>
                </NavbarContent>
            </Navbar>
        </>
    )
}