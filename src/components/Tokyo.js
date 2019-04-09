import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Tag, Divider, Anchor} from 'antd';


class Tokyo extends Component {
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
      name: 'Tokyo',
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
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=1850147&&appid=a6d58b64c7e5b013d9a80f62f31d2abc')
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
        <h1 id='climaTokyo'>Clima</h1>
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
        
        <h1 id="dondeTokyo">¿Dónde ir?</h1>
        <h3>Tsukiji Fish market</h3>
        <img src="https://www.japan-guide.com/g18/740/3021_05.jpg" alt="Tsukiji" style={{width:'100%'}}/>
        <p>
        El mercado de pescado de Tsukiji ha aparecido literalmente en todas las guías de Tokio y ocupa un lugar destacado en la lista de la mayoría de los visitantes a Japón. No solo era el mercado de pescado al por mayor más grande de Tokio y Japón, sino que también tenía el título para todo el planeta. También se realizaba una subasta de atún súper famosa antes del amanecer la mayoría de las mañanas. Si bien la subasta de atún y el mercado mayorista ahora están cerrados debido a la mudanza al nuevo y brillante Mercado de Toyosu, todavía hay una zona de mercado exterior que explorar que no tiene planes de mudarse a otra parte. Si le interesa el sushi, los mariscos o la cocina, el mercado exterior de Tsukji aún debe estar en su itinerario de Tokio. Los aproximadamente 150 metros por 250 metros (500 pies por 820 pies) de callejones estrechos y tiendas destartaladas conservan una muestra del mercado interior ahora inaccesible. Si bien el puro caos del mercado interior es cosa del pasado, solo un rincón del mercado exterior tiene más carácter que el estéril y ultramoderno mercado de Toyosu.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Tsukiji+Market/@35.6654861,139.770666 8,15z/data=!4m2!3m1!1s0x0:0x57c9eadb7b62ef7f?sa=X&ved=2ahUKEwjoneO F7LfhAhVD5awKHVrHAVEQ_BIwG3oECA0QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Palacio Imperial</h3>
        <img src="https://www.japan-guide.com/g18/740/3017_01.jpg" alt="Palacio" style={{width:'100%'}}/>
        <p>
        El Palacio Imperial se encuentra en el antiguo emplazamiento del Castillo de Edo, en un gran parque rodeado de fosos y enormes muros de piedra en el centro de Tokio, a pocos pasos de la estación de Tokio. Es la residencia de la familia imperial de Japón. <br/> 
        El Castillo de Edo solía ser la sede del shogun Tokugawa que gobernó Japón desde 1603 hasta 1867. En 1868, el shogunato fue derrocado, y la capital del país y la Residencia Imperial se trasladaron de Kioto a Tokio. En 1888 se terminó la construcción de un nuevo Palacio Imperial. El palacio fue destruido una vez durante la Segunda Guerra Mundial, y reconstruido en el mismo estilo, después. <br/> 
        Los terrenos interiores del palacio generalmente no están abiertos al público. Solo el 2 de enero (saludo de año nuevo) y el 23 de diciembre (cumpleaños del emperador), los visitantes pueden ingresar al palacio interior y ver a los miembros de la familia imperial, que hacen varias apariciones públicas en un balcón.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Imperial+Palace/@35.685175,139.752799 5,15z/data=!4m2!3m1!1s0x0:0xd11a5f0b379e6db7?sa=X&ved=2ahUKEwj3t9L 367fhAhUjtYsKHXc6AtYQ_BIwF3oECA0QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Tokyo SkyTree</h3>
        <img src="https://www.gotokyo.org/en/spot/6/images/6_0099_20_750x503.jpg" alt="SkyTree" style={{width:'100%'}}/>
        <p>
        El Tokyo Skytree es una torre de transmisión de televisión y la pieza central de la ciudad de Tokyo. Está en el barrio de Sumida City, no muy lejos de Asakusa. Con una altura de 634 metros, es la estructura más alta de Japón y la segunda más alta del mundo en el momento de su finalización. Un gran complejo comercial con acuario se encuentra en su base. <br/> 
        Lo más destacado del Tokyo Skytree son sus dos plataformas de observación que ofrecen vistas espectaculares de Tokio. Las dos cubiertas cerradas están ubicadas a alturas de 350 y 450 metros respectivamente, lo que las convierte en las plataformas de observación más altas de Japón y algunas de las más altas del mundo. <br/>
        Tembo Deck, la más baja de las dos cubiertas, tiene 350 metros de altura y abarca tres niveles con excelentes vistas desde todos sus pisos. El piso superior cuenta con ventanas altas y amplias que ofrecen algunas de las mejores vistas panorámicas de 360 ​​grados de la ciudad. El piso intermedio tiene una tienda de souvenirs y el restaurante Musashi Sky, que sirve cocina de fusión franco-japonesa, mientras que el piso más bajo tiene una cafetería y algunos paneles de vidrio en el suelo desde donde se puede mirar hasta la base de la torre. <br/> 
        Un segundo conjunto de ascensores conecta con la galería Tembo de 450 metros de altura. Apodada "la pasarela más alta del mundo", la Galería Tembo consiste en una rampa en espiral inclinada que gana altura a medida que rodea la torre. La construcción del tubo de acero y vidrio permite a los visitantes mirar hacia abajo desde la vertiginosa altura de la torre y sobre la región de Kanto a distancias espectaculares.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Tokyo+Skytree/@35.7100627,139.810700 4,15z/data=!4m2!3m1!1s0x0:0x7d1d4fb31f43f72a?sa=X&ved=2ahUKEwiEtfXl6 7fhAhWk_CoKHaiJCc4Q_BIwFnoECAsQCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Ikebukuro</h3>
        <img src="https://a2.cdn.japantravel.com/photo/13768-80288/1200x630!/tokyo-ikebukuro -80288.jpg" alt="Ikkebukuro" style={{width:'100%'}}/>
        <p>
        Ikebukuro es uno de los múltiples centros urbanos de Tokio, que se encuentra en la esquina noroeste de la línea de bucle Yamanote. Ikebukuro ofrece una gran variedad de opciones de entretenimiento, tiendas y restaurantes. Es el campo de batalla entre los conglomerados de Tobu y Seibu que operan grandes almacenes a cada lado de la estación. <br/> 
        Si bien no es tan grande o conocido como Akihabara, Ikebukuro también es un centro de la cultura otaku. A diferencia de Akihabara, Ikebukuro atiende más a una clientela femenina con cafés de mayordomo y tiendas relacionadas con anime, manga y cosplay, como Animate, Mandarake y K-Books. El centro de la escena femenina otaku se encuentra a lo largo de Otome Road, al norte de Sunshine City. También se dice que es un buen lugar para encontrar dojinshi, mangas o novelas auto publicadas, especialmente aquellas producidas para mujeres.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Ikebukuro,+Toshima+City,+Tokyo,+Japa n/@35.7362617,139.6982546,15z/data=!3m1!4b1!4m5!3m4!1s0x601892a0a558 5c27:0xb420ac39f1dc62ba!8m2!3d35.7348314!4d139.7077314">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Kamakura</h3>
        <img src="https://www.japan-guide.com/blog/koyo17/g/171204_kamakura_00.jpg" alt="Kamakura" style={{width:'100%'}}/>
        <p>
        Kamakura es una ciudad costera en la Prefectura de Kanagawa, a menos de una hora al sur de Tokio. La ciudad se convirtió en el centro político de Japón, cuando Minamoto Yoritomo lo eligió como sede de su nuevo gobierno militar a fines del siglo XII. <br/>
        Hoy en día, Kamakura es una ciudad pequeña y un destino turístico muy popular. A veces llamado el Kyoto del este de Japón, Kamakura ofrece numerosos templos, santuarios y otros monumentos históricos. Además, las playas de arena de Kamakura atraen a grandes multitudes durante los meses de verano. <br/> 
        Una de sus atracciones más interesantes es el Gran Buda de Kamakura una estatua de bronce del Buda Amida, que se encuentra en los terrenos del Templo Kotokuin. Con una altura de 11,4 metros, ha sido durante mucho tiempo la segunda estatua de Buda de bronce más alta de Japón, solo superada por la estatua en el Templo Todaiji de Nara. La estatua fue creadada en 1252 y originalmente ubicada dentro de una gran sala del templo. Sin embargo, los edificios del templo fueron destruidos varias veces por tifones y un tsunami en los siglos XIV y XV. Entonces, desde finales del siglo XV, el Buda ha estado de pie al aire libre.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Kamakura,+Kanagawa,+Japan/data=!4m2!3m1!1s0x6018459b80ac5619:0x5700747a399f2502?sa=X&ved=2ahUKEwjrgMOn67fhAhUEUK0KHbuHCRQQ8gEwFXoECA8QCA">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Shibuya</h3>
        <img src="https://www.japan-guide.com/g18/3007_01.jpg" alt="Shibuya" style={{width:'100%'}}/>
        <p>
        Es la popular zona de compras y entretenimiento que se encuentra en la estación de Shibuya, es uno de los distritos más coloridos y concurridos de Tokio, repleto de tiendas, restaurantes y clubes nocturnos que atienden a los enjambres de visitantes que llegan al distrito todos los días. <br/> 
        Shibuya es un centro de moda y cultura juvenil, y sus calles son el lugar de nacimiento de muchas de las tendencias de moda y entretenimiento de Japón. En la zona hay más de una docena de sucursales de grandes almacenes que atienden a todo tipo de compradores. La mayoría de los grandes departamentos y tiendas de moda del área pertenecen a Tokyu o Seibu. <br/> 
        Un hito prominente de Shibuya es la gran intersección frente a la salida de la estación. La intersección está decorada en gran medida con anuncios de neón y pantallas de video gigantes y es inundada por peatones cada vez que la luz de cruce se vuelve verde, lo que la convierte en un lugar popular para filmar series y películas. <br/> 
        La mayoría de las personas en todo el mundo conocen la historia de Hachi, el leal perro Akita que esperó a su dueño en su bajada de metro mucho después de que falleció. En 1924, Hidesaburo Ueno, un profesor de la Universidad de Tokio, tomó a un perro Akita de raza pura como mascota y lo llamó Hachi. Hachi es la palabra para el número ocho en japonés, que se considera un número de la suerte. <br/> 
        Hachi solía seguir al profesor Ueno a la estación de Shibuya todas las mañanas, donde el profesor tomaba el tren para ir al trabajo. Por la tarde, el perro lo recogería en la estación para ir a casa juntos. Una mañana de mayo de 1925, Hachi acompañó al profesor Ueno a la Estación como siempre, pero Ueno no regresaría esa tarde. Sufrió una hemorragia cerebral en la universidad y falleció. Sin darse cuenta de la muerte de su dueño, Hachi seguía regresando a la estación de Shibuya todos los días para esperarlo. <br/> 
        Muchos visitantes a Japón van a ver la estatua de Hachi en la estación de Shibuya. La famosa estatua de bronce de Hachi se encuentra justo enfrente de la salida Hachiko de la estación Shibuya, que también lleva su nombre. <br/> 
        Como dato curioso, en una noche de nieve en 2014, cuando los trenes se detuvieron debido a la nevada y muchas personas se quedaron atrapadas en la Estación Shibuya, alguien construyó una réplica de nieve del perro al lado de la estatua.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Shibuya+City,+Tokyo,+Japan/@35.6668607,139.6575965,13z/data=!3m1!4b1!4m5!3m4!1s0x60188cb2eb3108d1:0xf11cd9b2395b6677!8m2!3d35.6619707!4d139.703795">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Animal Cafés</h3>
        <p>
        Los cafes tematicos son la experiencia turistica japonesa cute por excelencia, mientras que la calidad es la misma que en cualquier otro cafe promedio de la ciudad (De no ser por Monta el cafe de gatos, Monta es muy bueno), el concepto es dificil de encontrar en otro pais, asi que por curiosidad vale a pena conocer al menos uno. Suelen abir a las 11 y el precio de la entrada por lo genera incluye una bebida mientras juegas con los animales y se puede salir y volver a entar durante un periodo de varias horas:
        </p>
            <img src="http://animalcafes.com/pix/800-asa-monta.jpg" alt="Monta" style={{width:'100%'}}/>
            <p>Uno de gatos</p>
            <Anchor affix={false}>
              <Button icon="global" size="large">
                <a href="https://www.google.com/maps/place/Cat+cafe+MONTA/@35.7120854,139.7979926,15z/data=!4m5!3m4!1s0x0:0xf6733d59225afd11!8m2!3d35.7120854!4d139.7979926">  Ubicación</a>
              </Button>
            </Anchor>
          
