import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css"
export function BoCarousel() {
  return (
      <div className='carousel-container'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>Top 10 Environmental Benefits of Tree Planting</h3>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet. Lorem ipsum, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Quos, officia!</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quidem voluptatem dicta, possimus quia itaque!  elit. Quas dolores laboriosam ducimus itaque porro expedita! dolor sit amet, consectetur adipisicing elit. Ut, praesentium?</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://www.healthytrees.com/wp-content/uploads/2020/07/NORTHERN-OAK-TREE-FINAL-TREE-QUIZ-scaled-e1632253694330.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>30 Things You Should Know About Tree Planting</h3>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet. Lorem ipsum, Lorem ipsum dolor sit r sit amet. dolor sit amet consectetur adipisicing elit. Quos, officia!</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quidem voluptatem dicta, possimus quia itaque!  elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sint! Quas dolores laboriosam ducimus itaque porro expedita! dolor sit amet, consectetur adipisicing elit. Ut, praesentium?</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://www.nationalforests.org/assets/header-images/_2000x2000_fit_center-center_none/16622/DSC_1472.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>Right Tree, Right Place: Using Science to Guide Reforestation</h3>
                    <p>Lorem ipsum dolor Lorem ipsum doipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Quos, officia!</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quidem voluptatem dicta, possimus quia itaque!  elit. Quas dr adipisicing elit. Ut, praesentium?</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://www.nationalforests.org/assets/header-images/_2000x2000_fit_center-center_none/Beaverhead-Deerlodge-NF_Pyramid-Point_USFS-Leona-Rodreick.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
      </Carousel>
      </div>

  )
}

export default BoCarousel;