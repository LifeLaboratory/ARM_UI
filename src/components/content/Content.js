import React from 'react'

const Content = () => (

    <div className="content-container">

        <div className="chat">

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
