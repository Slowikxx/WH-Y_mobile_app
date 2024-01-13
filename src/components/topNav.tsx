import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { ThemeContext } from '../app/_layout';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const NavButton = ({ iconName, color, text, textColor, onPress }: any) => {
	const [isHovered, setIsHovered] = useState(false);
	const { colorScheme } = useContext(ThemeContext);

	const bgColor =
		isHovered && colorScheme === 'light'
			? '#FFD0CC'
			: colorScheme == 'light'
			? '#F0EEF0'
			: isHovered && colorScheme === 'dark'
			? '#3D0606'
			: '#171017';

	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.btnWrapper,
				{
					backgroundColor: bgColor,
				},
			]}
			onPressIn={() => setIsHovered(true)}
			onPressOut={() => setIsHovered(false)}
		>
			<Feather name={iconName} size={15} color={color} />
			<Text style={[styles.btnText, { color: textColor }]}>{text}</Text>
		</Pressable>
	);
};
const TopNav = () => {
	const { colorScheme, setColorScheme } = useContext(ThemeContext);
	const navigation = useNavigation();

	const handleThemeChange = () => {
		if (colorScheme === 'dark') {
			setColorScheme('light');
		} else {
			setColorScheme('dark');
		}
	};

	return (
		<View style={styles.container}>
			<NavButton
				onPress={handleThemeChange}
				iconName={colorScheme === 'dark' ? 'moon' : 'sun'}
				color={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				text="Zmień motyw"
				textColor={colorScheme === 'light' ? '#594E59' : '#978E97'}
			/>
			<NavButton
				onPress={() => navigation.navigate('legalInfo')}
				iconName="book"
				color={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				text="Informacje prawne"
				textColor={colorScheme === 'light' ? '#594E59' : '#978E97'}
			/>
			<NavButton
				onPress={() => navigation.navigate('administration')}
				iconName="database"
				color={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				text="Administracja"
				textColor={colorScheme === 'light' ? '#594E59' : '#978E97'}
			/>
			<NavButton
				onPress={() => navigation.navigate('aboutUs')}
				iconName="users"
				color={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				text="O nas"
				textColor={colorScheme === 'light' ? '#594E59' : '#978E97'}
			/>
			<NavButton
				iconName="log-out"
				color={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				text="Wyloguj"
				textColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: deviceWidth,
		borderBottomStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#BF1616',
		position: 'absolute',
		top: deviceHeight * 0.066,
		backgroundColor: 'red',
	},
	btnWrapper: {
		flexDirection: 'row',
		padding: 10,
		gap: 10,
		alignItems: 'center',
		paddingLeft: 25,
	},
	btnText: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
	},
});

export default TopNav;
