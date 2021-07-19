import React, {Suspense} from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import {CContainer, CFade} from '@coreui/react'
// routes config
import routes from '../routes'
import Cookies from "universal-cookie";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  const cookies = new Cookies();
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, i) => {
              return route.component && (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) =>
                    (cookies.get('auth-token')) ?
                      (<CFade>
                        <route.component {...props}/>
                      </CFade>) :
                      (<Redirect to={{pathname: "/login"}}/>)
                  }
                />
              )
            })}
            <Redirect from="/" to="/dashboard"/>
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
