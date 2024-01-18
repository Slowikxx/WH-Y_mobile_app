import { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Button from '../../components/button';
import { useNavigation } from 'expo-router';
import { ThemeContext } from '../_layout';
import Input from '../../components/input';

const ModifyData = () => {
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const [name, setName] = useState('Jan');
	const [password, setPassword] = useState('Siema');
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
								label="Miasto zamieszkania"
								inputText={name}
								setInputText={setName}
								secureTextEntry={false}
							/>
							<Input
								max_words={500}
								label="Ulica zamieszkania"
								inputText={name}
								setInputText={setName}
								secureTextEntry={false}
							/>
							<Input
								max_words={500}
								label="Kod pocztowy zamieszkania"
								inputText={name}
								setInputText={setName}
								secureTextEntry={false}
							/>
							<Input
								max_words={500}
								label="Numer telefonu"
								inputText={name}
								setInputText={setName}
								secureTextEntry={false}
							/>
							<Input
								max_words={500}
								label="Adres email"
								inputText={name}
								setInputText={setName}
								secureTextEntry={false}
							/>
							<Input
								max_words={500}
								label="Podaj hasło"
								inputText={password}
								setInputText={setPassword}
								secureTextEntry={true}
							/>
							<Button
								onPress={() => navigation.navigate('myAcc')}
								width={324}
								height={44}
								text="Zapisz zmiany"
								backgroundColor={
									colorScheme === 'light' ? '#BF1616' : '#E74333'
								}
								borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
								btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
							/>
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

export default ModifyData;
