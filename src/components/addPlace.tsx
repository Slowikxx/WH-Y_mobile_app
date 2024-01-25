import { useState } from 'react';
import { View } from 'react-native';
import AddToForm from './addToForm';

const AddPlace = ({
	city,
	street,
	postCode,
	desc,
	setCity,
	setPostCode,
	setStreet,
	setDesc,
}: any) => {
	const [showAddPlace, setShowAddPlace] = useState(false);
	return (
		<View>
			<AddToForm
				option={showAddPlace}
				setOption={setShowAddPlace}
				firstButtonText="Dodaj miejsce zdarzenia"
				secondButtonText="Usuń miejsce zdarzenia"
				firstLabel="Krótki opis miejsca zdarzenia"
				firstOption={city}
				setFirstOption={setCity}
				secondOption={street}
				setSecondOption={setStreet}
				thirdOption={postCode}
				setThirdOption={setPostCode}
				fourthOption={desc}
				setFourthOption={setDesc}
				secondLabel="Miasto miejsca zdarzenia"
				thirdLabel="Ulica miejsca zdarzenia"
				fourthLabel="Kod pocztowy miejsca zdarzenia"
				type="place"
			/>
		</View>
	);
};

export default AddPlace;
