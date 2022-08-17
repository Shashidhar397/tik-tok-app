import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { topics } from '../utils/constants'

const Discover = () => {
  const router = useRouter();
  const {currentTopic} = router.query;
  const activeTopicStyle = "hover:bg-primary xl:border- px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]";;
  const topicStyle = "xl:border-2 hover:bg-primary xl:border-block px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-block";
  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
          Popular Topics
        </p>
        <div className='flex gap-3 flex-wrap'>{
          topics.map((item) => (
            <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={currentTopic === item.name ? activeTopicStyle : topicStyle}>
              
              <span className='font-bold text-2xl xl:text-md'>{item.icon}</span>
              <span className='font-medium text-md hidden xl:block capitalize'>{item.name}</span>
              
            </div>
            </Link>
          ))
        }</div>
    </div>
  )
}

export default Discover