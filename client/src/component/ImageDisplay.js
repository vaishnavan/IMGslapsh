import React, { Component } from 'react'
import './imageDisplay.css'

class ImageDisplay extends Component {
    render() {
        return (
            <div className="image_display">
                <div className="container display">
                    {this.props.getdata.map((e) => {
                        return (
                            <div className="img_contain" key={e._id}>
                                <div className="img_src">
                                    <img src={e.url} alt="no" />
                                </div>
                                <div className="profile">
                                    <img src={e.profile} alt="no" />
                                    <span>{e.username}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ImageDisplay
