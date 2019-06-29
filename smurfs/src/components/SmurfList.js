import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf'

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf =>
                    <Smurf
                        key={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                        id={smurf.id}
                    />
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList)