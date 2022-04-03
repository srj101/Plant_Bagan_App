import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Container} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import LeftArrow from '../VideoCarousel/LeftArrow';
import RightArrow from '../VideoCarousel/RightArrow';
import "./CourseCarousel.css"
import { Spin } from 'antd';

const GET_COURSES = gql`
query getCourses{
  getCourses {
    id
    title
    rating
    sectionCount
    image
    lessonCount
    instructorName
    quizCount
    price
  }
}
`;

function CourseCarousel() {
  const { loading, error, data } = useQuery(GET_COURSES);
  if(loading) return (<Spin />);
  if(error) return (<p>{error.message}</p>)
  return (
    <div className='newsCarousel'>
        <Container className="caoursel-container">
            <Carousel swiping={true} leftArrow={<LeftArrow/>} rightArrow={<RightArrow/>} show={4}>
                    {
                      data?.getCourses?.map(course => (
                        <Link key={course.id} to={`/course/${course.id}`}><span><img src={course.image}/>
                        <span className='rating'>
                            {Array(course.rating)
                            .fill(1)
                            .map((el, i) => (
                                <span>⭐</span>
                            ))}
                        </span>
                        <div className="hover-content">
                            <p>{ course.lessonCount} Lessons</p>
                            <p>{course.sectionCount} Seections</p>
                            <p>{course.quizCount} Quizes</p>
                            <p className='instructedBy'>Instructed By {course.instructorName}</p>
                            <p className="price">Price: <span>${course.price}</span></p>
                        </div>
                        </span></Link>
                      ))
                    }
            </Carousel>
        </Container>
    </div>
  )
}

export default CourseCarousel