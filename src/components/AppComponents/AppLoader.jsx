import React from 'react';
import { Triangle, Watch } from 'react-loader-spinner';

export const AppLoader = ({ name, id, label, }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Watch
                height="100"
                width="100"
                color='blue'
                ariaLabel='loading'
            />
        </div>
    )
}