import './InvoiceTable.css';
// import EditableRowModeButtons from '../EditableRowModeButtons.jsx';
// import EditableDescriptionCell from '../EditableDescriptionCell.jsx';
// import EditableRateCell from '../EditableRateCell.jsx';
// import EditableHoursCell from '../EditableHoursCell.jsx';
import InvoiceTableHeader from '../InvoiceTableHeader.jsx';
import InvoiceTableAddButton from '../InvoiceTableAddButton.jsx';
import InvoiceTableRow from '../InvoiceTableRow.jsx';

function InvoiceTable() {
    return (
        <table>
            <thead>
                <InvoiceTableHeader />
            </thead>
            <tbody>
                <InvoiceTableRow
                    initialInvoiceData={{ description: 'Web Development', rate: 25, hours: 10 }}
                    initialIsEditing={false}
                />
                <InvoiceTableRow
                    initialInvoiceData={{ description: 'Copywriting', rate: 20, hours: 8 }}
                    initialIsEditing={true}
                />
            </tbody>
            <tfoot>
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    )
}

export default InvoiceTable;