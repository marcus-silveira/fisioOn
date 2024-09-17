import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

// Modificando o estilo de Name
export const Name = styled.Text<{ isChecked: boolean }>`
  flex: 1;

  ${({ theme, isChecked }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_200};
    text-decoration-line: ${isChecked ? "line-through" : ""};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
