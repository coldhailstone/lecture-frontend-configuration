import axios from 'axios';
import './app.scss';
import './app.css';
import './result';
import nyancat from './nyancat.jpeg';

document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get('/api/users');
    console.log(res);

    document.body.innerHTML = (res.data || [])
        .map(user => {
            return `<div>${user.id}: ${user.name}</div>`;
        })
        .join(' ');
});

console.log(process.env.NODE_ENV);
console.log(TWO);
console.log(THREE);
console.log(api.domain);

if (module.hot) {
    console.log('핫 모듈 켜짐');

    module.hot.accept('./result.js', () => {
        console.log('result 모듈 변경됨');
    });
}
