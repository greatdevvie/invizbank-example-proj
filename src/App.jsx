import { useRoutes } from "react-router-dom";
import MainPage from "./components/Content/mainPage/page";
import FooterPart from "./components/Footer/content";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ConditionsPage from "./components/Content/Conditions/page";
import FAQPage from "./components/Content/FAQ/page";
import AboutPage from "./components/Content/About/page";

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/conditions',
      element: <ConditionsPage />
    },
    {
      path: '/faq',
      element: <FAQPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
  ])

  return (
    <div className="bg-black w-[100vw] h-full">
      <NavigationBar />
      <main className="flex flex-col justify-center items-center w-full h-full">
        {element}
      </main>
      <FooterPart />
    </div>
  )
}
