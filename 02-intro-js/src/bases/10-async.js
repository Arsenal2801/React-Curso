/*
const getImagePromise = ()=>{
    const promesa = new Promise((resolve, reject)=>{
        resolve('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
    });
    return promesa;
}

getImagePromise().then(console.log);
*/


const getImagen = async () => {

    try {
        const apiKey = '0qSCPDEkz7F60iw51JfGojqtiRzjDFbn';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    } catch (error) {
        console.warn(error);
    }

}

getImagen();
