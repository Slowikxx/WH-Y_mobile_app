import { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Button from '../../components/button';
import { useNavigation } from 'expo-router';
import { ThemeContext } from '../_layout';
import Input from '../../components/input';

const SingleData = ({ label, text }: any) => {
	const { colorScheme } = useContext(ThemeContext);
	return (
		<View style={styles.container}>
			<View style={styles.labelContainer}>
				<Text
					style={[
						styles.label,
						{ color: colorScheme === 'light' ? '#594E59' : '#978E97' },
					]}
				>
					{label}
				</Text>
				<Feather
					name="info"
					size={20}
					color={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
				/>
			</View>

			<View>
				<View
					style={[
						styles.input,
						{
							borderColor: colorScheme === 'light' ? '#B8B2B8' : '#453845',
							backgroundColor: colorScheme === 'light' ? '#F0EEF0' : '#171017',
						},
					]}
				>
					<Text
						style={{ color: colorScheme === 'light' ? '#594E59' : '#978E97' }}
					>
						{text}
					</Text>
				</View>
			</View>
		</View>
	);
};

const ShowData = () => {
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	return (
		<ImageBackground
			style={{ paddingTop: 20, flex: 1 }}
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ marginBottom: 50 }}
			>
				<View style={styles.background}>
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'space-around',
							marginTop: 50,
							marginBottom: 100,
						}}
					>
						<Text
							style={[
								styles.lgText,
								{ color: colorScheme === 'light' ? '#BF1616' : '#E74333' },
							]}
						>
							Imię / Imiona i nazwisko użytkownika
						</Text>
						<View
							style={[
								styles.circle,
								{
									backgroundColor:
										colorScheme === 'light' ? '#F0EEF0' : '#171017',
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
					<View style={{ gap: 10 }}>
						<Button
							width={324}
							height={44}
							text="Pokaż moje dane"
							backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
							borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>

						<SingleData label="Imię / Imiona" text="Jan" />
						<SingleData label="Nazwisko" text="Kowalski" />
						<SingleData label="PESEL" text="***********" />
						<View>
							<View style={styles.labelContainer}>
								<Text style={styles.label}>Data urodzenia</Text>
							</View>
							<Button
								width={151}
								height={44}
								text={'dd-mm-rrrr'}
								backgroundColor="#BF1616"
								borderColor="#BF1616"
								btnTextColor="#F0EEF0"
							/>
						</View>
						<SingleData label="Miasto zamieszkania" text="Kraków" />
						<SingleData label="Ulica zamieszkania" text="Czarnowiejska" />
						<SingleData label="Kod pocztowy zamieszkania" text="20-122" />
						<SingleData label="Numer telefonu" text="+48 123 456 789" />
						<SingleData label="Adres email" text="kowalski@gmail.com" />
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	gradient: {
		paddingTop: 20,
		flex: 1,
		padding: 20,
	},
	background: {
		height: '100%',
		alignItems: 'center',
	},
	lgText: {
		fontFamily: 'Roboto',
		fontSize: 20,
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
	container: {
		flexDirection: 'column',
		marginBottom: 13,
	},
	label: {
		fontFamily: 'Roboto',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: 24,
	},
	labelContainer: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		marginBottom: 5,
	},
	input: {
		borderRadius: 7.5,
		borderWidth: 2,
		borderStyle: 'solid',
		height: 44,
		width: 324,
		padding: 10,
	},
});

export default ShowData;
