// import order from "../../../static/order.png"

const Item = (props) => {
    // 當選項被選中
    if(props.state === props.itemName){
        var classNameItem = "item";
        var straightLine = "straightLine";
        var classNameDetails = "itemDetails";
    }
    // 當選項沒被選中
    else{
        var classNameItem = "itemDark";
        var straightLine = "straightLineDark";
        var classNameDetails = "itemDetailsDark";
    }

    return (
        <div className={classNameItem} onClick={() => {props.setState(props.itemName)}}>
            <div className={straightLine}></div>
            <img alt="" className="imgItem"></img>
            <div className={classNameDetails}>{props.itemName}</div>
        </div>
    )
}

export default Item
