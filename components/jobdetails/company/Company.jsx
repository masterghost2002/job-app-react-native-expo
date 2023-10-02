import React from 'react'
import { View, Text, Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './company.style'
import { checkImageURL } from '../../../util'
const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.logoBox}
      >
        <Image
          source={{
            uri:checkImageURL(companyLogo)?companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQtL9AEo6Ju3lxUK9UGFUFKkbFxQw8iHxeA&usqp=CAU'
          }}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </View>
      <View
        style={styles.jobTitleBox}
      >
        <Text
          style={styles.jobTitle}
        >
          {jobTitle}
        </Text>
      </View>
      <View
        style={styles.companyInfoBox}
      >
        <Text
          style={styles.companyName}
        >
          {companyName}/
        </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text
            style={styles.locationName}
          >
            {location}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Company