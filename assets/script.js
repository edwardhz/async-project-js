const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC-tilg3VUvranuquTM2jhIw&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bf3e29efbmshd486bb8a56e24aap1c3241jsn80b9f848f684',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// autameticamente cuando esta cargando este archivo ejecuta la funcion
(async () => {
  try {
    const videos = await fetchData(API);
    // Map itera
    let view = `
    ${videos.items.map(video => `
    <a href="https://youtube.com/watch?v=${video.id.videoId}">
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
  </a>
    `).slice(0,4).join('')}
     `;
     content.innerHTML = view;
  } catch (error){
    console.log(error)
}
})();
