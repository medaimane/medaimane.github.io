const socialMediaItems = [
  {
    title: 'UpWork',
    url: 'https://www.upwork.com/freelancers/medaimane',
    icon: 'code'
  },
  {
    title: 'Github',
    url: 'https://github.com/medaimane/',
    icon: 'github'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/med-aimane-skhairi/',
    icon: 'linkedin'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/med_aimane/',
    icon: 'twitter'
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/medaimane/',
    icon: 'instagram'
  },
  {
    title: 'Email',
    url: 'mailto:skhairimedaimane@gmail.com',
    icon: 'envelope-o'
  }
];

const appendSocialMediaItems = () => {
  const nav = document.querySelector('#nav');

  const list = createSocialMediaList();

  nav.appendChild(list);
};

const createSocialMediaList = () => {
  const ul = document.createElement('ul');

  socialMediaItems.forEach(item => {
    const li = createSocialMediaItem(item);

    ul.appendChild(li);
  });

  return ul;
};

const createSocialMediaItem = item => {
  const li = document.createElement('li');

  const {url, title, icon} = item;
  const link = createSocialMediaLink(url, title, icon);

  li.appendChild(link);

  return li;
};

const createSocialMediaLink = (url, title, icon) => {
  const a = document.createElement('a');

  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('class', `icon fa-${icon}`);
  a.setAttribute('aria-label', title);
  a.setAttribute('rel', 'noopener noreferrer');

  const span = document.createElement('span');
  span.setAttribute('class', 'label');
  span.textContent = title;

  a.appendChild(span);

  return a;
};