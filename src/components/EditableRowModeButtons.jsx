export default function EditableRowModeButtons({ isEditing, onEditClick, onSaveClick }) {
    return isEditing ? (
        <td>
            <button onClick={onSaveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button>Delete</button>
            <button onClick={onEditClick}>Edit</button>
        </td>
    );
}