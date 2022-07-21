// {
//   name: '',
//   display: '',
//   hash: ''
// }
interface Page {
  name: string;
  display: string;
  hash: string;
}

const pageArr: Page[] = [
  {
    name: 'About',
    display: '-ABOUT-',
    hash: '#about',
  },
  {
    name: 'Projects',
    display: '-SEE MY WORK-',
    hash: '#projects',
  },
  {
    name: 'Contact',
    display: '-CONTACT ME-',
    hash: '#contact',
  },
];

export default pageArr;
