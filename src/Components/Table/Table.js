import React from 'react'
import List from '../List/List'

const Table = ({ Result }) => {
    return (
        <table className="table-container">
            <tr>
                <th>Data</th>
                <th>Pegada</th>
                <th>Cod.Linha</th>
                <th>Serviço</th>
                <th>Origem</th>
                <th>Hr.Ini</th>
                <th>Hr.Fim</th>
            </tr>
            {Result.map(Result => <List Result={Result}/>)}
        </table>
    )
}

export default Table