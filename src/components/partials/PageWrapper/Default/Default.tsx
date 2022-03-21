import Head from 'next/head'
import { FC } from 'react'
import styled from 'styled-components'
import { FlexContainer } from 'common/FlexContainer'
import { FooterContainer } from 'common/FooterContainer'
import { MainContainer } from 'common/MainContainer'

export interface DefaultTemplateProps {
	title?: string
	description?: string
	icon?: string
	children: JSX.Element | JSX.Element[]
	hasFooter?: boolean
	loading?: boolean
}

const Logo = styled.img`
	width: 4.5rem;
	margin-left: var(--spaces-3);
`

export const Default: FC<DefaultTemplateProps> = ({
	title = 'GenUI React Starter',
	description = 'Generated by create next app',
	icon = '/favicon.ico',
	children,
	hasFooter = true
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<link rel='icon' href={icon} />
			</Head>

			<main>
				<MainContainer>{children}</MainContainer>
			</main>

			{hasFooter && (
				<FooterContainer>
					<a href='https://genui.com/' target='_blank' rel='noopener noreferrer'>
						<FlexContainer>
							Powered by <Logo src='/logo.svg' alt='GenUI Logo' width={72} />
						</FlexContainer>
					</a>
				</FooterContainer>
			)}
		</div>
	)
}
