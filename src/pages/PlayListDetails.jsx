import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCourse } from '../features/course/selectedSlice';

const PlayListDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const playlist = useSelector(state => state.selectedPlaylist);

    const viewCourse = (course) => {
        dispatch(setSelectedCourse(course))
        navigate('/course-details')
    }
    return (
        <div className='wrapper-container d-flex flex-column gap-4 align-items-center mt-2 '>
            <h3>playlists Details Page</h3>
            <div className="card-deck d-flex gap-3">
                {
                    playlist.courses.map((course) => (
                        < Card key={course.id} style={{ width: "24rem", height: '24rem' }}>
                            <Card.Img variant="top" src={course.url} height={240} />
                            <Card.Body>
                                <Card.Title className='text-center'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>
                                    {course.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => viewCourse(course)}>Open</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div >
    )
}

export default PlayListDetails