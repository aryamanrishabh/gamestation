import styled from "styled-components";
import { ACCENT } from "@constants/colors";

const TextInput = styled.input`
  border-radius: 0.25rem;
  padding: 0.75rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  border: 1px solid ${ACCENT + "66"};

  ::placeholder {
    font-weight: bold;
    color: ${ACCENT + "66"};
  }

  :focus {
    outline: none;
  }
`;

export default TextInput;
