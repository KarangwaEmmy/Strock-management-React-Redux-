import React, { Component } from 'react'
import { connect } from "react-redux";
import {
  deleteProduct, addProduct
} from "../redux/actions/actionCreator";
import { bindActionCreators } from "redux";
import '../assets/scss/Style.scss'
import '../assets/scss/main.scss'
import '../assets/scss/main.scss'
import '../assets/scss/responsive.scss'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
        price: '',
        quantity: '',
        date: ''
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
    })
}
    render() {
        return (
          <div className="content prefix">
          <div className="product">
         
         {this.props.products.length !== 0 ? (
           <table>
           <thead>
             <tr>
               <th scope="col">#ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Price</th>
                 <th scope="col">Quantity</th>
                 <th scope="col">Date</th>
                 <th scope="col">Action</th>
               </tr>
             </thead>
             <tbody>
               {this.props.products.map(item => (
                 <tr key={item.id}>
                     <td style={{ width: "10px"}}>
                     {item.id}
                   </td>
                   <td>
                     {item.name}
                   </td>
                   <td>{item.price}</td>
                   <td>{item.quantity}</td>
                   <td>{item.date}</td>
                   <td>
                     <button className="btn delete" onClick={() => this.props.deleteProduct(item.id)} style={{
                         color: "white",
                         backgroundColor: "#ed5249"
                       }} > Delete</button>
 
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>  
         ) : (
             <div style = {{ fontSize: "30px", textAlign: "center"}}>
               No data in the table
             </div>
         )}{" "}
         </div>
         <div className="sidebar">
            <div className="form-inline">
           <form>
           <label htmlFor="name">Name:</label>
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name"  id="name1" placeholder="add name "/>
            <label htmlFor="price">Price:</label>
            <input onChange={this.handleChange} value={this.state.price} type="text" name="price"  id="price1" placeholder="add price"/>
            <label htmlFor="quantity">quantity:</label>
            <input onChange={this.handleChange} value={this.state.quantity} type="text" name="quantity"  id="price1" placeholder="add quantity"/>
            <label htmlFor="date">Date:</label>
            <input onChange={this.handleChange} value={this.state.date} type="date" name="date"  id="date"/>
            <button type="button" onClick={ () => this.setState({name:'' ,  price: '', quantity: '', date: '' }) } style={{marginTop: "25px", marginRight: "15px"}} className="btn reset">Reset</button>
            <button type="button" onClick={() =>{ this.props.addProduct(this.state.name, this.state.price, this.quantity, this.state.date); this.setState({name:'' ,  price: '', quantity: '', date: '' })} } style={{marginTop: "25px"}} className="btn save">Add Product</button>
           </form>
        </div>
       </div>
          </div>

        );
    }
}
const mapStateToProps = state => {
  return { 
    products: state.products
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addProduct,
      deleteProduct
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);