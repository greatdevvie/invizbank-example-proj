export default function AboutPage() {
    const infoList = [
        {
            header: 'Почему выбирают нас?',
            content: (
                <ul>
                    <li className="my-2"><strong>Безопасность на первом месте:</strong> Мы применяем передовые технологии для защиты ваших активов, включая многослойную систему безопасности, холодное хранение и двухфакторную аутентификацию (2FA). Наши специалисты по кибербезопасности регулярно проводят аудиты и тесты на уязвимости, чтобы гарантировать безопасность ваших средств.</li>
                    <li className="my-2"><strong>Простота использования:</strong> Интуитивно понятный интерфейс нашего приложения и веб-платформы делает управление вашими криптовалютными активами простым и удобным, независимо от вашего опыта в сфере криптовалют.</li>
                    <li className="my-2"><strong>Разнообразие криптовалют:</strong> <b>InvizBank</b> поддерживает широкий спектр криптовалют, предоставляя вам возможность хранить и управлять различными цифровыми активами в одном месте.</li>
                    <li className="my-2"><strong>Круглосуточная поддержка:</strong> Наша служба поддержки клиентов работает 24/7, чтобы ответить на все ваши вопросы и помочь в решении любых проблем. Мы говорим на нескольких языках, включая русский, английский и испанский.</li>
                    <li className="my-2"><strong>Прозрачные комиссии:</strong> Мы предлагаем конкурентные и прозрачные тарифы без скрытых сборов, чтобы вы всегда знали, за что платите.</li>
                </ul>
            ),
        },
        {
            header: 'Наша история',
            content: (
                <p>InvizBank был основан группой энтузиастов криптовалют и специалистов в области финансовых технологий, которые поставили перед собой цель создать банк будущего. С момента основания мы неуклонно росли и развивались, внедряя инновации и расширяя спектр предоставляемых услуг.</p>
            ),
        },
        {
            header: 'Наши ценности',
            content: (
                <ul>
                    <li className="my-2"><strong>Надежность:</strong> Мы гарантируем безопасность ваших средств и данных, обеспечивая стабильную работу всех наших сервисов.</li>
                    <li className="my-2"><strong>Иновации:</strong> Мы постоянно следим за новыми тенденциями и технологиями в мире криптовалют, чтобы предложить нашим клиентам самые передовые решения.</li>
                    <li className="my-2"><strong>Прозрачность:</strong> Честность и открытость в отношениях с клиентами – ключевые принципы нашей работы. Мы всегда предоставляем полную информацию о наших продуктах и услугах.</li>
                    <li className="my-2"><strong>Клиентоориентированность:</strong> Мы учитываем потребности каждого клиента, стремясь предоставить персонализированные решения и максимальный уровень сервиса.</li>
                </ul>
            ),
        },
        {
            header: 'Присоединяйтесь к нам',
            content: (
                <p>В <b>InvizBank</b> мы верим, что будущее финансов – за криптовалютами. Присоединяйтесь к нам и станьте частью этого будущего уже сегодня. С <b>InvizBank</b> ваши цифровые активы всегда под надежной защитой!</p>
            ),
        },
    ]
    return(
        <div className="flex justify-center items-center my-20 max-w-[1280px] mx-4 h-full">
            <div className="flex flex-row justify-center gap-20 w-full h-full">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <p className="text-white text-5xl font-bold">О нас</p>
                    <div className="text-white text-xl">
                        <div className="text-center my-10">
                            <p className="my-4">Добро пожаловать в <b>InvizBank</b> – ваш надежный партнер в мире криптовалют!</p>
                            <p>В <b>InvizBank</b> мы стремимся к тому, чтобы ваши сбережения были в безопасности и под вашим контролем. Наша миссия – предоставлять максимально защищенные и удобные решения для хранения криптовалют, соответствующие самым высоким стандартам индустрии.</p>
                        </div>
                        {infoList.map((e) => (
                            <div key={e.header} className="my-10">
                                <h2 key={e.header} className="text-3xl font-bold text-center mb-4">{e.header}</h2>
                                {e.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}