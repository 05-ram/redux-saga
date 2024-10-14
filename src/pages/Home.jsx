import React from 'react';
// import img1 from "../assets/images/img1.jpg";
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { courses } from '../data';
import { useNavigate } from 'react-router-dom';
import { setSelectedCourse } from '../features/course/selectedSlice';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.course)
    const handleCourse = (course) => {
        dispatch(setSelectedCourse(course))
        navigate('/course-details')
    }
    return (
        <div className='wrapper-container mb-2'>
            <div className='card-deck d-grid gap-4 p-4'>
                {/* <img src={img1} /> */}
                {
                    courses.map(course => (
                        < Card key={course.id}>
                            <Card.Img variant="top" src={course.url} height={150} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleCourse(course)}>Open</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div >
    )
}

export default Home