import { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
	ImageBackground,
	Alert,
} from 'react-native';
import { Input, Button, PickDate } from '../components';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { ThemeContext } from './_layout';
import { supabase } from '../lib/supabase';

const Register = ({ showLogin, setShowLogin }: any) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [pesel, setPesel] = useState('');
	const [city, setCity] = useState('');
	const [street, setStreet] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [showDatePicker, setShowDatePicker] = useState(false);

	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);

	async function signUpWithEmail() {
		setLoading(true);

		// Sign up the user
		const {
			data: { session },
			error: signUpError,
		} = await supabase.auth.signUp({
			email: email,
			password: password,
		});

		if (signUpError) {
			Alert.alert(signUpError.message);
			setLoading(false);
			return;
		}

		// Store additional user information in the database
		const { error: insertError } = await supabase.from('profiles').upsert([
			{
				id: session?.user.id, // Assuming your user table has an 'id' column
				first_name: firstName,
				last_name: lastName,
				pesel: pesel,
				city: city,
				street: street,
				post_code: postalCode,
				phone_number: phoneNumber,
				date_of_birth: birthdate,
				// Add more fields as needed
			},
		]);

		if (insertError) {
			Alert.alert(insertError.message);
			setLoading(false);
			return;
		}

		// Continue with the rest of your registration logic

		setLoading(false);
	}

	return (
		<ImageBackground
			source={
				colorScheme === 'light'
					? require('../../assets/images/whylight.png')
					: require('../../assets/images/whydark.png')
			}
			style={styles.bg}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.background}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={styles.container}
					>
						<Input
							max_words={500}
							label="Imię / Imiona"
							inputText={firstName}
							setInputText={setFirstName}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Nazwisko"
							inputText={lastName}
							setInputText={setLastName}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Pesel"
							inputText={pesel}
							setInputText={setPesel}
							secureTextEntry={true}
						/>
						<View>
							<View style={styles.labelContainer}>
								<Text style={styles.label}>Data urodzenia</Text>
								<Feather
									name="info"
									size={20}
									color={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
								/>
							</View>
							<Button
								onPress={() => setShowDatePicker(true)}
								width={151}
								height={44}
								text={birthdate !== '' ? birthdate : 'dd-mm-rrrr'}
								backgroundColor={
									colorScheme === 'light' ? '#BF1616' : '#E74333'
								}
								borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
								btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
							/>
						</View>
						<Input
							max_words={500}
							label="Miasto zamieszkania"
							inputText={city}
							setInputText={setCity}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Ulica zamieszkania"
							inputText={street}
							setInputText={setStreet}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Kod pocztowy zamieszkania"
							inputText={postalCode}
							setInputText={setPostalCode}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Numer telefonu"
							inputText={phoneNumber}
							setInputText={setPhoneNumber}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Adres email"
							inputText={email}
							setInputText={setEmail}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label="Hasło"
							inputText={password}
							setInputText={setPassword}
							secureTextEntry={true}
						/>
						<Input
							max_words={500}
							label="Powtórz hasło"
							inputText={password}
							setInputText={setPassword}
							secureTextEntry={true}
						/>
						<Button
							onPress={signUpWithEmail}
							width={320}
							height={34}
							text="Zarejestruj się"
							backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							activeBackgroundColor={
								colorScheme === 'light' ? '#BF1616' : '#E74333'
							}
							active={true}
							borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>
						<Text style={styles.text}>Masz już konto?</Text>
						<Button
							onPress={() => setShowLogin(true)}
							width={320}
							height={34}
							text="Zaloguj się"
							backgroundColor="transparent"
							activeBackgroundColor="transparent"
							active={true}
							borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							btnTextColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						/>
						{showDatePicker && (
							<PickDate
								openDatePicker={showDatePicker}
								setOpenDatePicker={setShowDatePicker}
								selectedDate={birthdate}
								setSelectedDate={setBirthdate}
							/>
						)}
					</ScrollView>
				</View>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 13,
		marginBottom: 100,
	},
	text: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontWeight: '700',
		fontStyle: 'normal',
		lineHeight: 20,
		color: '#0877A6',
		alignSelf: 'flex-start',
		marginTop: 37,
	},
	label: {
		color: '#594E59',
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
	},
	picker: {
		backgroundColor: '#D0E2EA',
		height: 150,
		marginTop: -180,
		width: 324,
	},
	bg: {
		paddingTop: 20,
		flex: 1,
	},
	background: {
		height: '100%',
		alignItems: 'center',
	},
});

export default Register;
