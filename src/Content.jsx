import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Content = () => {
  const loader = useLoaderData();
  return (
    <div>
      {
        loader.map((e) => {
          return <h1 key={e.id}>{e.id}</h1>
        })
      }
    </div>
  )
}

export default Content


