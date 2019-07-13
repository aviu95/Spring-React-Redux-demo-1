import React, {Component} from 'react';

import {connect} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

class LoadAnim extends Component {

    render() {
        let isLoading = this.props.loader.isLoading ? "" : "isNotLoading";
        return (
            <div>
                <CircularProgress className={`loader ${isLoading}`} size={50} />
                {this.props.children}
            </div>
        );
    }
};

function mapStateToProps(state) {
    const  { loader } = state;
    return {
        loader
    }
}

export default connect(mapStateToProps, null)(LoadAnim);
