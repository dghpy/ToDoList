import React, { Component } from 'react'

export default class ToDoInput extends Component {
    render() {
        const{item,handleChange,handleSubmit,editItem}=this.props 
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                         <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                     <i className="fas fa-book"> </i>
                                </div>
                         </div>
                            <input type="text" 
                            className="form-control" 
                            value={item} onChange={handleChange} 
                            placeholder="Add todo list"/>

                            <button 
                                 className={editItem?"btn btn-success ml-1":"btn btn-primary ml-1"} >
                                 {editItem ?"Edit":"Add"} 
                            </button>

                  </div>     
                   
                </form>
            </div>
                )
    }
}
