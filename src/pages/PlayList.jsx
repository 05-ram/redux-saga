import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedPlaylist } from '../features/playlist/selectedPlay';

const PlayList = () => {
    const navigate = useNavigate();
    const playlists = useSelector(state => state.playlist);
    const dispatch = useDispatch();
    const handlePlaylist = (playlist) => {
        dispatch(setSelectedPlaylist(playlist))
        navigate('/play-details')
    }
    return (
        <div className='wrapper-container d-flex flex-column gap-4 align-items-center mt-2 '>
            <h3>Playlist Page</h3>
            <div className='card-deck d-grid gap-4 p-4 w-100'>
                {
                    playlists.map(playlist => (
                        < Card key={playlist.id}>
                            <Card.Img variant="top" src={playlist.url} height={150} />
                            <Card.Body>
                                <Card.Title>{playlist.title}</Card.Title>
                                <Card.Text>
                                    {playlist.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handlePlaylist(playlist)}>View Playlist</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default PlayList