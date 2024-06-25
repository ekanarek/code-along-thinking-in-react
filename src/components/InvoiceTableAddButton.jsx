export default function InvoiceTableAddButton({ onClick }) {
    return (
        <tr>
            <td></td>
            <td colSpan="4">
                <button onClick={onClick}>Add</button>
            </td>
        </tr>
    )
}