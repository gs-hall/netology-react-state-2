import {Component} from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import {loadData} from "./LoadData";
import React from "react";

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.products = loadData();
  
    this.state = {
      icon: "view_module"
    };
  };

  onSwitch = () => {
/*    
    this.setState((prevState) => {
      icon: prevState.icon === "view_list" ? "view_module" : "view_list";
    });
*/    
    this.setState({
      icon: this.state.icon === "view_list" ? "view_module" : "view_list"
    });
    
  };

  render() {
    const view = this.state.icon === "view_list" ?
      <ListView items={this.products} /> :
      <CardsView cards={this.products} />;
    return (
      <>
        <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
        {view}
      </>
    );
  };
}
