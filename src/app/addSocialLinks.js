const socialLinks = [
  {
    label: 'UpWork',
    url: 'https://www.upwork.com/freelancers/medaimane',
    icon: 'code',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/medaimane/',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/med-aimane-skhairi/',
    icon: 'linkedin',
  },
  {
    label: 'X (Twitter)',
    url: 'https://twitter.com/med_aimane/',
    icon: 'twitter',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/medaimane/',
    icon: 'instagram',
  },
  {
    label: 'Dev',
    url: 'https://www.dev.to/medaimane/',
    icon: 'laptop',
  },
  {
    label: 'Email',
    url: 'mailto:medaimane.skhairi@gmail.com',
    icon: 'envelope-o',
  },
];

const createSocialLink = (url, label, icon) => {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('class', `icon fa-${icon}`);
  a.setAttribute('aria-label', label);
  a.setAttribute('rel', 'noopener noreferrer');

  const span = document.createElement('span');
  span.setAttribute('class', 'label');
  span.textContent = label;

  a.appendChild(span);
  return a;
};

const createSocialLinkListItem = ({url, label, icon}) => {
  const li = document.createElement('li');
  const link = createSocialLink(url, label, icon);
  li.appendChild(link);
  return li;
};

const createSocialLinkList = () => {
  const ul = document.createElement('ul');
  socialLinks.forEach((item) => {
    const li = createSocialLinkListItem(item);
    ul.appendChild(li);
  });
  return ul;
};

const addSocialLinks = () => {
  const nav = document.querySelector('#nav');
  const list = createSocialLinkList();
  nav.appendChild(list);
};
