import { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Button from '../../components/button';
import { useNavigation } from 'expo-router';
import { ThemeContext } from '../_layout';
import Input from '../../components/input';

const ChangePassword = () => {
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const [password, setPassword] = useState('');
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<ImageBackground
				style={{ paddingTop: 20, flex: 1 }}
				source={
					colorScheme === 'light'
						? require('../../../assets/images/whylight.png')
						: require('../../../assets/images/whydark.png')
				}
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
						<Input
							max_words={500}
							label="Podaj stare hasło"
							inputText={password}
							setInputText={setPassword}
							secureTextEntry={true}
						/>
						<Input
							max_words={500}
							label="Podaj nowe hasło"
							inputText={password}
							setInputText={setPassword}
							secureTextEntry={true}
						/>
						<Input
							max_words={500}
							label="Powtórz nowe hasło"
							inputText={password}
							setInputText={setPassword}
							secureTextEntry={true}
						/>
						<Button
							onPress={() => navigation.navigate('myAcc')}
							width={324}
							height={44}
							text="Zmień hasło"
							backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>
					</View>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
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
});

export default ChangePassword;