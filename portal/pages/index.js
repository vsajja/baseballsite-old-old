/* eslint-disable react/jsx-no-target-blank */
import React from "react";
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
import { useTable, useGroupBy, useExpanded } from 'react-table'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { groupBy, expanded },
  } = useTable(
    {
      columns,
      data,
    },
    useGroupBy,
    useExpanded // useGroupBy would be pretty useless without useExpanded ;)
  )

  // We don't want to render all of the rows for this example, so cap
  // it at 100 for this use case
  const firstPageRows = rows.slice(0, 100)

  return (
    <>
      <pre>
        <code>{JSON.stringify({ groupBy, expanded }, null, 2)}</code>
      </pre>
      <Legend />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? '🛑 ' : '👊 '}
                    </span>
                  ) : null}
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      // For educational purposes, let's color the
                      // cell depending on what type it is given
                      // from the useGroupBy hook
                      {...cell.getCellProps()}
                      style={{
                        background: cell.isGrouped
                          ? '#0aff0082'
                          : cell.isAggregated
                          ? '#ffa50078'
                          : cell.isPlaceholder
                          ? '#ff000042'
                          : 'white',
                      }}
                    >
                      {cell.isGrouped ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <span {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? '👇' : '👉'}
                          </span>{' '}
                          {cell.render('Cell')} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render('Aggregated')
                      ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        cell.render('Cell')
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 100 results of {rows.length} rows</div>
    </>
  )
}

function Legend() {
  return (
    <div
      style={{
        padding: '0.5rem 0',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          background: '#0aff0082',
          padding: '0.5rem',
        }}
      >
        Grouped
      </span>{' '}
      <span
        style={{
          display: 'inline-block',
          background: '#ffa50078',
          padding: '0.5rem',
        }}
      >
        Aggregated
      </span>{' '}
      <span
        style={{
          display: 'inline-block',
          background: '#ff000042',
          padding: '0.5rem',
        }}
      >
        Repeated Value
      </span>
    </div>
  )
}

// This is a custom aggregator that
// takes in an array of leaf values and
// returns the rounded median
function roundedMedian(leafValues) {
  let min = leafValues[0] || 0
  let max = leafValues[0] || 0

  leafValues.forEach(value => {
    min = Math.min(min, value)
    max = Math.max(max, value)
  })

  return Math.round((min + max) / 2)
}


export default function Index() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), [])

  return (
    <>
      <IndexNavbar fixed />

      <br/>
      <br/>
      <br/>

      <div className="container px-4 py-36 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 flex-1">
            <CardStats 
            statSubtitle="Runs" 
            statTitle="J.D. Martinez"
            statPercent="38 R"
            />

            <CardStats 
            statSubtitle="Home Runs" 
            statTitle="Ronald Acuña Jr."
            statPercent="15 HR"
            />

            <CardStats 
            statSubtitle="Runs Batted In" 
            statTitle="Trey Mancini"
            statPercent="39 RBI"
            />
            <CardStats 
            statSubtitle="Batting Average" 
            statTitle="Yermin Mercedes"
            statPercent="0.354 AVG"
            />
                        <CardStats 
            statSubtitle="Stolen Bases" 
            statTitle="Whit Merrifield"
            statPercent="13 SB"
            />
          </div>
          
          <div className="w-full px-4 flex-1">
            <CardStats 
            statSubtitle="Wins" 
            statTitle="Jack Flaherty"
            statPercent="8 W"
            />

            <CardStats 
            statSubtitle="Saves" 
            statTitle="Mark Melancon"
            statPercent="15 SV"
            />

            <CardStats 
            statSubtitle="Strike Outs" 
            statTitle="Shane Bieber"
            statPercent="98 K"
            />

            <CardStats 
            statSubtitle="Earned Run Average" 
            statTitle="Brandon Woodruff"
            statPercent="1.58 ERA"
            />

            <CardStats 
            statSubtitle="WHIP" 
            statTitle="Brandon Woodruff"
            statPercent="0.74 WHIP"
            />
          </div>

        </div>
      </div>

      <br/>
      <br/>

      <div className="container px-4 py-36 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <CardSettings />
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <CardProfile />
          </div>
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
