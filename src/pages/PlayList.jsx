import React, { useEffect } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedPlaylist } from '../features/playlist/selectedPlay';
import { fetchPlaylists } from '../features/playlist/playlistSlice';
import { FETCH_PLAYLIST_REQUEST } from '../redux/actions/playlistActions';

const PlayList = () => {
    const navigate = useNavigate();
    // const playlists = useSelector(state => state.playlist);
    const dispatch = useDispatch();

    const playlists = useSelector(state => state.playlist?.data);
    const isLoading = useSelector(state => state.playlist.isLoading);
    const error = useSelector(state => state.playlist.error);


    useEffect(() => {
        dispatch(FETCH_PLAYLIST_REQUEST())
    }, [])

    const handlePlaylist = (playlist) => {
        dispatch(setSelectedPlaylist(playlist))
        navigate('/play-details')
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
        <div className='wrapper-container d-flex flex-column gap-4 align-items-center mt-2 '>
            <h3>Playlist Page</h3>
            <div className='card-deck d-grid gap-4 p-4 w-100'>
                {

                    playlists.coursesCollections?.length > 0 ?
                        (playlists.coursesCollections.map(playlist => (
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
                        )))
                        :
                        (<div>No Playlists Available...</div>)
                }
            </div>
        </div>
    )
}

export default PlayList