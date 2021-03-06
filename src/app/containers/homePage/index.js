/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Layout } from "antd";
import { fetchList } from "../../actions/homePage/";
import "./index.less";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      dispatch,
      fetchList
    },
    dispatch
  )
});

class App extends React.Component {
  /*
  * 进入页面请求数据
  * */
  componentDidMount() {
    // this.props.actions.fetchList()
    // .then(res => {
    //   console.log(res);
    // });
  }
  render() {
    return (
      <Layout>
        <div className="home-page">
          <h1>Welcome to this App</h1>
          <img src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" alt=""/>
        </div>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withRouter(App));
