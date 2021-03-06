var React = require('react');
var mui = require('material-ui');
var IconButton=mui.IconButton;

var TagIconButton=React.createClass({
  render:function(){
  	var classes=(this.props.isMarked)? "icon-price-tag icon-is-tagged" : "icon-price-tag";
	return (
	  <IconButton className={"tag-icon-button"} iconClassName={classes} tooltip={this.props.tooltip} onClick={this.props.onClick} />
	);
  }
});

module.exports=TagIconButton;