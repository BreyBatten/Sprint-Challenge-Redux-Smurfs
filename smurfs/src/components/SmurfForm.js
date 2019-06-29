import React from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newName: "",
            newAge: "",
            newHeight: ""
        }
    }

    handleText = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.postSmurf({
            name: this.state.newName,
            age: this.state.newAge,
            height: this.state.newHeight,
            id: this.props.newId
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='newName'
                    placeholder='Name'
                    value={this.state.newName}
                    onChange={this.handleText}
                />
                <input
                    type='text'
                    name='newAge'
                    placeholder='Age'
                    value={this.state.newAge}
                    onChange={this.handleText}
                />
                <input
                    type='text'
                    name='newHeight'
                    placeholder='Height'
                    value={this.state.newHeight}
                    onChange={this.handleText}
                />
                <input type='submit' />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        newId: state.newId,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)