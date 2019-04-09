import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Tag, Divider, Anchor} from 'antd';


class Kyoto extends Component {
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
      name: 'Kyoto',
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
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=1857910&&appid=a6d58b64c7e5b013d9a80f62f31d2abc')
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
        <h1 id='climaKyoto'>Clima</h1>
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

        <h1 id='dondeKyoto'>¿Dónde ir?</h1>
        <h3>Castillo Nijo</h3>
        <img src="https://www.travelcaffeine.com/wp-content/uploads/2017/04/nijo-castle-kyoto-japan-975.jpg" alt="Nijo" style={{width:'100%'}}/>
        <p>
        Histórica edificación shogun con estructuras de madera construidas en 1603,  La superficie total del castillo es de 275.000 metros cuadrados, de los cuales 8.000 metros cuadrados están ocupados por diversos edificios. tiene amplios jardines para fotografiar y se puede pasar al interior para caminar descalzo por los históricos pasillos cubiertos de tatamis.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Nij%C5%8D+Castle/@35.0142343,135.7460293,17z/data=!3m1!4b1!4m5!3m4!1s0x600107d40a2b9b0b:0x106b8759906a2f2f!8m2!3d35.0142299!4d135.748218">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Kinkaku</h3>
        <img src="http://justfunfacts.com/wp-content/uploads/2017/05/kinkaku-ji.jpg" alt="Kinkaku" style={{width:'100%'}}/>
        <p>
        Probablemente la estructura más famosa de Kyoto, reconstruida después de que lo quemara un monje esquizofrénico de 20 años en 1954, es un templo budista cubierto de hoja de oro a las orillas de un pequeño lago, no se puede pasar dentro del mismo, pero los jardines circundantes y la vista del templo reflejándose en el lago valen la pena. <br/> 
        <br/>
        - Entrada 400 yenes
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Kinkaku-ji/@35.03937,135.7270544,17z/data=!3m1!4b1!4m5!3m4!1s0x6001a820c0eb46bd:0xee4272b1c22645f!8m2!3d35.03937!4d135.7292431">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Ninnaji</h3>
        <img src="https://i.pinimg.com/originals/c3/ab/7e/c3ab7e6b29331ba63c92eca51599949e.jpg" alt="Ninnaji" style={{width:'100%'}}/>
        <p>
        Es uno de los principales templos budistas de la escuela Shingon de Japón. Se encuentra en la parte occidental de la ciudad de Kioto y fue fundado en el año 888 for el emperador Uda. Durante siglos el monje principal en este templo fue alguno de los miembros de la familia real. La mayor parte de los edificios que aún siguen en pie datan del siglo XVII, e incluyen una pagoda de cinco pisos y un huerto de cerezos enanos.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Ninna-ji/@35.0310981,135.7116311,17z/data=!3m1!4b1!4m5!3m4!1s0x6001077ff3ae5187:0xea1bdd27377bb743!8m2!3d35.0310937!4d135.7138198">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Tenryuji</h3>
        <img src="https://www.japan-guide.com/g18/740/3913_top.jpg" alt="Tenryu" style={{width:'100%'}}/>
        <p>
        Construido para apaciguar a los espíritus de los emperadores fallecidos, este templo zen se encuentra entre los 5 más importantes de Kyoto. La estructura ha sido reconstruida durante los siglos, pero el jardín, con un lago rocoso y rodeado de montañas, es completamente original desde su construcción en 1339. 
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Tenryuji+Temple/@35.015648,135.6737481,15z/data=!4m2!3m1!1s0x0:0xcd9c3edaff3348c0?sa=X&ved=2ahUKEwiW2uvk8rLhAhWEPFAKHalWCxUQ_BIwDnoECAsQCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Bosque de bamboos</h3>
        <img src="https://www.jtbgenesis.com/pic/tour/A1831NN2401-01.jpg" alt="Bamboo" style={{width:'100%'}}/>
        <p>
        Es uno de los lugares más fotografiados de la ciudad. Pero ninguna imagen puede captar la sensación de estar de pie en medio de este extenso bosquecillo de bambú: todo tiene una palpable sensación de otredad que es muy diferente a la de cualquier bosque normal que conozcamos. <br/>
        Puede acceder directamente desde la calle principal de Arashiyama, un poco al norte de la entrada al Templo Tenryu-ji, pero es mejor emparejarlo con una visita a ese templo. Solo hay un camino principal a través de la arboleda, que conduce lentamente hacia arriba. Una vez que llegues a la cima de la colina, la entrada a la sublime Villa Okochi-Sanso está justo frente a ti (entra, no te arrepentirás). <br/> 
        Hay dos grandes hoteles cerca de la arboleda de bambú de Arashiyama: Hoshinoya y Suiran. También está el hermoso ryokan Arashiyama Benkei.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/search?rlz=1C5CHFA_enMX523MX523&ei=hlClXLr4KoeCjLsPzZ23-Aw&q=kyoto%20bamboo%20grove&oq=kyoto+bamboo&gs_l=psy-ab.1.1.0l10.148543.151688..153962...0.0..0.395.2779.1j6j3j3......0....1..gws-wiz.....0..0i71j0i67.NvbQYcEpDp4&npsic=0&rflfq=1&rlha=0&rllag=35035816,135702662,4387&tbm=lcl&rldimm=8290898287731231126&phdesc=7XMEml3pjLk&ved=2ahUKEwjlr6_LmLXhAhUBd6wKHXMXBhMQvS4wAHoECAkQIQ&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1#rlfi=hd:;si:8290898287731231126,y,7XMEml3pjLk;mv:!1m2!1d35.065347599999996!2d135.7428577!2m2!1d35.0062849!2d135.6624663;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Adashino Nenbutsu-Ji</h3>
        <img src="https://2ponderful.com/wp-content/uploads/2017/08/adashino-nenbutsu-ji2.jpg" alt="Nenbutsu" style={{width:'100%'}}/>
        <p>
        Es un templo budista en Ukyo-ku, Kioto, Japón. Situado en lo alto de una colina que domina la ciudad, se encuentra en una zona donde, desde el período Heian, la gente abandonó los cuerpos de los muertos, exponiendolos al viento y la lluvia. Ahora, unas ocho mil estatuillas budistas, que habían sido esparcidas alrededor de Adashino y luego reunidas en alrededor de 1903, conmemoran las almas de los muertos. Durante la conocida ceremonia de 'sento kuyo' dedicada a los espíritus de los muertos en las noches del 23 y 24 de agosto, unas diez mil estatuas de piedra se encienden con velas.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Adashino-Nenbutsuji+Temple/@35.0268467,135.6645764,15z/data=!4m2!3m1!1s0x0:0x38e558a8bebffd1c?sa=X&ved=2ahUKEwja5cbul7XhAhUGW60KHWxMCVQQ_BIwDnoECA4QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Búsqueda de Geishas</h3>
        <img src="https://www.sugoihunter.com/wp-content/uploads/2018/09/maiko001ab.jpg" alt="Geishas" style={{width:'100%'}}/>
        <p>
        Buscar geishas en el distrito de Gion, las geishas, misteriosas figuras históricas de la ciudad, aún se pueden encontrar al atardecer en las calles del distrito de Gion, suelen verse en camino a sus citas en casas de té y bajando de taxis oscuros que las llevan a banquetes en la zona.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Gion,+Kyoto+ramen/@34.9709823,135.6939834,12z/data=!4m8!1m2!2m1!1sgion+kyoto!3m4!1s0x600108c1ec2fffff:0xf1880519afa2c431!8m2!3d35.004509!4d135.7750187">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Daigo-Ji</h3>
        <img src="https://www.japan-guide.com/g18/740/3916_top.jpg" alt="Daigo" style={{width:'100%'}}/>
        <p>
        El gran complejo de templos se encuentra al sureste del centro de Kyoto e incluye una ladera de montaña completa. Los terrenos del templo principal se encuentran en la base de la montaña y están conectados a través de una ruta de senderismo a varios edificios más. <br/> 
        Al ingresar se encontrarán primero en Sanboin, la elegante y antigua residencia del sacerdote principal, que se construyó originalmente en 1115. <br/> 
        También en el área de Shimo Daigo hay una pagoda de 38 metros de altura y cinco pisos que es el edificio verificado más antiguo de Kyoto. Construida en 951, la pagoda es la única estructura que sobrevivió a los incendios que han destruido repetidamente a Daigoji a lo largo de los siglos. Y por último, está el Bentendo Hall, probablemente el edificio más fotografiado de Daigoji, junto a un estanque en la parte posterior del área de Shimo Daigo.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Daigoji/@34.951024,135.819563,15z/data=!4m5!3m4!1s0x0:0x90f274040b6cfb3a!8m2!3d34.951024!4d135.819563">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Nanzen-Ji</h3>
        <img src="https://becauseiamuniquelyandwonderfullymade.files.wordpress.com/2013/06/sanmon-gate-2.jpg?w=816" alt="Nanzen" style={{width:'100%'}}/>
        <p>
        Es el templo principal de una de las escuelas dentro de la secta Rinzai del budismo zen japonés e incluye múltiples subtemplos. El Emperador Kameyama construyó su villa de retiro en la ubicación actual del templo y luego la convirtió en un templo Zen. Los terrenos del templo central de Nanzenji están abiertos al público de forma gratuita, pero se aplican tarifas separadas para ingresar a los edificios y los subtemplos del templo. Se encontrarán primero en la enorme puerta de entrada Sanmon de Nanzenji, que se extiende sobre las copas de los árboles. La puerta fue construida en 1628 para los soldados que murieron en el sitio del Castillo de Osaka en 1615. Es posible subir al balcón de la puerta, desde donde la vista se extiende a través de la ciudad. Más allá del Hatto, famoso por su jardín de rocas cuyas rocas se asemejan a tigres y cachorros que cruzan a través del agua. También son muy apreciadas las pinturas en puertas correderas (fusuma), que incluyen una representación más realista de tigres en pan de oro. Si ingresan al complejo de edificios Hojo a través de la antigua cocina del templo (kuri), pueden encontrar un pequeño salón de té  con una vista a una cascada de miniatura. <br/> 
        Fuera del Hojo, los visitantes se encontrarán con una visión bastante extraña: un gran acueducto de ladrillo que pasa por los terrenos del templo. Construido durante el Período Meiji (1868-1912), el acueducto es parte de un sistema de canales que fue construido para transportar agua y mercancías. 
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Nanzenji+Temple/@35.0112433,135.7932587,15z/data=!4m5!3m4!1s0x0:0x38b339a4c7e7004d!8m2!3d35.0112433!4d135.7932587">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Gio-Ji</h3>
        <img src="https://a2.cdn.japantravel.com/photo/17224-101098/600x400!/kyoto-%E4%BA%AC%E9%83%BD%E5%B5%AF%E5%B3%A8%E9%87%8E-%E7%A5%87%E7%8E%8B%E5%AF%BA%EF%BD%9E%E7%AC%AC%E4%B8%80%E9%83%A8-101098.jpg" alt="Gio" style={{width:'100%'}}/>
        <p>
        El templo Gio-ji es un templo tranquilo rodeado de árboles y un exuberante jardín de musgo. Los árboles crecen bastante densamente, y el templo a menudo está cubierto de sombra profunda. Dentro del templo, sin embargo, hay una estatua de Dainichi Nyorai, el Buda de la Luz. Otras estatuas están conectadas con el lugar del templo en la historia y literatura japonesas. <br/> 
        El templo lleva el nombre de Gio, una bailarina de hace mucho tiempo que se enamoró del poderoso líder Taira-no-Kiyomori de Heike Clan. Cuando terminó su relación, Gio se retiró a este templo para pasar el resto de su vida como sacerdotisa budista, junto con su hermana, madre y otra de las amantes rechazadas de Kiyomori. Las estatuas de madera de las mujeres y Kiyomori están consagradas en la sala principal. <br/> 
        Los terrenos del templo son especialmente hermosos en otoño, cuando las hojas cambian de color y contrastan con el musgo verde.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Giouji+Temple/@35.0234088,135.6672729,15z/data=!4m5!3m4!1s0x0:0xbe5c2851719aa546!8m2!3d35.0234088!4d135.6672729">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Mercado Nishiki</h3>
        <img src="https://www.japan-guide.com/g18/740/3931_top.jpg" alt="Nishiki" style={{width:'100%'}}/>
        <p>
        El mercado de Nishiki (錦 市場, Nishiki Ichiba) es una calle comercial estrecha de cinco cuadras de largo, con más de cien tiendas y restaurantes. Conocido como "la cocina de Kyoto", este animado mercado minorista se especializa en todo lo relacionado con la comida, como mariscos frescos, productos, cuchillos y utensilios de cocina, y es un gran lugar para encontrar casi todos los alimentos recomendados anteriormente. Las tiendas que se encuentran en todo el mercado varían en tamaño desde pequeños puestos estrechos hasta grandes tiendas de dos pisos. La mayoría se especializa en un tipo particular de comida, y casi todo lo que se vende en el mercado es producido y adquirido localmente.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Nishiki+Market/@34.7543783,136.2596726,9z/data=!4m5!3m4!1s0x0:0xb69ea31001ec6c9c!8m2!3d35.005008!4d135.7649016">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Templo Kiyomuzu dera</h3>
        <img src="https://a2.cdn.japantravel.com/photo/12789-73073/600x400!/kyoto-platform-of-kiyomizu-dera-temple-73073.jpg" alt="Kiyomuzu" style={{width:'100%'}}/>
        <p>
        Kiyomizudera (清水寺, literalmente "Templo de Agua Pura") es uno de los templos más famosos de Japón. Fue fundada en 780 en el sitio de la cascada Otowa en las colinas boscosas al este de Kyoto. El templo se asoció originalmente con la secta Hosso, una de las escuelas más antiguas dentro del budismo japonés. <br/>
        Kiyomizudera es mejor conocida por su escenario de madera que sobresale de su sala principal, 13 metros por encima de la ladera. El escenario ofrece a los visitantes una bonita vista de los numerosos cerezos y arces que brotan en un mar de color en primavera y otoño, así como de la ciudad de Kyoto en la distancia. <br/>
        <b> AVISO DE CONSTRUCCION: </b><br/>
        La sala principal de Kiyomizudera está cubierta desde febrero de 2017 hasta marzo de 2020 para la renovación de su techo. Aunque los visitantes podrán entrar en la sala principal durante las renovaciones.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Kiyomizu-dera/@34.9948561,135.7850463,15z/data=!4m5!3m4!1s0x0:0x62af658650c434ba!8m2!3d34.9948561!4d135.7850463">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>
        <Divider/>

