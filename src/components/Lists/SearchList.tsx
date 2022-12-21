import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { ProfileInterface } from './types'
import { profileDatas } from './datas/profileDatas'
import BiggerText from '../Texts/BiggerText'
import SmallText from '../Texts/SmallText'
import { windowWidth } from '../../sizes'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { propsStackClients } from '../../Routes/Models/ClientsProps'




export default function SearchList() {
  const navigation = useNavigation<propsStackClients>()

    const Profile = ({data}: {data : ProfileInterface}) => (
        <Pressable onPress={()=> navigation.navigate('Client', {name: data.name, pic: data.profilePic})} style={{flexDirection: 'row', marginVertical: 10}}>          
            <Image source={data.profilePic} style={{width: windowWidth / 8, height: windowWidth / 8}}/>
            <View style={{marginLeft: 10}}>
                <BiggerText style={{fontSize: 16}}>{data.name}</BiggerText>
                <SmallText>{data.subtitle}</SmallText>
            </View>          
        </Pressable>
    )

  return (
    <View>
      <FlatList
      data={profileDatas}
      renderItem={({item}) => <Profile data={item}/>}
      
      />

    </View>
  )
}