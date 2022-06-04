import React, { Component } from 'react'
import AppNav from './AppNav'
import {Table,Container,Form,FormGroup, Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'



export default class Inputs extends Component {
    emptylist={
        name:'',
        expectation:'',
        description:'',
        percentage_covered:'',
        percentage_missed:''
    }
    // emptylist={
    //     name:'',
    //     skill:'',
    //     clg:''
    // }
    constructor(props) {
        super(props)
    
        this.state = {
            
            item:this.emptylist,
            
            
        }
        this.handlesubmit=this.handlesubmit.bind(this);
        this.handlechange=this.handlechange.bind(this);

    }
    // async componentDidMount(){
    //     if(this.props.match.params.id!='new'){
    //         const g=await(await fetch(`/stand/$(this.props.match.params.id)`)).json();
    //     this.setState({list:g})
    //     }
    // }
    handlechange(event){
        const target=event.target;
        const name=target.name;
        const value=target.value;
        let item={...this.state.item};
        item[name]=value;
        this.setState({item});
        console.log(this.state.item);
    }
    async handlesubmit(e){
        e.preventDefault();
        const {item}=this.state
        await fetch('/stand',{
            method:(item.id)?'PUT':'POST',
           headers:{
               'Accept':'application/json',
               'content-Type':'application/json'
           },
           body:JSON.stringify(item)
        });
        
        this.setState({item:this.emptylist})
        // console.log(this.state);
        // this.props.history.push('/stand');
    }
    
    render() {
        return (
            <div>
                
                <AppNav/>
                <br/>
                <Container>
                    <Form onSubmit={this.handlesubmit}>
                    {/*
                    <FormGroup>
                            <label for="sname">Name</label>
                            <input type="text" name="name" id="name" value={this.state.item.name} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="sskill">Skill</label>
                            <input type="text" name="skill" id="sskill" value={this.state.item.skill} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="sclg">College</label>
                            <input type="text" name="clg" id="sclg" value={this.state.item.clg} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>
                            <Button color="danger" tag={Link} to="/Standards">Cancel</Button>
                            
                        </FormGroup> */}
                        <FormGroup>
                            <label for="sname">Name</label>
                            <input type="text" name="name" id="name" value={this.state.item.name} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="expectation">Expectation</label>
                            <input type="text" name="expectation" id="expectation" value={this.state.item.expectation} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="description">Description</label>
                            <input type="text" name="description"  width= "100" id="description" value={this.state.item.description} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="percentage_covered">Percentage_Covered</label>
                            <input type="text" name="percentage_covered" id="percentage_covered" value={this.state.item.percentage_covered} onChange={this.handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <label for="percentage_missed">Percentage_Missed</label>
                            <input type="text" name="percentage_missed" id="percentage_missed" value={this.state.item.percentage_missed} onChange={this.handlechange}/>
                        </FormGroup> 
                        <FormGroup>
                            <Button color="primary" type="submit" >Save</Button>
                            <Button color="danger" tag={Link} to="/Standards">Cancel</Button>
                            
                        </FormGroup>
                    </Form>
                </Container>

            </div>
        )
    }
}
