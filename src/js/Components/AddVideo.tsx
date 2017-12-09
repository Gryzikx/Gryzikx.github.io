import * as React from "react";
import { Card, CardHeader, CardActions, CardText, TextField, RadioButton, Checkbox, RaisedButton, FloatingActionButton } from "material-ui";
import { ContentAddCircle, ContentAdd } from "material-ui/svg-icons";
import { Link } from "react-router-dom";
import * as routes from "../Routes";
import axios from "axios";

export interface AddVideoProps {
}

interface AddVideoState {
    readonly Link: string;
    readonly Name: string;
    readonly IsAnonymous: boolean;
}

interface NewVideo {
    Link: string;
    Uploader: string;
}

export class AddVideo extends React.Component<AddVideoProps, AddVideoState> {
    public constructor(props: AddVideoProps) {
        super(props);
        this.state = {
            Link: "",
            Name: "",
            IsAnonymous: false,
        }
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}>
                <Card style={{ width: "800px" }}>
                    <CardHeader title="Dodaj nową piosenkę" />
                    <CardText>
                        <div style={{ display: "flex", justifyContent: "space-around", flexFlow: "column", marginLeft: "30px" }}>
                            <TextField
                                hintText="Link YouTube"
                                floatingLabelText="Link YouTube"
                                onChange={this.handleLink}
                            />
                            <TextField
                                hintText="Kto wrzuca"
                                floatingLabelText="Kto wrzuca"
                                onChange={this.handleName}
                                disabled={this.state.IsAnonymous}
                            />
                            <Checkbox
                                label="Wstydzę się tej piosenki, więc nie chcę podawać imienia ..."
                                style={{ marginTop: "10px" }}
                                onCheck={this.handleCheck}
                            />
                            <Link to={routes.Videos} style={{ marginTop: "20px", marginRight: "20px", alignSelf: "flex-end" }}>
                                <FloatingActionButton
                                    backgroundColor="#64DD17"
                                    onClick={this.handleAdding}>
                                    <ContentAdd />
                                </FloatingActionButton>
                            </Link>
                        </div>
                    </CardText>
                </Card>
            </div >
        );
    }

    handleCheck = (event: object, isInputChecked: boolean) => this.setState({ IsAnonymous: isInputChecked })

    handleLink = (event: object, newValue: string) => this.setState({ Link: newValue })

    handleName = (event: object, newValue: string) => this.setState({ Name: newValue })

    handleAdding = () => {
        let entry: NewVideo = {
            Link: this.state.Link,
            Uploader: this.state.IsAnonymous ? "Anonim" : this.state.Name
        }
        axios.put("http://gryzvegasvol2.azurewebsites.net/api/videos", entry);
    }

}
