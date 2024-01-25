import { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '../app/_layout';
import { useAuth } from '../providers/AuthProvider';

const AccountHeader = () => {
	const { session, users } = useAuth();
	const { colorScheme } = useContext(ThemeContext);

	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.lgText,
					{ color: colorScheme === 'light' ? '#BF1616' : '#E74333' },
				]}
			>
				{/* {session && users
					? `${users[0]['first_name']} ${users[0]['last_name']}`
					: ''} */}
				Siema
			</Text>
			<View
				style={[
					styles.circle,
					{
						backgroundColor: colorScheme === 'light' ? '#F0EEF0' : '#171017',
					},
				]}
			>
				<Feather
					name="plus"
					size={32}
					color={colorScheme === 'light' ? '#B8B2B8' : '#453845'}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginTop: 50,
		marginBottom: 100,
	},
	lgText: {
		fontFamily: 'Roboto',
		fontSize: 28,
		fontWeight: '800',
		fontStyle: 'normal',
		lineHeight: 26,
		textAlign: 'center',
		width: 243,
	},
	circle: {
		width: 60,
		height: 60,
		borderRadius: 30,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default AccountHeader;
