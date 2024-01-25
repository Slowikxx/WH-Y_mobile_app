import { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Button from './button';
import Input from './input';
import { ThemeContext } from '../app/_layout';

const AddToForm = ({
	firstOption,
	setFirstOption,
	secondOption,
	setSecondOption,
	thirdOption,
	setThirdOption,
	fourthOption,
	setFourthOption,
	firstButtonText,
	secondButtonText,
	firstLabel,
	secondLabel,
	thirdLabel,
	fourthLabel,
	type,
	option,
	setOption,
}: any) => {
	const { colorScheme } = useContext(ThemeContext);

	return (
		<View>
			{type === 'place'
				? !option && (
						<Button
							onPress={() => setOption(true)}
							width={324}
							height={44}
							text={firstButtonText}
							backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>
				  )
				: !option && (
						<Button
							onPress={() => setOption(true)}
							width={324}
							height={44}
							text={firstButtonText}
							backgroundColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
							borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
							btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
						/>
				  )}

			{option && (
				<View>
					<View>
						<Input
							max_words={500}
							label={firstLabel}
							inputText={firstOption ? firstOption : ''}
							setInputText={setFirstOption}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label={secondLabel}
							inputText={secondOption ? secondOption : ''}
							setInputText={setSecondOption}
							secureTextEntry={false}
						/>
						<Input
							max_words={500}
							label={thirdLabel}
							inputText={thirdOption ? thirdOption : ''}
							setInputText={setThirdOption}
							secureTextEntry={false}
						/>
						{type === 'place' && (
							<Input
								max_words={500}
								label={fourthLabel}
								inputText={fourthOption ? fourthOption : ''}
								setInputText={setFourthOption}
								secureTextEntry={false}
							/>
						)}
					</View>

					<Button
						onPress={() => setOption(false)}
						width={324}
						height={44}
						text={secondButtonText}
						backgroundColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
						btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
					/>
				</View>
			)}
		</View>
	);
};

export default AddToForm;
