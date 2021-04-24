import axios from 'axios';
import './app.scss';
import './app.css';
import './result';
import nyancat from './nyancat.jpeg';

document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get('/api/users');
    console.log(res);

    // 다이나믹 임포트 - 해당 방식을 사용하면 빌드 시 해당 파일의 js 따로 생성됨
    // import('./result').then(m => {
    //     document.body.innerHTML = (res.data || [])
    //         .map(user => {
    //             return `<div>${user.id}: ${user.name}</div>`;
    //         })
    //         .join(' ');
    // });

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
