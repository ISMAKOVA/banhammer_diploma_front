import * as React from "react";
import {usePagination, useTable} from 'react-table';
import {useMemo} from "react";
import {COLUMNS} from "../../../utils/mock_data/columns";
import post_mark_data from '../../../utils/mock_data/post_mark_data.json';
import {ChevronLeft} from "@styled-icons/boxicons-regular/ChevronLeft";
import {ChevronRight} from "@styled-icons/boxicons-regular/ChevronRight";
import {FirstPage} from "@styled-icons/boxicons-regular/FirstPage";
import {LastPage} from "@styled-icons/boxicons-regular/LastPage";

export const Table: React.FC = (props) => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => post_mark_data, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow,
    } = useTable({
            // @ts-ignore
            columns,
            data,
        },
        usePagination
    );

    const {pageIndex, pageSize} = state

    return (
        <div className="table">
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                {page.map((row: any) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <div className="flex flex-row justify-between mx-4 items-center">
                <div className="flex flex-row space-x-4 items-center ">
                    <div>Перейти на страницу:</div>
                    <input className="rounded px-4 py-1 w-20" type="number" defaultValue={pageIndex + 1}
                           onChange={(e) => {
                               const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                               gotoPage(pageNumber)
                           }}
                    />

                    <div>Количество строк:</div>
                    <select className="rounded px-4 py-1 w-20 " value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                        {
                            [3, 5, 10, 25, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-row space-x-4 items-center ">
                    <div>
                        {pageIndex + 1} / {pageOptions.length}
                    </div>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <FirstPage size={24}/>
                    </button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <ChevronLeft size={24}/>
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        <ChevronRight size={24}/>
                    </button>
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <LastPage size={24}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Table;
