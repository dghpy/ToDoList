import React ,{Component} from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";


class App extends Component{
 
   
state={
  items:[],
  id:uuid(), 
  item:'',
  editItem:false
};

handleChange= e =>{
  console.log("inside handlechange");
   this.setState({
         item:e.target.value
   });
}; 

handleSubmit= e =>{
  console.log("inside handlesubmit");
  e.preventDefault();
  
  const newItem={
    id:this.state.id,
    title:this.state.item
  };

  console.log(newItem);

  const updatedItems=[...this.state.items,newItem];

  this.setState({
    items:updatedItems,
    item:'',
    id:uuid(),
    editItem:false
  }); 

}; 

handleDelete= id =>{
  console.log("inside handledelete");
  const filteredItems=this.state.items.filter(item=>
  item.id!==id)
  this.setState({
    items:filteredItems
  });
};

handleEdit=id=>{
  console.log("inside edit");
  const filteredItems=this.state.items.filter(item=>
    item.id!==id)

    const selectedItem=this.state.items.find(item=>item.id===id);
    console.log(selectedItem);
    
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    });


    
};

clearList= ()=>{
this.setState({
  items:[]
})
}
  render(){
    var bg=require('./images/bg1.jpg')
     return(
    <div className="container-fluid " style ={ { backgroundImage: "url("+bg+")" , backgroundRepeat: "no-repeat",height:"100%"} }>
      <div className="row">
        <div className="col-10 mx-auto col-md-4 mt-4 bg-secondary text-white">
         <h1 className="text-capitalize text-center ">TO-DO-LIST</h1>
        <ToDoInput 
             item={this.state.item} 
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             editItem={this.state.editItem}
         />
        <ToDoList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              /> 
        </div>
      </div>
    </div>
    
    
  
    );
}
}

export default App;