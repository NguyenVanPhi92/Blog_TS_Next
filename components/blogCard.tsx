import { NextPage } from 'next'
import React from 'react'

interface Props {
    title: string
    description: string
}

const BlogCard: NextPage<Props> = ({ title, description }): JSX.Element => {
    return (
        <div>
            <h1 className='text-gray-900 text-3xl font-semibold'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
        </div>
    )
}

export default BlogCard
