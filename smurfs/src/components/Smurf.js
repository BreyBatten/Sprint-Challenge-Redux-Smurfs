import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

class Smurf extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.age} years old</p>
                <p>{this.props.height}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUpdating: state.isUpdating,
        isDeleting: state.isDeleting,
        error: state.error
    }
}

export default connect(mapStateToProps, { })(Smurf)