import React from "react";

const userContext = React.createContext(); //this variable like global variable, it can be accessed anywhere

export default userContext;

//when we create a context, each context has a Provider and Consumer component

//Provider,
//wrapped with UserContext, now all of this login,card component has access of UserContext

{/* <UserContext>  
        <Login />       
        <Card>
            <data />
        </Card>
    </UserContext>  
*/}