import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleChange } from '../../store/reducers/vehicle';
import { types as authTypes } from '../../store/reducers/authentication';
import { types as vehicleTypes } from '../../store/reducers/vehicle';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles.css';

class Form extends Component {
    
    handleClick = (value) => {
        this.props.vehicleFetch(this.props.authToken, value);
    }

    handleClickForVehicles = () => {
        const response = this.props.vehiclesGet(this.props.authToken);
        console.log(response);
    }

    handleClickDelete = () => {
        const response = this.props.vehicleDelete(this.props.authToken, 157);
        const response1 = this.props.vehicleDelete(this.props.authToken, 158);
        console.log(response, response1);
    }

    componentDidMount() {
        if(!this.props.authenticated) {
            this.props.authenticationPost();
        }
    }

    render() {
        return (
            <div className='main-content'>
                <Grid fluid>
                    <Row center="xs">
                        <h1>
                            Vehicle License Plates API
                        </h1>
                    </Row>
                    <Row center="xs" className='extra-padding'>
                        <Input
                            name='licensePlates'
                            placeholder='Enter your license...'
                            onChange={event => this.props.actions.handleChange( { name: 'licensePlates', value: event.target.value, } )}
                            value={this.props.licensePlates} />
                        <Button
                            onClick={() => this.handleClick(this.props.licensePlates)}>
                            Click me
                        </Button>
                    </Row>
                    <Row center="xs">
                        <Button
                            onClick={() => this.handleClickForVehicles()}>
                            Get Vehicles Data
                        </Button>
                        <Button
                            onClick={() => this.handleClickDelete()}>
                            Delete vehicle 
                        </Button>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        licensePlates: state.vehicle.licensePlates,
        vehicleInfo: state.vehicle.vehicleInfo,
        authenticated: state.authentication.authenticated,
        authToken: state.authentication.authToken,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleChange,
        }, dispatch),
        vehicleFetch: (token, licensePlate) => dispatch({ type: vehicleTypes.VEHICLE_FETCH_REQUESTED, payload: {token, licensePlate} }),
        vehicleDelete: (token, id) => dispatch({ type: vehicleTypes.VEHICLE_DELETE_REQUESTED, payload: {token, id} }),
        vehiclesGet: token => dispatch({ type: vehicleTypes.VEHICLES_GET_REQUESTED, payload: token }),
        authenticationPost: () => dispatch({ type: authTypes.AUTHENTICATION_POST_REQUESTED })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);