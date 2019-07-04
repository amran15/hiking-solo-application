import React, { Component } from 'react';
// import { connect } from 'react-redux';

class confirmHikePage extends Component {
    
    handleConfirm =() =>{
        this.props.history.push('/home')
    }
    
    handleCancel =() =>{
        this.props.history.push('/detail')
    }
    render(){
        return(
            <div>
               <input />
               <br/>
               <br/>
               <button onClick={this.handleConfirm}>Confirm</button>
               <button onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
}

export default confirmHikePage;