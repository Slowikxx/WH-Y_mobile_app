import { useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AccountHeader, Button } from '../../components';
import { ThemeContext } from '../_layout';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useAuth } from '../../providers/AuthProvider';

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
	const { session, users } = useAuth();
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
					<AccountHeader />
					<View style={{ gap: 10 }}>
						<Button
							width={324}
							height={44}
							text="Pokaż moje dane"
							backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
							borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>

						<Animated.View entering={FadeInDown.duration(300)}>
							<SingleData
								label="Imię / Imiona"
								text={session && users[0]['first_name']}
							/>
							<SingleData
								label="Nazwisko"
								text={session && users[0]['last_name']}
							/>
							<SingleData label="PESEL" text={session && users[0]['pesel']} />
							<View>
								<View style={styles.labelContainer}>
									<Text style={styles.label}>Data urodzenia</Text>
								</View>
								<Button
									width={151}
									height={44}
									text={session && users[0]['date_of_birth']}
									backgroundColor="#BF1616"
									borderColor="#BF1616"
									btnTextColor="#F0EEF0"
								/>
							</View>
							<SingleData
								label="Miasto zamieszkania"
								text={session && users[0]['city']}
							/>
							<SingleData
								label="Ulica zamieszkania"
								text={session && users[0]['street']}
							/>
							<SingleData
								label="Kod pocztowy zamieszkania"
								text={session && users[0]['post_code']}
							/>
							<SingleData
								label="Numer telefonu"
								text={session && users[0]['phone_number']}
							/>
							<SingleData
								label="Adres email"
								text={session && session['user']['email']}
							/>
						</Animated.View>
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
