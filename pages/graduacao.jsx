import React, { Component } from 'react';
import { Breadcrumbs, Breadcrumb } from '../components/Breadcrumbs';
import { VTab, SideMenu, TabPanelContainer, VerticalTabs } from '../components/vertical-tabs';
import { TabPanel } from 'react-web-tabs';
import Link from 'next/link';

import { placeholder } from '../components/placeholders';
import Disciplinas from '../components/Graduacao/components/Disciplinas';
import AtividadesExtra from '../components/Graduacao/components/AtividadesExtra';
import TCC from '../components/Graduacao/components/TCC';
import AlunosEspeciais from '../components/Graduacao/components/AlunosEspeciais';
import PIES from '../components/PIES/components/PIES';
import Estagio from '../components/AreaAluno/components/Estagio';
import Certificados from '../components/Graduacao/components/Certificados';
import FAQ from '../components/Graduacao/components/FAQ';

const tabs = [
	{
		props: {
			panelId: 'distribuicao',
			title: 'Oferta de Disciplinas',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Oferta de Disciplinas',
			body: Disciplinas,
		},
	},
	{
		props: {
			panelId: 'ativ_extra',
			title: 'Atividades Complementares',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Atividades Complementares',
			body: AtividadesExtra,
		},
	},
	{
		props: {
			panelId: 'tcc',
			title: 'TCC',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'TCC',
			body: TCC,
		},
	},
	{
		props: {
			panelId: 'pie',
			title: 'PIEs',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Projetos Integradores Extensionistas (PIEs)',
			body: PIES,
		},
	},
	{
		props: {
			panelId: 'certificados',
			title: 'Certificados de Estudos',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Certificados de Estudos',
			body: Certificados,
		},
	},
	{
		props: {
			panelId: 'alunos_especiais',
			title: 'Alunos especiais',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Alunos especiais',
			body: AlunosEspeciais,
		},
	},
	{
		props: {
			panelId: 'estagios',
			title: 'Estágio',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Estágio',
			body: Estagio,
		},
	},
	{
		props: {
			panelId: 'faq',
			title: 'FAQ',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Perguntas Frequentes Relacionadas ao Ensino Remoto no DC/UFSCar',
			body: FAQ,
		},
	},
	{
		props: {
			panelId: 'suporte',
			title: 'Suporte',
			header: '',
			showHeader: false,
		},
		content: {
			title: 'Suporte',
			body: placeholder,
		},
	},

];

class Graduacao extends Component {
	render() {
		return (
			<React.Fragment>
				<Breadcrumbs>
					<Breadcrumb endereco="/">Início</Breadcrumb>
					<Breadcrumb bold>Graduação</Breadcrumb>
				</Breadcrumbs>
				<VerticalTabs>
					<SideMenu defaultTab={tabs[0].props.panelId}>
						{tabs.map((tab, index) => {
							return tab.props.panelId === 'suporte' ? (
								<Link href="/suporte/reportar" className="nav-link">
									{tab.props.title}
								</Link>
							) : (
								<VTab key={'t_' + index} {...tab.props}>
									{tab.props.title}
								</VTab>
							);
						})}
					</SideMenu>
					<TabPanelContainer>
						{tabs.map((tab, index) => {
							return (
								<TabPanel key={'p_' + index} tabId={tab.props.panelId}>
									<h4>{tab.content.title}</h4>
									<hr />
									{tab.content.body}
								</TabPanel>
							);
						})}
					</TabPanelContainer>
				</VerticalTabs>
			</React.Fragment>
		);
	}
}

export default Graduacao;
