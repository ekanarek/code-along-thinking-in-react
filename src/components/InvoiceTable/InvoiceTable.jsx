import './InvoiceTable.css';
import InvoiceTableHeader from '../InvoiceTableHeader.jsx';
import InvoiceTableAddButton from '../InvoiceTableAddButton.jsx';
import InvoiceTableRow from '../InvoiceTableRow.jsx';
import { useState } from 'react';

function InvoiceTable({ initialInvoiceList }) {
    const [invoiceList, setInvoiceList] = useState(initialInvoiceList);
    
    const rows = initialInvoiceList.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem;

        return (
            <InvoiceTableRow 
                key={id} 
                initialInvoiceData={{ description, rate, hours }}
                initialIsEditing={false}
            />
        )
    });
    
    return (
        <table>
            <thead>
                <InvoiceTableHeader />
            </thead>
            <tbody>{rows}</tbody>
            <tfoot>
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    )
}

export default InvoiceTable;