import { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Button from './button';
import Input from './input';
import { ThemeContext } from '../app/_layout';

const AddPlace = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [place, setPlace] = useState('');
	const { colorScheme } = useContext(ThemeContext);
	return (
		<View>
			<Button
				onPress={() => setShowOptions(true)}
				width={324}
				height={44}
				text="Dodaj miejsce zdarzenia"
				backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
				btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
			/>
			{showOptions && (
				<View>
					<Input
						max_words={500}
						label="Krótki opis miejsca zdarzenia"
						inputText={place}
						setInputText={setPlace}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Miasto miejsca zdarzenia"
						inputText={place}
						setInputText={setPlace}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Ulica miejsca zdarzenia"
						inputText={place}
						setInputText={setPlace}
						secureTextEntry={false}
					/>
					<Input
						max_words={500}
						label="Kod pocztowy miejsca zdarzenia"
						inputText={place}
						setInputText={setPlace}
						secureTextEntry={false}
					/>
					<Button
						onPress={() => setShowOptions(false)}
						width={324}
						height={44}
						text="Usuń miejsce zdarzenia"
						backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
				</View>
			)}
		</View>
	);
};

export default AddPlace;
