
import HashLoader from "react-spinners/HashLoader";
import { withAuthenticationRequired } from "@auth0/auth0-react";


export const AuthenticationGuard = (component: any) => {


  const Component = withAuthenticationRequired(component, {

    onRedirecting: () => (

      <div className="loading-spinner-container">

        <HashLoader
          color={"#AC090F"}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

      </div>

    ),

  });




  return <Component />;
};