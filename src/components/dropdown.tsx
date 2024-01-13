import { useState, useContext } from 'react';
import { StyleSheet, View, Text, Platform, Pressable } from 'react-native';
import { ThemeContext } from '../app/_layout';
import { Feather } from '@expo/vector-icons';
import SingleDropdown from './singleDropdown';

const Dropdown = ({ mainText }: any) => {
	const [open, setOpen] = useState(false);
	const { colorScheme } = useContext(ThemeContext);

	const backgroundColor =
		open && colorScheme === 'light'
			? '#F0EEF0'
			: colorScheme === 'light'
			? '#BF1616'
			: open && colorScheme === 'dark'
			? '#171017'
			: '#E74333';
	const iconColor =
		open && colorScheme === 'light'
			? '#BF1616'
			: colorScheme === 'light'
			? '#F0EEF0'
			: open && colorScheme === 'dark'
			? '#E74333'
			: '#171017';

	const textColor =
		open && colorScheme === 'light'
			? '#594E59'
			: colorScheme === 'light'
			? '#F0EEF0'
			: open && colorScheme === 'dark'
			? '#978E97'
			: '#171017';

	return (
		<View
			style={{
				backgroundColor: colorScheme === 'light' ? '#F0EEF0' : '#171017',
				borderRadius: 7.5,
				flexShrink: 1,
				marginTop: 20,
			}}
		>
			<Pressable
				onPress={() => setOpen(!open)}
				style={[
					styles.container,
					{ backgroundColor: backgroundColor },
					open && {
						borderBottomColor: 'rgba(220, 30, 13, 0.2)',
						borderBottomWidth: 1,
					},
				]}
			>
				<View style={{ flexDirection: 'row', gap: 10 }}>
					<Feather name="clipboard" size={20} color={iconColor} />
					<Text style={[styles.mainText, { color: textColor }]}>
						{mainText}
					</Text>
				</View>
				<Feather
					name={open ? 'chevron-up' : 'chevron-down'}
					size={20}
					color={iconColor}
				/>
			</Pressable>

			{open && (
				<View style={[styles.wrapper]}>
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
					<SingleDropdown mainText="Przeciwko życiu i zdrowiu" />
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: 320,
		borderRadius: 7.5,
	},
	container: {
		width: 320,
		height: 36,
		paddingHorizontal: 10,
		borderRadius: 7.5,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	mainText: {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 24,
	},
});

export default Dropdown;
