import React, { useEffect } from 'react';
// import img1 from "../assets/images/img1.jpg";
import { Button, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { courses } from '../data';
import { useNavigate } from 'react-router-dom';
import { setSelectedCourse } from '../features/course/selectedSlice';
import { fetchCourses } from '../features/course/courseSlice';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const courses = useSelector(state => state.course?.data);
    const isLoading = useSelector(state => state.course.isLoading);
    const error = useSelector(state => state.course.error);

    console.log('--------Home------', courses)

    useEffect(() => {
        dispatch(fetchCourses());
    }, [])

    const handleCourse = (course) => {
        dispatch(setSelectedCourse(course))
        navigate('/course-details')
    }

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center wrapper-container align-items-center">
                <Spinner variant="success" animation='border' />
            </div>
        )
    }
    if (error) {
        return (
            <div className="d-flex justify-content-center">
                {error}
            </div>
        )
    }
    return (
        <div className='wrapper-container mb-2'>
            <div className='card-deck d-grid gap-4 p-4'>

                {
                    courses?.length > 0 ? (
                        courses.map(course => (
                            < Card key={course.id}>
                                <Card.Img variant="top" src={course.url} height={150} />
                                <Card.Body>
                                    <Card.Title>{course.course_name}</Card.Title>
                                    <Card.Text>
                                        {course.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleCourse(course)}>Open</Button>
                                </Card.Body>
                            </Card>
                        ))
                    ) :

                        (
                            <div>No Courses Available...</div>
                        )
                }
            </div>
        </div >
    )
}

export default Home