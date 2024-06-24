import formatCurrency from '../utils/formatCurrency.js';

export default function EditableRateCell({ value, isEditing }) {
    return isEditing ? (
        <td>
            $<input type="text" value={value} /> 
            /hr
        </td>
    ) : (
        <td>{formatCurrency(value)}/hr</td>
    )
}