const popUp = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const closePopup = document.querySelector('.close-popUp');
const projectsList = document.querySelector('.container');
const snapshoot1Desk = document.querySelector('.snapshoot1-desk');
const modaltitle = document.querySelector('.modal-title');

const data = [
    {
      id: 'project-1',
      title: 'Tonic',
      canopy: 'Canopy',
      html: 'html',
      css: 'css',
      javascript: 'javasctipt',
      image: 'images/snapshoot1.png',
      desktopImage: 'images/snapshoot1-des.png', 
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      seeLive: 'https://github.com/beyk',
      seeSource: 'https://github.com/beyk',
    },
    {
      id: 'project-2',
      title: 'Multi-Post Stories',
      image: 'images/snapshoot2.png',
      desktopImage: 'images/snapshoot2-des.png', 
      canopy: 'Canopy',
      html: 'html',
      css: 'css',
      javascript: 'javasctipt',
      description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      seeLive: 'https://github.com/beyk',
      seeSource: 'https://github.com/beyk',
    },
    {
      id: 'project-3',
      title: 'Tonic',
      canopy: 'Canopy',
      image: 'images/snapshoot3.png',
      desktopImage: 'images/snapshoot3-des.png', 
      html: 'html',
      css: 'css',
      javascript: 'javasctipt',
      description:
        'Exploring the future of media in Facebooks first Virtual Reality app;',
      seeLive: 'https://github.com/beyk',
      seeSource: 'https://github.com/beyk',
    },
    {
      id: 'project-4',
      title: 'Multi-Post Stories',
      canopy: 'Canopy',
      image: 'images/snapshoot4.png',
      desktopImage: 'images/snapshoot4-des.png', 
      html: 'html',
      css: 'css',
      javascript: 'javasctipt',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      seeLive: 'https://github.com/beyk',
      seeSource: 'https://github.com/beyk',
    },
  ];
  
closePopup.addEventListener('click', () => {
  popUp.style.display = 'none';
  modal.style.display = 'none';
});

for (let i = 0; i < data.length; i += 1) {
  projectsList.innerHTML = `${projectsList.innerHTML}
  <div class="work-tonic">
					<div class="snapshoot-div">
						<img src="${data[i].image}" alt="Project image" class="snapshoot"/>
						<img src="${data[i].desktopImage}" alt="Project image" class="desk-snapshoot"/>
					</div>
					<div class="work-info">
						<h2 class="tonic">${data[i].title}</h2>
						<div class="text-info">
							<ul>
								<li class="client-name">CANOPY</li>
								<li class="role">Back End Dev</li>
								<li class="year">2015</li>
							</ul>
						</div>
						<p class="work-text">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
							<ul class="tags">
								<li>html</li>
								<li>css</li>
								<li>javaScript</li>
							   </ul>
						
						<button type="button" id="open-me" class='see-proj see-proj-${i}'>See project</button>
					</div>
				</div>`;
}


