import { useState } from "react"
import "../../index.css"

const ListAddNewOrder = ({ setShowAddProduct }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="list">
        <div>Order ######</div>
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Customer</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">P/O No.</div>
                <input className="inputInListForOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Attn</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">Title</div>
                <select className="inputInListForOrder"></select>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Telephone</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">Date</div>
                <input className="inputInListForOrder" type="date"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Email</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">Order No.</div>
                <input className="inputInListForOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Fax</div>
                <input className="inputInListForOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Customr P/O</div>
                <input className="inputInListForOrder" placeholder="Drop your files, or browse"></input>
                <div className="nameForAddNewOrder">Customer reference</div>
                <input className="inputInListForOrder" placeholder="Drop your files, or browse"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Invoice</div>
                <input className="inputInListForOrder" placeholder="Drop your files, or browse"></input>
                <div className="nameForAddNewOrder">Packing List</div>
                <input className="inputInListForOrder" placeholder="Drop your files, or browse"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Waybill</div>
                <input className="inputInListForOrder" placeholder="Drop your files, or browse"></input>
                <div className="nameForAddNewOrder">Other</div>
                <input className="inputInListForOrder" placeholder="Drop your files, or browse"></input>
            </div>
        </div>
        <div>Purchase Order</div>
        <table>
            <tbody>
                <tr>
                    <td>Item</td>
                    <td>Product<br/>Name</td>
                    <td>Designer<br/>Name</td>
                    <td>Brand<br/>Name</td>
                    <td>Product Code<br/>(Customer Ref Code)</td>
                    <td>Packing<br/>Qty.</td>
                    <td>Packing<br/>Weight</td>
                    <td>Packing<br/>Unit</td>
                    <td>Packing</td>
                </tr>
            </tbody>
        </table>
        <button className="buttons" onClick={()=>setShowAddProduct(true)}>Add Product</button>
        <div className="rowInListForOrder">
            <div className="nameForAddNewOrder">Delivery Date</div>
            <input className="inputInListForOrder" type="date"></input>
            <div className="nameForAddNewOrder">Terms of<br/>delivery</div>
            <input className="inputInListForOrder"></input>
        </div>
        <div className="rowInListForOrder">
            <div className="nameForAddNewOrder">Delivery Address</div>
            <input className="inputInListForOrder"></input>
        </div>
        <div className="rowInListForOrder">
            <div className="nameForAddNewOrder">Terms of delivery</div>
            <input className="inputInListForOrder"></input>
        </div>
        <div className="rowInListForOrder">
            <div className="nameForAddNewOrder">Remarks</div>
            <input className="inputInListForOrder"></input>
        </div>

      
    </div>
  )
}

export default ListAddNewOrder
