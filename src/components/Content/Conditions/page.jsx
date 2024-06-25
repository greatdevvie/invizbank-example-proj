export default function ConditionsPage() {

    const TermsOfService = [
        {
            header: 'Конфиденциальность и безопасность',
            content: (
                <ul>
                    <li>При использовании услуг <b>InvizBank</b> без регистрации мы не собираем персональные данные, за исключением тех случаев, когда это требуется для предоставления конкретной услуги.</li>
                    <li>Мы стремимся обеспечить высокий уровень конфиденциальности и безопасности данных наших пользователей, соблюдая действующее законодательство.</li>
                </ul>
            ),
        },
        {
            header: 'Ограничения и ответственность',
            content: (
                <ul>
                    <li><b>InvizBank</b> не несет ответственность за убытки, возникшие в результате использования нашего криптобанка без регистрации.</li>
                    <li>Пожалуйста, учитывайте, что некоторые функции и услуги могут быть недоступны без регистрации.</li>
                </ul>
            ),
        },
        {
            header: 'Изменения в условиях использования',
            content: (
                <ul>
                    <li><b>InvizBank</b> оставляет за собой право изменять условия использования без предварительного уведомления.</li>
                    <li>Любые изменения будут опубликованы на нашем веб-сайте, и ваше дальнейшее использование криптобанка <b>InvizBank</b> будет означать ваше согласие с обновленными условиями.</li>
                </ul>
            ),
        },
        {
            header: 'Контактная информация',
            content: (
                <>
                    <p>Если у вас возникли вопросы или требуется помощь, пожалуйста, свяжитесь с нашей службой поддержки, используя контактные данные нашего веб-сайта.</p>
                    <p>Мы ценим ваше использование криптобанка <b>InvizBank</b>. Пожалуйста, обращайтесь к этим условиям при необходимости.</p>
                </>
            ),
        },
    ];
    return(
        <div className="flex justify-center items-center my-20 max-w-[1280px] mx-4 h-full">
            <div className="flex flex-row justify-center gap-20 w-full h-full">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <p className="text-white text-center text-5xl font-bold">Условия пользования <b>InvizBank</b></p>
                    <div className="text-white text-xl">
                        {TermsOfService.map((e) => (
                            <div key={e.header} className="my-10">
                                <h2 key={e.header} className="text-3xl font-bold mb-4">{e.header}</h2>
                                {e.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}