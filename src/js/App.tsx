import * as React from "react";
import { Switch, Route } from "react-router-dom";

import * as routes from "./Routes";
import { Videos } from "./Components/Videos";
import { AddVideo } from "./Components/AddVideo";

export class App extends React.Component<{}, { isSigned: boolean }> {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (<div>
            {
                <Switch>
                    <Route exact path={routes.Videos} component={Videos} />
                    <Route exact path={routes.AddVideo} component={AddVideo} />
                </Switch>
            }
        </div>
        );
    }

}
