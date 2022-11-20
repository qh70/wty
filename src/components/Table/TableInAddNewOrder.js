import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

function createData(Item, ProductName, DesignerName, BrandName, ProductCode, PackingQty, PackingWeight) {
    return { Item, ProductName, DesignerName, BrandName, ProductCode, PackingQty, PackingWeight };
};

const TableInAddNewOrder = ({ setDeletepopup }) => {

    const testrows = [
        createData(1, "Pink Angel", "Dior", "Miss Dior Perfune Femme", "338833-A(HM30028611)", 2, "0.9kg"),
        createData(2, "Pink Angel", "Chanel", "Miss Dior Perfune Femme", "338833-A(HM30028611)", 2, "0.9kg"),
        createData(3, "Pink Angel", "Chanel", "Miss Dior Perfune Femme", "338833-A(HM30028611)", 2, "0.9kg"),
    ];
    
    const handleClickDelete = () => {console.log(1);setDeletepopup(true);};

  return (
    <Paper sx={{ width: '100%', paddingBottom: 3, overflow: 'hidden' }}>
      <TableContainer>
        <Table className="TableInAddNewOrder" aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="TableCellFirstRowInAddNewOrder">Item</TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder"></TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder" align="right">Product Name</TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder" align="right">Designer Name</TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder" align="right">Brand Name</TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder" align="right" padding="none">Product Code<br/>(Customer Ref Code)</TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder" align="right">Packing<br/>Qty.</TableCell>
                    <TableCell className="TableCellFirstRowInAddNewOrder" align="right">Packing<br/>Weight</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {testrows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell className="tableCellInOrder" component="th" scope="row">{row.Item}</TableCell>
                        <div className="ButtonsInTableInAddNewOrder">
                            <Button variant="outlined">EDIT</Button>
                            <Button className="buttonDELETEInTableInAddNewOrder" variant="outlined" onClick={handleClickDelete}>DELETE</Button>
                        </div>                
                        <TableCell className="tableCellInOrder" align="right">{row.ProductName}</TableCell>
                        <TableCell className="tableCellInOrder" align="right">{row.DesignerName}</TableCell>
                        <TableCell className="tableCellInOrder" align="right">{row.BrandName}</TableCell>
                        <TableCell className="tableCellInOrder" align="right">{row.ProductCode}</TableCell>
                        <TableCell className="tableCellInOrder" align="right">{row.PackingQty}</TableCell>
                        <TableCell className="lastTableCellInOrder" align="right">{row.PackingWeight}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    
  )
}

export default TableInAddNewOrder
