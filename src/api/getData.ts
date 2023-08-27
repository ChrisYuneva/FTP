import {API_PATH, API_PATH_FILTER, API_PATH_ID} from "./consts";
import {GameSortByTagParams, GameSortParams, GameType, GameTypeById} from "./types/gameType";

function api<T>(url: string, headers?: HeadersInit): Promise<T> {
    return fetch(
        url,
        {
            headers: {
                ...headers,
                'X-RapidAPI-Key': '1391600961mshb1f7c75708dec13p101a01jsna697a9c057e2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch').message;
            }
            return response.json() as Promise<T>
        })
}

export function toQueryString<T>(obj?: T): string {
    const queryString = [];
    for(let key in obj) {
        if(obj[key]) {
            queryString.push(`${key}=${obj[key]}`);
        }
    }

    return queryString.join('&');
}

export function getGames(params?: GameSortParams) {
    return api<GameType[]>(
        `${API_PATH}?${toQueryString<GameSortParams>(params)}`,
        { method: 'GET' }
    );
}

export function getGameByID(id: string) {
    return api<GameTypeById>(
        `${API_PATH_ID}${id}`,
        { method: 'GET' }
    );
}

export function getGamesByTag(params?: GameSortParams) {
    const paramsByTag: GameSortByTagParams = {
        platform: params?.platform,
        tag: params?.category,
        "sort-by": params?.["sort-by"]
    };

    return api<GameType[]>(
        `${API_PATH_FILTER}?${toQueryString<GameSortByTagParams>(paramsByTag)}`,
        { method: 'GET' }
    )
}