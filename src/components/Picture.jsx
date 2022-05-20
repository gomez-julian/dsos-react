import React from "react";
import "../feed.css";
import '../bootstrap.min.css'

function Picture(props) {
	const {srca} = props
    return (
        <div className="image_outer_container my-2 mx-1">
				<div className="green_icon"></div>
				<div className="image_inner_container">
					<img src={ srca } alt="png"/>
				</div>
			</div>
    )
}

export {Picture}