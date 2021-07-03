import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useMemo, useState, useEffect } from "react";
import { useTable, usePagination } from 'react-table'

import makeData from '../../makeData'

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { 
        pageIndex: 0,
        pageSize: 15
      },
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <style>{`
        table {
          border:1px solid black;
        }
        tr {
          border:1px solid black;
        }
        th {
          border:1px solid black;
        }
        td {
          border:1px solid black;
        }
      `}</style>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

// components

CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};

CardPlayers.propTypes = {
  league: PropTypes.string
};

export default function CardPlayers({
  league
}) {

  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);


  const columns = React.useMemo(
    () => [
      {
        Header: 'MLB Players',
        columns: [
          {
            Header: 'Team',
            accessor: 'mlbTeamId',
            Cell: (row) => {
              return <div className="p-2"><img height={34} src={"https://www.mlbstatic.com/team-logos/team-cap-on-light/" + row.value + ".svg"}/></div>
            }
          },
          {
            Header: 'Player',
            accessor: 'mlbPlayerId',
            Cell: (row) => {
              return <div className="p-2"><img height={34} 
              style={{ width: '100%', height: 50 }}
              
              src={
                "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/" + row.value + "/headshot/67/current"
              }/></div>
            }
          },
          {
            Header: 'First Name',
            accessor: 'nameFirst'
          },
          {
            Header: 'Last Name',
            accessor: 'nameLast',
          },
          {
            Header: 'Height (Ft)',
            accessor: 'heightFt',
          },
          {
            Header: 'Height (Inches)',
            accessor: 'heightInches',
          },
          {
            Header: 'Weight (lbs)',
            accessor: 'weight',
          },
          {
            Header: 'Country',
            accessor: 'birthCountry',
          },
          {
            Header: 'Bats',
            accessor: 'bats',
          },
          {
            Header: 'Throws',
            accessor: 'throws',
          },
          {
            Header: 'Jersey Number',
            accessor: 'jerseyNumber',
          },
          {
            Header: 'Position',
            accessor: 'position',
          },
          // {
          //   Header: 'MLB Debut Date',
          //   accessor: 'mlbDebutDate',
          // },
          // {
          //   Header: 'Birth Date',
          //   accessor: 'birthDate',
          // }
        ],
      },
      // {
      //   Header: 'Info',
      //   columns: [
      //     {
      //       Header: 'Age',
      //       accessor: 'age',
      //     },
      //     {
      //       Header: 'Last Name',
      //       accessor: 'nameLast',
      //     },
      //   ],
      // }
    ],
    []
  )

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        // .get("http://localhost:5051/players")
        .get("players")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded p-4">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
            {loadingData ? (
              <p>Loading Please wait...</p>
            ) : (
              <Table columns={columns} data={data}  />
            )}
        </div>
      </div>
    </>
  );
}


