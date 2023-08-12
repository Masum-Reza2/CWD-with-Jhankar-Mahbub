let mainTag = document.getElementById('mainTag');
console.log(mainTag);

let section1 = document.createElement('section');
section1.innerHTML = `
    <h1>Hi i'm a dynamic heading from JavaScript</h1>
    <ul>
    <li>Mango</li>
    <li>Banana</li>
    <li>Guaba</li>
    <li>Malda</li>
    <li>Coconut</li>
    </ul>
`;
mainTag.appendChild(section1);