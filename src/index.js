import './style.css';
import favicon from './images/favicon.png';

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = favicon;
document.head.appendChild(link);
