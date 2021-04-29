import React from 'react'

function Offline() {
    return (
        <div
            data-testid="offline-component"
            className="d-flex justify-content-center mt-5"
        >
            <h3 className="lead">No network for loading payload</h3>
        </div>
    )
}

export default Offline
