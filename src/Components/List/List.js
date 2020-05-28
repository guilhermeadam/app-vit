import React from 'react'

const List = ({ Result }) => {
    return (
        <tr>
            <td> {Result.data} </td>
            <td> {Result.pegada} </td>
            <td> {Result.codlinha} </td>
            <td> {Result.servico} </td>
            <td> {Result.origem} </td>
            <td> {Result.hrini} </td>
            <td> {Result.hrfim} </td>
        </tr>
    )
}

export default List