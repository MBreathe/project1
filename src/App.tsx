import './App.css'
import './assets/styles/main.scss';
import burger from '/hands-on-burger.png'

function App() {
    const columnStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    };
    const marginS = {
        margin: "0 0 1.2rem 0",
    }
    const marginM = {
        margin: "1.6rem 0 0 0",
    }
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
        </>
    )
}

export default App
