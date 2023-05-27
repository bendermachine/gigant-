import React, { useState } from 'react';
import '../App.css'
import '../add.css'
import { Form, FormControl } from "react-bootstrap";
import photo from '../components/photo_logo.svg'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import DatePicker from "react-modern-calendar-datepicker";

const defaultValue = {
    year: 2023,
    month: 4,
    day: 20,
};

function Add() {
    const [selectedDay, setSelectedDay] = useState(defaultValue);

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
                <p style={{fontSize:25}}>Добавить объявление</p>
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
                        className="form"
                    />
                </Form>

                <hr style={{width:"95%", margin: 'auto'}}></hr>
                <div className="wrapper">
                    <div className={"block"} style={{height:"583px", paddingTop:"30%"}}>
                        <div className="mb-4 d-flex justify-content-center">
                            <img src={photo} alt="Прикрепите фотографии"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary btn-rounded" style={{backgroundColor:'gray', border:'0px'}}>
                                <label className="form-label text-white m-1" htmlFor="customFile1">Прикрепить фотографии</label>
                                <input type="file" className="form-control d-none" id="customFile1"/>
                            </div>
                        </div>
                    </div>
                    <div className={"block"}>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Выберите город"
                                className="blockform"
                            />
                        </Form>
                        <div className={"calendar"}>
                        <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            shouldHighlightWeekends
                            colorPrimary="gray"
                        />
                    </div>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Укажите требования"
                                className="blockform"
                            />
                        </Form>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Ваши жанры"
                                className="blockformgenre"
                            />
                        </Form>
                    </div>
                        <Form inline>
                            <Form.Control as="textarea"
                                type="text"
                                placeholder="Введите описание"
                                className="textareaform"
                            />
                        </Form>
                        <Form inline>
                            <Form.Control as="textarea"
                                type="text"
                                placeholder="Ваше оборудование"
                                className="textareaform"
                            />
                        </Form>
                </div>
            </div>
        </div>
    );
}

export default Add;