import React from 'react'

const Content = () => (

    <div className="content-container">

        <div className="chat-list">

            <div className="chat-list__category-container">
                <div className="chat-list__category active">Открытые</div>
                <div className="chat-list__category">Архив</div>
            </div>

            <div className="chat-list-item chat-list__item">
                <div className="chat-list-item__head">
                    <div className="chat-list-item__name">Вася Пупкин</div>
                    <div className="chat-list-item__date">06.10.2018</div>
                </div>
                <div className="chat-list-item__last-message">
                    У меня ничего не работает! Помогите!!!
                </div>
            </div>

            <div className="chat-list-item chat-list__item">
                <div className="chat-list-item__head">
                    <div className="chat-list-item__name">Вася Пупкин</div>
                    <div className="chat-list-item__date">06.10.2018</div>
                </div>
                <div className="chat-list-item__last-message">
                    У меня ничего не работает! Помогите!!!
                </div>
            </div>

            <div className="chat-list-item chat-list__item">
                <div className="chat-list-item__head">
                    <div className="chat-list-item__name">Вася Пупкин</div>
                    <div className="chat-list-item__date">06.10.2018</div>
                </div>
                <div className="chat-list-item__last-message">
                    У меня ничего не работает! Помогите!!!
                </div>
            </div>

            <div className="chat-list-item chat-list__item">
                <div className="chat-list-item__head">
                    <div className="chat-list-item__name">Вася Пупкин</div>
                    <div className="chat-list-item__date">06.10.2018</div>
                </div>
                <div className="chat-list-item__last-message">
                    У меня ничего не работает! Помогите!!!
                </div>
            </div>
        </div>

        <div className="chat disabled-block">
            <div className="chat__messages">
                <div className="chat-message">
                    У меня проблема! Что мне делать?
                </div>

                <div className="chat-message sent">
                    Не беспокойтесь, сейчас все решим!
                </div>
            </div>

            <div className="chat__hints-container">
                <div className="chat-hint">
                    <div className="chat-hint__text">Вы пробовали выключить и снова включить?</div>
                    <div className="chat-hint__buttons-container">
                        <div className="chat-hint__approve-btn"></div>
                        <div className="chat-hint__reject-btn"></div>
                    </div>
                </div>
                <div className="chat-hint">
                    <div className="chat-hint__text">Вы пробовали выключить и снова включить?</div>
                    <div className="chat-hint__buttons-container">
                        <div className="chat-hint__approve-btn"></div>
                        <div className="chat-hint__reject-btn"></div>
                    </div>
                </div>
                <div className="chat-hint">
                    <div className="chat-hint__text">Вы пробовали выключить и снова включить?</div>
                    <div className="chat-hint__buttons-container">
                        <div className="chat-hint__approve-btn"></div>
                        <div className="chat-hint__reject-btn"></div>
                    </div>
                </div>
            </div>

            <form className="chat__message-form" action="">
                <textarea className="chat__message-field" name="" id="" cols="30" rows="10">MESSAGE</textarea>
                <button className="chat__send-btn">Отправить</button>
            </form>

        </div>

    </div>
);

export default Content
