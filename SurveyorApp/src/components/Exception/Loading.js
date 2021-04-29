import React from 'react'
function Loading({ text = 'Loading' }) {
    return (
        <div className="text-center" data-testid="loading-component">
            <div className="spinner-border mt-5" role="status">
                <span className="sr-only">{text}...</span>
            </div>
            <div>{text}...</div>
        </div>
    )
}

export default Loading
