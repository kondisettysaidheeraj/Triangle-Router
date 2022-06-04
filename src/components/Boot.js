import React, { Component } from 'react'
import {Table,Container,Form,FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import AppNav from './AppNav'

export default class Boot extends Component {
    // emptylist={
    //     name:'',
    //     skill:'',
    //     clg:''
    // }
    constructor(props) {
        super(props)
    
        this.state = {
             list:[],
            //  item:this.emptylist,
             isLoading:true
        }
        this.remove=this.remove.bind(this);
        // this.handlesubmit=this.handlesubmit.bind(this);
        // this.handlechange=this.handlechange.bind(this);
    }
    async componentDidMount(){
        const res=await fetch('/standards');
        const ans=await res.json();
        console.log(ans);
        this.setState({list:ans,isLoading:false})
    }
     async remove(id){
        console.log(id);
        await fetch(`/stand/${id}`,{
           method:'DELETE',
           headers:{
               'Accept':'application/json',
               'content-Type':'application/json'
           }
        }).then(()=>{
            let a=[...this.state.list].filter(i=> i.id!==id);
           //let a=this.state.list.filter(i=> i.id!==id)
            this.setState({list:a});
        });
    }
    
    // handlechange(event){
    //     const target=event.target;
    //     const name=target.name;
    //     const value=target.value;
    //     let item={...this.state.item};
    //     item[name]=value;
    //     this.setState({item});
    //     console.log(this.state);
    // }
    // async handlesubmit(e){
    //     e.preventDefault();
    //     const {item}=this.state
    //     await fetch('/stud',{
    //         method:(item.id)?'PUT':'POST',
    //        headers:{
    //            'Accept':'application/json',
    //            'content-Type':'application/json'
    //        },
    //        body:JSON.stringify(item)
    //     });

        
    // }
    

    render() {
        const{list,isLoading}=this.state;
        if(isLoading)
        return(<div>Loading</div>);

        return (
            <div>
                <AppNav/>
                <br/>
                {/* <Container>
                    <Form onSubmit={this.handlesubmit}>
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
                            <Button color="danger" tag={Link} to="/">Cancel</Button>
                            
                        </FormGroup>
                    </Form>
                </Container> */}

                <Container>
                <Button color="success" tag={Link} to="/Details">ADD JAVA STANDARD</Button>
                <br/>
                <br/>
                    <h3> Java Standards List</h3>       
                    
                    <br/>
                    <Table>
                        <thead>
                            <tr>
                            {/* <th width="30%">Name</th>
                            <th width="30%">Skill</th>

                            <th width="30%">College</th> */}

                                <th width="15%">Name</th>
                                <th width="15%">Expectation</th>
                                <th width="35%">Description</th>
                                <th width="10%">Percentage_Covered</th>
                                <th width="10%">Percentage_Missed</th> 
                                </tr>
                        </thead>
                        <tbody>
                            {
         
                        list.map(l=>
        <tr key={l.id}>
        
            <td>{l.name}</td>
            <td>{l.expectation}</td>
            <td>{l.description}</td>
            <td>{l.percentage_covered}</td>
            <td>{l.percentage_missed}</td>
            {/* <td><Button size="sm" color="primary" tag={Link} to={"/stand/" +l.id}>Edit</Button> </td>  */}
            <td><Button  size="sm" color="danger" onClick={()=>this.remove(l.id)}>Delete</Button></td>
           
        </tr>
                           
                        )}

                        </tbody>
                    </Table>
                </Container>
               
            </div>
        )
    }
}
