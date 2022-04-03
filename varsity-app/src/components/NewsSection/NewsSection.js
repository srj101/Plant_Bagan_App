import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Container} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import LeftArrow from '../VideoCarousel/LeftArrow';
import RightArrow from '../VideoCarousel/RightArrow';
import "./NewsSection.css"
import { Spin } from 'antd';

const GET_VIDEOS = gql`
query {
  getNews{
    id
    title
    featuredImage
    postedBy
    date
  }
}
`;

function VideoCarousel() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
  if(loading) return (<Spin />);
  if(error) return (<p>{error.message}</p>)
  return (
    <div className='newsCarousel'>
        <Container className="caoursel-container">
            <Carousel swiping={true} leftArrow={<LeftArrow/>} rightArrow={<RightArrow/>} show={4}>
                    {
                      data?.getNews?.map(news => (
                        <Link key={news.id} to={`/news/${news.id}`}><span><img src={news.featuredImage}/></span></Link>
                      ))
                    }
            </Carousel>
        </Container>
    </div>
  )
}

export default VideoCarousel