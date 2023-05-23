import React, { useState } from 'react';
import '../App.css'
import '../add.css'
import { Form, FormControl } from "react-bootstrap";
import photo from '../components/photo_logo.svg'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

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
                    <div className={"block"}>
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
                                className="form"
                            />
                        </Form>
                        <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            shouldHighlightWeekends
                        />
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Укажите требования"
                                className="form"
                            />
                        </Form>
                    </div>
                    <div className={"block"}>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Введите описание"
                                className="form"
                            />
                        </Form>
                    </div>
                    <div className={"block"}>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Ваше оборудование"
                                className="form"
                            />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;