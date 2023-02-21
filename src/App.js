import React, { Suspense } from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { rootReduxStore, persistor } from "./redux/store";

import './App.css';

import { AppLoader } from "./components/AppComponents";
import { LandingPage, StringOperationPage } from "./pages";


const Layout = React.lazy(() => import("./layout"));


function App() {
  return (
    <StoreProvider store={rootReduxStore}>
      <PersistGate loading={null} persistor={persistor}>

        <Routes>
          <Route
            index
            path={'/'}
            element={<LandingPage title={"Home"} />}
          />

          <Route
            element={
              <ErrorBoundary
                FallbackComponent={<>Error</>}
                onReset={() => {
                  console.log("Layout Resetting...");
                }}
              >
                <Suspense fallback={<AppLoader />}>
                  <Layout />
                </Suspense>
              </ErrorBoundary>
            }
          >

            <Route
              path={'/string'}
              element={
                <StringOperationPage title="String" />
              }
            />

          </Route>


        </Routes>
      </PersistGate>
    </StoreProvider >
  );
}

export default App;
