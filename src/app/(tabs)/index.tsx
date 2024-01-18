import { useContext } from 'react';
import { StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import Status from '../../components/status';
import SearchBar from '../../components/searchBar';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from '../_layout';

export default function Cases() {
	const { colorScheme } = useContext(ThemeContext);
	return (
		<ImageBackground
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
			style={styles.background}
		>
			<ScrollView style={styles.background}>
				<View style={styles.container}>
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
				</View>
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
		gap: 13,
		marginBottom: 100,
	},
});