        <h1 id='comidaKyoto'>¿Qué comer?</h1>
        <img src="https://cdn.vox-cdn.com/thumbor/HlBzW3hGX5IeQ1eUged_2FtuQgs=/0x0:5721x3814/1200x800/filters:focal(2363x1789:3277x2703)/cdn.vox-cdn.com/uploads/chorus_image/image/59189833/Ichiran_Midtown_West_27.0.jpg" alt="Ramen" style={{width:'100%'}}/>
        <h3><b>Ichiran ramen</b>, uno de los lugares más famosos de la ciudad y probablemente del mundo, para comer un bowl caliente de ramen, es mejor ir temprano y desayunar (sonara raro pero un plato de ramen te deja satisfecho todo el día y da energía) aparte de que así se evitan las multitudes de la hora de la comida y la cena. La experiencia de pedirlo a través de maquinita es divertido. <br/>
         -Costo: aprox 800 yen por persona, abierto 24/7.</h3>

         <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.co.jp/maps/place/Ichiran+Kyoto+Kawaramachi/@35.0058157,135.7658766,17z/data=!3m1!4b1!4m5!3m4!1s0x60010886e8f779ef:0x982b03d5f50ae6d0!8m2!3d35.0058157!4d135.7680653?hl=en&hl=en">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <img src="https://s3-media3.fl.yelpcdn.com/bphoto/-KffL0t-ZEVvZbGPVfKe7Q/o.jpg" alt="PuddingStalls" style={{width:'100%'}}/>
        <h3><b>Pudding stalls:</b> locales que venden una mezcla entre flan y natilla en pequeños frascos de vidrio, los sabores varían del té verde al ajonjolí negro, vainilla fresas y café</h3>