          <br/>
            
          <img src="https://animalcafes.com/pix/800-kichi-village2.jpg" alt="Kichi" style={{width:'100%'}}/>
          <p>Uno de búhos</p>
            <Anchor affix={false}>
              <Button icon="global" size="large">
                <a href="https://www.google.com/maps/place/Owl+Village+in+Harajuku/@35.6722299,139.7035005,15z/data=!4m2!3m1!1s0x0:0x850545d8d4d99d5c?sa=X&ved=2ahUKEwj3xMvZrbfhAhUQGKwKHTDMCHAQ_BIwDHoECA4QCA">  Ubicación</a>
              </Button>
            </Anchor>
   
          <br/>  

          <img src="https://media.timeout.com/images/105247217/630/472/image.jpg" alt="Shiba" style={{width:'100%'}}/>
          <p>Uno de shiba inu</p>
            <Anchor affix={false}>
              <Button icon="global" size="large">
                <a href="https://www.google.com/maps/place/Harajuku+Mame-Shiba+Cafe/@35.6709013,139.7055807,15z/data=!4m5!3m4!1s0x0:0x6c6d4887f3263746!8m2!3d35.6709013!4d139.7055807">  Ubicación</a>
              </Button>
            </Anchor>

        <br/><br/>

        <h3>Harajuku</h3>
        <img src="https://media.timeout.com/images/105299233/630/472/image.jpg" alt="Harajuku" style={{width:'100%'}}/>
        <p>
        Aqui esta el estereotipico japon urbano de niñas de pelo azul, vida nocturna y luz neon, ​desde el gótico en negro hasta el colorido kawaii, las pequeñas boutiques y las tiendas vintage comparten calles con marcas de lujo de alta gama. Takeshita Street es una calle comercial peatonal muy concurrida, llena de coloridos algodones de azúcar, tiendas adorables y crepas sobre adornadas con frutas, crema y dulces. <br/> 
        En la zona vale la pena ir a Tokyu Plaza, un complejo comercial en la intersección de Omotesando y Harajuku. La entrada está bellamente diseñada con una escalera mecánica cubierta por un espejo y hay una terraza en la azotea en el sexto piso que ofrece una gran vista de los alrededores.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Harajuku,+Jingumae,+Shibuya+City,+Tokyo+150-0001,+Japan/@35.6684349,139.7002375,15z/data=!3m1!4b1!4m5!3m4!1s0x60188ca2e4535de5:0x4819c8b806e23295!8m2!3d35.6699682!4d139.709008?hl=en-MX">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>

