import React from 'react';
import { PhotoUrl } from './UserModel';

interface Props{
    photo: PhotoUrl
}

const Photo = (props:Props) => {
    return (
        <div>
            <img loading='lazy' src={props.photo.url} alt="aa" />
        </div>
    );
};

export default Photo;