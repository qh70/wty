
import Select from "react-select";
import { useState } from "react";
import ListList from "./ListList"



const List = ({ orderList }) => {

    const [ placeholder, setPlaceholder ] = useState(["Enter Customer Code",""])

    const options = [
        {value: "Customer Code", label: "Customer Code"},
        {value: "Date", label: "Date"}
    ];

    const handleChange = (selectedOption) => {
        console.log(selectedOption.value);
        if (selectedOption.value === "Customer Code"){
            setPlaceholder(["Enter Customer Code",""]);
        }
        else{
            setPlaceholder(["Select the date","date"]);
        }
    }

  return (
    <div className="list">
        <div className="purchaseOrderList">Purchase Order List</div>
        <div className="selectInput">
            <Select className="selectList" options={options} onChange={handleChange} />
                {/* <option value="C" className="customerCode">Customer Code</option>
                <option value="D" className="customerCode">Date</option> */}
            
            <input className="inputList" placeholder={placeholder} type={placeholder[1]}></input>
        </div>
        <table>
            <tbody>
                <tr>
                    <td>Customer Code</td>
                    <td>P/O No.</td>
                    <td>Attention</td>
                    <td>Date</td>
                </tr>
            </tbody>
        </table>
        {orderList.map((item) => {
            const { cu, po, at, da } = item;
            return (
                <ListList 
                    cu={cu}
                    po={po}
                    at={at}
                    da={da}
                />
            );
        })}
    </div>
  )
}

export default List
