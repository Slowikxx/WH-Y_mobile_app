import { useContext } from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { ThemeContext } from '../app/_layout';

const ExpandedStatus = ({
	statusText,
	textColor,
	notify,
	setNotify,
	expanded,
	setExpanded,
	title,
	desc,
	date,
	time,
	place,
	location,
	witness,
	suspect,
}: any) => {
	const { colorScheme } = useContext(ThemeContext);

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: colorScheme === 'light' ? '#F0EEF0' : '#171017',
				},
			]}
		>
			<Animated.View
				entering={FadeInRight.duration(500)}
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text
					style={[
						styles.title,
						{ color: colorScheme === 'light' ? '#594E59' : '#978E97' },
					]}
				>
					{title.substring(0, 10) + '...'}
				</Text>
				<Pressable onPress={() => setExpanded(false)}>
					<Feather name="x" size={20} color={textColor} />
				</Pressable>
			</Animated.View>

			<Animated.View
				entering={FadeInRight.duration(500)}
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Text
					style={[
						styles.subtitle,
						{ color: colorScheme === 'light' ? '#594E59' : '#978E97' },
					]}
				>
					Status:{' '}
					<Text style={[styles.paragraph, { color: textColor }]}>
						{statusText}
					</Text>
				</Text>
				<Pressable onPress={() => setNotify(!notify)}>
					<Feather
						name={notify ? 'bell' : 'bell-off'}
						size={20}
						color={colorScheme === 'light' ? '#594E59' : '#978E97'}
					/>
				</Pressable>
			</Animated.View>
			<Animated.View
				entering={FadeInRight.duration(500)}
				style={styles.contentContainer}
			>
				<View>
					<Text
						style={[
							styles.subtitle,
							{ color: colorScheme === 'light' ? '#594E59' : '#978E97' },
						]}
					>
						Nazwa jednostki:
					</Text>
					<Text style={[styles.paragraph, { color: '#6D646D' }]}>
						Pierwsza Komenda policji miejskiej w Krakowie
					</Text>
				</View>
				<View>
					<Text
						style={[
							styles.subtitle,
							{ color: colorScheme === 'light' ? '#594E59' : '#978E97' },
						]}
					>
						Nazwisko Odbierającego:
					</Text>
					<Text style={[styles.paragraph, { color: '#6D646D' }]}>
						Nadkomisarz Maryla Śmietana
					</Text>
				</View>
				<View>
					<Text
						style={[
							styles.subtitle,
							{ color: colorScheme === 'light' ? '#594E59' : '#978E97' },
						]}
					>
						Inne informacje:
					</Text>
					<Text style={[styles.paragraph, { color: '#6D646D' }]}>
						{`Opis: ${desc}\nData i czas wysłania: ${date}, ${time}`}
						{place.trim() !== '' && `\nMiejsce zdarzenia: ${place}`}
						{location.trim() !== '' && `\nLokalizacja: ${location}`}
						{witness.trim() !== '' && `\nŚwiadek: ${witness}`}
						{suspect.trim() !== '' && `\nPodejrzany: ${suspect}`}
					</Text>
				</View>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 320,
		padding: 10,
		justifyContent: 'center',
		borderRadius: 22,
		...Platform.select({
			ios: {
				shadowColor: 'rgba(0, 0, 0, 0.25)',
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 1,
				shadowRadius: 8,
			},
			android: {
				elevation: 4,
			},
		}),
		zIndex: 100,
	},
	contentContainer: {
		marginTop: 10,
		gap: 10,
	},
	title: {
		fontFamily: 'Roboto',
		fontSize: 20,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 26,
	},
	subtitle: {
		fontFamily: 'Roboto',
		fontSize: 16,
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 24,
	},
	paragraph: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontWeight: '400',
		fontStyle: 'normal',
		lineHeight: 20,
	},
});

export default ExpandedStatus;
