import { useTable, useSortBy, useFilters } from 'react-table';
import React, { useEffect, useMemo } from 'react';
import { getUsers } from '../features/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnFilter } from './ColumnFilter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const UsersList = () => {

    const usersList = useSelector((state) => state.usersList.users)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    

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

    const tableInstance = useTable(
        { 
            columns, 
            data: usersList, 
            defaultColumn 
        }, 
        useFilters, 
        useSortBy,
    )

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
    } = tableInstance;

    const handleFilterClick = (e) => {
        e.stopPropagation()
    }

    
    return (
        <>
            <Table {...getTableProps()} className='main__table'>
                <TableHead className='main__table__head'>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                                    </span>
                                    <div onClick={(e) => handleFilterClick(e)}>{column.canFilter ? column.render('Filter') : null}</div>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell => {
                                            return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                        })
                                    } 
                                </TableRow>
                            )
                        })
                    } 
                </TableBody>
            </Table>
        </>
    );
};

export default UsersList;
