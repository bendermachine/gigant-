import React, {Component} from 'react';
// import {useHistory} from "react-router";
import kosmoport from '../components/kosmoport.jpg'

function City(props) {
    return <p>{props.name}</p>;
}

// const city = <City name = "Сургут"/>
class Description extends Component {
    // history = useHistory();
    // clickToDescription = () => {
    // history.push('/')
    // }

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
                    >Объявления исполнителей и площадок</p>
                </div>
                <div
                // onClick={this.clickToDescription}
                    style={{
                        position:'absolute',
                        width:350,
                        height:180,
                        backgroundColor:'white',
                        display:'flex',
                        margin:'auto',
                        marginLeft:310,
                        borderRadius:16
                }}>
                    <p
                    style={{
                        paddingLeft:10,
                        paddingTop:10
                    }}
                    >
                        Космопрот17</p>
                    <p
                        style={{

                            position:'absolute',
                            paddingLeft:10,
                            paddingTop:40,
                            color:"rgba(0,0,0,0.65)"
                        }}
                    >

                            <City name="Город" />

                    </p>
                    <p
                        style={{

                            position:'absolute',
                            paddingLeft:10,
                            paddingTop:70,
                            color:"rgba(0,0,0,0.65)"
                        }}
                    >
                        10000 денег
                    </p>
                    <p
                        style={{

                            position:'absolute',
                            paddingLeft:10,
                            paddingTop:100,
                            color:"rgba(0,0,0,0.65)"
                        }}
                    >
                        Свободные даты:
                    </p>
                    <p
                        style={{

                            position:'absolute',
                            paddingLeft:10,
                            paddingTop:120,
                            color:"rgba(0,0,0,0.65)"
                        }}
                    >
                        1.02.3033
                    </p>
                    <p
                        style={{

                            position:'absolute',
                            // paddingLeft:10,
                            marginLeft:10,
                            marginTop:150,
                            color:"rgba(255,255,255,0.65)",
                            backgroundColor:'#69706D',
                            height:25,
                            width:70,
                            textAlign:'center',
                            borderRadius:8,

                        }}
                    >
                        РОЦК
                    </p>

                    <img style={{marginTop:26,
                    marginLeft:45,
                    borderRadius:10}}
                        src={kosmoport} width={180} height={120}/>

                </div>

            </div>
        );
    }
}

export default Description;