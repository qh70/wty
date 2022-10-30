import "../../index.css"

const ListAddNewProduct = ({ setShowAddProduct }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="list">
        <a className="wordProductNHashtags">Product ######</a>
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">WTY code</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">Luzi code</div>
                <input className="inputInListForOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Customer</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">Gender</div>
                <select className="inputInListForOrder"></select>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Name</div>
                <input className="inputInListForOrder"></input>
                <div className="nameForAddNewOrder">Name(CN)</div>
                <input className="inputInListForOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="specialNameForAddNewOrder">Inspired by <br/>designer</div>
                <input className="inputInListForOrder"></input>
                <div className="specialNameForAddNewOrder">Inspired by designer(CN)</div>
                <input className="inputInListForOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Inspired by brand</div>
                <input className="inputInListForOrder"></input>
                <div className="specialNameForAddNewOrder">Inspired by brand(CN)</div>
                <input className="inputInListForOrder"></input>
            </div>
            {/* Product Type */}
            <div className="wordProductType">Product Type</div>

            <div className="rowInListForOrder">
                <div className="specialNameForAddNewOrder">Description of <br/>Goods</div>
                <input className="longerInputInListForOrder"></input>
            </div>
            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">COA</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
                <div className="nameForAddNewOrder">COA(CN)</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
            </div>
            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">MSDS</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
                <div className="nameForAddNewOrder">MSDS(CN)</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
            </div>
            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">Fragrance profile</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
                <div className="nameForAddNewOrder">IFRA Cert</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
            </div>
            <div className="rowInListForOrder">
                <div className="nameForAddNewOrder">26 allergy list</div>
                <input className="dashInputInListForOrder" placeholder="Drop your files,or browse"></input>
            </div>
            <div className="rowInListForOrder">
                <div className="specialNameForAddNewOrder">Remarks</div>
                <input className="largeInputInListForOrder"></input>
            </div>
        </div>
    </div>
  )
}

export default ListAddNewProduct
