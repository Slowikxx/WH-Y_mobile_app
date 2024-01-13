import { useContext } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { ThemeContext } from '../_layout';

const LegalInfo = () => {
	const { colorScheme } = useContext(ThemeContext);
	return (
		<ImageBackground
			style={{ paddingTop: 20, flex: 1 }}
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
		></ImageBackground>
	);
};

export default LegalInfo;
