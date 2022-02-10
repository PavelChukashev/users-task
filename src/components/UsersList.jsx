import { useTable, useSortBy, useFilters } from 'react-table';
import React, { useEffect, useMemo } from 'react';
import { getUsers } from '../features/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnFilter } from './ColumnFilter';

const UsersList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    const users = useSelector((state) => state.usersList.users)

    const columns = useMemo(() => ([
        {
            Header: 'ID',
            accessor: 'id',
            disableFilters: true
        },
        {
            Header: 'Username',
            accessor: 'username',
            Filter: ColumnFilter
        },
        {
            Header: 'First Name',
            accessor: 'first_name',
            disableFilters: true
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
            disableFilters: true
        },

    ]),[]);

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const tableInstance = useTable({ columns, data: users, defaultColumn }, useFilters, useSortBy)

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
    } = tableInstance;

    
    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <>
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                                        </span>
                                    </th>
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    } 
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    );
};

export default UsersList;
