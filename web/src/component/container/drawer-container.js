import React, {Component} from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class DrawerContainer extends Component {

    onNavButtonClicked = (id) => {
        this.props.renderPage(id);
    };

    render() {
        const elements = [
            {
                id: 1,
                name: 'Mange  Team',
                icon:'fas fa-layer-group'
            }, {
                id: 2,
                name: 'Manage Player',
                icon:'fas fa-tasks'
            }];

        return(
            <div>
              <Drawer
                  variant="permanent"
                  anchor="left"
                  className={"drawer-pos"}
              >
                  <br/><br/>
                  <Divider />
                  <List>
                      {elements.map((element) => {
                          return (<ListItem button key={element.id} onClick={() => this.onNavButtonClicked(element.id)}>
                              <ListItemIcon><span className={element.icon}/></ListItemIcon>
                              <ListItemText primary={element.name} />
                          </ListItem>);
                      })}
                  </List>
                  <Divider />
              </Drawer>
            </div>
        );
    }
}

export default DrawerContainer;