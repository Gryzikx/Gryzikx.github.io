import * as React from "react";
import { RaisedButton } from "material-ui";
import { ContentAddCircle, AvNewReleases, ActionFavorite } from "material-ui/svg-icons";
import { Link } from "react-router-dom";
import * as routes from "../Routes";
import YouTube from "react-youtube";
import axios from "axios";

export interface VideosProps {

}

interface VideosState {
    readonly songs: SongEntry[];
}

interface SongEntry {
    readonly link: string;
    readonly uploader: string;
    readonly UpVotes: number;
    readonly DownVotes: number;
}


export class Videos extends React.Component<VideosProps, VideosState> {
    public constructor(props: VideosProps) {
        super(props);
        this.state = {
            songs: []
        }
    }

    opts = {
        height: "245",
        width: "400",
    }

    componentDidMount() {
        this.fetch();
    }

    private fetch = () => {
        axios.get("http://gryzvegasvol2.azurewebsites.net/api/videos")
            .then(this.updateState);
    }

    private updateState = (response: any) => {
        console.log(response);
        this.setState({ songs: response.data })
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", width: "400px", margin: "auto", marginTop: "20px" }}>
                <Link to={routes.AddVideo} style={{ wdith: "100%" }}>
                    <RaisedButton
                        label="Dodaj swoją piosenkę"
                        labelPosition="before"
                        backgroundColor="#64DD17"
                        labelColor="#ffffff"
                        style={{ width: "100%", marginBottom: "15px" }}
                        icon={<ContentAddCircle />}
                    />
                </Link>

                <RaisedButton
                    label="Najnowsze piosenki"
                    labelPosition="before"
                    backgroundColor="#29B6F6"
                    labelColor="#ffffff"
                    style={{ width: "100%", marginBottom: "15px" }}
                    icon={<AvNewReleases />}
                />

                <RaisedButton
                    label="Najbardziej lubiane piosenki"
                    labelPosition="before"
                    backgroundColor="#D32F2F"
                    labelColor="#ffffff"
                    icon={<ActionFavorite />}
                />
                <div style={{ display: "flex", flexDirection: "column", width: "400px", marginTop: "20px" }}>
                    {this.state.songs.map(song =>
                        <div style={{ marginBottom: "20px" }}>
                            <YouTube
                                videoId={song.link}
                                opts={this.opts}
                            />
                            {song.uploader}
                        </div>
                    )}
                </div>

            </div>
        );
    }

    // private async prepareRequest(dto: any): Promise<RequestInit> {
    //     let headers = new Headers();
    //     headers.append("Content-Type", "application/json");
    //     return {
    //         method: "POST",
    //         body: JSON.stringify(dto, this.serializer),
    //         headers: headers
    //     };
    // }

    // private serializer(key: string, val: any): any | undefined {
    //     let def = this as any;
    //     if (def[key] instanceof Date) {
    //         let date = def[key] as Date;
    //         return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
    //     }
    //     return val;
    // }

}
