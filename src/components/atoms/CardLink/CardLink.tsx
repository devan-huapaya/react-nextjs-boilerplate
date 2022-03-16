import styled from 'styled-components'

export const CardLink = styled.a`
	margin: 1rem;
	padding: 1.5rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
	max-width: 300px;
	height: 180px;

	&:hover,
	&:focus,
	&:active {
		color: #0070f3;
		border-color: #0070f3;
	}

	h2 {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
	}

	p {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.5;
	}
`
