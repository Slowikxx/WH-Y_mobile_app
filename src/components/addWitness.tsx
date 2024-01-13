import { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Button from './button';
import Input from './input';
import { ThemeContext } from '../app/_layout';

const AddWitness = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [witness, setWitness] = useState('');
	const { colorScheme } = useContext(ThemeContext);
	return (
		<View>
			<Button
				onPress={() => setShowOptions(true)}
				width={324}
				height={44}
				text="Dodaj świadka"
				backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
				borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
				btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
			/>
			{showOptions && (
				<View>
					<Input
						max_words={500}
						label="Imię / Imiona pierwszego świadka"
						inputText={witness}
						setInputText={setWitness}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Nazwisko pierwszego świadka"
						inputText={witness}
						setInputText={setWitness}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Numer telefonu pierwszego świadka"
						inputText={witness}
						setInputText={setWitness}
						secureTextEntry={false}
					/>
					<Button
						onPress={() => setShowOptions(false)}
						width={324}
						height={44}
						text="Usuń świadka"
						backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
				</View>
			)}
		</View>
	);
};

export default AddWitness;
