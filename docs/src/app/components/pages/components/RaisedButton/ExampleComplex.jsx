import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const RaisedButtonExampleComplex = () => (
  <div>
    <RaisedButton
      label="Choose an Image"
      primary={true}
      style={styles.button}
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
    <RaisedButton
      label="Label after"
      labelPosition="after"
      secondary={true}
      icon={<ActionAndroid />}
      style={styles.button}
    />
    <RaisedButton
      label="Disabled"
      disabled={true}
      style={styles.button}
    />
    <br />
    <RaisedButton
      label="Github Link"
      linkButton={true}
      href="https://github.com/callemall/material-ui"
      secondary={true}
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github"/>}
    />
  </div>
);

export default RaisedButtonExampleComplex;
