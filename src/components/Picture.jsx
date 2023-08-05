import React from 'react'

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PictureCard = ({ location }) => {
    const { id, cover } = location;
    return (
        // Liens vers location 
        <Link to={`/location/${id}`}>
            <article className="location">
                <img src={cover} alt="Logement" className="location-img" />
            </article>
        </Link>
    )
}
PictureCard.propTypes = {
    location: PropTypes.shape({
        id: PropTypes.string,
        cover: PropTypes.string
    })
}


export default PictureCard