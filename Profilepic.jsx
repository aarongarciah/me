Profilepic = React.createClass({
   render () {
       return (
            <div style={{width: this.props.size, height: this.props.size, marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px'}}>
                <img src={this.props.picture} className="profile-pic" />
            </div>
       );
   }
});