const styles = theme => ({
  Input: {
    width: 200,
    marginRight: 15,
    color: "#7b8d93",
    fontSize: 14,
    backgroundColor:'#d0d8dc',
    paddingLeft: 10,
    borderRadius: 4,
    height: 40,
    '&:before': {
      content: "none"
    }
  },
  PanelWrapper: {
    display: "flex",
    flexDirection: "row",
    margin: 50,
    alignItems: "baseline",
    '& div:focus':{
      background: "none",
    }
  },
  Select:{
    width: 200,
    textAlign: "left",
    marginRight: 15,
    color: "#7b8d93",
    fontSize: 14,
    borderRadius: 4,
    height: 40,
    paddingLeft: 10,
    backgroundColor:'#d0d8dc',
  },
  Button:{
    width: 150,
    height: 40,
    backgroundColor:'#7b8d93',
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    '&:hover':{
      backgroundColor:'#d0d8dc',
    }
  },
});

export default styles
