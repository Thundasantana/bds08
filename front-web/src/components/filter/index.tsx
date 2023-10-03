import './styles.css';
import { useState } from 'react';
import { FilterGender, Gender } from '../../types';

type Props = {
  onFilterChange: (filter: FilterGender) => void;
};

function Filter({ onFilterChange }: Props) {
  const [gender, setGender] = useState<Gender>();

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;

    setGender(selectedGender);
    onFilterChange({ gender: selectedGender });
  };

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
