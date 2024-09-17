import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./style";

type Props = {
  name: string;
  isChecked: boolean; // Propriedade para verificar se o paciente está checado
  onRemove: () => void;
  onCheck: () => void;
};

export function PatientsCard({ name, isChecked, onRemove, onCheck }: Props) {
  return (
    <Container>
      <Icon name="person" />
      {/* Aplica o estilo condicional baseado no estado isChecked */}
      <Name isChecked={isChecked}>{name}</Name>
      {isChecked ? (
        <ButtonIcon icon="check-circle" type="PRIMARY" onPress={onCheck} />
      ) : (
        <ButtonIcon
          icon="check-box-outline-blank"
          type="PRIMARY"
          onPress={onCheck}
        />
      )}
      <ButtonIcon icon="delete" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
