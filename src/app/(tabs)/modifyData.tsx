import { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
	Alert,
} from 'react-native';
import { useNavigation } from 'expo-router';
import { ThemeContext } from '../_layout';
import { Button, Input, AccountHeader } from '../../components';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useAuth } from '../../providers/AuthProvider';
import { supabase } from '../../lib/supabase';

const ModifyData = () => {
	const { session, profile } = useAuth();
	const [city, setCity] = useState(session && profile ? profile.city : '');
	const [street, setStreet] = useState(session && profile ? profile.street : '');
	const [post_code, setPostalCode] = useState(session && profile ? profile.post_code : '');
	const [phone_number, setPhoneNumber] = useState(session && profile ? profile.phone_number : '');
	const [email, setEmail] = useState(session ? session.user.email : '');
	// const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const { colorScheme } = useContext(ThemeContext);

	async function modifyData({
		city,
		street,
		post_code,
		phone_number,
		email
	} : {
		city: string,
		street: string,
		post_code: string,
		phone_number: string,
		email: string
	}) {
		try {
			setLoading(true);
			if (!session?.user) throw new Error('No user on the session!');

			console.log(city + "\n" + street + "\n" + post_code + "\n" + phone_number + "\n" + email + "\n" )

			const updates = {
				id: session?.user.id,
				city,
				street,
				post_code,
				phone_number,
				updated_at: new Date(),
			};
			const { error } = await supabase.from('profiles').upsert(updates);
			if (error) {
				throw error;
			}
			const { error: emailError } = await supabase.auth.updateUser({email: email})
			if (emailError) {
				throw emailError;
			}
			Alert.alert('Pomyślnie zaktualizowano dane');
		} catch (error) {
			if (error instanceof Error) {
				Alert.alert(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<ImageBackground
			style={{ paddingTop: 20, flex: 1 }}
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
		>
			<ScrollView style={{ marginBottom: 50 }}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View style={styles.background}>
						<AccountHeader />
						<View style={{ gap: 10 }}>
							<Button
								width={324}
								height={44}
								text="Zmodyfikuj dane"
								backgroundColor={
									colorScheme === 'light' ? '#168DBF' : '#33B1E7'
								}
								borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
								btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
							/>
							<Animated.View entering={FadeInDown.duration(300)}>
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
									inputText={post_code}
									setInputText={setPostalCode}
									secureTextEntry={false}
								/>
								<Input
									max_words={500}
									label="Numer telefonu"
									inputText={phone_number}
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
								{/* <Input
									max_words={500}
									label="Podaj hasło"
									inputText={password}
									setInputText={setPassword}
									secureTextEntry={true}
								/> */}
								<Button
									onPress={() => modifyData({ city, street, post_code, phone_number, email })}
									width={324}
									height={44}
									text="Zapisz zmiany"
									backgroundColor={
										colorScheme === 'light' ? '#BF1616' : '#E74333'
									}
									borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
									btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
								/>
							</Animated.View>
						</View>
					</View>
				</TouchableWithoutFeedback>
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
});

export default ModifyData;
