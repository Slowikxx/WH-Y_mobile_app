import { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Button from './button';
import Input from './input';
import { ThemeContext } from '../app/_layout';

const AddCulprit = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [culprit, setCulprit] = useState('');
	const { colorScheme } = useContext(ThemeContext);
	return (
		<View>
			<Button
				onPress={() => setShowOptions(true)}
				width={324}
				height={44}
				text="Dodaj sprawcę"
				backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
				borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
				btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
			/>
			{showOptions && (
				<View>
					<Input
						max_words={500}
						label="Imię / Imiona pierwszego sprawcy"
						inputText={culprit}
						setInputText={setCulprit}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Nazwisko pierwszego świadka"
						inputText={culprit}
						setInputText={setCulprit}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Numer telefonu pierwszego świadka"
						inputText={culprit}
						setInputText={setCulprit}
						secureTextEntry={false}
					/>
					<Button
						onPress={() => setShowOptions(false)}
						width={324}
						height={44}
						text="Usuń sprawcę"
						backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
				</View>
			)}
		</View>
	);
};

export default AddCulprit;
