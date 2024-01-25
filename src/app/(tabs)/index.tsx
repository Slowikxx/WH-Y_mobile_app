import { ThemeContext } from '../_layout';
import { useState, useEffect, useContext } from 'react';
import { Redirect, useNavigation } from 'expo-router';
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	ImageBackground,
} from 'react-native';
import Login from '../login';
import Register from '../register';
import { useAuth } from '../../providers/AuthProvider';

export default function TabTwoScreen() {
	const [showLogin, setShowLogin] = useState(true);
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const { session } = useAuth();

	useEffect(() => {
		navigation.setOptions({
			headerTitle: showLogin ? 'LOGOWANIE' : 'REJESTRACJA',
		});
	}, [showLogin]);

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
					{!session ? (
						showLogin ? (
							<Login
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
