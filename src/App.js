import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <Fragment>
      <Layout>
        {/* <HomeScreen/> */}
        <AppRouter/>
      </Layout>
    </Fragment>
  );
}

export default App;
