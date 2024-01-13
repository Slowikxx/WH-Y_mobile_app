import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const IOSButtons = ({ confirmIOS, togglePicker }: any) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-around',
			}}
		>
			<TouchableOpacity
				onPress={togglePicker}
				style={[styles.btn, { backgroundColor: '#BF1616' }]}
			>
				<Text style={[styles.mdText, { color: '#F0EEF0' }]}>Anuluj</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={confirmIOS}
				style={[styles.btn, { backgroundColor: '#168DBF' }]}
			>
				<Text style={[styles.mdText, { color: '#F0EEF0' }]}>Potwierdź</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mdText: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: '700',
		lineHeight: 20,
		color: '#594E59',
		alignSelf: 'center',
	},
	btn: {
		width: 100,
		height: 30,
		borderRadius: 7.5,
		justifyContent: 'center',
	},
});

export default IOSButtons;
