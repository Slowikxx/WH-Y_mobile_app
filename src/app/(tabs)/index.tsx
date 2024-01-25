import { ThemeContext } from '../_layout';
import { useState, useEffect, useContext } from 'react';
import { Redirect, useNavigation } from 'expo-router';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	ImageBackground,
} from 'react-native';
import Login from '../login';
import Register from '../register';
import { useAuth } from '../../providers/AuthProvider';

export default function TabTwoScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [showLogin, setShowLogin] = useState(true);
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const { session, users } = useAuth();
	const isLoggedIn = session ? true : false;

	useEffect(() => {
		navigation.setOptions({
			headerTitle: showLogin ? 'LOGOWANIE' : 'REJESTRACJA',
		});
	}, []);

	if (session) {
		return <Redirect href="/myAcc" />;
	}

	return (
		<ImageBackground
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
			style={styles.bg}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.background}>
					{!isLoggedIn ? (
						showLogin ? (
							<Login
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
								loading={loading}
								setLoading={setLoading}
								showLogin={showLogin}
								setShowLogin={setShowLogin}
							/>
						) : (
							<Register showLogin={showLogin} setShowLogin={setShowLogin} />
						)
					) : (
						<Redirect href="/myAcc" />
					)}
				</View>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	bg: {
		paddingTop: 20,
		flex: 1,
	},
	background: {
		height: '100%',
		alignItems: 'center',
	},
});
