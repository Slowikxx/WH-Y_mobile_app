import { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../app/_layout';
import AddToForm from './addToForm';

const AddCulprit = ({
	culpritName,
	setCulpritName,
	culpritSurname,
	setCulpritSurname,
	culpritPhone,
	setCulpritPhone,
}: any) => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<View>
			<AddToForm
				option={showOptions}
				setOption={setShowOptions}
				firstOption={culpritName}
				setFirstOption={setCulpritName}
				secondOption={culpritSurname}
				setSecondOption={setCulpritSurname}
				thirdOption={culpritPhone}
				setThirdOption={setCulpritPhone}
				firstButtonText="Dodaj sprawcę"
				secondButtonText="Usuń sprawcę"
				firstLabel="Imię / Imiona sprawcy"
				secondLabel="Nazwisko sprawcy"
				thirdLabel="Numer telefonu sprawcy"
			/>
		</View>
	);
};

export default AddCulprit;
