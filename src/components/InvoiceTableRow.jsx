import formatCurrency from "../utils/formatCurrency";
import EditableDescriptionCell from "./EditableDescriptionCell";
import EditableHoursCell from "./EditableHoursCell";
import EditableRateCell from "./EditableRateCell";
import EditableRowModeButtons from "./EditableRowModeButtons";
import { useState } from "react";

export default function InvoiceTableRow( { initialInvoiceData, initialIsEditing }) {
    const [isEditing, setIsEditing] = useState(initialIsEditing);

    const [description, setDescription] = useState(initialInvoiceData.description);
    const [rate, setRate] = useState(initialInvoiceData.rate);
    const [hours, setHours] = useState(initialInvoiceData.hours);

    const setEditMode = () => setIsEditing(true);
    const setNormalMode = () => setIsEditing(false);

    return (
        <tr>
            <EditableRowModeButtons 
                isEditing={isEditing}
                onEditClick={setEditMode} 
                onSaveClick={setNormalMode} 
            />
            <EditableDescriptionCell 
                value={description} 
                isEditing={isEditing} 
                onValueChange={setDescription}
            />
            <EditableRateCell 
                value={rate} 
                isEditing={isEditing} 
                onValueChange={setRate}
            />
            <EditableHoursCell 
                value={hours} 
                isEditing={isEditing} 
                onValueChange={setHours} 
            />
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}