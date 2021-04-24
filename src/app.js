import axios from 'axios';
import './app.scss';
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

// console.log(process.env.NODE_ENV);
// console.log(TWO);
// console.log(THREE);
// console.log(api.domain);
