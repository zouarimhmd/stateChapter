
import React from 'react';
  
  
class App extends React.Component {
  state = {
    Person: {
      fullName: "Mohamed Zouari",
      bio: "lorem ipsum",
      imgSrc: "../download.jpeg",
      profession: "goMyCodeStudent"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };



  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="me"></img>
            <h1>{this.state.Person.profession}</h1>
            
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}
  
export default App;
