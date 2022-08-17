import axios from 'axios'
import type { NextPage } from 'next'
import NoResults from '../components/NoResults'
import { VideoCard } from '../components/VideoCard'
import { Video } from '../type'

interface IProps {
  videos: Video[]
}

const Home : NextPage<IProps> = ({videos}) => {
  console.log(videos)
  return (
    <div className="flex flex-col">
      {
        videos.length > 0 ? 
        (videos.map((video) => (
          <VideoCard post={video} key={video._id}/>
        ))) : (<NoResults text="No Posts"/>)
      }
    </div>
  )
}

export const getServerSideProps = async() => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: {
      videos : data
    }
  }
}

export default Home
