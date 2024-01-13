import { ThemeContext } from '../_layout';
import { useState, useContext } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Button from '../../components/button';
import Input from '../../components/input';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Location from '../../components/location';
import AddPlace from '../../components/addPlace';
import AddWitness from '../../components/addWitness';
import AddCulprit from '../../components/addCulprit';
import IOSButtons from '../../components/iosButtons';
import Dropdown from '../../components/dropdown';

export default function TabOneScreen() {
	const [password, setPassword] = useState('');
	const [date, setDate] = useState(new Date());
	const [dateString, setDateString] = useState('');
	const [time, setTime] = useState(new Date());
	const [timeString, setTimeString] = useState('');
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);
	const [description, setDescription] = useState('');
	const [showDescription, setShowDescription] = useState(false);
	const { colorScheme } = useContext(ThemeContext);

	const toggleDatePicker = () => {
		setShowDatePicker(!showDatePicker);
	};

	const toggleTimePicker = () => {
		setShowTimePicker(!showTimePicker);
	};

	const onChangeTime = ({ type }: any, selectedTime: any) => {
		if (type === 'set' && selectedTime) {
			const currentTime = selectedTime;
			setTime(currentTime);
			setTimeString(formatTime(currentTime));

			if (Platform.OS === 'android') {
				toggleTimePicker();
			}
		} else {
			toggleTimePicker();
		}
	};

	const onChangeDate = ({ type }: any, selectedDate: any) => {
		if (type === 'set') {
			const currentDate = selectedDate;
			setDate(currentDate);

			if (Platform.OS === 'android') {
				toggleDatePicker();
				setDate(currentDate);
				setDateString(formatDate(currentDate.toDateString()));
			}
		} else {
			toggleDatePicker();
		}
	};

	const confirmIOSTime = () => {
		setTime(time);
		setTimeString(formatTime(time));
		toggleTimePicker();
	};

	const confirmIOSDate = () => {
		setDate(date);
		setDateString(formatDate(date.toDateString()));
		toggleDatePicker();
	};

	const formatTime = (rawTime: string): string => {
		let formattedTime = new Date(rawTime);
		let hours = formattedTime.getHours();
		let minutes = formattedTime.getMinutes();

		const formattedHours = hours < 10 ? `0${hours}` : hours;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

		return `${formattedHours}:${formattedMinutes}`;
	};

	const formatDate = (rawDate: string): string => {
		let formattedDate = new Date(rawDate);
		let year = formattedDate.getFullYear();
		let month = formattedDate.getMonth() + 1;
		let day = formattedDate.getDate();

		month = month < 10 ? `0${month}` : month;
		day = day < 10 ? `0${day}` : day;

		return `${day}-${month}-${year}`;
	};

	return (
		<ImageBackground
			style={{ paddingTop: 20, flex: 1 }}
			source={
				colorScheme === 'light'
					? require('../../../assets/images/whylight.png')
					: require('../../../assets/images/whydark.png')
			}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<ScrollView>
					<View style={styles.background}>
						<View style={styles.container}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<View>
									<View style={styles.labelContainer}>
										<Text
											style={[
												styles.label,
												{
													color:
														colorScheme === 'light' ? '#594E59' : '#978E97',
												},
											]}
										>
											Data zdarzenia
										</Text>
										<Feather
											name="info"
											size={20}
											color={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
										/>
									</View>
									<Button
										onPress={toggleDatePicker}
										width={151}
										height={44}
										text={dateString !== '' ? dateString : 'dd-mm-rrrr'}
										backgroundColor={
											colorScheme === 'light' ? '#BF1616' : '#E74333'
										}
										borderColor={
											colorScheme === 'light' ? '#BF1616' : '#E74333'
										}
										btnTextColor={
											colorScheme === 'light' ? '#F0EEF0' : '#171017'
										}
									/>
								</View>
								<View>
									<View style={styles.labelContainer}>
										<Text
											style={[
												styles.label,
												{
													color:
														colorScheme === 'light' ? '#594E59' : '#978E97',
												},
											]}
										>
											Godzina zdarzenia
										</Text>
										<Feather
											name="info"
											size={20}
											color={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
										/>
									</View>
									<View style={{ alignSelf: 'flex-end' }}>
										<Button
											onPress={toggleTimePicker}
											width={151}
											height={44}
											text={timeString !== '' ? timeString : 'hh:mm'}
											backgroundColor={
												colorScheme === 'light' ? '#BF1616' : '#E74333'
											}
											borderColor={
												colorScheme === 'light' ? '#BF1616' : '#E74333'
											}
											btnTextColor={
												colorScheme === 'light' ? '#F0EEF0' : '#171017'
											}
										/>
									</View>
								</View>
							</View>
							<Location />
							<Text
								style={[
									styles.mdText,
									{
										color: colorScheme === 'light' ? '#594E59' : '#978E97',
									},
								]}
							>
								lub
							</Text>
							<AddPlace />
							<AddWitness />
							<AddCulprit />
							<Dropdown mainText="Wybierz typ przestępstwa" />
							<Dropdown mainText="Wybierz typ wykroczenia" />
							<Text
								style={[
									styles.mdText,
									{
										color: colorScheme === 'light' ? '#594E59' : '#978E97',
									},
								]}
							>
								lub
							</Text>
							<Button
								onPress={() => setShowDescription(true)}
								width={324}
								height={44}
								text="Dodaj krótki opis"
								backgroundColor={
									colorScheme === 'light' ? '#168DBF' : '#33B1E7'
								}
								borderColor={colorScheme === 'light' ? '#168DBF' : '#33B1E7'}
								btnTextColor={colorScheme === 'light' ? '#F0EEF0' : '#171017'}
							/>
							{showDescription && (
								<View>
									<Input
										max_words={500}
										label="Krótki opis zdarzenia #1"
										inputText={description}
										setInputText={setDescription}
										secureTextEntry={false}
									/>
									<Button
										onPress={() => setShowDescription(false)}
										width={324}
										height={44}
										text="Usuń opis"
										backgroundColor={
											colorScheme === 'light' ? '#BF1616' : '#E74333'
										}
										borderColor={
											colorScheme === 'light' ? '#BF1616' : '#E74333'
										}
										btnTextColor={
											colorScheme === 'light' ? '#F0EEF0' : '#171017'
										}
									/>
								</View>
							)}

							{/* ZAŁĄCZNIK */}
							<Input
								max_words={500}
								label="Hasło"
								inputText={password}
								setInputText={setPassword}
								secureTextEntry={true}
							/>
							<Button
								onPress={() => setShowDescription(false)}
								width={324}
								height={44}
								text="Wyślij"
								backgroundColor="transparent"
								borderColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
								btnTextColor={colorScheme === 'light' ? '#BF1616' : '#E74333'}
							/>
							{showDatePicker && (
								<DateTimePicker
									mode="date"
									display="spinner"
									value={date}
									onChange={onChangeDate}
									style={styles.picker}
									textColor="black"
								/>
							)}

							{showDatePicker && Platform.OS === 'ios' && (
								<IOSButtons
									confirmIOS={confirmIOSDate}
									togglePicker={toggleDatePicker}
								/>
							)}
							{showTimePicker && (
								<DateTimePicker
									mode="time"
									display="spinner"
									value={time}
									onChange={onChangeTime}
									style={styles.picker}
									textColor="black"
									is24Hour={true}
								/>
							)}

							{showTimePicker && Platform.OS === 'ios' && (
								<IOSButtons
									confirmIOS={confirmIOSTime}
									togglePicker={toggleTimePicker}
								/>
							)}
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	gradient: {
		paddingTop: 20,
		flex: 1,
	},
	background: {
		height: '100%',
		alignItems: 'center',
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
	},
	container: {
		gap: 13,
		marginBottom: 100,
		marginTop: 20,
	},
	mdText: {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: '700',
		lineHeight: 20,
		color: '#594E59',
		alignSelf: 'center',
	},
	picker: {
		backgroundColor: '#D0E2EA',
		height: 150,
		marginTop: -180,
		width: 324,
	},
});
