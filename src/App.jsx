import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Card
              image="https://placedog.net/500"
              name="Lenteja"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. "
              tagText="Husky"
              tagColor="green"
            />
          </div>
          <div className="col-md-3">
            <Card
              image="https://placedog.net/501"
              name="Merken"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. "
              tagText="Bobtail"
              tagColor="blue"
            />
          </div>
          <div className="col-md-3">
            <Card
              image="https://placedog.net/505"
              name="Charquikan"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. "
              tagText="Shar Pei"
              tagColor="red"
            />
          </div>
          <div className="col-md-3">
            <Card
              image="https://placedog.net/503"
              name="Arveja"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet. "
              tagText="Beagle"
              tagColor="yellow"
            />
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default App;