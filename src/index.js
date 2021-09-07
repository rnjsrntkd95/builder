import './style.scss';
import nodeImage from './nodejs.png';

(function () {
	const body = document.querySelector('body');
	body.innerHTML = `
        <div>
            <p>Node.js Project</p>
            <img src=${nodeImage} width="300px">
        </div>
        `;
})();
