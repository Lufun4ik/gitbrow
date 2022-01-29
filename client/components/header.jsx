import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div className="flex flex-col items-center bg-yellow-200 w-full">
      <div className="font-bold my-1 text-blue-500">
        <div id="user-name">{userName}</div>
      </div>
      <div className="flex justify-between  w-full px-4">
        <Link id="go-back" className="border rounded m-1 px-2 bg-red-500" to="/">
          Back
        </Link>
        <div className="font-bold text-blue-600" id="repository-name">
          {repositoryName}
        </div>
        <Link
          id="go-repository-list"
          className="border rounded m-1 px-2 bg-red-500"
          to={`/${userName}`}
        >
          Repository list
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
