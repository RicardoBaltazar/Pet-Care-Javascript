import React, { Component } from 'react'
import './behavioral.css'
import Button from '../../button/Button'
import axios from 'axios'

const url = 'https://api-pet-care.herokuapp.com/page-behavioral'
const img1 = require('../../../assets/img-page-behavioral.png')

export default class PageBehavioral extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contact: '',
            date: '',
            hour: '',
            confirm: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleContact = this.handleContact.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleHour = this.handleHour.bind(this)
    }


    handleName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleContact(event) {
        this.setState({
            contact: event.target.value
        })
    }

    handleDate(event) {
        this.setState({
            date: event.target.value
        })
    }

    handleHour(event) {
        this.setState({
            hour: event.target.value
        })
    }

    handleSubmit(event) {
        const name = this.state.name
        const contact = this.state.contact
        const date = this.state.date
        const hour = this.state.hour

        axios.post(url, {
            Name: name,
            contact: contact,
            date: date,
            hour: hour
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault();

        this.setState({
            confirm: 'Obrigado pelo envio!',
        })

        setTimeout(() => {
            this.setState({
                confirm: ''
            })
        }, 3000)
    }

    render() {
        return (
            <div className='div-page-behavioral'>
                <h2>Consulta Comportamental</h2>
                <small>Use esta área para descrever o seu serviço</small>
                <p>1 h 30 minutos | R$ 200</p>
                <img src={img1} alt="imagem do cachorrinho" />
                <p className='descripition-behavioral'>Descreva seu serviço aqui. O que o torna especial?
                Use um texto curto e atraente para contar os seus
                serviços oferecidos e os benefícios que você propõe.
                Uma boa descrição coloca os leitores no clima e os
                incentiva a agendar.
            </p>
                <br /><br />
                <p>Consulta Comportamental</p>
                <p>1 h 30 minutos | R$ 200</p>
                <br /><br /><br />
                <p>Agende Online</p>
                <form action="" onSubmit={this.handleSubmit}>

                    <label htmlFor="">Nome</label>
                    <input type="text" value={this.state.name} onChange={this.handleName} />

                    <label htmlFor="">Contato / telefone ou email</label>
                    <input type="text" value={this.state.contact} onChange={this.handleContact} />

                    <label htmlFor="">Data</label>
                    <input type="date" name="" id="" value={this.state.date} onChange={this.handleDate} />

                    <label htmlFor="">Hora</label>
                    <input type="time" name="" id="" value={this.state.hour} onChange={this.handleHour} />

                    <Button >Agendar</Button>
                    <p className='message-confirm-behavioral'>{this.state.confirm}</p>
                </form>

            </div>
        )
    }
}