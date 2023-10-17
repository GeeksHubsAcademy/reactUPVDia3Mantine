
import { Input } from '@mantine/core';

export const InputCustomM = () => {
  return (
    <Input.Wrapper label="DNI" withAsterisk description="Documento Nacional de Identidad" error="Documento proporcionado inválido" size="md">
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}