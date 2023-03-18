import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Header = () => {

	const [t, i18n] = useTranslation('global');
	const lang = i18n.language;
	console.log(lang)
	
	return (
		<header className='component'>
			<h1>Demo i18next</h1>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={`/about`}>About</Link>
					</li>
				</ul>
			</nav>
			<button onClick={() => i18n.changeLanguage('es')}>Es</button>
			<button onClick={() => i18n.changeLanguage('pt')}>Pt</button>
			<button onClick={() => i18n.changeLanguage('gn')}>Gn</button>
		</header>

	);
};

export default Header;
