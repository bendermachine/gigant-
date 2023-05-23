import React, {Component} from 'react';
import '../App.css'
import '../add.css'
import {Form, FormControl} from "react-bootstrap";

class Add extends Component {

    render() {
        return (
<div>
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop:'5.5%',
            margin:'auto',
        }}>
        <p
            style={{
                fontSize:25,
            }}
        >Добавить объявление</p>
    </div>
<div style={{
    backgroundColor: 'white',
    width: "60%",
    height: "80%",
    position: 'absolute',
    marginTop:'3%',
    top: '10%',
    left: '20%',
    overflow:' auto',
    }}>
    <Form inline>
        <FormControl
            type="text"
            placeholder="Название группы"
            className="mr-sm-2"
            style = {{
                width:'300px',
                margin:'auto',
                display: 'flex',
                marginTop:'17px',
                marginBottom: '17px',
                padding: '6px 13px 6px 13px'
        }}
        />
    </Form>


    <hr style = {{width:"95%", margin: 'auto'}}></hr>
    <div className="wrapper">
        <div>
            <div className="mb-4 d-flex justify-content-center">
                <img src="../components/photo_logo.svg"/>
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn btn-primary btn-rounded">
                    <label className="form-label text-white m-1" htmlFor="customFile1">Choose file</label>
                    <input type="file" className="form-control d-none" id="customFile1"/>
                </div>
            </div>
        </div>
        <Form inline>
            <FormControl
                type="text"
                placeholder="Название группы"
                className="mr-sm-2"
                style = {{
                    width:'300px',
                    margin:'auto',
                    display: 'flex',
                    marginTop:'17px',
                    marginBottom: '17px',
                    padding: '6px 13px 6px 13px'
                }}
            />
        </Form>
        <Form inline>
            <FormControl
                type="text"
                placeholder="Название группы"
                className="mr-sm-2"
                style = {{
                    width:'300px',
                    margin:'auto',
                    display: 'flex',
                    marginTop:'17px',
                    marginBottom: '17px',
                    padding: '6px 13px 6px 13px'
                }}
            />
        </Form>
        <Form inline>
            <FormControl
                type="text"
                placeholder="Название группы"
                className="mr-sm-2"
                style = {{
                    width:'300px',
                    margin:'auto',
                    display: 'flex',
                    marginTop:'17px',
                    marginBottom: '17px',
                    padding: '6px 13px 6px 13px'
                }}
            />
        </Form>


    </div>

</div>

</div>
        );
    }
}


export default Add;