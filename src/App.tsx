import './App.css'
import './assets/styles/main.scss';
import burger from '/hands-on-burger.png'
import vectorOne from '/VectorOne.png'
import vectorTwo from '/VectorTwo.png'
import friesPlate from '/friesPlate.png'
import itemBurger from '/itemBurger.png'
import itemBowl from '/itemBowl.png'
import itemSoup from '/itemSoup.png'
import itemFries from '/itemFries.png'
import burgerWithFries from '/burgerWithFries.png'
import map from '/map.png'
import navSign from '/navSign.png'
import phoneSign from '/phoneSign.png'
import telegramSign from '/telegramSign.png'
import vkSign from '/vkSign.png'

function App() {
    const columnStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    };
    const marginS = {
        margin: "0 0 1.2rem 0",
    };
    const marginM = {
        margin: "1.6rem 0 0 0",
    };
    const buttonStyle = {
        backgroundColor: "var(--color-orange)",
        textAlign: "center",
        width: "100%",
        height: "3.4rem",
        lineHeight: "1.7rem",
        ...marginM
    };
    const image = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    };
    const transparentBox = {
        width: "100%",
        margin: "2rem 0",
        height: "9.3rem",
        position: "relative",
    };
    const lunchRectangle = {
        width: "100%",
        height: "57%",
        backgroundColor: "var(--color-green)",
        position: "absolute",
        right: 0,
        bottom: 0,
    };
    const plate = {
        position: "absolute",
        left: 0,
    };
    const bannerText = {
        color: "#000",
        position: "absolute",
        left: "3.5rem",
        bottom: "1.9rem",
    };
    const bannerVectorOne = {
        position: "absolute",
        right: 0,
        top: "3.9rem",
    };
    const bannerVectorTwo = {
        position: "absolute",
        left: 0,
        bottom: 0,
    };
    const secondaryTitle = {
        margin: "3.2rem 0 1.2rem 0"
    };
    const textBox = {
        backgroundColor: "var(--color-green)",
        textAlign: "left",
        color: "#000",
        borderRadius: "1rem",
};
    const descriptionText = {
        margin: "2rem 0rem"
    }
    const itemBox = {
        backgroundColor: "var(--color-yellow)",
        borderRadius: "1rem",
        padding: "0.8rem",
        color: "#000",
        margin: "1.6rem 0 0 0"
    }
    const itemTxt = {
        margin: "0.8rem 0 0 0",
        textAlign: "center",
    }
    const card = {
        position: "relative",
    }
    const floatTxt = {
        position: "absolute",
        textAlign: "center",
        bottom: "1.2rem",
    }
    const border = {
        border: "3px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "1rem",
    }
    const contactSegmentTop = {
        margin: "1.6rem 1.2rem 0 0",
        textAlign: "right",
    }
    const contactSegmentBottom = {
        margin: "0 1.2rem 3.4rem 0",
        textAlign: "right",
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="column column-sm-6">
                        <div style={columnStyle}>
                            <div className="h7" style={marginS}>
                                Попробуй этот
                                живой бургер!
                            </div>
                            <p className="caption">
                                Потрясающе аппетитный
                                бургер с соусом чимичури уже ждет тебя!
                            </p>
                            <button className="button" style={buttonStyle}>Доставка</button>
                            <button className="button" style={buttonStyle}>Заказать</button>
                        </div>
                    </div>
                    <div className="column column-sm-6">
                        <img style={image} src={burger}/>
                    </div>
                </div>
            </div>
            <div style={transparentBox}>
                <div style={lunchRectangle}></div>
                <div>
                    <p className="body-secondary" style={bannerText}>
                        Сочный <strong style={{fontWeight: 'bold'}}>ланч</strong> с 12 до 16 всего за <strong
                        style={{fontWeight: 'bold'}}>300 ₽</strong>
                    </p>
                </div>
                <div>
                    <img style={bannerVectorOne} src={vectorOne}/>
                </div>
                <div>
                    <img style={bannerVectorTwo} src={vectorTwo}/>
                </div>
                <div>
                    <img style={plate} src={friesPlate}/>
                </div>
            </div>
            <div className="container">
                <div className="column column-sm-3">
                    <p className="body-secondary" style={secondaryTitle}>О нас</p>
                </div>
            </div>
            <div className="container">
                <div style={textBox}>           <!-- я не смог понять как расширить фон за пределы контейнера -->
                    <div className="column column-sm-11">
                        <p className="caption">
                            Мы хотим развеять миф о том, что растительная еда невкусная и ей нельзя наесться.
                        </p>
                        <p className="caption" style={descriptionText}>
                            Здесь ты узнаешь, что такое веганская кухня, попробовав популярные блюда со всего мира!
                        </p>
                        <p className="caption" style={descriptionText}>
                            Наш шеф-повар собрал для тебя меню от завтраков и стритфуда до наивкуснейших салатов и
                            горячих блюд.
                        </p>
                        <p className="caption">
                            <strong style={{fontWeight: 'bold'}}>Голодным ты точно не уйдешь!</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="column column-sm-3">
                    <p className="body-secondary" style={secondaryTitle}>Блюда</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column column-sm-6">
                        <div style={columnStyle}>
                            <div style={itemBox}>
                                <img src={itemBurger}/>
                                <p style={itemTxt} className="caption">Бургеры</p>
                            </div>
                            <div style={itemBox}>
                                <img src={itemBowl}/>
                                <p style={itemTxt} className="caption">Салаты</p>
                            </div>
                        </div>
                    </div>

                    <div className="column column-sm-6">
                        <div style={columnStyle}>
                            <div style={itemBox}>
                                <img src={itemSoup}/>
                                <p style={itemTxt} className="caption">Горячие блюда</p>
                            </div>
                            <div style={itemBox}>
                                <img src={itemFries}/>
                                <p style={itemTxt} className="caption">Закуски</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="column column-sm-3">
                    <p className="body-secondary" style={secondaryTitle}>Блог</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column column-sm-6">
                        <div style={card}>
                            <img src={burgerWithFries}/>
                            <p style={floatTxt} className="caption">Как мы готовим бургеры?</p>
                        </div>
                    </div>
                    <div className="column column-sm-6">
                        <div style={card}>
                            <img src={burgerWithFries}/>
                            <p style={floatTxt} className="caption">Как мы готовим бургеры?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="column column-sm-3">
                    <p className="body-secondary" style={secondaryTitle}>Контакты</p>
                </div>
            </div>
            <div className="container">         <!-- со шрифтами вообще провал, они не совпадают никак с тем что в фигме -->
                <div style={border}>
                    <div className="row">
                        <div className="column column-sm-6">
                            <img src={map}/>
                        </div>
                        <div className="column column-sm-6">
                            <div style={contactSegmentTop} className="caption">
                                <div>
                                    <span>Вольская 42</span>
                                    <span>
                                        <img src={navSign}/>
                                    </span>
                                </div>
                                <div>
                                    <span>+7 (993) 498-19-86</span>
                                    <span>
                                        <img src={phoneSign}/>
                                    </span>
                                </div>
                            </div>
                            <p className="caption" style={contactSegmentTop}>Мы есть в соц. сетях:</p>
                            <div style={contactSegmentBottom} className="caption">
                                <div>
                                    <span>@cheloveg_bistro</span>
                                    <span>
                                        <img src={telegramSign}/>
                                    </span>
                                </div>
                                <div>
                                    <span>cheloveg_bistro</span>
                                    <span>
                                        <img src={vkSign}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
