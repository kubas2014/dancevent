import React from "react";
import {Container} from "react-bootstrap";

class CreateRequest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            age: null,
            height: null,
            danceStyle: null,
            danceSkills: null,
            prefGender: null,
            events:[],
            description: ""
        };
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    getCurrentDancerId =()=>{

    }

    addDancerToRequest = (requestId, dancerId) => {
        /**/

        var secret_token = window.sessionStorage.secret_token;

        fetch('/createrequest/dancer',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + secret_token
            },
            body: JSON.stringify({
                requestId: requestId,
                dancerID: dancerId
            })
        }).then(res=>res.json()).then(res=>{
            if(res){
                console.log("added dancer");
            }
        })
    }

    submitRequest = (e) => {
        /*submits the request, by changing the values and calling the createRequestPost to add it to the backend*/
        e.preventDefault();

        // create request body
        var newRequest = {
            ageOffset: this.state.age,
            //height: this.state.height,
            danceStyle: this.state.danceStyle,
            listOfProficiencyLevels: this.state.danceSkills,
            listofGenders: this.state.prefGender,
            //events: this.state.events,
            description: this.state.description,
            counterfeitEmail: 'ludmann.julia@gmail.com',
            dancerId: '5ee8c5671d6b0d0a9646ad3d'
        };

        var secret_token = window.sessionStorage.secret_token;

        fetch('/createrequest',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + secret_token
            },
            body: JSON.stringify(newRequest)
        }).then(res=>res.json()).then(res=>{
            if(res){ // reset the states
                this.setState({
                    age: null,
                    height: null,
                    danceStyle: null,
                    danceSkills: null,
                    prefGender: null,
                    events:[],
                    description: ""
                });
                console.log(res._id);
                //this.addDancerToRequest({{res._id}}, {"5ee8c5671d6b0d0a9646ad3d"});
            }
        })


    }


        render(){
            return(
                <Container>
                    <form onSubmit={this.submitRequest}>
                        <div>
                            <h4 htmlFor="test">Create Request</h4>
                        </div>

                        {/*Age Type*/}
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="age" className="form-control" id="age" name="age" onChange={this.onChange} placeholder="Required" value={this.age}/>
                        </div>

                        {/*Height Type*/}
                        <div className="form-group">
                            <label htmlFor="height">Height</label>
                            <input type="height" className="form-control" id="height" name="height" onChange={this.onChange} placeholder="Required" value={this.height}/>
                        </div>

                        {/*Dance Style Type*/}
                        <div className="form-group">
                            <label htmlFor="dancestyle">Dance Style</label>
                            <input type="dancestyle" className="form-control" id="dancestyle" name="dancestyle" onChange={this.onChange} placeholder="Required" value={this.danceStyle}/>
                        </div>

                        {/*Dance Skills Type*/}
                        <div className="form-group">
                            <label htmlFor="danceskills">Dance Skills</label>
                            <input type="danceskills" className="form-control" id="danceskills" name="danceskills" onChange={this.onChange} placeholder="Required" value={this.danceSkills}/>
                        </div>

                        {/*Pref Gender Type*/}
                        <div className="form-group">
                            <label htmlFor="prefgender">Preffered Gender</label>
                            <input type="prefgender" className="form-control" id="prefgender" name="prefgender" onChange={this.onChange} placeholder="Required" value={this.prefGender}/>
                        </div>

                        {/*Events Type*/}
                        {/*<div className="form-group">
                            <label htmlFor="events">Events</label>
                            <input type="events" className="form-control" id="events" name="events" onChange={this.onChange} placeholder="Required" value={this.events}/>
                        </div>*/}

                        {/*Description Type*/}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="description" className="form-control" id="description" name="description" onChange={this.onChange} placeholder="Required" value={this.description}/>
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-outline-dark"
                                value="Submit"
                            />
                        </div>
                    </form>
                </Container>

            );
        }
}

export default CreateRequest;