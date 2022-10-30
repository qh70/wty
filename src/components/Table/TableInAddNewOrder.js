import { Table,TableHead,TableRow, TableCell, TableBody } from "@mui/material";

const TableInAddNewOrder = () => {
  return (
    <Table className="TableInAddNewOrder" aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell className="TableCellFirstRowInAddNewOrder">Item</TableCell>
                <TableCell className="TableCellFirstRowInAddNewOrder">Product Name</TableCell>
                <TableCell className="TableCellFirstRowInAddNewOrder">Designer Name</TableCell>
                <TableCell className="TableCellFirstRowInAddNewOrder">Brand Name</TableCell>
                <TableCell className="TableCellFirstRowInAddNewOrder">Product Code<br/>(Customer Ref Code)</TableCell>
                <TableCell className="TableCellFirstRowInAddNewOrder">Packing<br/>Qty.</TableCell>
                <TableCell className="TableCellFirstRowInAddNewOrder">Packing<br/>Weight</TableCell>
            </TableRow>
        </TableHead>
        {/* <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.name}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell className="tableCellInOrder" component="th" scope="row">{row.name}</TableCell>
                <TableCell className="tableCellInOrder" align="left">{row.POno}</TableCell>
                <TableCell className="tableCellInOrder" align="left">{row.Attention}</TableCell>
                <TableCell className="lastTableCellInOrder" align="left">{row.Date}</TableCell>
            </TableRow>
            ))}
        </TableBody> */}
    </Table>
  )
}

export default TableInAddNewOrder
