// {
//   name: '',
//   display: '',
//   hash: ''
// }
interface Page {
  name: string;
  display: string;
  hash: string;
  description: string;
}

const pageArr: Page[] = [
  {
    name: 'About',
    display: '-ABOUT-',
    hash: '#about',
    description:
      'Want to find out more about me and how I went from backpacking the world to designing beautiful applications?'
  },
  {
    name: 'Projects',
    display: '-SEE MY WORK-',
    hash: '#projects',
    description:
      'My pride and joy. Click here to see some of the projects that I have been a part of from idea to deployment'
  },
  {
    name: 'Contact',
    display: '-CONTACT ME-',
    hash: '#contact',
    description: `Let's talk! I want to hear about your company's needs and how I can help.`
  }
];

export default pageArr;
