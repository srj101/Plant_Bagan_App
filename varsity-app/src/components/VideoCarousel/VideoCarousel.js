import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Container,Row ,Col} from 'react-bootstrap';
import { gql,useQuery ,useMutation} from '@apollo/client'
import { Link } from 'react-router-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import "./VideoCaoursel.css"

const GET_VIDEOS = gql`
query {
  getVideos {
    id
    thumbnail
  }
}
`;

function VideoCarousel() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
  if(loading) return "loading...";
  if(error) return (<p>{error.message}</p>)
  return (
    <div className='videoCarousel'>
        <Container className="caoursel-container">
            <Carousel swiping={true} leftArrow={<LeftArrow/>} rightArrow={<RightArrow/>} show={4}>
                    {
                      data?.getVideos?.map(video => (
                        <Link key={video.id} to={`/video/${video.id}`}><span><img src={video.thumbnail}/></span></Link>
                      ))
                    }
            </Carousel>
        </Container>
    </div>
  )
}

export default VideoCarousel