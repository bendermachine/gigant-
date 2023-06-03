import React, {Component} from 'react';
import '../add.css'
import {Form, FormControl} from "react-bootstrap";
import kosmoport from "../components/kosmoport.jpg";
function City(props) {
    return <p>Город: {props.name}</p>;
}
function Band(props) {
    return <p>{props.name}</p>;
}
function Dates(props) {
    return <p>Свободные даты: {props.name}</p>;
}
function Genre(props) {
    return <p className={"genre"}>{props.name}</p>;
}
function Requirements(props) {
    return <p>Требования: {props.name}</p>;
}
function Equipment(props) {
    return <p>Оборудование: {props.name}</p>;
}
function Photo() {
    return <img style={{
        borderRadius:16}}
                src={kosmoport} width={495} height={400}/>;
}
function Descr(props) {
    return <p>Описание: {props.name}</p>;
}
class Description extends Component {
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
                    <p style={{fontSize:25}}>Объявление исполнителя</p>
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
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin:'auto',
                            paddingTop: '1%'
                        }}>
                        <Band name = "Космопорт17">
                        </Band>
                    </div>

                    <hr style={{width:"95%", margin: 'auto'}}></hr>
                    <div className="wrapper">
                        <div className={"block"} style={{height:"445px"}}>
                            <Photo></Photo>
                        </div>
                        <div className={"block"}>
                            <City name = "Сургут"></City>
                            <Dates name = "20.04.2023 - 29.04.2023"></Dates>
                            <Requirements name="Цена: 20000 руб."></Requirements>
                            <div className={"genre-wrapper"}>
                                <Genre name="Поп-панк"></Genre>
                                <Genre name="Рок"></Genre>
                            </div>
                        </div>
                        <div className={"block"}><Descr name="Самая космическая группа Сургута сыграет долгожданный сольник на самой космической площадке города. Знатные и стильные разбиватели сердечек (и не только), группа Космопорт17 ждёт вас. Эти четыре стильных юноши и шикарная девушка исполнят для вас прекрасную музыку, драйвовую и лиричную и заставят вас отжечь по полной программе."></Descr></div>
                        <div className={"block"}><Equipment name="Усилители: Vox AC30, Fender Twin Reverb"></Equipment></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;