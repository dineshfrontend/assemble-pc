import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import { setPcItems } from  './../Services/Actions/PCActions';
import { cp } from 'fs/promises';

const axios = require('axios');

function BuildPCForm({ pcItems, setPcItems }:any) {
    const [pcData, setPcData] = useState({
        "motherboard":[],
        "ram":[],
        "cpu":[]
    }); // Loades Select Option Menus

    const fetchAPI = async() => {
        const response = await axios.get('http://localhost:3010/pc-parts');
        console.log(response.data);
        setPcData(response.data);
    }

    useEffect(()=>{
        fetchAPI();
    },[])
    const MotherBoardHandler = (value: String) => {
        console.log(pcItems);
        let items = pcItems.pcItems;
        setPcItems({
            "motherboard": pcData.motherboard.filter((data:any)=>data.title===value),
            "ram":items.ram,
            "cpu":items.cpu
        });
    }; 

    const CPUHandler = (value: String) => {
        console.log(pcItems);
        let items = pcItems.pcItems;
        setPcItems({
            "motherboard": items.motherBoard,
            "ram": items.ram,
            "cpu":pcData.cpu.filter((data:any)=>data.title===value)
        });
    }; 

    const RAMHandler = (value: String) => {
        console.log(pcItems);
        let items = pcItems.pcItems;
        setPcItems({
            "motherboard": items.motherboard,
            "ram":pcData.ram.filter((data:any)=>data.title===value),
            "cpu": items.cpu
        });
    }; 

    return (<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Customize your PC</Card.Title>
        <Card.Text className="text-muted">
            Choose your PC Parts that you want to assemble (Automatically Added to Cart):
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>
            <Form.Group className="mb-3">
                <Form.Label>Motherboard</Form.Label>
                <Form.Select onChange={(event)=>{
                            MotherBoardHandler(event.target.value);
                        }}>
                    <option value="">Choose your Motherboard</option>
                    {pcData?.motherboard.map((data: any, index: Number)=>{
                        return <option value={data.title}>{data.title}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>RAM</Form.Label>
                <Form.Select onChange={(event)=>{
                            RAMHandler(event.target.value);
                        }}>
                    <option>Choose your RAM</option>
                    {pcData?.ram.map((data: any, index: Number)=>{
                        return <option>{data.title}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>CPU</Form.Label>
                <Form.Select onChange={(event)=>{
                            CPUHandler(event.target.value);
                        }}>
                    <option>Choose your CPU</option>
                    {pcData?.cpu.map((data: any, index: Number)=>{
                        return <option>{data.title}</option>
                    })}
                </Form.Select>
            </Form.Group>
        </ListGroupItem>
    </ListGroup>
</Card>);
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

  export default connect(mapStateToProps, mapDispatchToProps)(BuildPCForm);