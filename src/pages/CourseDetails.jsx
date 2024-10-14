import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
    const navigate = useNavigate();
    const course = useSelector(state => state.selectedCourse);
    return (
        <div className='wrapper-container d-flex flex-column gap-4 align-items-center mt-2 '>
            <h3>Course Details Page</h3>
            < Card key={course.id} style={{ width: "24rem", height: '24rem' }}>
                <Card.Img variant="top" src={course.url} height={240} />
                <Card.Body>
                    <Card.Title className='text-center'>{course.title}</Card.Title>
                    <Card.Text className='text-center'>
                        {course.description}
                    </Card.Text>
                    <Button variant="primary" className='w-100' onClick={() => navigate('/')}>Back</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CourseDetails;