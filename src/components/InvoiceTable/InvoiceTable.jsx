import './InvoiceTable.css';
import { EditableRowModeButtons } from '../EditableRowModeButtons/EditableRowModeButtons.jsx';
import { EditableDescriptionCell } from '../EditableDescriptionCell/EditableDescriptionCell.jsx';
import { EditableRateCell } from '../EditableRateCell/EditableRateCell.jsx';
import { EditableHoursCell } from '../EditableHoursCell/EditableHoursCell.jsx';

function InvoiceTable() {
    return (
        <table>
            <tbody>
                <tr>
                    <EditableRowModeButtons isEditing={false} />
                    <EditableDescriptionCell value="Web Development" isEditing={false}/>
                    <EditableRateCell value={25} isEditing={false} />
                    <EditableHoursCell value={10} isEditing={false} />
                </tr>

                <tr>
                    <EditableRowModeButtons isEditing={true} />
                    <EditableDescriptionCell value="Copywriting" isEditing={true}/>
                    <EditableRateCell value={20} isEditing={true} />
                    <EditableHoursCell value={8} isEditing={true} />
                </tr>
            </tbody>
        </table>
    )
}

export default InvoiceTable;