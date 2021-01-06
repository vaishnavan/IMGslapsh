import React, { Component } from 'react'
import './imageform.css'

class ImageForm extends Component {

    constructor(){
        super()

        this.state={
            url:'',
            profile:'',
            username:'',
            category:''

        }
    }

    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        const sakthi={
                url:this.state.url,
                profile:this.state.profile,
                username:this.state.username,
                category:this.state.category
        }
        this.props.bData(sakthi)

    }

    render() {
        return (
            <div className="image_form">
                <div className="container image_contain">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label >PostImage URL</label>
                            <input type="text" className="form-control" name="url" onChange={this.handleChange}  />
                            
                        </div>
                        <div className="form-group">
                            <label >Profile URL</label>
                            <input type="text" className="form-control" name="profile" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >UserName</label>
                            <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Category</label>
                            <input type="text" className="form-control" name="category" onChange={this.handleChange} />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ImageForm
