import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import DashBoard from "./DashBoard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/products" exact component={DashBoard} />
        <Route path="/cart" exact component={CartDetail} />
        <Route
          path="/saveproduct/:productId"
          exact
          component={AddOrUpdateProduct}
        />
        <Route path="/saveProduct" exact component={AddOrUpdateProduct} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
