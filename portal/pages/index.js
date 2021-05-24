/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import CardBarChart from "components/Cards/CardBarChart.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardStats from "components/Cards/CardStats.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

import CardSettings from "components/Cards/CardSettings.js";
 
import namor from 'namor'

import styled from 'styled-components'
import { useTable, useGroupBy, useExpanded, useFilters, useSortBy } from 'react-table'

import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

// Create a default prop getter
const defaultPropGetter = () => ({})

// Expose some prop getters for headers, rows and cells, or more if you want!
function Table({
  columns,
  data,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // // Render the UI for your table
  // return (
  //   <>
  //     {/* <input
  //       value={filterInput}
  //       onChange={handleFilterChange}
  //       placeholder={"Search player"}
  //     /> */}
  //     <table className="border" {...getTableProps()}>
  //       <thead>
  //         {headerGroups.map(headerGroup => (
  //           <tr className="border bg-black text-white" {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map(column => (
  //               <th
  //                 {...column.getHeaderProps(column.getSortByToggleProps())}
  //                 className={
  //                   column.isSorted
  //                     ? column.isSortedDesc
  //                       ? "sort-desc"
  //                       : "sort-asc"
  //                     : ""
  //                 }
  //               >
  //                 {column.render("Header")}
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map((row, i) => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map(cell => {
  //                 return (
  //                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
  //                 );
  //               })}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </>
  // );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr className="border bg-black text-white" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                // Return an array of prop objects and react-table will merge them appropriately
                {...column.getHeaderProps([
                  {
                    className: column.className,
                    style: column.style,
                  },
                  getColumnProps(column),
                  getHeaderProps(column),
                ])}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            // Merge user row props in
            <tr {...row.getRowProps(getRowProps(row))}>
              {row.cells.map(cell => {
                return (
                  <td
                    // Return an array of prop objects and react-table will merge them appropriately
                    {...cell.getCellProps([
                      {
                        className: cell.column.className,
                        style: cell.column.style,
                      },
                      getColumnProps(cell.column),
                      getCellProps(cell),
                    ])}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

// "player": {
//   "playerName": "Nick Castellanos",
//   "mlbPlayerId": 592206,
//   "position": "RF",
//   "rank": 1,
//   "gamesPlayed": 41,
//   "hits": 58,
//   "atBats": "163",
//   "runs": 33,
//   "homeRuns": 12,
//   "rbi": 30,
//   "stolenBases": 1,
//   "avg": ".356",
//   "obp": ".417",
//   "slug": ".669",
//   "ops": "1.085"
// }

// 43G 39/135AB 24R 5HR 12RBI 2SB .289AVG .358 OBP .489 SLG .846 OPS

export default function Index() {
  const hittingCols = useMemo(
    () => [
      {
        Header: "Hitting Leaders",
        columns: [
          // {
          //   Header: "",
          //   accessor: "mlbPlayerId"
          // },
          {
            Header: "Rank",
            accessor: "rank",
            style: {
              fontWeight: 'bolder'
            }
          },
          {
            Header: "Name",
            accessor: "playerName",
            style: {
              fontWeight: 'bolder'
            }
          },
          {
            Header: "Position",
            accessor: "position"
          }
        ]
      },
      {
        Header: "Stats",
        columns: [
          {
            Header: "Games",
            accessor: "gamesPlayed"
          },
          {
            Header: "AB",
            accessor: "atBats"
          },
          {
            Header: "R",
            accessor: "runs"
          },
          {
            Header: "HR",
            accessor: "homeRuns"
          },
          {
            Header: "RBI",
            accessor: "rbi"
          },
          {
            Header: "SB",
            accessor: "stolenBases"
          },
          {
            Header: "AVG",
            accessor: "avg",
            Cell: avg => (
              <span className={avg.value > 0.3 ? "bg-red-500 text-white" : ""}>
                {avg.value}
              </span>
            )
          },
          {
            Header: "OBP",
            accessor: "obp",
            Cell: obp => (
              <span className={obp.value > 0.4 ? "bg-red-500 text-white" : ""}>
                {obp.value}
              </span>
            )
          },
          {
            Header: "OPS",
            accessor: "ops",
            Cell: ops => (
              <span className={ops.value > 0.9 ? "bg-red-500 text-white" : ""}>
                {ops.value}
              </span>
            )
          }
        ]
      }
    ],
    []
  );

  const [hittingData, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://baseballsite.herokuapp.com/leaders");
      // const result = await axios("http://localhost:5051/leaders");
      setData(result.data);
    })();
  }, []);

  return (
    <>
      <IndexNavbar fixed />

      <br/>
      <br/>
      <br/>

      <div className="container px-4 py-36 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 flex-1">
            {/* <CardStats 
            statSubtitle="Home Runs" 
            statTitle="Ronald Acuña Jr."
            statPercent="15 HR"
            /> */}
            <Table 
              columns={hittingCols} 
              data={hittingData} 
            />
          </div>
        </div>
      </div>

      <br/>
      <br/>

      <Footer />
    </>
  );
}
