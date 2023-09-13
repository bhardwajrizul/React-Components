import { useState } from "react";
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(undefined);
    const [sortBy, setSortBy] = useState(undefined);
    const { config, data } = props;
    
    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label)
            return;
        }
        if (sortOrder === undefined) {
            setSortOrder('asc');
            setSortBy(label);
        }
        else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        }
        else if (sortOrder === 'desc') {
            setSortOrder(undefined);
            setSortBy(undefined);
        }
        console.log(sortOrder, sortBy)
    }

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return <div>
                <BiUpArrow />
                <BiDownArrow />
            </div>
        }
        if (sortOrder === null) {
            return <div>
                <BiUpArrow />
                <BiDownArrow />
            </div>
        } else if (sortOrder === 'asc') {
            return <div>
                <BiUpArrow />
            </div>
        } else if (sortOrder === 'desc') {
            return <div>
                <BiDownArrow />
            </div>
        }

    }

    const updatedConfig = config.map((column) => {
        if (!column?.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (    
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    });
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * reverseOrder;
            } else {
                return (valA - valB) * reverseOrder;
            }
        })
    }
    return <Table {...props} config={updatedConfig} data={sortedData}/>
}

export default SortableTable;