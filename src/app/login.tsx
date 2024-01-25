import { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Input, Button } from '../components';
import { useNavigation } from 'expo-router';
import { ThemeContext } from './_layout';
import { supabase } from '../lib/supabase';

type LoginData = {
	showLogin: boolean;
	setShowLogin: (showLogin: boolean) => void;
};

const Login = ({
	showLogin,
	setShowLogin
}: LoginData) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [activePass, setActivePass] = useState(false);
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);

	useEffect(() => {
		if (password.length >= 8) {
			setActivePass(true);
		} else {
			setActivePass(false);
		}
	}, [password.length]);

	async function signInWithEmail() {
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) Alert.alert(error.message);
		if (!error) navigation.navigate('myAcc' as never);
		setLoading(false);
	}

	return (
		<View style={styles.container}>
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
			<View style={styles.btnContainer}>
				<Button
					onPress={signInWithEmail}
					disabled={loading}
					width={70}
					height={34}
					text={ loading ? "Logowanie" : "Zaloguj"}
					backgroundColor={colorScheme === 'light' ? '#B8B2B8' : '#453845'}
					activeBackgroundColor={
						colorScheme === 'light' ? '#BF1616' : '#E74333'
					}
					borderColor={colorScheme === 'light' ? '#B8B2B8' : '#453845'}
					btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					active={activePass}
				/>
				{/* <Button
					width={195}
					height={34}
					text="Przypomnij moje hasło"
					backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
					activeBackgroundColor={
						colorScheme === 'light' ? '#BF1616' : '#E74333'
					}
					borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
					btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					active={true}
				/> */}
			</View>
			<Text
				style={[
					styles.text,
					{ color: colorScheme === 'light' ? '#0877A6' : '#63CBF7' },
				]}
			>
				Nie masz jeszcze konta?
			</Text>
			<Button
				onPress={() => setShowLogin(false)}
				width={320}
				height={34}
				text="Zarejestruj się"
				backgroundColor="transparent"
				activeBackgroundColor="transparent"
				borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				btnTextColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				active={true}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'flex-start',
		width: 324,
	},
	text: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontWeight: '700',
		fontStyle: 'normal',
		lineHeight: 20,
		alignSelf: 'flex-start',
		marginTop: 50,
	},
});

export default Login;
