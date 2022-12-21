import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { ProfileInterface, WarnsDatas } from './types'
import { profileDatas } from './datas/profileDatas'
import BiggerText from '../Texts/BiggerText'
import SmallText from '../Texts/SmallText'
import { windowWidth } from '../../sizes'
import { warnsDatas } from './datas/warnsDatas'
import MediumText from '../Texts/MediumText'
import { colors } from '../../colors'




export default function WarnsList() {

    const Profile = ({data}: {data : WarnsDatas}) => (
        <View style={{ marginVertical: 15 }}>           
                {data.time.length > 1 && <MediumText style={{color: colors.gray_1, textTransform: 'uppercase'}}>{data.time}</MediumText>}
                <Text numberOfLines={1} adjustsFontSizeToFit style={{fontSize: 16, fontFamily: 'inter-semibold', }}>{data.title}</Text>
                <Text numberOfLines={1} style={{fontSize:16, color: colors.paragraph_light, fontFamily: 'inter'}}>{data.subtitle}</Text>
        </View>
    )

  return (
    
      <FlatList
      data={warnsDatas}
      renderItem={({item}) => <Profile data={item}/>}
      style={{width: '100%'}}
      />

  
  )
}