        <h3>Shinjuku</h3>
        <img src="https://fortunedotcom.files.wordpress.com/2017/04/gettyimages-460020702.jpg" alt="Shinjuku" style={{width:'100%'}}/>
        <p>
        Otro caos nocturno de la ciudad,​Shinjuku es uno de los 23 barrios de la ciudad de Tokio, pero el nombre comúnmente se refiere a la gran área de entretenimiento, negocios y compras alrededor de la Estación Shinjuku. <br/> 
        La estación Shinjuku es la estación de trenes más concurrida del mundo, con más de dos millones de pasajeros por día. Cuenta con una docena de líneas de tren y metro. Al oeste de la estación se encuentra el distrito de rascacielos de Shinjuku, hogar de muchos de los edificios más altos de Tokio, incluidos varios de los mejores hoteles y las torres gemelas de la Oficina del Gobierno Metropolitano, cuyas plataformas de observación están abiertas al público de forma gratuita. <br/> 
        Al noreste de la estación se encuentra Kabukicho, el distrito de luz roja más grande e intenso de Japón, tiendas departamentales, los centros comerciales subterráneos y las tiendas de electrónica rodean la Estación Shinjuku en los cuatro lados, incluida la reurbanizada Terraza Sur ​ donde puedes ver un Godzilla.
        </p>

