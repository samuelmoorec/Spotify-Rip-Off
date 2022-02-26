import React from 'react';

export default function nextButton({ playNextSong }) {


    return (
        <div
            onClick={playNextSong}
        >
            next
        </div>
    )
}