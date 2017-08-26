import styled from 'styled-components'

const Button = styled.button`
	border-radius: 4px;
	font-size: 20px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: 'normal';
	background: ${(props) => props.disable ? '#EEEDED' : '#3B97D3'};
	padding: '9px 20px 9px 15px';
	margin-right: 0.7rem;
	border: 1px solid black;
	cursor: ${(props) => props.disable ? 'not-allowed' : 'pointer'};  
	text-decoration: none;
	user-select: none;
`

export default Button