        <br/><br/>

        <img src="https://i.pinimg.com/originals/ff/a5/aa/ffa5aac18f9253ec166c6333fda7a922.jpg" alt="Puff" style={{width:'100%'}}/>
        <h3><b>Puff:</b> pan horneado relleno de crema dulce de té verde, se vende en puestos callejeros.</h3>

        <br/><br/>

        <img src="http://regex.info/i/JF7_111143.jpg" alt="Yuba" style={{width:'100%'}}/>
        <h3><b>Yuba:</b> se ve como queso fundido, pero es tofu tibio en salsa de soya, la textura es muy sedosa y el sabor salado y suave. Es una de las comidas más tradicionales de Kyoto y se puede encontrar en la mayoría de los restaurantes.</h3>

        <br/><br/>

        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/f8/d2/94/photo0jpg.jpg" alt="Yakitori" style={{width:'100%'}}/>
        <h3><b>Yakitori:</b> carne asada en varillas con salsas agridulces o picantes, se venden tanto en puestos callejeros como en restaurantes.</h3>

        <br/><br/>
        <Divider />


        <h1 id='transporteTokyo'>Metro</h1>
        <img src="https://i.pinimg.com/originals/27/98/e8/2798e8468f0fee42febe756d966b1cd5.png" alt="subwayKyoto" style={{width:'100%'}}/>
        
        

      </div>
    )
  }
}

export default Kyoto;