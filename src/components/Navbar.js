import React, { Component } from "react";
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;


class NavBar extends Component {
  state = {
    collapsed: false
  }

  toogleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Menu
          mode= "horizontal"
          theme= "dark"
          key='nav'
        >
          <SubMenu key="sub1" 
          title={<span><Icon type="shopping"/>Tokyo</span>}
          >
            <Menu.Item key="1"><a href="#climaTokyo">Clima</a></Menu.Item>
            <Menu.Item key="2"><a href="#dondeTokyo">¿Dónde ir?</a></Menu.Item>
            <Menu.Item key="3"><a href="#comidaTokyo">¿Qué comer?</a></Menu.Item>
            <Menu.Item key="4"><a href="#transporteTokyo">Mapa del metro</a></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" 
          title={<span><Icon type="read"/><span>Kyoto</span></span>}
          >
            <Menu.Item key="5"><a href="#climaKyoto">Clima</a></Menu.Item>
            <Menu.Item key="6"><a href="#dondeKyoto">¿Dónde ir?</a></Menu.Item>
            <Menu.Item key="7"><a href="#comidaKyoto">¿Qué comer?</a></Menu.Item>
            <Menu.Item key="8"><a href="#transporteKyoto">Mapa del metro</a></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" 
          title={<span><Icon type="camera"/><span>Nara</span></span>}
          >
            <Menu.Item key="9"><a href="#climaNara">Clima</a></Menu.Item>
            <Menu.Item key="10"><a href="#dondeNara">¿Dónde ir?</a></Menu.Item>
            <Menu.Item key="11"><a href="#comidaNara">¿Qué comer?</a></Menu.Item>
            <Menu.Item key="12"><a href="#transporteNara">Mapa del metro</a></Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" 
          title={<span><Icon type="coffee"/><span>Kanazawa</span></span>}
          >
            <Menu.Item key="13"><a href="#climaKanazawa">Clima</a></Menu.Item>
            <Menu.Item key="14"><a href="#dondeKanazawa">¿Dónde ir?</a></Menu.Item>
            <Menu.Item key="15"><a href="#comidaKanazawa">¿Qué comer?</a></Menu.Item>
            <Menu.Item key="16"><a href="#transporteKanazawa">Mapa del metro</a></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default NavBar