import React, {useState,useEffect,useRef} from 'react';
import {Text, View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { css } from './assets/css/Css';
import floresta from './assets/floresta.jpg';
import bonecas from './assets/bonecas.jpg';
import penitenciaria from './assets/penitenciaria.jpg';
import hellFire from './assets/hellFire.jpg';
import castelo from './assets/castelo.jpg';
import monte from './assets/monte.jpg';
import palacio from './assets/palacio.jpg';
import mina from './assets/mina.jpg';


//import config from './config';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import MapViewDirections from 'react-native-maps-directions';




export default function App(){

  const [origin,setOrigin]=useState(null);
  //2 parte busca e rotas
  const mapEl=useRef(null);
  const [distance,setDistance]=useState(null);
  const [destination,setDestination]=useState(null);
 

useEffect(()=>{
    (async function(){      
      let { status } = await Location.requestForegroundPermissionsAsync(); 
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]);



return(
<View style={css.container}>

<MapView
          style={css.map}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={true}
          loadingEnabled={true} 
          ref={mapEl}           
          >
          {/*MARCADOR*/}
          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: 35.476538727440975, longitude: 138.64187313427058}}
          title={'Aokigahara'}
          description={'A floresta assombrada fica situada no Japão'}
          >
        <View style={css.marcador}>
          <Image
          source={floresta}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Floresta dos Suicidas</Text>
        </View>
          </Marker>

          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: 19.290171749849097, longitude: -99.09650235231636}}
          title={'A Ilha das Bonecas'}
          description={'A ilha assombrada fica situada no México'}
          >
        <View style={css.marcador}>
          <Image
          source={bonecas}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Ilha das Bonecas</Text>
        </View>
          </Marker>


          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: 39.96854193558575, longitude: -75.1726433455741}}
          title={'Penitenciária Estatal do Leste'}
          description={'A penitenciária fica situada na Filadélfia, Estados Unidos'}
          >
        <View style={css.marcador}>
          <Image
          source={penitenciaria}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Penitenciária Estatal do Leste</Text>
        </View>
          </Marker>

          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: 53.25209624305551, longitude: -6.330018316161448}}
          title={'Hell Fire Club'}
          description={'Hell Fire Club fica situado na Irlanda'}
          >
        <View style={css.marcador}>
          <Image
          source={hellFire}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Hell Fire Club</Text>
        </View>
          </Marker>


          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: 47.10222891376402, longitude: 13.706432183553163}}
          title={'Castelo Moosham'}
          description={'O castelo fica situado na Áustria'}
          >
        <View style={css.marcador}>
          <Image
          source={castelo}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Castelo Moosham</Text>
        </View>
          </Marker>

          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: -34.86775581419913, longitude: 147.57587001406606}}
          title={'Monte Cristo Homestead'}
          description={'O Monte Cristo Homestead fica situado Austrália'}
          >
        <View style={css.marcador}>
          <Image
          source={monte}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Monte Cristo Homestead</Text>
        </View>
          </Marker>

          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: 27.094810958722928, longitude: 76.29185769576092}}
          title={'O palácio de Bhangarh'}
          description={'O palácio fica situado na Índia'}
          >
        <View style={css.marcador}>
          <Image
          source={palacio}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>O palácio de Bhangarh</Text>
        </View>
          </Marker>

          <Marker
          //para pegar as coodenadas de origin do ponto atual
          //coodinate={origin}
        //para pega coordenadas de pontos fixos no mapa
          coordinate={{latitude: -20.39291936588103,  longitude: -43.43902267722721}}
          title={'Mina da Passagem'}
          description={'A mina fica situada em Belo Horizonte no Brasil'}
          >
        <View style={css.marcador}>
          <Image
          source={mina}
          style={css.marcadorImage}
          >
          </Image>
          <Text style={{color:'white', fontSize: 10}}>Mina de Ouro da Passagem</Text>
        </View>
          </Marker>
  </MapView>
  </View>
  );
  };