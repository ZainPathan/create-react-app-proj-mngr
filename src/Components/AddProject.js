import React, { Component } from 'react';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Submit', this.refs.title.value);
        if( this.refs.title.value === '' ){
            alert('Title cannot be empty and is required');
        } else {
            this.setState(
                {
                    newProject: {
                        title: this.refs.title.value,
                        category: this.refs.category.value
                    }
                }, function(){
                    console.log(this.state);
                    this.props.addProject(this.state.newProject);
                })
        }
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
            <div>
                <h3>Add Projects</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddProject;