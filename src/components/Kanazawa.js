import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Tag, Divider, Anchor} from 'antd';


class Kanazawa extends Component {
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
      name: 'Kanazawa',
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
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=1857470&&appid=a6d58b64c7e5b013d9a80f62f31d2abc')
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
    const icon = `http://openweathermap.org/img/w/${clima.weather[0].icon}.png`

    return (
      <div>
        <h1 id='climaKanazawa'>Clima</h1>
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
        <Divider/>

        <h1 id='dondeKanazawa'>¿Dónde ir?</h1>
        <h3>Jardin Kenrokuen </h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-kenrouken.jpg" alt="Kenrokuen" style={{width:'100%'}}/>
        <p>
        Kenrokuen (兼 六 園) en Kanazawa está clasificado como uno de los "tres jardines más hermosos de Japón". Los espaciosos terrenos solían ser el jardín exterior del Castillo de Kanazawa y fueron construidos por la familia Maeda durante un período de casi dos siglos. Abierto al público en 1871, Kenrokuen cuenta con una variedad de árboles en flor que le dan al jardín un aspecto diferente para cada estación.
        </p>
        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Kenroku-en/@36.5621278,136.6626515,15z/data=!4m2!3m1!1s0x0:0x970a7b3df003f2e4?sa=X&ved=2ahUKEwjy5oPf07bhAhVIZKwKHVxJC4MQ_BIwDnoECAsQCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Castillo Kanazawa </h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-castle.jpg" alt="Castillo" style={{width:'100%'}}/>
        <p>
        Desde 1583 hasta el final del Período Edo, el Castillo de Kanazawa (沢 城, Kanazawajō) fue la sede del poderoso Clan Maeda, señores de Kaga, un dominio feudal que ocupa el segundo lugar después de las posesiones de Tokugawa en términos de tamaño y riqueza. <br/><br/>
        El castillo se incendió varias veces a lo largo de los siglos, y los incendios más recientes de 1881 solo fueron sobrevividos por dos almacenes y la Puerta Ishikawa-mon. La puerta data de 1788. Durante varias décadas, la Universidad de Kanazawa ocupó los antiguos terrenos del castillo hasta que el campus se trasladó a las afueras de la ciudad a principios de los años noventa. Desde entonces, se está llevando a cabo un proyecto para reconstruir los antiguos edificios del castillo. Mientras tanto, la mayoría de las estructuras centrales vuelven a estar de pie.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Kanazawa+Castle/@36.563976,136.6595066,15z/data=!4m5!3m4!1s0x0:0xa827189e97e61e4a!8m2!3d36.563976!4d136.6595066">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Ozaki </h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-ozaki-shrine.jpg" alt="Ozaki" style={{width:'100%'}}/>
        <p>
        Ubicado cerca del mercado de alimentos frescos más grande de Kanazawa desde el Período Edo: el Mercado de Omicho, el edificio principal del Santuario Ozaki ha sido designado como una propiedad cultural importante en Japón. El Santuario Ozaki se construyó en 1643 para el señor de la cuarta generación de Kaga: Mitsutaka Maeda. el fundador y primer shogun del shogunato Tokugawa de Japón está consagrado aquí. podrán ver muchos símbolos de Tokugawa en los terrenos del santuario.
        </p>
        
        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Osaki+Shrine/@36.569233,136.657471,15z/data=!4m2!3m1!1s0x0:0x14eb190e788b7c82?sa=X&ved=2ahUKEwiC7aSK1rbhAhUBc60KHaSSDGEQ_BIwCnoECA8QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Casa samurái del clan Nomura </h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-samurai-house.jpg" alt="CasaSamurai" style={{width:'100%'}}/>
        <p>
        Es una casa histórica y un jardín en Nagamachi, anteriormente el área donde los samurai de Kanazawa vivían con sus familias. Hoy en día, el área se ve más o menos igual que en la era de Edo, con canales y calles empedradas que se extienden entre paredes de azulejos de tierra. <br/>
        La casa pertenecía a los Nomuras, una familia samurai adinerada que sirvió a la familia Maeda gobernante desde el siglo XVI hasta el final del período Edo a mediados del siglo XIX. En ese momento, el antiguo sistema de clases sociales llegó a su fin, y muchas casas de samurai fueron destruidas. La familia Nomura también tuvo que vender gran parte de sus propiedades y esta casa comenzó a caer en ruinas. Un rico hombre de negocios llamado Kubo Hikobei compró esta propiedad a principios del siglo XX. Hoy en día, la casa es propiedad de la ciudad y ha sido bellamente restaurada para que los visitantes puedan disfrutar de la vida en el hogar del samurai. <br/>
        En el interior encontrarán antigüedades como un traje de armadura, puertas de pantalla de fusumapintadas, armazones de ranma  tallados y un techo con paneles de madera de ciprés.
        </p>
        
        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Nomura+Clan+Samurai+Home/@36.5642058,136.6500324,15z/data=!4m5!3m4!1s0x0:0x548592a820b5d99a!8m2!3d36.5642058!4d136.6500324">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Myoryuji</h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-ninja-temple.jpg" alt="Myoryuji" style={{width:'100%'}}/>
        <p>
        El templo Myoryuji, comúnmente conocido como Templo Ninja, fue construido por los señores Maeda, gobernantes de la región durante el Período Edo. Aunque en realidad no está asociado con los ninjas, el templo ganó su apodo debido a sus muchas defensas engañosas. <br/>
        Dado que el shogun impuso estrictas restricciones de construcción como una forma de debilitar a sus señores regionales, Myoryuji fue diseñado para eludir las restricciones y servir como un puesto militar de avanzada disfrazado. Fue construido con considerables defensas y rutas de escape, para que sus defensores pudieran alertar al castillo en caso de un ataque. Las defensas incluían túneles ocultos, habitaciones secretas, trampas y un laberinto de pasillos y escaleras.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Myouryuji+(Ninja+Temple)/@36.5553843,136.6489974,15z/data=!4m2!3m1!1s0x0:0x1e04e87b774b8d19?sa=X&ved=2ahUKEwid4eXOmrfhAhUC16wKHcyFASMQ_BIwDnoECA8QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Distritos Chaya </h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-nishi-chaya.jpg" alt="Chaya" style={{width:'100%'}}/>
        <p>
        Una chaya es un tipo exclusivo de restaurante donde las geishas entretienen a los invitados y cantan y bailan. Kanazawa tiene tres distritos de chaya bien conservados, Higashi Chayagai (Distrito de Chaya Oriental), Nishi Chayagai (Distrito de Chaya Occidental) y Kazuemachi. Cada uno de los tres distritos tiene sus propios encantos y una mezcla de tiendas, cafés y restaurantes chaya. <br/>
        El distrito de Nishi Chaya (ishi 茶屋 街, Nishi Chayagai), es un área compacta a pocos pasos del Templo Ninja. Es mucho más pequeño y más silencioso que el Higashi Chayagai y tiene solo una atracción abierta al público: un museo, el Nishi Chaya Shiryokan, que muestra la historia del distrito.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Nishi+Chaya+District/@36.5567493,136.6474021,15z/data=!4m2!3m1!1s0x0:0x707f75259869e965?sa=X&ved=2ahUKEwj349-fm7fhAhUQWa0KHTFEBigQ_BIwFnoECAoQCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Kazuemachi</h3>
        <img src="https://theportablewife.com/wp-content/uploads/day-trip-to-kanazawa-itinerary-kazue-machi.jpg" alt="Kazuemachi" style={{width:'100%'}}/>
        <p>
        Kazue-machi es un antiguo distrito de geishas ubicado a lo largo del río entre el Puente Asanogawa Ohashi y el Puente Naka-no Hashi.  Es uno de los tres distritos de geishas de Kanazawa.En esta zona tambien hay varios Chaya donde las geishas realizan bailes y tocan instrumentos como el shamisen (un instrumento musical de tres cuerdas). Si van a la hora del crepúsculo, podrian escuchar fiesta y musica tradicionales entre sus calejones estrechos y casas antiguas  de la misma manera que eran hace 3 siglos.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Kazuemachi,+Kanazawa,+Ishikawa+920-0908,+Japan/@36.5724408,136.6612546,17z/data=!3m1!4b1!4m5!3m4!1s0x5ff8337398fbe7fd:0x4d5bc7e531671c00!8m2!3d36.5722681!4d136.6637567">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>
        <Divider/>


        <h1 id='comidaKanazawa'>¿Qué comer?</h1>
        <img src="https://photos.bigoven.com/recipe/hero/japanese-fried-chicken-tatsuta-d9d80e.jpg" alt="Tori Karaage" style={{width:'100%'}}/>
        <h3><b>Tori karaage</b> pollo frito al estilo japones, suele venir sazonado con soya y salsa tartara, se encuentra tanto en restaurantes como en puestos callejeros y es una buena opcion para comer en relacion pprecio calidad.</h3>

        <br/><br/>

        <img src="https://static.trip101.com/paragraph_media/pictures/001/273/001/large/usd-67411_960_720.jpg?1531729644" alt="Koshihikari" style={{width:'100%'}}/>
        <h3><b>Koshihikari rice</b> Una variedad popular de arroz cultivado en Japón, Koshihikari es uno de los tipos de arroz más cultivados en el país. Cultivado con el agua mineral adulada del monte sagrado Hakusan, el arroz recién cosechado lleva su pico de sabores en otoño. Reputada como la joya de la corona del arroz japonés de grano corto, Koshihikari es maravillosamente aromático y se complementa con una textura ligeramente pegajosa. El sabor dulce y a nuez del arroz lo convierte en el complemento ideal para varios platos, como el sushi y el curry.</h3>

        <br/><br/>

        <img src="https://static.trip101.com/paragraph_media/pictures/001/273/003/large/CURRY.jpg?1531729645" alt="Curry" style={{width:'100%'}}/>
        <h3><b>Kanazawa Curry and Rice</b> Inventado por Yoshikazu Tanaka, el fundador de Champion's Curry en la década de 1960, el Kanazawa Curry es un curry espeso que se suele servir con arroz y se complementa con una cobertura de chuleta frita empanizada con panko conocida como katsu. Qué mejor lugar para probar este plato que en Champion’s Curry con el curry original de Kanazawa, donde el caldo de color marrón claro tiene un toque de especias y una agradable textura espesa.</h3>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/search?rlz=1C5CHFA_enMX523MX523&q=88+Aokusamachi,+Kanazawa+920-0907,+Ishikawa+Prefecture&npsic=0&rflfq=1&rlha=0&rllag=36571601,136656177,9&tbm=lcl&ved=2ahUKEwj25Pq30rbhAhUCQ60KHVldBVUQtgN6BAgKEAQ&tbs=lrf:!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkpQ,lf:1,lf_ui:9&rldoc=1#rlfi=hd:;si:10112173054838374826,y,PEBd49gEgOE;mv:!1m2!1d36.5718343!2d136.6563232!2m2!1d36.5715296!2d136.65567000000001">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>  

        <img src="https://static.trip101.com/paragraph_media/pictures/001/273/005/large/beef-1386509_960_720.jpg?1531729647 " alt="Carne" style={{width:'100%'}}/>
        <h3><b>Noto-gyu</b> Una famosa carne de Kanazawa, Noto-gyu es una opción popular para comer entre los lugareños y los turistas. Típicamente servido como un plato de bistec a la parrilla de primera calidad, un restaurante recomendado para visitar es el Teraokafuusha. Reputado por su carne de solomillo de bistec Noto que se derrite en la boca y el juego de carne Noto Yakiniku, el asador establecido hace mucho tiempo exuda la esencia de Japón con sus asientos de tatami.</h3>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://tabelog.com/en/ishikawa/A1704/A170404/17000814/dtlmap/">  Ubicación</a>
          </Button>
        </Anchor>

        <Divider/>
        
        <h1 id='transporteKanazawa'>Camiones</h1>
        <img src="https://www.gojiakhong.com/wp-content/uploads/2018/05/Kanazawa_sightseeing_bus-1024x726.jpg" alt="Bus"/>
        
        

      </div>
    )
  }
}

export default Kanazawa;