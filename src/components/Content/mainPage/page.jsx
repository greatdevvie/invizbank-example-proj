import mainSvg from "./media/main.svg";
import creditCard from './media/Credit-card.svg';

export default function MainPage() {
    return (
        <>
            <div className="flex justify-center items-center max-w-[1280px] mx-4 h-full">
                <div className="flex flex-col md:flex-row mt-8 md:mt-0 justify-around gap-1 h-[40rem]">
                    <div className="flex md:hidden justify-center items-center h-full">
                        <img className={`w-[16rem]`} alt="security" src={mainSvg} />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-1/3 h-full">
                        <p className="text-white text-4xl md:text-5xl text-center md:text-left font-bold">Безопасность превыше всего!</p>
                        <p className="text-[#AAABB8] mt-4 text-center md:text-left text-md md:text-xl">Кошелёк должен оставаться неприступным и только твоим местом.</p>
                    </div>
                    <div className="hidden md:flex justify-center items-center h-full">
                        <img className={`w-[20rem]`} alt="security" src={mainSvg} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-4 gap-4 bg-[#29648A] w-full h-[4rem]">
                <div className="flex flex-row gap-4 text-md md:text-xl justify-center w-[1280px] text-white font-bold">
                    <p>Own your wallet yourself, without any relatives, wives, children. Only you!</p>
                </div>
            </div>
            <div className="flex justify-center items-center max-w-[1280px] mx-4 h-full">
                <div className="flex flex-col mt-20 justify-around gap-12 h-[28rem]">
                    <div className="flex justify-center items-center w-full">
                        <img className={`w-[20rem]`} src={creditCard} alt="creditCard" />
                    </div>
                    <div className="flex flex-col items-center w-full h-full">
                        <p className="text-white text-4xl md:text-5xl text-center md:text-left font-bold">Твой кошелёк уже ждёт тебя!</p>
                        <p className="text-[#AAABB8] mt-4 text-center md:text-left text-md md:text-xl">Напиши нам, и мы зарегистрируем его на твой никнейм!</p>
                    </div>
                </div>
            </div>
        </>
    )
}