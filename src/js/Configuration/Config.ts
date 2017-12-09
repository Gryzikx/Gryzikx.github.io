interface Configuration {
    AuthEndpoint: string;
    AuthSecret: string;
    CqrsEndpoint: string;
}

declare module "config" {
    const config: Configuration;

    export default config;
}

declare module "rc-time-picker" {
    const TimePicker: any;
    export default TimePicker;
}
