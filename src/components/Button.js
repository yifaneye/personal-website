import styled, {css} from "styled-components";

export const Button = styled.div`
position: absolute;
background: #eee;
color: #bbb;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${props => props.disabled && css`
  opacity: 0.25;
  cursor: not-allowed;
`}
`;
