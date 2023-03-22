import BlogCard from '@/components/blogCard'
import { NextPage } from 'next'
import React from 'react'

interface Props {}

const Blogs: NextPage<Props> = () => {
    return (
        <div className='bg-green-100 max-w-3xl mx-auto p-5 space-y-5'>
            <BlogCard
                description=' consectetur adipisicing elit. Inventore nesciunt voluptatem ad repellat perferendis
                deleniti laboriosam eius, voluptatibus nulla obcaecati praesentium velit mollitia
                provident quibusdam id commodi maxime in placeat!'
                title='Lorem ipsum dolor sit amet'
            />
        </div>
    )
}

export default Blogs
