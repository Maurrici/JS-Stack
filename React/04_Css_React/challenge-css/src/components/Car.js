import style from "./Car.module.css";

const Car = (props) =>{
    return(
        <div className={style.carCard}>
            <div className={style.carTitle}>
                {props.name}
            </div>
            <div className={style.carBox}>
                <div className={style.carField}>
                    <div className={style.label}>Marca</div>
                    <div>{props.brand}</div>
                </div>
                <div className={style.carField}>
                    <div className={style.label}>Km</div>
                    <div>{props.km}</div>
                </div>
            </div>
            <div className={style.carBox}>
                <div className={style.carField}>
                    <div className={style.label}>Portas</div>
                    <div>{props.port}</div>
                </div>
                <div className={style.carField}>
                    <div className={style.label}>Cor</div>
                    <div>{props.color}</div>
                </div>
            </div>
        </div>
    )
}

export default Car;