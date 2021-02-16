/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
const copies = {
  feature1: {
    heading: 'State of the art "magic"',
    body: (
      <p>
        We use state of the art dependencies to make your life easier, without
        relying excessively on third party libraries. The main ones are:
      </p>
    ),
    links: [
      {
        name: 'Create React App',
        src: 'https://create-react-app.dev/'
      },
      {
        name: 'RecoilJS',
        src: 'https://recoiljs.org/'
      },
      {
        name: 'React Router',
        src: 'https://reactrouter.com/'
      },
      {
        name: 'React Query',
        src: 'https://react-query.tanstack.com/'
      },
      {
        name: 'ESlint',
        src: 'https://eslint.org/'
      },
      {
        name: 'Prettier',
        src: 'https://prettier.io/'
      }
    ]
  },
  feature2: {
    heading: 'SOLID architecture',
    body: (
      <p>
        At Turinlabs and Satoshi's games, we build future-proof products and
        services in the most efficient way possible.
        <br /> <br />
        That's why we develop our projects from the ground-up for them to be
        highly maintainable and scalable.
        <br /> <br /> You have ESlint/Prettier set up right away, with scripts
        ready to keep everything clean and tidy
      </p>
    )
  },
  feature3: {
    heading: 'Stylish styles',
    body: (
      <p>
        Ready to plug in your favorite component library, like MaterialUI or
        AntD.
        <br /> <br /> You can go "rogue" and develop your own components and
        style them with SASS. As a library of icons, we recommend react/icons or
        Fontawesome.
      </p>
    )
  }
};

export default copies;