        <Anchor affix={false}>
          <Button icon="global" size="large">
            <a href="https://www.google.com/maps/place/Shinjuku+City,+Tokyo,+Japan/@35.7015837,139.6741777,13z/data=!3m1!4b1!4m5!3m4!1s0x60188d2059b7fd4b:0xec61c68fe232efd2!8m2!3d35.6938253!4d139.7033559?hl=en-MX">  Ubicación</a>
          </Button>
        </Anchor>

        <br/><br/>
        <Divider />
        <h1 id='comidaTokyo'>¿Qué comer?</h1>
        <img src="https://photos.smugmug.com/Japan-2017/i-PsgBV2m/0/f10a6f19/X3/japanese-street-food-tsukiji-market-24-X3.jpg" alt="Rollo" style={{width:'100%'}}/>
        <h3><b>Rollo de huevo</b> como un omelet perfectamente cocinado y sazonado, se vende en plato o en una varilla y vale la pena solo por el show de ver cómo se prepara minuciosamente.</h3>

        <br/><br/>
        
        <img src="https://www.8days.sg/image/9920778/16x9/1920/1080/aeda96677142e50e94ab5cf97e3df618/Dc/uya-unagi-rice-box.jpg" alt="Anguila" style={{width:'100%'}}/>
        <h3><b>Unagui</b> anguila suave asada con salsa agridulce de sabor ahumado y más a carne que a pescado</h3>

