import React from 'react';
import {Divider, List, Card} from 'antd';



const data = [
  {
    title: `Tips de etiqueta generales`,
    body12: '...y otros medio obscuros que descubrimos a las malas',
    body1: 'Las muestras de afecto en público son poco comunes y algo mal vistas. Tomarse de la mano y los abrazos están bien, sin embargo los besos largos y demás muestras de “sobre-afecto” puede ser algo escandaloso para los locales (aunque hay unos moteles temáticos muy limpios para seguirle).',
    body2: 'Ciertos bares tradicionales, como nuestras cantinas del centro, son extraoficialmente solo para los locales (estas son fáciles de identificar por estar llenas de hombres de mediana edad con cara de agotamiento laboral). Nadie les impedirá el paso, pero la vibra da a entender que uno no tiene nada que hacer ahí.',
    body3: 'El contacto visual muy intenso no es costumbre; lugar perfecto para los introvertidos.',
    body4: 'Si te hacen un cumplido es de buenas costumbres negarlo y decir que eres una rata mojada... Tal vez no literalmente, pero un extra de humildad es apreciado.',
    body5: 'Si recibes un a tarjeta de presentación, como es costumbre, se toma con las dos manos y se observa por unos segundos.',
    body6: 'El ángulo de la inclinación por agradecimiento es relativa al nivel de agradecimiento y a que tan superior/mayor es la otra persona.',
    body7: 'Si te enfermas, es de buenos modales usar tapabocas. Los estornudos y tos abiertos en lugares públicos no le gusta a nadie.'
  },
  {
    title: 'Al comer',
    body8: 'Los palillos no se dejan en el bowl de arroz ni en el plato de sushi, sólo en la pieza especial de vajilla designada para esto. En especial no se dejan clavados en el arroz, ya que es cosa de funerales y se considera de muy mal gusto en cualquier otra circunstancia. ',
    body9: 'El wasabi no se mezcla con la soya.',
    body10: 'El sushi se moja en la soya del lado del pescado, no del lado del arroz. Los japoneses están muy orgullosos de su arroz y bañarlo en soya es una falta de respeto para el cocinero.',
    body11: 'Los palillos se usan de un extremo para comer y de otro para tomar piezas de un plato compartido.'
  }
]

const Tips = () => {
  return (
    <div>
      <List
        grid={{gutter:16, xs: 1, sm: 1, md: 2, lg: 2}}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>
                <p><b>{item.body12}</b></p>
                <p>{item.body1}</p>
                <p>{item.body2}</p>
                <p>{item.body3}</p>
                <p>{item.body4}</p>
                <p>{item.body5}</p>
                <p>{item.body6}</p>
                <p>{item.body7}</p>
                <p>{item.body8}</p>
                <p>{item.body9}</p>
                <p>{item.body10}</p>
                <p>{item.body11}</p>
            </Card>
          </List.Item>
        )}
      />
      <Divider />
    </div>
  )
}

export default Tips;