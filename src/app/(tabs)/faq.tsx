import { useContext } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	ScrollView,
} from 'react-native';
import { ThemeContext } from '../_layout';
import Dropdown from '../../components/dropdown';
import FilePicker from '../../components/filePicker';
const AboutUs = () => {
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
			<View style={styles.container}></View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});

export default AboutUs;
