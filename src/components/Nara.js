import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Tag, Divider, Anchor} from 'antd';


class Nara extends Component {
  state = {
    clima: {
      base: '',
      clouds: {
        all: ''
      },
      cod: '',
      coord: {
        lat: '',
        lon: ''
      },
      dt: '',
      id: '',
      main: {
        humidity: '',
        pressure: '',
        temp: '',
        temp_max: '',
        temp_min: '',
      },
      name: 'Nara',
      sys: {
        country: '',
        id: '',
        message: '',
        sunrise: '',
        sunset: '',
        type: ''
      },
      visibility: '',
      weather: [{
        description: '',
        icon: '',
        id: '',
        main: ''
      }],
      wind: {
        speed: '',
        deg: ''
      }
    }
  }
  
  getClima = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=1855612&&appid=a6d58b64c7e5b013d9a80f62f31d2abc')
      .then(response => {
        this.setState({
          clima: response.data
        })
      })
  }

  componentDidMount(){
    this.getClima();
  }

  render () {
    const clima = this.state.clima
    const icon = `https://openweathermap.org/img/w/${clima.weather[0].icon}.png`

    return (
      <div>
        <h1 id='climaNara'>Clima</h1>
        <div className="climaPadre">
          <Card 
          className="clima"
          style={{width:300}}
          cover={
            <div>
              <div>
                Ciudad: {clima.name}
              </div>
            <br/>
              <div>
                Estado: {clima.weather[0].description}
              </div>
            <br/>
              <div>
                <img src={icon} alt=""/>{Math.round(((clima.main.temp)-273.15))}ºC 
                <span style={{padding: 20}}>
                  Humedad: {clima.main.humidity} %
                  <br/>
                  Viento: {Math.round((clima.wind.speed)*1.609)} km/h
                </span>
              </div>
            <br/>
              <div>
                <Tag>Max: {Math.round(((clima.main.temp_max)-273.15))}ºC</Tag> <Tag>Min: {Math.round(((clima.main.temp_min)-273.15))}ºC</Tag>
              </div>
          </div>
          }
          >
          </Card>
        </div>

        <br/>
        
        <div>
          <Button onClick={() => this.getClima()}>Actualizar clima</Button>       
        </div>
        
        <br/><br/>
        <Divider />

        <h1 id='dondeNara'>¿Dónde ir?</h1>
        <h3>Parque de Nara</h3>
        <img src="https://i0.wp.com/cptlyne.com/wp-content/uploads/2016/07/img_4013-1.jpg?w=1920&ssl=1" alt="Parque" style={{width:'100%'}}/>
        <p>
          El Parque de Nara es donde están la mayoría de los venados, aunque en realidad se encuentran por toda la ciudad. 
          Los venados ya se la saben con los turistas y no te prestan atención a menos que tengas comida, 
          está prohibido alimentarlos con cualquier cosa que no sean unas galletas específicas de venta en las entradas por 150 yenes. 
          - Está abierto 24/7 y es gratis.
        </p>
        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Nara+Park/@34.685047,135.843012,15z/data=!4m2!3m1!1s0x0:0xf96cacf357447456?sa=X&ved=2ahUKEwjc8JnR5q3hAhVO4qwKHYiSCuIQ_BIwH3oECAsQCA">  Ubicación</a>
          </Button>
        </Anchor>
        
        <br/><br/>

        <h3>Templo Todai-Ji</h3>
        <img src="https://lonelyplanetimages.imgix.net/a/g/hi/t/af49aa71df91ddc42495cdfc0c75f833-todai-ji.jpg?fit=crop&w=960&h=416" alt="Todai-Ji" style={{width:'100%'}}/>
        <p>
        Templo construido en 752 con la estatua de buda más grande de Japón y patrimonio cultural de la Unesco ahora funciona como una de las grandes escuelas de budismo. 
        </p>
        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/T%C5%8Ddai-ji/@34.6889851,135.8398158,15z/data=!4m5!3m4!1s0x0:0xf890ac3f9dd53c8f!8m2!3d34.6889851!4d135.8398158">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Higashimuki</h3>
        <img src="https://netmobius.freetls.fastly.net/images-stn-nara/11-Shopping-in-Nara5.jpg" alt="Higashimuki" style={{width:'100%'}}/>
        <p>
        Zona comercial de Higashimuki una calle sencilla solo para descansar, comprar alguna artesanía de calidad y tomar algo fresco.
        </p>
        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Higashimuki/@34.6824691,135.8265599,17z/data=!3m1!4b1!4m5!3m4!1s0x60013987e279cf53:0xc89284a82f97d5f2!8m2!3d34.6824691!4d135.8287486">  Ubicación</a>
          </Button>
        </Anchor>
          
        <br/><br/>

        <h3>Horyu-Ji</h3>
        <img src="https://www.japan-guide.com/g9/4104_03.jpg" alt="Horyuji" style={{width:'100%'}}/>
        <p>
        El Templo Horyuji  fue fundado en 607 por el Príncipe Shotoku, a quien se le atribuye la temprana promoción del budismo en Japón. Horyuji es uno de los templos más antiguos del país y rodeado por corredores techados, el recinto occidental alberga las estructuras de madera más antiguas del mundo: la puerta central (Chumon), la sala principal (Kondo) y una pagoda de cinco pisos. Fueron construidos en algún momento en el Período de Asuka (538-710) y no han sufrido destrucción desde entonces. <br/>
        La puerta central está protegida por las dos estatuas más antiguas de Japón, Kongo Rikishi, el par de deidades musculares. La sala principal alberga algunas de las estatuas de Buda más antiguas de Japón, raras creaciones que sobreviven del período Asuka. 
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/H%C5%8Dry%C5%AB-ji/@34.6140766,135.7356826,15z/data=!4m2!3m1!1s0x0:0xe94c9df615e2dbfc?sa=X&ved=2ahUKEwjqgozInbfhAhVqhq0KHWk-A0wQ_BIwGHoECA0QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>
        <Divider />

        <h1 id='comidaNara'>¿Qué comer?</h1>
        <img src="https://wanderlustdjournaldotcom.files.wordpress.com/2016/03/pancake-31.jpg?w=301&h=201" alt="HotCakes" style={{width:'100%'}}/>
        <h3>Hotcakes con relleno de natilla, té verde o pasta de frijol dulce</h3>
        
        <br/><br/>

        <img src="https://wanderlustdjournaldotcom.files.wordpress.com/2016/03/sweet-potato-21.jpg?w=1000&h=" alt="Camote" style={{width:'100%'}}/>
        <h3>Camotes: Iguales que los que chiflan en México, son la alternativa más saludable a la sobredosis de pan frito </h3>
        
        <br/><br/>

        <img src="https://wanderlustdjournaldotcom.files.wordpress.com/2016/03/strawbery-mochi-21.jpg?w=376&h=168" alt="Fresas" style={{width:'100%'}}/>
        <h3>Mochi con fresas: pasta de arroz suave con relleno de fresas frescas</h3>

        <br/><br/>
        <Divider />
        
        <h1 id='transporteNara'>Metro</h1>
        
        <img src="https://www.japan-guide.com/g/4107_01.gif" alt="subwayNara" style={{width:'100%'}}/>
        <Divider />
        <img src="https://www.japan-guide.com/g17/4103_1705.gif" alt="subwayNara" style={{width:'100%'}}/>
    
      </div>
    )
  }
}

export default Nara;