
import React from "react";
import { connect, useSelector } from 'react-redux';
import Header from '../Layout/Header';
import { setPcItems } from "./../Services/Actions/PCActions";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


function MyCart({pcItems}:any) {
    let item = pcItems.pcItems;
    return (<div>
        <Header/>
        <div><Card style={{ width: '48rem' }}>
        <Card.Body>
            <Card.Title>Selected Items</Card.Title>
            <Card.Text className="text-muted">
               Items that are added to Cart
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
           <ListGroupItem><b>MotherBoard</b></ListGroupItem>
            {item?.motherboard?.map((data:any)=>{
                   return (
                       <ListGroupItem> <div><b>Title:</b> {data.title}</div>
                       <div><b>Brand:</b> {data.brand}</div>
                       <div><b>Model:</b> {data.model}</div>
                       <div><b>Chipset:</b> {data.title}</div>
                       <div><b>FormFactor:</b> {data.title}</div>
                       <div><b>SocketType:</b> {data.title}</div>
                       </ListGroupItem>);
           })}
           <ListGroupItem><b>CPU</b></ListGroupItem>
            {item?.cpu?.map((data:any)=>{
                   return (
                       <ListGroupItem> <div><b>Title:</b> {data.title}</div>
                       <div><b>Brand:</b> {data.brand}</div>
                       <div><b>Cores:</b> {data.cores}</div>
                       <div><b>BaseSpeed:</b> {data.baseSpeed}</div>
                       <div><b>Threads:</b> {data.threads}</div>
                       <div><b>Model:</b> {data.model}</div>
                       <div><b>SocketType:</b> {data.title}</div>
                       </ListGroupItem>);
           })}
           <ListGroupItem><b>RAM</b></ListGroupItem>
            {item?.ram?.map((data:any)=>{
                   return (
                       <ListGroupItem> <div><b>Title:</b> {data.title}</div>
                       <div><b>Brand:</b> {data.brand}</div>
                       <div><b>Model:</b> {data.model}</div>
                       <div><b>Ram Size:</b> {data.ramSize}</div>
                       <div><b>Quantity:</b> {data.quantity}</div>
                       <div><b>Ram Type:</b> {data.ramType}</div>
                       </ListGroupItem>);
           })}
        </ListGroup>
        </Card>
        </div>
   </div>);
}

const mapStateToProps = ( state : any ) => ({
    pcItems: state.pcItems,
  })

  const mapDispatchToProps = (dispatch : any )=> {
    return ({
        setPcItems : (items : any) => {
            dispatch(setPcItems(items))
        }
    })
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MyCart);