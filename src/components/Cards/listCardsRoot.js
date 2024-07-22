import React from "react";

const ListCardsRoot = ({ children }) => {
    return (
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    )
};

export default ListCardsRoot;