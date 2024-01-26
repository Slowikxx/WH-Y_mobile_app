import { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import { useNavigation } from 'expo-router';
import { ThemeContext } from '../_layout';
import { Input, Button, AccountHeader } from '../../components';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../providers/AuthProvider';

const ChangePassword = () => {
	const { session } = useAuth();
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const [originalPass, setPass] = useState('');
	const [newPass, setNewPass] = useState('');
	const [newPassConfirm, setNewPassConf] = useState('');
	const [loading, setLoading] = useState(false);

	async function updatePass({
		oldPass,
		newPass,
		newPassConfirm,
	}: {
		oldPass: string;
		newPass: string;
		newPassConfirm: string;
	}) {
		try {
			setLoading(true);
			if (!session?.user) throw new Error('No user on the session!');
			if (newPass !== newPassConfirm) throw new Error('Hasła nie są jednakowe');
			const { error } = await supabase.auth.updateUser({ password: newPass });
			if (error) {
				throw error;
			}
			setLoading(false);
			navigation.navigate('myAcc' as never);
		} catch (error) {
			if (error instanceof Error) {
				Alert.alert(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

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
					<AccountHeader />
					<Animated.View
						entering={FadeInDown.duration(300)}
						style={{ gap: 10 }}
					>
						<Input
							max_words={500}
							label="Podaj stare hasło"
							inputText={originalPass}
							setInputText={setPass}
							secureTextEntry={true}
						/>
						<Input
							max_words={500}
							label="Podaj nowe hasło"
							inputText={newPass}
							setInputText={setNewPass}
							secureTextEntry={true}
						/>
						<Input
							max_words={500}
							label="Powtórz nowe hasło"
							inputText={newPassConfirm}
							setInputText={setNewPassConf}
							secureTextEntry={true}
						/>
						<Button
							onPress={() =>
								updatePass({
									oldPass: originalPass,
									newPass: newPass,
									newPassConfirm: newPassConfirm,
								})
							}
							width={324}
							height={44}
							text="Zmień hasło"
							backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>
					</Animated.View>
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
});

export default ChangePassword;
