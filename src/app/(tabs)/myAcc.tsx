import { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ImageBackground, Alert } from 'react-native';
import { Redirect, useNavigation } from 'expo-router';
import { ThemeContext } from '../_layout';
import { AccountHeader, Button } from '../../components';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useAuth } from '../../providers/AuthProvider';
import { supabase } from '../../lib/supabase';

const MyAccount = () => {
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const { session } = useAuth();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!session) {
			navigation.navigate('index');
		}
	}, [session]);

	async function delUser() {
		try {
			setLoading(true);
			if (!session?.user) throw new Error('No user on the session!');
			const { error } = await supabase.rpc('delete_user');
			if (error) {
				throw error;
			}
			setLoading(false);
			await supabase.auth.signOut();
		} catch (error) {
			if (error instanceof Error) {
				Alert.alert(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

	if (!session) {
		return <Redirect href="/" />;
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
			<Animated.View
				entering={FadeInDown.duration(500)}
				style={styles.background}
			>
				<AccountHeader />
				<View style={{ gap: 10 }}>
					<Button
						onPress={() => navigation.navigate('showData')}
						width={324}
						height={44}
						text="Pokaż moje dane"
						backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
						borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
					<Button
						onPress={() => navigation.navigate('modifyData')}
						width={324}
						height={44}
						text="Zmodyfikuj dane"
						backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
						borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
					{/* <Button
						onPress={() => navigation.navigate('changePassword')}
						width={324}
						height={44}
						text="Zmień hasło"
						backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/> */}
					<Button
						onPress={() => navigation.navigate('cases')}
						width={324}
						height={44}
						text="Moje sprawy"
						backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
						borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
					<Button
						onPress={delUser}
						width={324}
						height={44}
						text="Usuń konto"
						backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
				</View>
			</Animated.View>
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

export default MyAccount;
