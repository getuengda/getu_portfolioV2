import React from 'react'

const Title= ({title, des}) => {
  return (
    <div className="flex flex-col gap-5 font-titleFont mb-14">
        <h3 className="text-sm uppercase font-light text-gray-100 tracking-wide">
            {title}
        </h3>
        <h1 className="text-5xl text-gray-300 font-bold capitalize">
            {des}
        </h1>
    </div>
  )
}

export default Title