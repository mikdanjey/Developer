import React from 'react';
import { Triangle } from 'react-loader-spinner';

export const AppLoader = ({ name, id, label, }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Triangle
                height="100"
                width="100"
                color='blue'
                ariaLabel='loading'
            />
        </div>
    )
}