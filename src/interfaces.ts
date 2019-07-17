export interface ICity {
    id: number;
    country: string;
    name: string;
    // coord: {
    //     lon: string;
    //     lat: string;
    // };
}

export interface IWeather {
    id: number;
    name: string;
    weather: [
        {
            main: string;
            icon: string;
        }
    ];
    main: {
        temp_min: string;
        temp_max: string;
    };
    wind: {
        speed: number;
    };
}