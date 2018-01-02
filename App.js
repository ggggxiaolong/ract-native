import React, { Component } from 'react'
import { ScrollView, Image, Text, View } from 'react-native'

export default class IScrolledDownAndWhatHappendesNextShockedMe extends Component {
	render() {
		return (
			<ScrollView>
				<Text style={{fontSize: 42}}>夏目是一个温柔的男孩子</Text>
				<Image source = {require('./img/huli.png')} />
				<Text style={{fontSize: 42}}>他有一只胖胖的猫，我们叫他三三</Text>
				<Image source = {require('./img/huli.png')} />
				<Text style = {{fontSize: 42}}>有一次他遇到了一只小狐狸，他救了小狐狸</Text>
				<Image source = {require('./img/huli.png')} />
				<Text style = {{fontSize: 42}}>小狐狸很可爱，很可爱</Text>
			</ScrollView>
		)
	}
}