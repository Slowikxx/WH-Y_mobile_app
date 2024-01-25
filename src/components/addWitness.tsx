import { useState } from 'react';
import { View } from 'react-native';
import AddToForm from './addToForm';

const AddWitness = ({
	witnessName,
	setWitnessName,
	witnessSurname,
	setWitnessSurname,
	witnessPhone,
	setWitnessPhone,
}: any) => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<View>
			<AddToForm
				option={showOptions}
				setOption={setShowOptions}
				firstOption={witnessName}
				setFirstOption={setWitnessName}
				secondOption={witnessSurname}
				setSecondOption={setWitnessSurname}
				thirdOption={witnessPhone}
				setThirdOption={setWitnessPhone}
				firstButtonText="Dodaj świadka"
				secondButtonText="Usuń świadka"
				firstLabel="Imię / Imiona świadka"
				secondLabel="Nazwisko świadka"
				thirdLabel="Numer telefonu świadka"
			/>
		</View>
	);
};

export default AddWitness;
