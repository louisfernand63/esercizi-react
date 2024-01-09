import React from 'react'

export const RowTableComponent = ({ l }) => {
    return (
        <tr>
            <td>-</td>
            <td>{l.name}</td>
            <td>{l.username}</td>
            <td>{l.email}</td>
            <td>{l.phone}</td>
            <td>{l.website}</td>
        </tr>
    )
}