        <br/><br/>

        <img src="https://images-na.ssl-images-amazon.com/images/I/91YVVQkl4%2BL._SL1500_.jpg" alt="Takoyaki" style={{width:'100%'}}/>
        <h3><b>Takoyaki</b> bolitas de masa con trozos de pulpo cocinadas en con palillos, una de las botanas mas populares en todo Japón</h3>

        <br/><br/>

        <img src="https://www.closetcooking.com/wp-content/uploads/2008/03/Kare-Pan-Curry-Bread.jpg" alt="KarePan" style={{width:'100%'}}/>
        <h3><b>Kare Pan</b> bolas de pan horneado rellenas de guiso salado de carne y curry o verduras y curry, se comen calientes y son muy practicos para cuando gana el hambre.</h3>

        <br/><br/>

        <img src="https://cdn.store-assets.com/s/5234/i/3558359.jpeg" alt="Daifuku" style={{width:'100%'}}/>
        <h3><b>Red bean cakes</b> masa horneada rellena de pasta de frijol rojo dulce</h3>

        <br/><br/>

        <img src="https://i.pinimg.com/originals/ef/96/11/ef9611f5e83fda3718227622e7a624b9.jpg" alt="HotCakes" style={{width:'100%'}}/>
        <h3><b>Hotcakes soufflé</b> ​batidos por suficiente tiempo para levantarse al triple de lo que un hotcake como lo conocemos, el sabor tiene notas a vainilla pero no muy dulce y se acompañan con crema batida y frutas. Es comun encontrarlos en las cafeterias para comerlos como postre por las tardes con alguna bebida caliente.</h3>

        <br/><br/>

        <img src="https://backpackingman.com/wp-content/uploads/2016/07/okonomiyaki-hiroshima.jpg" alt="Okonomiyaki" style={{width:'100%'}}/>
        <h3><b>Okonomiyaki</b> ​La comida confort mas popular en Japón, se puede encontrar en puestos callejeros y en restaurantes, siempre de buena calidad como lo exigen los locales. Es de las elecciones mas prácticas al ser ​muy abundante,rico, y no tan caro. <br/>
        La forma general de cocinarlo es freír un poco de col o fideos, o ambos, luego cubrirlos con las carnes de su elección, siendo la mejor la carne de cerdo. Algunos también tendrán un huevo frito en la parte superior e inferior para despues cubrirse con salsa.</h3>

        <br/><br/>

        <img src="https://4exca539l2h82mcy9d19lw9f-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/japanese-cheesecake-2.jpg" alt="PastelQueso" style={{width:'100%'}}/>
        <h3><b>Pastel de queso suffle</b> Al igual que los hotcakes, este pastel es imposiblemente esponjoso y ligero. Se vende en las areas de pasteleria de los centros comerciales y como postre en varios restaurantes, aunque nosotros devoramos uno completo en un cuarto de hotel sin remordimientos.</h3>
        
        <br/><br/>
        <Divider />

        <h1 id='transporteTokyo'>Metro</h1>
        <img src="https://bento.com/pix/subway/tokyo_subway_1700.gif" alt="subwayTokyo" style={{width:'100%'}}/>
        
        

      </div>
    )
  }
}

export default Tokyo;