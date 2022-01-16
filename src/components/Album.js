import React from 'react'
// import { FaGithub } from './react-icons/fa'


function Album(props) {
    const { album_title, artist, album_cover, } = props;
    return (
        <div className='main'>



            <img src={album_cover} />
            <h1>{album_title}</h1>
            <div className='anchor'>
                <a>{artist}</a>
            </div>


        </div>
    )
}

export default Album;
