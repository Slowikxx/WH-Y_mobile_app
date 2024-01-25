import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, ImageBackground, ScrollView } from 'react-native';
import { ThemeContext } from '../_layout';
import { Status, SearchBar } from '../../components';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useAuth } from '../../providers/AuthProvider';
import { Redirect, useNavigation } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { Button } from 'react-native-elements';

export default function Cases() {
	const { session, profile } = useAuth();
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();
	const { colorScheme } = useContext(ThemeContext);
	const [simpleCases, setCase] = useState<{
		id: string,
		date: string,
		time: string,
		location: string,
		desc: string,
		crime: string,
		offence: string,
		l_city: string,
		l_street: string,
		l_post_code: string,
		l_desc: string,
		s_first_name: string,
		s_last_name: string,
		s_phone_number: string,
		w_first_name: string,
		w_last_name: string,
		w_phone_number: string
	}[]>([])
	
	async function getCases() {
		try {
		  setLoading(true)
		  if (!session?.user) throw new Error('No user on the session!')
	
		  const { data, error, status } = await supabase
			.from('simpleCases')
			.select('*')
		  if (error && status !== 406) {
			throw error
		  }
		  setCase(data ?? []);
		} catch (error) {
		  if (error instanceof Error) {
			Alert.alert(error.message)
		  }
		} finally {
		  setLoading(false)
		}
		// console.log("test")
		// if(simpleCases[0])
		// {
		// 	simpleCases.forEach(simpleCase => {
		// 		console.log(simpleCase.id)
		// 		console.log(simpleCase.desc)
		// 	});
		// }
		// console.log("test3")
	  }

	useEffect(() => {
		if(session) getCases()
	}, []);
	useEffect(() => {
		if(session) getCases()
	}, [session]);

	if (!session) {
		return <Redirect href="/" />;
	}

	return (
		<ImageBackground
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
			style={{ flex: 1 }}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.background}
			>
				<Animated.View
					entering={FadeInDown.duration(300)}
					style={styles.container}
				>
					<Button
						onPress={() => getCases()}	
					>
					</Button>
					<SearchBar />
					<Status 
						iconName="more-horizontal"
						bgColor="#16AAEA"
						textColor="#16AAEA"
						statusText="w toku"
					/>
					<Status
						iconName="alert-triangle"
						bgColor="#DC1F0D"
						textColor="#DC1F0D"
						statusText="umorzona"
					/>
					<Status
						iconName="x"
						bgColor="#F0B812"
						textColor="#F0B812"
						statusText="nieprzyjęta"
					/>
					<Status
						iconName="check"
						bgColor="#00CC1D"
						textColor="#00CC1D"
						statusText="zrealizowany"
					/>
				</Animated.View>
			</ScrollView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		paddingTop: 20,
		flex: 1,
	},
	container: {
		alignItems: 'center',
		marginTop: 20,
		gap: 13,
		marginBottom: 100,
	},
});
